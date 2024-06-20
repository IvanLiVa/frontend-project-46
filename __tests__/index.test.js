import { getAbsolutePath, getFileExtension } from '../index.js';

const absolutePath = '/home/username_bolivarli/frontend-project-46/file1.json';

test('test AbsolutePath ()', () => {
  const expectPath = getAbsolutePath(absolutePath);
  const extension = '.json';
  const expectExtension = getFileExtension(absolutePath);
  expect(absolutePath).toEqual(expectPath);
  expect(extension).toEqual(expectExtension);
});

test('test relativePath ()', () => {
  const relativePath = 'file1.json';
  const expectPath = getAbsolutePath(relativePath);
  expect(absolutePath).toEqual(expectPath);
});

test('test AbsolutePath ()', () => {
  const relativePath = 'notExist.json';
  const expectPath = getAbsolutePath(relativePath);
  expect(expectPath).toBeNull();
});
