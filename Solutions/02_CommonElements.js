function commonElements(arr1, arr2) {
  const output = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) > -1 && output.indexOf(arr1[i]) === -1)
      output.push(arr1[i]);
  }
  return output;
}

exports.solution = commonElements;
