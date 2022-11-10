// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------

const stringsReversed = (arrayOfStrings) => {
  const result = arrayOfStrings.reverse().join('');
  return result ;
}

for (const solution of [secretSolution, stringsReversed]) {
  describe(solution.name + ': reverse concatenate string from array', () => {
    describe('reverse array of strings an combine them', () => {
      it('["world","hello"] --> helloworld', () => {
        expect(solution(["world","hello"])).toEqual('helloworld');
      });
      it('["3","2","1"] --> "123"', () => {
        expect(solution(['3','2','1'])).toEqual('123');
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
