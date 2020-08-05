const path = require("path");
const filePath = `../Exercises/${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe("Common Elements", () => {
  test.each`
    a                        | b                      | expected
    ${[-1, 3, 4, 6, 7, 9]}   | ${[1, 3]}              | ${[3]}
    ${[1, 3, 4, 6, 7, 9]}    | ${[1, 2, 3, 4, 7, 10]} | ${[1, 3, 4, 7]}
    ${[1, 2, 2, 2, 3, 4, 5]} | ${[1, 2, 4, 5]}        | ${[1, 2, 4, 5]}
    ${[1, 2, 3, 4, 5]}       | ${[10, 12, 13, 15]}    | ${[]}
  `("returns $expected when $a is called", ({ a, b, expected }) => {
    expect(file.solution(a, b)).toStrictEqual(expected);
  });
});
