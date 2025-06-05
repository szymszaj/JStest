function maximizeTargetNodes(edgesTree1, edgesTree2, k) {
  const n = edgesTree1.length + 1;
  const m = edgesTree2.length + 1;
  const graph1 = Array.from({ length: n }, () => []);
  const graph2 = Array.from({ length: m }, () => []);

  for (const [a, b] of edgesTree1) {
    graph1[a].push(b);
    graph1[b].push(a);
  }
  for (const [a, b] of edgesTree2) {
    graph2[a].push(b);
    graph2[b].push(a);
  }

  let maxInGraph2 = 0;
  for (let i = 0; i < m; i++) {
    maxInGraph2 = Math.max(maxInGraph2, dfs(graph2, i, -1, k - 1));
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    let count = maxInGraph2 + dfs(graph1, i, -1, k);
    result.push(count);
  }
  return result;
}

function dfs(graph, node, parent, k) {
  if (k < 0) return 0;
  if (k === 0) return 1;
  let res = 1;
  for (const neighbor of graph[node]) {
    if (neighbor === parent) continue;
    res += dfs(graph, neighbor, node, k - 1);
  }
  return res;
}
