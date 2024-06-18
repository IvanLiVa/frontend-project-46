#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import parseData from '../src/parser.js';
import { getAbsolutePath, getFileExtension } from '../index.js';
import genDiff from '../src/gendifffunc.js';

program
  .name('gendiff')
  .description(' Compares two configuration files and shows a difference')
  .version('1.0.0')
  .arguments('<filePath1> <filePath2>')
  .option('-f, --format<type>', 'choose format')
  .action((filePath1, filePath2) => {
    const absolutePath1 = getAbsolutePath(filePath1);
    const absolutePath2 = getAbsolutePath(filePath2);
    const fileContent1 = fs.readFileSync(absolutePath1, 'utf-8');
    const fileContent2 = fs.readFileSync(absolutePath2, 'utf-8');
    const format1 = getFileExtension(filePath1);
    const format2 = getFileExtension(filePath2);
    const obj1 = parseData(fileContent1, format1);
    const obj2 = parseData(fileContent2, format2);
    console.log(genDiff(obj1, obj2));
    return genDiff(obj1, obj2);
  });
program.parse();
