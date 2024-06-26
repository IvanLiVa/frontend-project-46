import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const formatPlain = (diff) => {
  const result = [];

  const iter = (data, path = '') => {
    data.forEach((item) => {
      const currentPath = path ? `${path}.${item.key}` : item.key;

      switch (item.type) {
        case 'added':
          result.push(
            `Property '${currentPath}' was added with value: ${formatValue(item.value)}`,
          );
          break;
        case 'removed':
          result.push(`Property '${currentPath}' was removed`);
          break;
        case 'updated':
          result.push(
            `Property '${currentPath}' was updated. From ${formatValue(item.oldValue)} to ${formatValue(item.newValue)}`,
          );
          break;
        case 'nested':
          iter(item.children, currentPath);
          break;
        default:
          break;
      }
    });
  };

  iter(diff);
  return result.join('\n');
};

export default formatPlain;
