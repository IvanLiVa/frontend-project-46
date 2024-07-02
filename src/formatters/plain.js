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

const formatPlain = (diffTree) => {
  const iter = (nodes, path = '') => {
    const lines = nodes.flatMap((node) => {
      const {
        key, type, value, oldValue, newValue, children,
      } = node;

      switch (type) {
        case 'nested':
          return iter(children, `${path}${key}.`);
        case 'added':
          return `Property '${path}${key}' was added with value: ${formatValue(value)}`;
        case 'removed':
          return `Property '${path}${key}' was removed`;
        case 'updated':
          return `Property '${path}${key}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`;
        case 'unchanged':
          return [];
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    });

    return lines;
  };

  return iter(diffTree).join('\n');
};

export default formatPlain;
