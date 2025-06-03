import os
import re
import requests
from urllib.parse import urlparse
import hashlib

def download_image(url, save_dir):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            # 从 URL 中获取文件名，如果没有则使用 URL 的 MD5 作为文件名
            parsed_url = urlparse(url)
            filename = os.path.basename(parsed_url.path)
            if not filename or '.' not in filename:
                extension = '.png'  # 默认扩展名
                filename = hashlib.md5(url.encode()).hexdigest() + extension
            
            save_path = os.path.join(save_dir, filename)
            with open(save_path, 'wb') as f:
                f.write(response.content)
            return filename
    except Exception as e:
        print(f"Failed to download {url}: {str(e)}")
    return None

def process_markdown_files():
    docs_dir = 'docs/en/official'
    images_dir = 'public/images/official'
    
    # 确保图片保存目录存在
    os.makedirs(images_dir, exist_ok=True)
    
    # 查找所有 markdown 文件
    for filename in os.listdir(docs_dir):
        if filename.endswith('.md'):
            file_path = os.path.join(docs_dir, filename)
            print(f"Processing {filename}...")
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 查找所有图片链接
            image_pattern = r'!\[.*?\]\((.*?)\)'
            matches = re.finditer(image_pattern, content)
            
            for match in matches:
                img_url = match.group(1)
                if img_url.startswith('http'):
                    print(f"Downloading {img_url}")
                    new_filename = download_image(img_url, images_dir)
                    if new_filename:
                        # 更新 markdown 中的图片链接
                        new_path = f'/images/official/{new_filename}'
                        content = content.replace(img_url, new_path)
            
            # 保存更新后的文件
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Completed processing {filename}")

if __name__ == '__main__':
    process_markdown_files()
