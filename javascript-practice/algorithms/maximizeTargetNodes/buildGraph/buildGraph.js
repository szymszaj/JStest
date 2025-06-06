function buildGraph(edges, nodesCount) {
  const graph = Array.from({ length: nodesCount }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function dfsDiameter(graph, node, parent) {
  let max1 = 0,
    max2 = 0,
    diameter = 0;
  for (const neighbor of graph[node]) {
    if (neighbor !== parent) {
      const [depth, subDiameter] = dfsDiameter(graph, neighbor, node);
      if (depth > max1) {
        max2 = max1;
        max1 = depth;
      } else if (depth > max2) {
        max2 = depth;
      }
      diameter = Math.max(diameter, subDiameter);
    }
  }
  diameter = Math.max(diameter, max1 + max2);
  return [max1 + 1, diameter];
}

function diameterOfTree(edges) {
  const n = edges.length + 1;
  const graph = buildGraph(edges, n);
  const [, diameter] = dfsDiameter(graph, 0, -1);
  return diameter;
}

const edges = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
];
console.log("Średnica drzewa:", diameterOfTree(edges));
