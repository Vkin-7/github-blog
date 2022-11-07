import { useEffect, useState } from 'react';

const DEFAULT_DEBOUNCE_DURATION_IN_MILLISECONDS = 500;

export function useDebounce<T>(value: T, delay?: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay || DEFAULT_DEBOUNCE_DURATION_IN_MILLISECONDS);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}
