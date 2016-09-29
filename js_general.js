// Make this happen: duplicate([1, 2, 3, 4, 5]) ==> [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
// NB: arr + arr returns a string

function duplicate(arr) {
  let newArr = Array(arr.length * 2);
  for (let i = 0; i < arr.length; i ++) {
    newArr[i] = arr[i];
    newArr[arr.length + i] = arr[i];
  }
  return newArr;
}
// time: O(n) n being lenth of input
// ============================================================================

// Write a function that takes in an array and returns a shuffled version of it.

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
// time: O(n) n being length of input
// ============================================================================


// Write a staircase function that outputs the following:
//    *
//   **
//  ***
// ****
//*****

function staircase(n) {
  for (let line = 1; line <= n; line++) {
    let output = "";
    for (let spaces = line; spaces < n; spaces++) {
      output += " ";
    }
    for (let stars = n - line; stars < n; stars++) {
      output += "*";
    }
    console.log(output);
  }
}

// ============================================================================
