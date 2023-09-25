export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];  
  for (const value of array) {
    appendArray.push(appendString + value);
    // value = appendString + value;
  }

  return appendArray;
}
