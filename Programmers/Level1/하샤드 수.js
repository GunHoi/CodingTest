function solution(x) {
    const count = (x+'').length;
    let answer = 0;
    let quotient = x;
    for(let i=0;i<count;i++){
        answer += quotient%10;
        quotient = Math.floor(quotient/10);
    }
    
    return x%answer===0;
}
//성능은 숫자로 접근하는 것이 더 좋은 성능을 나타냈다.
/* 다른 사람 풀이  
function solution(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

reduce 함수에서 b + a 가 아닌 +b + +a로 나타내면 문자(string) -> 숫자(number)로 자동으로 변경된다.
*/