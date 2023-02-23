/**
 * Represents an object entries type.
 */
export type Entry<T> = {
	[K in keyof T]: [K, T[K]]
}[keyof T]

/**
 * Generates a type removing all keys from second type from the first one.
 *
 * First type must be a Record, and the second one must be an array of first
 * type keys.
 */
export type OmitList<T, Keys extends Key<T>[]> = {
	[K2 in Exclude<keyof T, Keys[number]>]: T[K2]
}

export type Key<T> = keyof T

export type SelectKeysOptions<T> = {
	pickKeys?: Key<T>[]
	excludeKeys?: Key<T>[]
}

/**
 * Typed Object::entries helper
 * @param object Object
 * @returns Entries of the given object
 */
export function getTypedEntries<T extends Record<any, any>>(
	object: T
): Entry<T>[] {
	return Object.entries(object) as Entry<T>[]
}

function selectKeys<T extends Record<any, any>, R extends T>(
	object: T,
	{ pickKeys, excludeKeys }: SelectKeysOptions<T>
): R {
	return getTypedEntries(object).reduce((newObj, [key, value]) => {
		const shouldIncludeKey =
			(!pickKeys || pickKeys.includes(key)) &&
			(!excludeKeys || !excludeKeys.includes(key))

		if (shouldIncludeKey) {
			newObj[key] = value
		}

		return newObj
	}, {} as R)
}

/**
 * Object keys omitter helper
 * @param object Object
 * @param keys Keys to exclude
 * @returns Object with remaining keys
 */
export function omitKeys<T extends Record<any, any>, Keys extends Key<T>[]>(
	object: T,
	...keys: Keys
): OmitList<T, Keys> {
	return selectKeys(object, { excludeKeys: keys })
}