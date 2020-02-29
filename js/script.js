const rowsInMatrix = 7;
const elementsInRow = 6;

const createMatrix = (rowsInMatrix, elementsInRow) => {
  const table = document.getElementById('table');
  const matrix = [];

  // create matrix
  for (let row = 0; row < rowsInMatrix; row++) {
    const rowArr = [];

    for (let element = 0; element < elementsInRow; element++) {
      const cell = document.createElement('div');
      const randomNum = Math.floor(Math.random() * (5 - 1) + 1);

      cell.classList.add('cell');
      switch (randomNum) {
        case 1:
          cell.innerHTML = '&#9825';
          break;
        case 2:
          cell.innerHTML = '&#9826';
          break;
        case 3:
          cell.innerHTML = '&#9824';
          break;
        case 4:
          cell.innerHTML = '&#9827';
          break;
        default:
          break;
      }

      rowArr.push(cell);

      cell.addEventListener('click', function(e) {
        const eventSuit = e.target.innerText;
        const deletingSuitsRecursionly = (rowIndex, cellIndex, matrix) => {
          if (rowIndex < 0 || cellIndex < 0) return;
          else if (rowIndex >= matrix.length || cellIndex >= rowArr.length) return;
          else if (matrix[rowIndex][cellIndex].innerText === eventSuit) {
            matrix[rowIndex][cellIndex].innerText = '';
            deletingSuitsRecursionly(rowIndex, cellIndex - 1, matrix);
            deletingSuitsRecursionly(rowIndex, cellIndex + 1, matrix);
            deletingSuitsRecursionly(rowIndex - 1, cellIndex, matrix);
            deletingSuitsRecursionly(rowIndex + 1, cellIndex, matrix);
          } else return;
        };
        deletingSuitsRecursionly(row, element, matrix);
      });
      table.appendChild(cell);
    }
    matrix.push(rowArr);
  }
};

createMatrix(rowsInMatrix, elementsInRow);
