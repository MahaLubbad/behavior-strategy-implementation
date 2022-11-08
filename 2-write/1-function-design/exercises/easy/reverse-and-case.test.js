// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------
const reversedString = ( text = '' ,lowerCase = true ) => {
 
  let reversed = '';
  for (let i = 0 ; i < text.length ; i++){
    reversed = text[i] +reversed ;
  }
  if (lowerCase ){
  reversed = reversed.toLowerCase();
  }else {
    reversed = reversed.toUpperCase();
  }
return reversed ; 
}


for (const solution of [secretSolution , reversedString ]) {
  describe(solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution('')).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('it should return empty string when empty string passed', () => {
          expect(solution('',true)).toEqual('');
        });
        // when the text is all upper case
        it('outbut should be lower case', () => {
          expect(solution('ABC',true)).toEqual('cba');
        });
        // when the text is all lower case
        it('cba will be returend if abc is passed', () => {
          expect(solution('abc',true)).toEqual('cba');
        });
        // when the text is mixed upper and lower case
        it('ABC should be returend if Abc is passed ', () => {
          expect(solution('Abc',true)).toEqual('cba');
        });
        // when the text contains punctuation
        it('A,b,c should be returend if c,b,a is passed ', () => {
          expect(solution('A,b,c',true)).toEqual('c,b,a');
        });
        // when the text contains numbers
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('should return empty string when empty string is passed ' , () => {
          expect(solution('')).toEqual('');
        });
        // when the text is all upper case
        it('should reversed in upper case' , () => {
          expect(solution('ABC',false)).toEqual('CBA');
        });
        // when the text is all lower case
        it('abc > CBA' , () => {
          expect(solution('abc',false)).toEqual('CBA');
        });
        // when the text is mixed upper and lower case
        it('aBc > CBA' , () => {
          expect(solution('aBc',false)).toEqual('CBA');
        });
        // when the text contains punctuation
        it('a,b,c > C,B,A' , () => {
          expect(solution('a,b,c',false)).toEqual('C,B,A');
        });
        // when the text contains numbers
        it('1abc2 > 2CBA1' , () => {
          expect(solution('1abc2',false)).toEqual('2CBA1');
        });
      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
