import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8').trim();

describe('test function genDiff()', () => {
  test('testing genDiff format stylish', () => {
    const diffJson = genDiff('file1.json', 'file2.json');
    const diffYml = genDiff('file1ym.yml', 'file2ym.yml');
    const readExpect = readFile('expectStylish.txt');
    expect(diffJson).toBe(readExpect);
    expect(diffYml).toBe(readExpect);
  });

  test('testing gendiff format plain', () => {
    const diffJson = genDiff('file1.json', 'file2.json', 'plain');
    const diffYml = genDiff('file1ym.yml', 'file2ym.yml', 'plain');
    const readExpect = readFile('expectPlain.txt');
    expect(diffJson).toBe(readExpect);
    expect(diffYml).toBe(readExpect);
  });

  test('testing genDiff format json', () => {
    const diffJson = genDiff('file1.json', 'file2.json', 'json');
    const diffYml = genDiff('file1ym.yml', 'file2ym.yml', 'json');
    const readExpect = readFile('expectJson.txt');
    expect(diffJson).toBe(readExpect);
    expect(diffYml).toBe(readExpect);
  });
});
