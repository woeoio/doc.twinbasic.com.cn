#!/usr/bin/env node

/**
 * 复制 twinBASIC 官方文档到本项目
 * 解决硬链接导致的 VitePress 构建问题
 */

const fs = require('fs');
const path = require('path');

// 配置
const SOURCE_DIR = 'D:\\code\\tb\\docs.twinbasic.com\\docs';
const TARGET_DIR = path.join(__dirname, '..', 'docs', 'en', 'official2');

// 需要复制的子目录
const SUBDIRS = [
  'Challenges',
  'Features',
  'IDE',
  'Miscellaneous',
  'Reference',
  'Tutorials',
  'Videos'
];

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 确保目录存在
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 复制文件（不是硬链接）
function copyFile(src, dest) {
  const content = fs.readFileSync(src);
  fs.writeFileSync(dest, content);
}

// 递归复制目录
function copyDir(src, dest) {
  ensureDir(dest);
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

// 清空目标目录
function cleanDir(dir) {
  if (!fs.existsSync(dir)) return;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true });
    } else {
      fs.unlinkSync(fullPath);
    }
  }
}

// 主函数
function main() {
  log('🚀 开始复制 twinBASIC 官方文档...', 'blue');
  
  // 检查源目录
  if (!fs.existsSync(SOURCE_DIR)) {
    log(`❌ 源目录不存在: ${SOURCE_DIR}`, 'red');
    process.exit(1);
  }
  
  // 确保目标目录存在
  ensureDir(TARGET_DIR);
  
  // 清空目标目录
  log('🧹 清空目标目录...', 'yellow');
  cleanDir(TARGET_DIR);
  
  // 复制各个子目录
  for (const subdir of SUBDIRS) {
    const srcPath = path.join(SOURCE_DIR, subdir);
    const destPath = path.join(TARGET_DIR, subdir);
    
    if (!fs.existsSync(srcPath)) {
      log(`⚠️  跳过不存在的目录: ${subdir}`, 'yellow');
      continue;
    }
    
    log(`📁 复制 ${subdir}...`, 'blue');
    copyDir(srcPath, destPath);
  }
  
  // 复制根目录的 markdown 文件
  const rootFiles = fs.readdirSync(SOURCE_DIR, { withFileTypes: true });
  for (const file of rootFiles) {
    if (file.isFile() && file.name.endsWith('.md')) {
      const srcPath = path.join(SOURCE_DIR, file.name);
      const destPath = path.join(TARGET_DIR, file.name);
      copyFile(srcPath, destPath);
      log(`📄 复制 ${file.name}`, 'blue');
    }
  }
  
  log('✅ 复制完成！', 'green');
}

// 递归查找所有 Images 目录
function findImagesDirs(baseDir, currentDir = '', results = []) {
  const fullPath = path.join(baseDir, currentDir);
  if (!fs.existsSync(fullPath)) return results;
  
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const relativePath = path.join(currentDir, entry.name);
      
      if (entry.name === 'Images') {
        results.push(relativePath);
      } else {
        // 递归查找子目录
        findImagesDirs(baseDir, relativePath, results);
      }
    }
  }
  
  return results;
}

// 同步图片到中文版
function syncImages() {
  log('🔄 开始同步图片到中文版...', 'blue');
  
  const enBaseDir = path.join(__dirname, '..', 'docs', 'en', 'official2');
  const zhBaseDir = path.join(__dirname, '..', 'docs', 'zh', 'official2');
  
  // 查找英文版所有 Images 目录
  const imagesDirs = findImagesDirs(enBaseDir);
  
  if (imagesDirs.length === 0) {
    log('⚠️  未找到 Images 目录', 'yellow');
    return;
  }
  
  for (const imagesDir of imagesDirs) {
    const enImagesDir = path.join(enBaseDir, imagesDir);
    const zhImagesDir = path.join(zhBaseDir, imagesDir);
    
    ensureDir(zhImagesDir);
    // 清空中文版的旧图片
    cleanDir(zhImagesDir);
    copyDir(enImagesDir, zhImagesDir);
    log(`📁 已同步 ${imagesDir}`, 'green');
  }
  
  log(`✅ 图片同步完成！共同步 ${imagesDirs.length} 个 Images 目录`, 'green');
}

// 主函数
function main() {
  const command = process.argv[2];
  
  if (command === 'syncimg') {
    syncImages();
  } else {
    copyDocs();
  }
}

main();
