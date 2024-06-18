import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2).sort();
  const result = [];
  keys.forEach((key) => {
    if (!Object.hasOwnProperty.call(data1, key)) {
      result.push(`  + ${key}: ${data2[key]}`);
    } else if (!Object.hasOwnProperty.call(data2, key)) {
      result.push(`  - ${key}: ${data1[key]}`);
    } else if (data1[key] !== data2[key]) {
      result.push(`  - ${key}: ${data1[key]}`);
      result.push(`  + ${key}: ${data2[key]}`);
    } else {
      result.push(`    ${key}: ${data1[key]}`);
    }
  });
  const diffString = `{\n${result.join('\n')}\n}`;
  return diffString;
};

export default genDiff;
