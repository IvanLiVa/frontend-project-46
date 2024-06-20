import { getAbsolutePath, getFileExtension } from '../index.js';

const absolutePath = getAbsolutePath('file1.json');

test('test AbsolutePath ()', () => {
  expect(absolutePath).toEqual(getAbsolutePath(absolutePath));
});

test('test relativePath ()', () => {
  const relativePath = 'file1.json';
  const expectPath = getAbsolutePath(relativePath);
  expect(absolutePath).toEqual(expectPath);
});

test('test  otExist ()', () => {
  const relativePath = 'notExist.json';
  const expectPath = getAbsolutePath(relativePath);
  expect(expectPath).toBeNull();
});

test('test extension ()', () => {
  const file = getAbsolutePath('file1.json');
  expect('.json').toEqual(getFileExtension(file));
});
