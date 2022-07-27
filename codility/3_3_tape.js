// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

function solution(A) {
    const sum = A.reduce((a, c) => a + c);
    let tempA = 0;
    let tempB = Number(sum);
    let minDiff;
    for (let i = 0; i < A.length - 1; i++) {
        tempA += A[i];
        tempB -= A[i];
        const tempDiff = Math.abs(tempA - tempB);
        minDiff = (minDiff === undefined || tempDiff <= minDiff) ? Number(tempDiff) : minDiff;
        // console.log(`A - B = ${tempA} - ${tempB} = ${tempDiff}  ( min: ${minDiff} )`);
    }
    return minDiff;
}

const tests = [
    {
        A: [3,1,2,4,3],
        result: 1
    },
    {
        A: [3,7],
        result: 4
    },
    {
        A: [-1000, 1000],
        result: 2000
    },
    {
        A: [1, 1, 3],
        result: 1
    }
];

tests.forEach((test, i) => {
    console.log(`Test #${i}: ${(solution(test.A) == test.result) ? 'OK' : `NOT OK`}`);
});
