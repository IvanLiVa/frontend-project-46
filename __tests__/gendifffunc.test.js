import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/gendifffunc.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

test('test function getdiff()', () => {
  const fileA1Content = readFile('fileB1.json');
  const fileA2Content = readFile('fileB2.json');
  const fileA1Data = JSON.parse(fileA1Content);
  const fileA2Data = JSON.parse(fileA2Content);
  const expectedDiff = readFile('expectB.txt');
  const diff = genDiff(fileA1Data, fileA2Data);
  expect(diff).toBe(expectedDiff);
});

test('test function getdiff()', () => {
  const fileA1Content = readFile('fileA1.json');
  const fileA2Content = readFile('fileA2.json');
  const fileA1Data = JSON.parse(fileA1Content);
  const fileA2Data = JSON.parse(fileA2Content);
  const expectedDiff = readFile('expectA.txt');
  const diff = genDiff(fileA1Data, fileA2Data);
  expect(diff).toBe(expectedDiff);
});
