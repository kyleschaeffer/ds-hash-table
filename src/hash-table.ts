/**
 * Hash table data structure
 *  - Extremely performant storage and lookup time: O(1)
 *  - Table key = hashed value
 *  - This implementation does not handle collision
 */
export class HashTable {
  /**
   * Hash table values
   */
  public table: string[];

  /**
   * Table size
   */
  public size: number;

  /**
   * Instantiate a new hash table
   */
  constructor(size: number = 255) {
    // New empty hash table
    this.table = new Array(size);
    this.size = size;
  }

  /**
   * Add value to the hash table
   */
  public add(value: string): void {
    this.table[this.hash(value)] = value;
  }

  /**
   * Check table to see if something is already in memory
   */
  public check(value: string): boolean {
    return this.table[this.hash(value)] !== undefined;
  }

  /**
   * Hash the given input string
   *  - Simple hashing algorithm for the sake of brevity
   */
  public hash(value: string): number {
    let num: number = 0;
    for (let i = 0; i < value.length; i++) {
      num += value.charCodeAt(i) * i;
    }
    return num % this.size;
  }
}
