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

test('test function getdiff()', () => {
  const fileA1Content = readFile('fileB1.json');
  const fileA2Content = readFile('fileB2.json');
  const fileExtension1 = getFileExtension('fileB1.json');
  const fileExtension2 = getFileExtension('fileB2.json');
  const fileA1Data = parseData(fileA1Content, fileExtension1);
  const fileA2Data = parseData(fileA2Content, fileExtension2);
  const expectedDiff = readFile('expectB.txt');
  const diff = genDiff(fileA1Data, fileA2Data);
  expect(diff).toBe(expectedDiff);
});

test('test function getdiff()', () => {
  const fileA1Content = readFile('fileA1.json');
  const fileA2Content = readFile('fileA2.json');
  const fileExtension1 = getFileExtension('fileA1.json');
  const fileExtension2 = getFileExtension('fileA2.json');
  const fileA1Data = parseData(fileA1Content, fileExtension1);
  const fileA2Data = parseData(fileA2Content, fileExtension2);
  const expectedDiff = readFile('expectA.txt');
  const diff = genDiff(fileA1Data, fileA2Data);
  expect(diff).toBe(expectedDiff);
});

test('test function getdiff()', () => {
  const fileA1Content = readFile('fileC1.yml');
  const fileA2Content = readFile('fileC2.yml');
  const fileExtension1 = getFileExtension('fileC1.yml');
  const fileExtension2 = getFileExtension('fileC2.yml');
  const fileA1Data = parseData(fileA1Content, fileExtension1);
  const fileA2Data = parseData(fileA2Content, fileExtension2);
  const expectedDiff = readFile('expectC.txt');
  const diff = genDiff(fileA1Data, fileA2Data);
  expect(diff).toBe(expectedDiff);
});
