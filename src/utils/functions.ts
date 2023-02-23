export function doNothing(): void {}

export function voidPromise(): Promise<void> {
	return Promise.resolve()
}