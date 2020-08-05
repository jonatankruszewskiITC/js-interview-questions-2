function firstRepeat(chars) {
  let arr = chars.split("");
  for (let i = 0; i < arr.length; i++) {
    if (chars.indexOf(arr[i]) != chars.lastIndexOf(arr[i])) return arr[i];
  }
  return "-1";
}

exports.solution = firstRepeat;
