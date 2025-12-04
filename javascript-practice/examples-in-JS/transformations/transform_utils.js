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
};
