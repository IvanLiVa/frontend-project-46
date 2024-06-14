import yaml from 'js-yaml';

const parseData = (data, format) => {
  let parsingDate;
  switch (format) {
    case '.json':
      parsingDate = JSON.parse(data);
      return parsingDate;
    case '.yml':
      parsingDate = yaml.load(data);
      return parsingDate;
    default:
      console.log('Unknown format:', format);
      return null;
  }
};

export default parseData;
