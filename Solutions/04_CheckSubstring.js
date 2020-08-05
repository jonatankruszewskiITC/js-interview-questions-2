function checkSubstring(str1, str2) {
  const minLength = Math.min(str1.length, str2.length);
  str1 = str1
    .slice(-1 * minLength)
    .toLowerCase()
    .split("");
  str2 = str2
    .slice(-1 * minLength)
    .toLowerCase()
    .split("");
  for (let i = 0; i < minLength; i++) {
    if (str1[i] != str2[i]) {
      if (str1[i] != "*" && str2[i] != "*") return false;
    }
  }
  return true;
}

exports.solution = checkSubstring;
// export { checkSubstring };
