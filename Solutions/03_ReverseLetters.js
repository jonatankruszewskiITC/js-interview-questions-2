function reverseLetters(str) {
  let arr = str.match(/[a-z]/g);
  return str.replace(/[a-z]/g, (match) => arr.pop());
}

exports.solution = reverseLetters;
