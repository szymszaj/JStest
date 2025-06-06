function buildGraph(edges, nodesCount) {
  const graph = Array.from({ length: nodesCount }, () => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function dfs(graph, node, parent, k) {
  if (k < 0) return 0;
  if (k === 0) return 1;
  let res = 1;
  for (const neighbor of graph[node]) {
    if (neighbor !== parent) {
      res += dfs(graph, neighbor, node, k - 1);
    }
  }
  return res;
}

function maximizeTargetNodes(edgesTree1, edgesTree2, k) {
  const n = edgesTree1.length + 1;
  const m = edgesTree2.length + 1;
  const graph1 = buildGraph(edgesTree1, n);
  const graph2 = buildGraph(edgesTree2, m);

  const maxInGraph2 = Math.max(
    ...Array.from({ length: m }, (_, i) => dfs(graph2, i, -1, k - 1))
  );

  return Array.from(
    { length: n },
    (_, i) => maxInGraph2 + dfs(graph1, i, -1, k)
  );
}

const edges1 = [
  [0, 1],
  [1, 2],
];
const edges2 = [[0, 1]];
const k = 2;
console.log(maximizeTargetNodes(edges1, edges2, k));
