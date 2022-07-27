function solution(A) {
    if (A.length == 1) return A[0];
    const hash = {};
    A.forEach(value => {
        if (!hash[value]) {
            hash[value] = true;
        } else {
            delete hash[value];
        }
    });
    return Number(Object.keys(hash)[0]);
}

var s = solution([1,2,3,2,3,5,6,7,8,9,8,7,6,5,4,9]);
console.log(s);
