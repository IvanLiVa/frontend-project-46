import formaStylish from './stylish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const formatter = (tree, format) => {
  switch (format) {
    case 'stylish':
      return formaStylish(tree);
    case 'plain':
      return formatPlain(tree);
    case 'json':
      return formatJson(tree);
    default:
      throw new Error(
        `Format ${format} not supported. You can choose one of these formats: stylish, plain, json`,
      );
  }
};

export default formatter;
