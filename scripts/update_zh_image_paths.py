import os
import re
from urllib.parse import urlparse
import hashlib

def get_image_filename(url):
    parsed_url = urlparse(url)
    filename = os.path.basename(parsed_url.path)
    if not filename or '.' not in filename:
        extension = '.png'  # 默认扩展名
        filename = hashlib.md5(url.encode()).hexdigest() + extension
    return filename

def process_markdown_files():
    base_dir = '/mnt/d/code/vi/twinbasic/docs/doc.twinbasic.com.cn'
    docs_dir = os.path.join(base_dir, 'docs/zh/official')
    
    if not os.path.exists(docs_dir):
        print(f"错误：目录不存在: {docs_dir}")
        return
        
    # 查找所有 markdown 文件
    files = os.listdir(docs_dir)
    print(f"找到 {len(files)} 个文件在目录 {docs_dir}")
    
    for filename in files:
        if filename.endswith('.md'):
            file_path = os.path.join(docs_dir, filename)
            print(f"处理文件 {filename}...")
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 查找所有图片链接
            image_pattern = r'!\[.*?\]\((.*?)\)'
            matches = re.finditer(image_pattern, content)
            modified = False
            
            for match in matches:
                img_url = match.group(1)
                if img_url.startswith('http'):
                    new_filename = get_image_filename(img_url)
                    # 更新 markdown 中的图片链接
                    new_path = f'/images/official/{new_filename}'
                    if new_path != img_url:
                        content = content.replace(img_url, new_path)
                        modified = True
                        print(f"更新图片链接: {img_url} -> {new_path}")
            
            # 只有在文件被修改时才保存
            if modified:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"完成处理文件 {filename}")
            else:
                print(f"文件 {filename} 无需修改")

if __name__ == '__main__':
    process_markdown_files()
