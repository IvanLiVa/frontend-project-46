#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .name('gendiff')
  .description(' Compares two configuration files and shows a difference')
  .version('1.0.0')
  .arguments('<filePath1> <filePath2>')
  .option('-f, --format <type>', 'choose format', 'stylish')
  .action((filePath1, filePath2, options) => {
    const diff = genDiff(filePath1, filePath2, options.format);
    console.log(diff);
  });
program.parse();
