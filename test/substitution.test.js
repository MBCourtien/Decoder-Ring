// Write your tests here!
const substitutionModule = require('../src/substitution.js');
const expect = require('chai').expect;

describe('substitutionModule', () => {
  it('should properly encode provided message ignoring capital letters while maintaining special characters', () => {
    const expected = 'rlimzmh, jrud ud ufyhmquowm!';
    const actual = substitutionModule.substitution('However, this is incredible!', "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });
  it('should properly decode provided message while maintaining special characters', () => {
    const expected = 'however, this is incredible!';
    const actual = substitutionModule.substitution('rlimzmh, jrud ud ufyhmquowm!',"xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.eql(expected);
  });
  it('should return false for an alphabet that is not a string of 26 unique characters', () => {
    const actual = substitutionModule.substitution('hello', 'htndngorignsi');
    expect(actual).to.eql(false);
  });
  it('should return false if alphabet is missing', () => {
    const actual = substitutionModule.substitution('hello');
    expect(actual).to.eql(false);
  });
})