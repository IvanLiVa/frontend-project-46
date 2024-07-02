import stylish from '../src/formatters/stylish.js';
import formatPlain from '../src/formatters/plain.js';
import genDiff from '../src/index.js';

describe('should throw an error for unknown type', () => {
  test('stylish  for unknown type', () => {
    const diffWithUnknownType = [
      {
        key: 'someKey',
        type: 'unknownType',
        value: 'someValue',
      },
    ];
    expect(() => {
      stylish(diffWithUnknownType);
    }).toThrow('Unknown type: unknownType');
  });

  test('plain  for unknown type', () => {
    const diffWithUnknownType = [
      {
        key: 'someKey',
        type: 'unknownType',
        value: 'someValue',
      },
    ];
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
