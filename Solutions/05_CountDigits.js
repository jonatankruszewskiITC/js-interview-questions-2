function countDigits(num) {
  if (Math.abs(num) < 10) return 1;
  return 1 + countDigits(Math.floor(num / 10));
}

exports.solution = countDigits;
