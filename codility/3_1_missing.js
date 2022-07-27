// An array A consisting of N different integers is given.
// The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.
//
// function solution(A); that, given an array A, returns the value of the missing element.
//
// For example, given array A such that:
//
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.
// [1,2,3,5]

function solution(A) {
    const sorted = A.sort((a, b) => a - b);
    if (sorted[0] == 2) return 1;
    for (let i = 0; i <= sorted.length; i++) {
        if (sorted[i] != i + 1) {
            return i + 1;
        }
    }
}

const tests = [
    {
        A: [2,3,1,5],
        result: 4
    },
    {
        A: [2,3,1,5,6,7,4,8,10],
        result: 9
    },
    {
        A: [4, 2, 3, 5, 1, 6, 8, 9],
        result: 7
    }
];

tests.forEach((test, i) => {
    console.log(`Test #${i}: ${(solution(test.A) == test.result) ? 'OK' : `NOT OK`}`);
});
