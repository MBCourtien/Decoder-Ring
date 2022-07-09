// Write your tests here!
const caesarModule=require("../src/caesar.js");
const expect = require('chai').expect;

describe('caesarModule', ()=> {
  it("should return false for a shift input that is missing, > 25, or < 0", () => {
    const overTwentyFiveActual = caesarModule.caesar('input', 55);
    expect(overTwentyFiveActual).to.eql(false);
    
    const missingInputActual = caesarModule.caesar();
    expect(missingInputActual).to.eql(false);
    
    const underZeroActual = caesarModule.caesar('input', -42);
    expect(underZeroActual).to.eql(false);
  });
  it("should ignore capitalized letters", () => {
    const expected = 'xlmw mw qc mrtyx';
    const actual = caesarModule.caesar('ThIs Is My iNpUt', 4);
    expect(actual).to.eql(expected);
  });
  it("should maintain spaces and special characters throughout", () => {
    const expected= 'lsaiziv, xlmw ewwiwwqirx mw qc jezsvmxi!';
    const actual = caesarModule.caesar('However, this assessment is my favorite!', 4);
    expect(actual).to.eql(expected);
  });
  it("if a letter is shifted off of the alphabet, it should wrap around", () => {
    const expected= "fkhxg'y ckz dergvnutk";
    const actual = caesarModule.caesar("Zebra's Wet Xylaphone", 6);
    expect(actual).to.eql(expected);
  });
  it("should be able to decode messages as well", () => {
    const expected = "banana peel";
    const actual = caesarModule.caesar("hgtgtg vkkr", 6, false);
    expect(actual).to.eql(expected);
  })
  
})