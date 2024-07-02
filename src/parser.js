import yaml from 'js-yaml';

const parseData = (data, format) => {
  let parsedData;
  switch (format) {
    case '.json':
      parsedData = JSON.parse(data);
      break;
    case '.yml':
    case '.yaml':
      parsedData = yaml.load(data);
      break;
    default:
      throw new Error(`Unknown format: ${format}`);
  }
  return parsedData;
};

export default parseData;
