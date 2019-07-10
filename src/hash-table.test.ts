import { HashTable } from './hash-table';

test('hash table is initialized', () => {
  const hash = new HashTable();
  expect(hash.table).toBeInstanceOf(Array);
});

test('values added to hash table', () => {
  const hash = new HashTable();
  hash.add('new value');
  expect(hash.table[97]).toBe('new value');
  expect(hash.check('new value')).toBe(true);
  hash.add('another new value');
  expect(hash.table[140]).toBe('another new value');
  expect(hash.check('another new value')).toBe(true);
});

test('values can be checked', () => {
  const hash = new HashTable();
  hash.add('');
  hash.add('new value');
  expect(hash.check('')).toBe(true);
  expect(hash.check('new value')).toBe(true);
  expect(hash.check('another new value')).toBe(false);
});
