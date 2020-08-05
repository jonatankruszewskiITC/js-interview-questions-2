function checkCombinations(digits) {
  let codes = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  return digits
    .split("")
    .map((x) => codes[x])
    .reduce((acc, curr) => acc.flatMap((c) => curr.map((n) => [].concat(c, n))))
    .map((x) => x.join(""));
}

exports.solution = checkCombinations;
