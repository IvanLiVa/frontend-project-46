import stylish from '../src/formatters/stylish.js';
import formatPlain from '../src/formatters/plain.js';
import genDiff from '../src/index.js';

const diffWithUnknownType = [
  {
    key: 'someKey',
    type: 'unknownType',
    value: 'someValue',
  },
];

describe('should throw an error for unknown type', () => {
  test('stylish  for unknown type', () => {
    expect(() => {
      stylish(diffWithUnknownType);
    }).toThrow('Unknown type: unknownType');
  });

  test('plain  for unknown type', () => {
    expect(() => {
      formatPlain(diffWithUnknownType);
    }).toThrow('Unknown type: unknownType');
  });

  test('testing format Unknown', () => {
    expect(() => {
      genDiff('file1.json', 'file2.json', 'Unknown');
    }).toThrow(
      'Format Unknown not supported. You can choose one of these formats: stylish, plain, json',
    );
  });
});
