const path = require("path");
const filePath = `../Exercises/${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe("Check Substring", () => {
  test.each`
    a                              | b                            | expected
    ${"ABC"}                       | ${"Ican'tsingmyABC"}         | ${true}
    ${"abc"}                       | ${"Ican'tsingmyABC"}         | ${true}
    ${"Ican'tsingmyABC"}           | ${"abc"}                     | ${true}
    ${"*bc"}                       | ${"Ican'tsingmyABC"}         | ${true}
    ${"abc"}                       | ${"Ican'tsingmy***"}         | ${true}
    ${"hello world"}               | ${"hello"}                   | ${false}
    ${"+="}                        | ${"this should work too +="} | ${true}
    ${"don't forget hyphens-"}     | ${"-"}                       | ${true}
    ${"don't forget periods "}     | ${".)"}                      | ${false}
    ${"this will always be true"}  | ${"*"}                       | ${true}
    ${"this will always be false"} | ${"F"}                       | ${false}
    ${"hey"}                       | ${"*********"}               | ${true}
    ${"a*c"}                       | ${"*b*"}                     | ${true}
  `("returns $expected when $a is called", ({ a, b, expected }) => {
    expect(file.solution(a, b)).toStrictEqual(expected);
  });
});
