import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import parseData from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();
const expectObject = parseData(readFile('fileA1.json'), '.json');

test('test function parseData().yml', () => {
  const fileData = parseData(readFile('fileC1.yml'), '.yml');
  expect(fileData).toEqual(expectObject);
});

test('test function parseData().yaml', () => {
  const fileData = parseData(readFile('fileYamlforTest.yaml'), '.yaml');
  expect(fileData).toEqual(expectObject);
});

test('test function parseData() Unknown format: ', () => {
  const fileData = parseData(readFile('expectC.txt'), '.txt');
  expect(fileData).toBeNull();
});
