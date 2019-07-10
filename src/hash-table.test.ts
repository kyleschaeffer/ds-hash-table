import { HashTable } from './hash-table';

test('hash table is initialized', () => {
  const hash = new HashTable();
  expect(hash.table).toBeInstanceOf(Array);
});

test('values added to hash table', () => {
  const hash = new HashTable();
  hash.add('new value');
  expect(hash.table[97]).toBe('new value');
  hash.add('another new value');
  expect(hash.table[140]).toBe('another new value');
});
