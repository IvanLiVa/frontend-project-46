import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  return keys.map((key) => {
    switch (true) {
      case !_.has(data2, key):
        return { key, type: 'removed', value: data1[key] };
      case !_.has(data1, key):
        return { key, type: 'added', value: data2[key] };
      case _.isObject(data1[key]) && _.isObject(data2[key]):
        return {
          key,
          type: 'nested',
          children: buildTree(data1[key], data2[key]),
        };
      case !_.isEqual(data1[key], data2[key]):
        return {
          key,
          type: 'updated',
          oldValue: data1[key],
          newValue: data2[key],
        };
      default:
        return { key, type: 'unchanged', value: data1[key] };
    }
  });
};

export default buildTree;
