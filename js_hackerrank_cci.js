// Strings: Making Anagrams

// Given two strings, a and b, that may or may not be of the same length,
// determine the minimum number of character deletions required to make a and b anagrams.
// Any characters can be deleted from either of the strings.


function getNumDifferences(string1, string2) {
  let numDifferences = 0;
  let characterFrequency = {};

  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    characterFrequency[letter] = characterFrequency[letter] ? characterFrequency[letter] + 1 : 1;
  }
  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    characterFrequency[letter] = characterFrequency[letter] ? characterFrequency[letter] - 1 : -1;
  }

  Object.keys(characterFrequency).map( (letter) => {
    numDifferences += Math.abs(characterFrequency[letter]);
  });

  console.log(numDifferences);
}

// =============================================================================

// Arrays: Bubble Sort

// Implement Bubble Sort and keep track of the number of total switches.
// You must print the following three lines of output:

// Array is sorted in numSwaps swaps., where numSwaps is the number of swaps that took place.
// First Element: firstElement, where firstElement is the first element in the sorted array.
// Last Element: lastElement, where lastElement is the last element in the sorted array.

function bubbleSort(array) {
  let numberOfSwitches = 0;
  for (let i = 0; i < array.length; i ++) {
    for (let idx1 = 0; idx1 < array.length - 1; idx1++) {
      let idx2 = idx1 + 1;
      if (array[idx1] > array[idx2]) {
        let temp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = temp;
        numberOfSwitches += 1;
      }
    }
  }
  console.log("Array is sorted in " + numberOfSwitches + " swaps.");
  console.log("First Element: " + array[0]);
  console.log("Last Element: " + array[array.length - 1]);
}
