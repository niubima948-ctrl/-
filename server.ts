import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Wikimedia Search API Proxy route
  app.get('/api/search-image', async (req, res) => {
    try {
      const term = req.query.term as string;
      if (!term) {
        return res.status(400).json({ error: 'Missing search term' });
      }

      // First try Wikimedia Commons File search
      const url = new URL('https://commons.wikimedia.org/w/api.php');
      url.searchParams.append('action', 'query');
      url.searchParams.append('generator', 'search');
      url.searchParams.append('gsrsearch', `filetype:bitmap ${term}`);
      url.searchParams.append('gsrnamespace', '6'); // File namespace
      url.searchParams.append('gsrlimit', '1');
      url.searchParams.append('prop', 'imageinfo');
      url.searchParams.append('iiprop', 'url');
      url.searchParams.append('format', 'json');

      const response = await fetch(url.toString(), {
        headers: { 'User-Agent': 'MedicalParasitologyStudyApp/1.0 (niubima948@gmail.com) node-fetch' }
      });
      const data = await response.json();

      let imageUrl = null;

      const pages = data.query?.pages;
      if (pages) {
        const pageId = Object.keys(pages)[0];
        if (pages[pageId]?.imageinfo?.[0]?.url) {
            imageUrl = pages[pageId].imageinfo[0].url;
        }
      }

      // Fallback: If no commons file is found, try Wikipedia page thumbnail
      if (!imageUrl) {
        const wikiUrl = new URL('https://en.wikipedia.org/w/api.php');
        wikiUrl.searchParams.append('action', 'query');
        wikiUrl.searchParams.append('titles', term.split(' ')[0] + ' ' + term.split(' ')[1]); // Generally genus and species
        wikiUrl.searchParams.append('prop', 'pageimages');
        wikiUrl.searchParams.append('format', 'json');
        wikiUrl.searchParams.append('pithumbsize', '600');

        const wikiResponse = await fetch(wikiUrl.toString(), {
           headers: { 'User-Agent': 'MedicalParasitologyStudyApp/1.0 (niubima948@gmail.com) node-fetch' }
        });
        const wikiData = await wikiResponse.json();
        
        const wikiPages = wikiData.query?.pages;
        if (wikiPages) {
            const wPageId = Object.keys(wikiPages)[0];
            if (wPageId !== '-1' && wikiPages[wPageId].thumbnail?.source) {
                imageUrl = wikiPages[wPageId].thumbnail.source;
            }
        }
      }

      return res.json({ imageUrl });

    } catch (error) {
      console.error('Image proxy search error:', error);
      res.status(500).json({ error: 'Failed to fetch image proxy' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
