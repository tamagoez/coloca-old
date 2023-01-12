// LocalStorage
export const setLocalBDB = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, value);
  }
};
export const removeLocalBDB = (key: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};
export const getLocalBDB = (key: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.getItem(key);
  }
};
