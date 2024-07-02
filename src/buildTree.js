import _ from 'lodash';

const getKey = (data1, data2) => _.union(Object.keys(data1), Object.keys(data2)).sort();

const buildTree = (data1, data2) => {
  const keys = getKey(data1, data2);

  return keys.reduce((acc, key) => {
    let diffEntry;

    switch (true) {
      case !_.has(data2, key):
        diffEntry = { key, type: 'removed', value: data1[key] };
        break;
      case !_.has(data1, key):
        diffEntry = { key, type: 'added', value: data2[key] };
        break;
      case _.isObject(data1[key]) && _.isObject(data2[key]):
        diffEntry = {
          key,
          type: 'nested',
          children: buildTree(data1[key], data2[key]),
        };
        break;
      case !_.isEqual(data1[key], data2[key]):
        diffEntry = {
          key,
          type: 'updated',
          oldValue: data1[key],
          newValue: data2[key],
        };
        break;
      default:
        diffEntry = { key, type: 'unchanged', value: data1[key] };
    }

    acc.push(diffEntry);
    return acc;
  }, []);
};

export default buildTree;
