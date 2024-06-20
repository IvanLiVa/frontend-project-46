import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import parseData from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

test('test function parseData()', () => {
  const fileContent = readFile('fileD1.yaml');
  const fileData = parseData(fileContent, '.yaml');
  const expectOblect = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  expect(fileData).toEqual(expectOblect);
});

test('test function parseData(),Unknown format: ', () => {
  const fileContent = readFile('expectA.txt');
  const fileData = parseData(fileContent, '.txt');
  expect(fileData).toBeNull();
});
