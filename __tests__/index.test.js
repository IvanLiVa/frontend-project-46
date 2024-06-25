import { getAbsolutePath, getFileExtension } from '../index.js';

const absolutePath = getAbsolutePath('file1.json');

test('test AbsolutePath ()', () => {
  expect(absolutePath).toEqual(getAbsolutePath(absolutePath));
});

test('test relativePath ()', () => {
  expect(absolutePath).toEqual(getAbsolutePath('file1.json'));
});

test('test  otExist ()', () => {
  expect(getAbsolutePath('notExist.json')).toBeNull();
});

test('test extension ()', () => {
  expect(getFileExtension(getAbsolutePath('file1.json'))).toEqual('.json');
});
