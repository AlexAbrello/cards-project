import { useEffect, useState } from 'react'

export const useDebounce = (value: any, delay: number) => {
  
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const debounce = <F extends (...args: any[]) => any>(fn: F, delay: number): (...args: Parameters<F>) => void => {
  let timerId: NodeJS.Timeout | null;
  return (...args: Parameters<F>): void => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}
