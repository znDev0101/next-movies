import { useState, useEffect, useRef } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef<number | null>(null);

  const cancelDebounce = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      cancelDebounce();
    };
  }, [value, delay]);

  return [debouncedValue, cancelDebounce];
};

export default useDebounce;
