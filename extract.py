
import zipfile
import os

os.makedirs('extracted', exist_ok=True)
z = zipfile.ZipFile('images.zip')
for info in z.infolist():
    if info.is_dir(): continue
    try:
        data = z.read(info.filename)
        out_name = info.filename.split('/')[-1]
        if out_name:
            with open('extracted/' + out_name, 'wb') as f:
                f.write(data)
    except Exception as e:
        print('Error:', e)
print('Extract complete')
