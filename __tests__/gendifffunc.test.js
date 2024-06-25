import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/gendifffunc.js';
import parseData from '../src/parser.js';
import { getFileExtension } from '../index.js';
import stylish from '../src/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

test('test function getdiff() json', () => {
  const fileA1Data = parseData(
    readFile('fileA1.json'),
    getFileExtension('fileA1.json'),
  );
  const fileA2Data = parseData(
    readFile('fileA2.json'),
    getFileExtension('fileA2.json'),
  );
  const expectedDiff = readFile('expectA.txt');
  const diff = genDiff(fileA1Data, fileA2Data);
  expect(stylish(diff)).toBe(expectedDiff);
});

test('test function getdiff() yml', () => {
  const fileA1Data = parseData(
    readFile('fileC1.yml'),
    getFileExtension('fileC1.yml'),
  );
  const fileA2Data = parseData(
    readFile('fileC2.yml'),
    getFileExtension('fileC2.yml'),
  );
  const expectedDiff = readFile('expectC.txt');
  const diff = genDiff(fileA1Data, fileA2Data);
  expect(stylish(diff)).toBe(expectedDiff);
});
