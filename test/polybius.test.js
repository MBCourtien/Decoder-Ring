
const polybiusModule=require('../src/polybius.js');
const expect = require('chai').expect;

describe('polybiusModule', () => {
  it('encoded messages translate i and j into 42', () => {
    const expected = '42 5133424345 314341423322';
    const actual = polybiusModule.polybius('I enjoy coding');
    expect(actual).to.eql(expected);
  });
  it("decoded messages translate '42' into '(i/j)'", () => {
    const expected = "(i/j) en(i/j)oy cod(i/j)ng";
    const actual = polybiusModule.polybius('42 5133424345 314341423322', false);
    expect(actual).to.eql(expected);
  });
  it("ignores capital letters", () => {
    const capitalized = polybiusModule.polybius('PLEASE ENCODE ME');
    const lowercase = polybiusModule.polybius('please encode me');
    expect(capitalized).to.eql(lowercase);
  });
  it("maintains spaces and before and after coding", () => {
    const codedExpected = '32112452 253243 22435134 4432512451';
    const codedActual = polybiusModule.polybius('Hark Who goes there');
    expect(codedActual).to.eql(codedExpected);
    
    const decodedExpected = 'hark who goes there';
    const decodedActual = polybiusModule.polybius('32112452 253243 22435134 4432512451', false);
    expect(decodedActual).to.eql(decodedExpected);
  })
})
