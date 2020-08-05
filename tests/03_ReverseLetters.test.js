const path = require("path");
const filePath = `../Exercises/${path.basename(__filename).split(".")[0].toString()}.js`;
const file = require(`${filePath}`);

describe("Find broken Keys", () => {
  test.each`
    a               | expected
    ${"ab89c"}      | ${"cb89a"}
    ${"jkl5mn923o"} | ${"onm5lk923j"}
    ${"123a45"}     | ${"123a45"}
    ${"a1b1c"}      | ${"c1b1a"}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toStrictEqual(expected);
  });
});
