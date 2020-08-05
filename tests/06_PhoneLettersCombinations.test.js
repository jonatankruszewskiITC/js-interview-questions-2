const path = require("path");
const filePath = `../Exercises/${path
  .basename(__filename)
  .split(".")[0]
  .toString()}.js`;
const file = require(`${filePath}`);

describe("Check Parenthesis", () => {
  test.each`
    a        | expected
    ${"23"}  | ${["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]}
    ${"532"} | ${["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"]}
    ${"943"} | ${["wgd", "wge", "wgf", "whd", "whe", "whf", "wid", "wie", "wif", "xgd", "xge", "xgf", "xhd", "xhe", "xhf", "xid", "xie", "xif", "ygd", "yge", "ygf", "yhd", "yhe", "yhf", "yid", "yie", "yif", "zgd", "zge", "zgf", "zhd", "zhe", "zhf", "zid", "zie", "zif"]}
    ${"372"} | ${["dpa", "dpb", "dpc", "dqa", "dqb", "dqc", "dra", "drb", "drc", "dsa", "dsb", "dsc", "epa", "epb", "epc", "eqa", "eqb", "eqc", "era", "erb", "erc", "esa", "esb", "esc", "fpa", "fpb", "fpc", "fqa", "fqb", "fqc", "fra", "frb", "frc", "fsa", "fsb", "fsc"]}
  `("returns $expected when $a is called", ({ a, expected }) => {
    expect(file.solution(a)).toStrictEqual(expected);
  });
});
