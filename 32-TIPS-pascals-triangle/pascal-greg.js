// this file has an iterative solution.  unlike Erin's solution, it pushes 1
// onto the array outside of the inner loop, rather than having a conditional
// to run this file, type `node pascal-greg.js` (or you can use the "live server"
// in VS Code)
function pascal(n) {
  const rowsAr = [[1], [1, 1]];
  let prevRow = rowsAr[1];
  for (let i = 1; i < n - 1; i++) {
    let row = [1];
    let val = prevRow[0];
    for (let j = 0; j < prevRow.length - 1; j++) {
      row.push(val + (val = prevRow[j + 1]));
    }
    row.push(1);
    rowsAr.push(row);
    prevRow = row;
  }
  return rowsAr;
}

console.log(pascal(0));
console.log(pascal(1));
console.log(pascal(2));
console.log(pascal(3));
console.log(pascal(4));
