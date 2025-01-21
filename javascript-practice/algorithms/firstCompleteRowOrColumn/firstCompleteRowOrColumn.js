function firstCompleteIndex(arr, matMap) {
  const rowsCount = matMap.length;
  const columnsCount = matMap[0].length;
  const rowCounters = new Array(rowsCount).fill(0);
  const columnCounters = new Array(columnsCount).fill(0);

  const indexes = new Array(rowsCount * columnsCount);
  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      indexes[matMap[i][j] - 1] = { row: i, column: j };
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const position = indexes[arr[i] - 1];

    const currentRowCount = ++rowCounters[position.row];
    if (currentRowCount === columnsCount) {
      return i;
    }

    const currentColumnCount = ++columnCounters[position.column];
    if (currentColumnCount === rowsCount) {
      return i;
    }
  }

  return arr.length - 1;
}
