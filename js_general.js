// make this happen: duplicate([1, 2, 3, 4, 5]) ==> [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
// NB: arr + arr returns a string
function duplicate(arr) {
  let newArr = Array(arr.length * 2);
  for (let i = 0; i < arr.length; i ++) {
    newArr[i] = arr[i];
    newArr[arr.length + i] = arr[i];
  }
  return newArr;
}
// time: O(n) n being input
