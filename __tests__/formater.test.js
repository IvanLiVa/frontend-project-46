import { stylish } from '../formatters/index.js';

test('Tests stylish ', () => {
  const testDiff = [
    { type: 'unknownType', key: 'someKey', value: 'someValue' },
  ];
  expect(stylish(testDiff)).toBe('{\n\n}');
});
