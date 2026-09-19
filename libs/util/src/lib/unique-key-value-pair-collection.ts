export type KeyValueTuple<K, V> = [K, V]

/**
 * Usage Examples
 * ```
 * const kvCollection = new UniqueKeyValuePairCollection<string, number>();
 *
 * // Add unique combinations
 * console.log("Add ('a', 1):", kvCollection.add('a', 1)); // true
 * console.log("Add ('b', 1):", kvCollection.add('b', 1)); // true (value 1 is duplicated, but key+value 'b'+1 is unique)
 * console.log("Add ('a', 2):", kvCollection.add('a', 2)); // true (key 'a' is duplicated, but key+value 'a'+2 is unique)
 * console.log("Add ('c', 3):", kvCollection.add('c', 3)); // true
 *
 * // Try to add a duplicate combination
 * console.log("Add ('a', 1) again:", kvCollection.add('a', 1)); // false (already exists)
 *
 * console.log("Collection size:", kvCollection.size); // 4
 *
 * // Check for existence
 * console.log("Has ('a', 1):", kvCollection.has('a', 1)); // true
 * console.log("Has ('a', 3):", kvCollection.has('a', 3)); // false
 * console.log("Has ('b', 1):", kvCollection.has('b', 1)); // true
 *
 * // Get values for a key
 * console.log("Values for 'a':", kvCollection.getValues('a')); // Set { 1, 2 }
 * console.log("Values for 'b':", kvCollection.getValues('b')); // Set { 1 }
 * console.log("Values for 'x':", kvCollection.getValues('x')); // undefined
 *
 * // Iterate through all pairs
 * console.log("\nAll unique key-value pairs:");
 * for (const [key, value] of kvCollection) {
 *     console.log(`[${key}, ${value}]`);
 * }
 * // Expected output:
 * // [a, 1]
 * // [b, 1]
 * // [a, 2]
 * // [c, 3]
 *
 * // Delete a combination
 * console.log("\nDelete ('a', 1):", kvCollection.delete('a', 1)); // true
 * console.log("Collection size after delete:", kvCollection.size); // 3
 * console.log("Has ('a', 1) after delete:", kvCollection.has('a', 1)); // false
 * console.log("Values for 'a' after delete:", kvCollection.getValues('a')); // Set { 2 } (only 'a', 2 remains)
 * ```
 */
export class UniqueKeyValuePairCollection<K, V> {
    // A Map to store the actual data, organized by key for efficient lookups by key
    private data: Map<K, Set<V>>

    // A Set to store stringified composite keys (key + value) for uniqueness checks
    private uniqueCombinations: Set<string>

    constructor() {
        this.data = new Map<K, Set<V>>()
        this.uniqueCombinations = new Set<string>()
    }

    // Helper to create a consistent string representation of the key-value pair
    private getCompositeKeyString(key: K, value: V): string {
        // For primitives, direct string conversion is fine.
        // For objects, you might need a more robust serialization (e.g., JSON.stringify).
        // Be cautious with JSON.stringify for objects if order of properties isn't guaranteed
        // or if objects contain circular references.
        // For this example, we assume primitive keys/values or simple objects that stringify consistently.
        return `${JSON.stringify(key)}::${JSON.stringify(value)}`
    }

    /**
     * Adds a key-value pair to the collection.
     * Returns true if the pair was added (i.e., it was unique), false otherwise.
     */
    add(key: K, value: V): boolean {
        const compositeKey = this.getCompositeKeyString(key, value)

        if (this.uniqueCombinations.has(compositeKey)) {
            // Combination already exists, do not add
            return false
        }

        // Add to unique combinations set
        this.uniqueCombinations.add(compositeKey)

        // Add to data Map
        if (!this.data.has(key)) {
            this.data.set(key, new Set<V>())
        }
        this.data.get(key)?.add(value) // We know it exists due to the check above

        return true
    }

    /**
     * Checks if a specific key-value pair exists in the collection.
     */
    has(key: K, value: V): boolean {
        const compositeKey = this.getCompositeKeyString(key, value)
        return this.uniqueCombinations.has(compositeKey)
    }

    /**
     * Gets all values associated with a given key.
     * Returns a Set of values, or undefined if the key is not found.
     */
    getValues(key: K): Set<V> | undefined {
        return this.data.get(key)
    }

    /**
     * Deletes a specific key-value pair from the collection.
     * Returns true if the pair was found and deleted, false otherwise.
     */
    delete(key: K, value: V): boolean {
        const compositeKey = this.getCompositeKeyString(key, value)

        if (!this.uniqueCombinations.has(compositeKey)) {
            return false // Combination doesn't exist
        }

        // Remove from unique combinations set
        this.uniqueCombinations.delete(compositeKey)

        // Remove from data Map
        const valuesSet = this.data.get(key)
        if (valuesSet) {
            valuesSet.delete(value)
            if (valuesSet.size === 0) {
                this.data.delete(key) // Remove the key entirely if no values remain
            }
        }
        return true
    }

    /**
     * Toggles the presence of a key-value pair in the collection.
     * If the pair exists, it is deleted. If it doesn't exist, it is added.
     * Returns true if the pair was added, false if it was deleted.
     */
    toggle(key: K, value: V): boolean {
        if (this.has(key, value)) {
            // If it exists, delete it
            this.delete(key, value)
            return false // Indicates it was deleted
        }
        // If it doesn't exist, add it
        this.add(key, value)
        return true // Indicates it was added
    }

    /**
     * Returns the total number of unique key-value pairs.
     */
    get size(): number {
        return this.uniqueCombinations.size
    }

    /**
     * Clears all key-value pairs from the collection.
     */
    clear(): void {
        this.data.clear()
        this.uniqueCombinations.clear()
    }

    deleteValues(key: K): void {
        if (this.data.has(key)) {
            const valuesSet = this.data.get(key)
            if (valuesSet) {
                for (const value of valuesSet) {
                    this.delete(key, value)
                }
            }
            this.data.delete(key) // Remove the key entirely
        }
    }

    /**
     * Iterates over all unique key-value pairs.
     */
    *[Symbol.iterator](): IterableIterator<KeyValueTuple<K, V>> {
        for (const compositeKey of this.uniqueCombinations) {
            // Reverse the stringify process to get original key and value
            const separatorIndex = compositeKey.indexOf('::')
            const keyString = compositeKey.substring(0, separatorIndex)
            const valueString = compositeKey.substring(separatorIndex + 2)

            let key: K
            let value: V
            try {
                key = JSON.parse(keyString)
                value = JSON.parse(valueString)
            } catch (e) {
                // Handle cases where parsing fails, perhaps due to non-JSON-stringifiable values
                console.error('Error parsing composite key:', e)
                continue // Skip this entry
            }
            yield [key, value]
        }
    }

    /**
     * Returns an array of all unique key-value pairs.
     */
    toArray(): KeyValueTuple<K, V>[] {
        return Array.from(this)
    }
}
