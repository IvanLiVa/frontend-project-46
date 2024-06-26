import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/gendifffunc.js';
import parseData from '../src/parser.js';
import { getFileExtension } from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

test('test function gendiff() json(stylish, plain)', () => {
  const fileA1Data = parseData(
    readFile('fileA1.json'),
    getFileExtension('fileA1.json'),
  );
  const fileA2Data = parseData(
    readFile('fileA2.json'),
    getFileExtension('fileA2.json'),
  );
  const expectedDiff = readFile('expectA.txt');
  const expectPlain = readFile('expectPlainFormat.txt');
  const diffStylish = genDiff(fileA1Data, fileA2Data);
  const diffPlain = genDiff(fileA1Data, fileA2Data, 'plain');
  expect(diffPlain).toBe(expectPlain);
  expect(diffStylish).toBe(expectedDiff);
});

test('test function getdiff() yml (stylish)', () => {
  const fileA1Data = parseData(
    readFile('fileC1.yml'),
    getFileExtension('fileC1.yml'),
  );
  const fileA2Data = parseData(
    readFile('fileC2.yml'),
    getFileExtension('fileC2.yml'),
  );
  const expectedDiff = readFile('expectC.txt');
  const expectPlain = readFile('expectPlainFormat.txt');
  const diff = genDiff(fileA1Data, fileA2Data);
  const diffPlain = genDiff(fileA1Data, fileA2Data, 'plain');
  expect(diff).toBe(expectedDiff);
  expect(expectPlain).toBe(diffPlain);
});

test('test function gendiff() json', () => {
  const fileA1Data = parseData(
    readFile('fileA1.json'),
    getFileExtension('fileA1.json'),
  );
  const fileA2Data = parseData(
    readFile('fileA2.json'),
    getFileExtension('fileA2.json'),
  );
  const diffJson = genDiff(fileA1Data, fileA2Data, 'json');
  expect(typeof diffJson).toBe('string');
});
