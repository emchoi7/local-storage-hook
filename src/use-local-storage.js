import { useState, useEffect } from "react";
export default function useLocalStorage(keyName, initialValue) {
  // Add your solution here
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(keyName);
    const savedVal = JSON.parse(saved);
    return savedVal || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [value])

  return [value, setValue];
}
