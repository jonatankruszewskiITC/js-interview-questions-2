const path = require("path");
const filePath = `../Exercises/${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe("Count Digits: Value", () => {
  test.each`
    a                | expected
    ${0}             | ${1}
    ${12345}         | ${5}
    ${1289396387328} | ${13}
    ${-1232323}      | ${7}
    ${314890e3}      | ${9}
    ${3.2e6}         | ${7}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
