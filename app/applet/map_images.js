const fs = require('fs');

async function run() {
  const data = await import('./src/data.ts');
  const parasiteData = data.parasiteData;
}
run();
