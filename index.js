import path from 'path';
import fs from 'fs';

function getAbsolutePath(filePath) {
  if (path.isAbsolute(filePath)) {
    return filePath;
  }
  const currentDirectory = process.cwd();
  const projectRoot = path.resolve(currentDirectory, 'frontend-project-46');
  let absoluteFilePath = path.resolve(projectRoot, filePath);
  // если файла нет в проекте  ищем в  раочей директории -  process.cwd();
  if (!fs.existsSync(absoluteFilePath)) {
    absoluteFilePath = path.resolve(currentDirectory, filePath);
  }
  // проверяем  существует ли фаил
  if (!fs.existsSync(absoluteFilePath)) {
    console.log(`File not found: ${absoluteFilePath}`);
    return null;
  }

  return absoluteFilePath;
}

const getFileExtension = (filePath) => path.extname(filePath);

export { getAbsolutePath, getFileExtension };
