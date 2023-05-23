function allLongestStrings (inputArray){
  let max = inputArray[0].length;
  const longestStrings = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length = max) {
      longestStrings.push(inputArray[i]);
    }
    if (inputArray[i].length > max) {
      longestString =[]
      max = inputArray[i].length
      longestStrings.push(inputArray[i]);
    }
  }
  return longestStrings;
}
const inputArray = [“BINH”, “HUNG”, “PHUOC”, “CAO”, “KHANH”];
console.log(allLongestStrings)
