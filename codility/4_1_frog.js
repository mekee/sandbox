// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

function solution(X, A) {
    // const sorted = A.map((value, index) => { return { index, value } }).sort((a, b) => a.value - b.value);
    // console.log(sorted);
    // return sorted[sorted.length - 1].index;
    if (X > A.length) return -1;
    const used = [];
    let count = 0;
    // let found = false;
    // for (let i = 0; !found && i < A.length; i++) {
    for (let i = 0; i < A.length; i++) {
        if (!used[A[i]]) {
            used[A[i]] = true;
            count += 1;
            if (count === X) {
                return i;
            }
        }
    }
    return -1;
}

const tests = [
    {
        A: [1,3,1,4,2,3,5,4],
        X: 5,
        result: 6
    },
    {
        A: [1,1,1,2],
        X: 2,
        result: 3
    },
    {
        A: [4, 2, 2, 4, 1, 3, 1, 2, 3],
        X: 4,
        result: 5
    }
];

tests.forEach((test, i) => {
    console.log(`Test #${i}: ${(solution(test.X, test.A) == test.result) ? 'OK' : `NOT OK`}`);
});
