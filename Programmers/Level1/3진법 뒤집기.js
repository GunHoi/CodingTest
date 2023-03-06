function solution(n) {
    return parseInt(n.toString(3).split("").reverse().join(""),3);
}

/* 다른 사람 풀이 
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
*/