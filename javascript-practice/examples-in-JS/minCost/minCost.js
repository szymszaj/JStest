function minCost(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue = [];
  const stack = [];

  queue.push([0, 0, 0]);

  while (queue.length > 0) {
    while (queue.length > 0) {
      const [row, col, cost] = queue.shift();

      if (row < 0 || col < 0 || row >= rows || col >= cols || visited[row][col])
        continue;
      if (row === rows - 1 && col === cols - 1) return cost;

      visited[row][col] = true;
      const dir = grid[row][col] - 1;

      for (let i = 0; i < directions.length; i++) {
        const [dx, dy] = directions[i];
        const newRow = row + dx;
        const newCol = col + dy;
        const newCost = i === dir ? cost : cost + 1;

        if (i === dir) {
          addInQ(queue, visited, newRow, newCol, newCost);
        } else {
          addInQ(stack, visited, newRow, newCol, newCost);
        }
      }
    }

    while (stack.length > 0) {
      const [row, col, cost] = stack.shift();
      if (!visited[row][col]) {
        queue.push([row, col, cost]);
        break;
      }
    }
  }

  return rows + cols - 2;
}

function addInQ(queue, visited, row, col, cost) {
  if (
    row < 0 ||
    col < 0 ||
    row >= visited.length ||
    col >= visited[row].length ||
    visited[row][col]
  )
    return;
  queue.push([row, col, cost]);
}
