import _ from 'lodash';
import { stylish, formatPlain } from '../formatters/index.js';

const difResult = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  const diff = keys.reduce((acc, key) => {
    if (!_.has(data2, key)) {
      acc.push({ key, type: 'removed', value: data1[key] });
    } else if (!_.has(data1, key)) {
      acc.push({ key, type: 'added', value: data2[key] });
    } else if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      acc.push({
        key,
        type: 'nested',
        children: difResult(data1[key], data2[key]),
      });
    } else if (!_.isEqual(data1[key], data2[key])) {
      acc.push({
        key,
        type: 'updated',
        oldValue: data1[key],
        newValue: data2[key],
      });
    } else {
      acc.push({ key, type: 'unchanged', value: data1[key] });
    }
    return acc;
  }, []);
  return diff;
};

const genDiff = (file1, file2, formatName = 'stylish') => {
  let diff = difResult(file1, file2);
  if (formatName === 'stylish') {
    diff = stylish(diff);
  }
  if (formatName === 'plain') {
    diff = formatPlain(diff);
  }
  return diff;
};

export default genDiff;
