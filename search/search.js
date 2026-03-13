const searchData = [
  {
    id: 1,
    title: "JavaScript dla początkujących",
    tags: ["js", "tutorial", "podstawy"],
  },
  {
    id: 2,
    title: "React - kompletny kurs",
    tags: ["react", "frontend", "framework"],
  },
  { id: 3, title: "Node.js backend", tags: ["nodejs", "backend", "api"] },
  { id: 4, title: "JavaScript zaawansowany", tags: ["js", "advanced", "es6"] },
  { id: 5, title: "Vue.js od podstaw", tags: ["vue", "frontend", "framework"] },
];

const search = (query) => {
  if (!query || typeof query !== "string") return [];

  const lowerQuery = query.toLowerCase().trim();

  return searchData.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const tagsMatch = item.tags.some((tag) =>
      tag.toLowerCase().includes(lowerQuery),
    );
    return titleMatch || tagsMatch;
  });
};

const highlightResults = (results, query) => {
  if (!query || typeof query !== "string") return results;

  const highlightRegex = new RegExp(query, "gi");

  return results.map((item) => ({
    ...item,
    highlighted: item.title.replace(highlightRegex, (match) => `**${match}**`),
  }));
};
