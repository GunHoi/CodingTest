function solution(s) {
    return s.length%2===0? s[(s.length/2)-1]+s[(s.length/2)] : s[Math.floor(s.length/2)];
}

/* 다른 사람 풀이 (짝수일 때만, 글자 하나 추가하는 방식)
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
*/
