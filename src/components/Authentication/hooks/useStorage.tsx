import { useState } from "react";

export const useStorage = () => {
  const [value, setValue] = useState<string | null>(null);

  const setStorageValue = (key: string, value: string) => {
    setValue(value);
    localStorage.setItem(key, value);
  };

  const removeStorageValue = (key: string) => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return { value, setStorageValue, removeStorageValue };
};
