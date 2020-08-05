const path = require("path");
const filePath = `../Exercises/${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe("First Repeat", () => {
  test.each`
    a              | expected
    ${"legolas"}   | ${`l`}
    ${"Balrog"}    | ${`-1`}
    ${"Isildur"}   | ${`-1`}
    ${"Gollum"}    | ${`l`}
    ${"Galadriel"} | ${`a`}
    ${"pippin"}    | ${`p`}
    ${"Saruman"}   | ${`a`}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toBe(expected);
  });
});
