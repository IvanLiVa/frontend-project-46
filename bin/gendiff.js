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
  .option('-f, --format <type>', 'choose format', 'stylish')
  .action((filePath1, filePath2, options) => {
    const fileContent1 = fs.readFileSync(getAbsolutePath(filePath1), 'utf-8');
    const fileContent2 = fs.readFileSync(getAbsolutePath(filePath2), 'utf-8');
    const formatName = options.format || 'stylish';
    const format1 = getFileExtension(filePath1);
    const format2 = getFileExtension(filePath2);
    const obj1 = parseData(fileContent1, format1);
    const obj2 = parseData(fileContent2, format2);
    const diff = genDiff(obj1, obj2, formatName);
    console.log(diff);
  });
program.parse();
