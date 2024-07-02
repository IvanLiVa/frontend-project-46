import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import parseData from './parser.js';
import formatter from './formatters/index.js';
import buildTree from './buildTree.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getAbsolutePath = (filePath) => path.resolve(__dirname, '../__fixtures__', filePath);

const getFileExtension = (filePath) => path.extname(filePath);

const readfile = (filePath) => {
  const fileData = fs.readFileSync(getAbsolutePath(filePath), 'utf-8');
  const fileFormat = getFileExtension(filePath);
  return parseData(fileData, fileFormat);
};

const genDiff = (filePath, filePath2, format = 'stylish') => {
  const file1 = readfile(filePath);
  const file2 = readfile(filePath2);
  const tree = buildTree(file1, file2);
  return formatter(tree, format);
};

export default genDiff;
