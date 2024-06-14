import path from 'path';

const getAbsolutePath = (filePath) => {
  if (path.isAbsolute(filePath)) {
    return filePath;
  }
  return path.resolve(filePath);
};

const getFileExtension = (filePath) => path.extname(filePath);

export { getAbsolutePath, getFileExtension };
