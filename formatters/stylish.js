import _ from 'lodash';

const formatValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }

  const indentSize = depth * 4;
  const currentIndent = ' '.repeat(indentSize);
  const bracketIndent = ' '.repeat(indentSize - 4);
  const lines = Object.entries(value).map(
    ([key, val]) => `${currentIndent}${key}: ${formatValue(val, depth + 1)}`,
  );

  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

const stylish = (diff, depth = 1) => {
  const indentSize = depth * 4;
  const currentIndent = ' '.repeat(indentSize - 2);
  const bracketIndent = ' '.repeat(indentSize - 4);

  const lines = diff.map((node) => {
    switch (node.type) {
      case 'added':
        return `${currentIndent}+ ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'removed':
        return `${currentIndent}- ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'updated':
        return [
          `${currentIndent}- ${node.key}: ${formatValue(node.oldValue, depth + 1)}`,
          `${currentIndent}+ ${node.key}: ${formatValue(node.newValue, depth + 1)}`,
        ].join('\n');
      case 'unchanged':
        return `${currentIndent}  ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'nested':
        return `${currentIndent}  ${node.key}: ${stylish(node.children, depth + 1)}`;
      default:
        console.log(`Unknown type: ${node.type}`);
        return null;
    }
  });

  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

export default stylish;
