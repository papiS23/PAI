const tab = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let counter = 0;
    A.forEach((num) => {
      if (A[i] == num) {
        counter++;
      }
    });
    if (counter % 2 != 0) {
      return A[i];
    }
  }
}

console.log(findOdd(tab));
