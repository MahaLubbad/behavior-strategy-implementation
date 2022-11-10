// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {
 * []} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------
const numberyArray = (arrayOfStrings) => {
  let numArr = [];
  for(let i = 0 ; i < arrayOfStrings.length ; i++){
    if(typeOf Number(arrayOfStrings[i]) === 'number'){
      numArr.push(Number(arrayOfStrings[i]));
    }
  }
  return numArr;
}



for (const solution of [secretSolution , numberyArray]) {
  describe(solution.name + ': number array ', () => {
    describe(' return array of numbery strings of an strings array', () => {
      it('should returns[1,3] when ["e","1","a","3"] is passed', () => {
        expect(solution(['e','1','a','3'])).toEqual([1,3]);
      });
      it('should returns[2] when ["2","k","a","@"] is passed', () => {
        expect(solution(['2','k','a','@'])).toEqual([2]);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
