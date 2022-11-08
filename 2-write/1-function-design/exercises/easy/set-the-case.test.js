// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------
const caseTest = ( text= '' , lowerCase = true) => {
if(typeof text !== 'string' ){
  throw new TypeError ('Text is not a string');
}
if(typeof lowerCase !== 'boolean'){
  throw new TypeError ( 'lowercas is not a boolean');
}


  if(lowerCase){
    text = text.toLowerCase();
  } else {
    text = text.toUpperCase();
  }
  return text ; 
}


for (const solution of [secretSolution , caseTest]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('empty string retured when empty string passed', () => {
        expect(solution('', true)).toEqual('');
      });
      // when the text is all upper case
      // when the text is all lower case
      it('abcd --> abcd', () => {
        expect(solution('abcd', true)).toEqual('abcd')
      });
      // when the text is mixed upper and lower case
      // when the text contains punctuation
      // when the text contains numbers
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      // when the text is all upper case
      // when the text is all lower case
      it('abcd --> ABCD', () => {
        expect(solution('abcd', false)).toEqual('ABCD')
      });
      // when the text is mixed upper and lower case
      // when the text contains punctuation
      // when the text contains numbers
    });
    it('should throw typerror when text is not a string --> number', () =>{
      expect(()=> solution(10,false)).toThrow(TypeError)
    });
    it('should throw typerror when lowercase is not a boolean--> number', () =>{
      expect(()=> solution('abc',10)).toThrow(TypeError)
    });
    
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
