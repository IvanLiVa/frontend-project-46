import parseData from '../src/parser.js';

test('parseData should throw an error for unknown format', () => {
  const data = 'some data';
  const unknownFormat = '.txt';

  expect(() => {
    parseData(data, unknownFormat);
  }).toThrow(`Unknown format: ${unknownFormat}`);
});
