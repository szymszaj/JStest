export const pick = (obj, keys) =>
  keys.reduce((acc, key) => {
    const { [key]: value } = obj;
    if (value !== undefined) acc[key] = value;
    return acc;
  }, {});

export const omit = (obj, keys) =>
  Object.keys(obj).reduce((acc, key) => {
    if (!keys.includes(key)) acc[key] = obj[key];
    return acc;
  }, {});

export const firstN = (arr, n) => arr.slice(0, n);

export const filterBy = (arr, key, value) =>
  arr.filter((item) => item[key] === value);
