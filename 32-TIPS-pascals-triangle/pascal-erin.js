// this is the same as the Ruby implementation, this time in JavaScript
// to run this file, type `node pascal-erin.js`
function triangle(row) {
  const listOfRows = [];
  listOfRows.push([1]);

  for (var i = 1; i <= row; i++) {
    const newRow = [];
    const previousRow = listOfRows[i-1];
    const newRowLength = previousRow.length + 1;
    for (var j = 0; j < newRowLength; j++) {
      if (j == 0 || j == newRowLength - 1) {
        newRow.push(1);
      } else {
        newRow.push(previousRow[j - 1] + previousRow[j]);
      }
    }
    listOfRows.push(newRow);
  }

  console.log(listOfRows[listOfRows.length - 1].join(", "));
}

triangle(0);
triangle(1);
triangle(2);
triangle(3);
triangle(4);
