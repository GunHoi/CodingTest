function solution(s) {
    let arr1 = s.match(/[a-z]/g);
    let arr2 = s.match(/[A-Z]/g);
    arr1===null? arr1='':arr1 = arr1.sort().reverse().join('');
    arr2===null? arr2='':arr2 = arr2.sort().reverse().join('');
    
    return arr1+arr2;
}
/* 다른 사람 풀이 - 대문자 구분 할 필요 없이 대문자 > 소문자 순이기 때문에 그냥 정렬 후 뒤집으면 된다.
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
 */