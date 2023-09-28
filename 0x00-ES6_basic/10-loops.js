export default function appendToEachArrayValue(array, appendString) {
  const appendArray = [];  
  for (const value of array) {
    appendArray.push(appendString + value);
    
  }

  return appendArray;
}
