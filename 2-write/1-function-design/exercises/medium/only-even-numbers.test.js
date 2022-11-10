// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions -----

const oddNumberRemoval =(arrayOfNumbers) => {
  const result = arrayOfNumbers.filter(num => num % 2 ===0);
return result;
}


for (const solution of [secretSolution , oddNumberRemoval]) {
  describe(solution.name + ': Remove odd numbers from an array', () => {
    describe('function remove any odd numbers', () => {
      it('[2, 3, 4] --> [2, 4]', () => {
        expect(solution([2,3,4])).toEqual([2,4]);
      });
      it('[1,2,3,4,5] --> [2,4]', () => {
        expect(solution([1,2,3,4,5])).toEqual([2,4]);
      })
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
