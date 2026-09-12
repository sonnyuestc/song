"""Render supplied report PDFs without modifying originals; extract accessible text."""
from pathlib import Path
import hashlib
import json
import shutil
import subprocess
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
POPPLER = Path.home() / '.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/Library/bin/pdftoppm.exe'
SOURCES = [
    ('7020-100km', '7020 系列 100 km 图传拉距测试', 'D:/工作/MESH/100公里7020-XX图传拉距测试.pdf'),
    ('7020-277km', '7020 20 MHz 277 km 图传拉距测试', 'D:/工作/MESH/277公里7020-20MHz图传拉距测试.pdf'),
    ('dayawan-20km', '大亚湾约 20 km 图传测试（英文报告）', 'D:/工作/MESH/202605_Daya_Bay_20km_Test_Report_with_On-Site_Stream_Video_EN.pdf'),
    ('mesh-shenzhen-zhongshan', '深圳—中山跨海 MESH 测试', 'D:/工作/MESH/20260807MESH深圳对中山测试情况记录.pdf'),
    ('fz7020-40km', 'FZ7020-27 40 km 图传测试（英文报告）', 'D:/工作/MESH/FZ7020-27_40km_Video_Link_Test_Report_EN.pdf'),
    ('zyro-link-58ghz', 'ZYRO Link 5.8 GHz 远距离客户验证报告 V2.0', 'D:/工作/客户/台湾/测试报告/ZYRO_link_5.8GHz_Long_Range_Customer_Validation_Report_V2.0.pdf'),
]

def main():
    result = []
    for slug, title, source in SOURCES:
        source = Path(source)
        reader = PdfReader(source)
        dest = ROOT / 'public/wiki/reports' / slug
        dest.mkdir(parents=True, exist_ok=True)
        original = ROOT / 'public/wiki/originals' / source.name
        original.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, original)
        subprocess.run([str(POPPLER), '-png', '-scale-to', '2000', str(source), str(dest / 'page')], check=True)
        images = sorted(dest.glob('page-*.png'), key=lambda p: int(p.stem.split('-')[-1]))
        assert len(images) == len(reader.pages), (slug, len(images), len(reader.pages))
        pages = []
        for index, (page, image) in enumerate(zip(reader.pages, images), 1):
            from PIL import Image
            with Image.open(image) as bitmap:
                width, height = bitmap.size
            pages.append({'number': index, 'image': '/wiki/reports/' + slug + '/' + image.name,
                          'width': width, 'height': height, 'text': page.extract_text() or ''})
        sha = hashlib.sha256(source.read_bytes()).hexdigest()
        assert sha == hashlib.sha256(original.read_bytes()).hexdigest()
        result.append({'slug': slug, 'title': title, 'filename': source.name,
                       'pdf': '/wiki/originals/' + source.name, 'sha256': sha, 'pages': pages})
        print(f'{slug}: {len(pages)} pages, {sum(len(p["text"]) for p in pages)} text characters', flush=True)
    (ROOT / 'app/wiki/reports.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
    print('All PDF copies hash-verified and all pages rendered.', flush=True)

if __name__ == '__main__':
    main()
