// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
 const reversedString = ( toReverse ='') => {
if( typeof toReverse !== 'string'){
  throw new TypeError ('That is should be string');
}

   let text = '';
   for(let i =0 ; i < toReverse.length ; i ++){
     text = toReverse[i] + text ;
   }
   return text ;
 }


for (const solution of [secretSolution , reversedString]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it('a string with all small letters', () => {
      expect(solution('abcd')).toEqual('dcba');
    });
    it('a string with both small an capital letters', () => {
      expect(solution('AbCd')).toEqual('dCbA');
    });
    it('a string contins a number', () => {
      expect(solution('abC12')).toEqual('21Cba');
    });
    it('a string contains a punctuation', () => {
      expect(solution('Hello!')).toEqual('!olleH');
    });
    it('Should throw typerror when boolean is passed', () => {
      expect(()=> solution(true)).toThrow(TypeError)
    });

  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
