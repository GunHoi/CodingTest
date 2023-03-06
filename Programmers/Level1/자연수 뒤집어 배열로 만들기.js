function solution(n) {
    return (n+"").split("").reverse().map(el=>parseInt(el));
}

/* 다른 사람 풀이 
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}
*/