const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
const toKebab = (str) => str.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
const toCamel = (str) => str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const titleCase = (str) => str.split(" ").map(capitalize).join(" ");
const toSlug = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));

const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});

function buildTree(items, parentId = null) {
  return items
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      ...item,
      children: buildTree(items, item.id),
    }));
}

function flatten(tree, depth = 0) {
  return tree.flatMap((node) => [
    { ...node, depth, children: undefined },
    ...flatten(node.children || [], depth + 1),
  ]);
}

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const unique = (arr) => [...new Set(arr)];

const uniqueBy = (arr, key) => [
  ...new Map(arr.map((item) => [item[key], item])).values(),
];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const sample = (arr, n = 1) => shuffle(arr).slice(0, n);

const range = (start, end, step = 1) =>
  Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, i) => start + i * step
  );

const zip = (...arrays) => arrays[0].map((_, i) => arrays.map((arr) => arr[i]));

const unzip = (arr) => arr[0].map((_, i) => arr.map((row) => row[i]));

const deepClone = (obj) => JSON.parse(JSON.stringify(obj));

const merge = (target, ...sources) =>
  sources.reduce(
    (acc, src) => {
      Object.keys(src).forEach((key) => {
        if (
          typeof src[key] === "object" &&
          src[key] !== null &&
          !Array.isArray(src[key])
        ) {
          acc[key] = merge(acc[key] || {}, src[key]);
        } else {
          acc[key] = src[key];
        }
      });
      return acc;
    },
    { ...target }
  );

const debounce = (fn, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
};

const throttle = (fn, ms) => {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      return fn(...args);
    }
  };
};

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key);
  };
};

const curry = (fn) =>
  function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };

const partition = (arr, predicate) =>
  arr.reduce(
    ([pass, fail], item) =>
      predicate(item) ? [[...pass, item], fail] : [pass, [...fail, item]],
    [[], []]
  );

const countBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === "function" ? key(item) : item[key];
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {});

const sortBy = (arr, key, desc = false) =>
  [...arr].sort((a, b) => {
    const va = typeof key === "function" ? key(a) : a[key];
    const vb = typeof key === "function" ? key(b) : b[key];
    return desc ? (vb > va ? 1 : -1) : va > vb ? 1 : -1;
  });

const mapKeys = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [fn(k, v), v]));

const mapValues = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k)]));

const invert = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

module.exports = {
  pipe,
  compose,
  toSnakeCase,
  toKebab,
  toCamel,
  capitalize,
  titleCase,
  toSlug,
  pick,
  omit,
  groupBy,
  buildTree,
  flatten,
  chunk,
  unique,
  uniqueBy,
  shuffle,
  sample,
  range,
  zip,
  unzip,
  deepClone,
  merge,
  debounce,
  throttle,
  memoize,
  curry,
  partition,
  countBy,
  sortBy,
  mapKeys,
  mapValues,
  invert,
};
