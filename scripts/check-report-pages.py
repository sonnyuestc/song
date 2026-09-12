from pathlib import Path
import json
from PIL import Image, ImageOps, ImageDraw

root = Path(__file__).resolve().parents[1]
reports = json.loads((root / 'app/wiki/reports.json').read_text(encoding='utf-8'))
out = root / 'tmp/pdfs/report-qa'
out.mkdir(parents=True, exist_ok=True)
for report in reports:
    pages = report['pages']
    cols = min(3, len(pages))
    sheet = Image.new('RGB', (cols*370, ((len(pages)+cols-1)//cols)*540), '#d8e3ed')
    draw = ImageDraw.Draw(sheet)
    for i, page in enumerate(pages):
        path = root / 'public' / page['image'].lstrip('/')
        with Image.open(path) as im:
            assert im.size == (page['width'], page['height'])
            thumb = ImageOps.contain(im.convert('RGB'), (350, 505))
        x, y = (i%cols)*370+10, (i//cols)*540+25
        sheet.paste(thumb, (x,y))
        draw.text((x,y-18), f'Page {i+1}', fill='black')
    dest = out / (report['slug']+'.png')
    sheet.save(dest)
    print(dest)
