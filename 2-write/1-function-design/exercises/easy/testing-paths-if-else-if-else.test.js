// #todo

'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */

// -------- your solutions --------
const comparingParm = ( val1 , val2) => {
  let description = '';
  if (val1 === val2){
    description = 'strictly equal';
  }else if(typeof val1 === typeof val2){
    description = 'same type';
  }else {
    description = 'totally different';
  }
  return description ; 
}



for (const solution of [secretSolution , comparingParm]) {
  describe(solution.name + ': determines how similar two values are', () => {
    describe('when values are strictly equal', () => {
      it('two identical strings -> "strictly equal"', () => {
        expect(solution('hello', 'hello')).toEqual('strictly equal');
      });
      it('two identical numbers -> "strictly equal"', () => {
        // 1, 1.0
      });
      it('two identical booleans -> "strictly equal"', () => {});
    });
    describe('when values have the same type', () => {
      it('two different strings -> "same type"', () => {
        expect(solution('a', '1')).toEqual('same type');
      });
      it('two different numbers -> "same type"', () => {
        expect(solution(1 , 2)).toEqual('same type');
      });
      it('two different booleans -> "same type"', () => {
        expect()
      });
    });
    describe('when values are nothing alike', () => {
      it('values that are obviously different', () => {
        expect(solution(null, 4)).toEqual('totally different');
      });
      it('values that can be confusing', () => {
        // "4" and 4
        expect(solution('4',4)).toEqual('totally different');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
