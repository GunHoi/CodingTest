function solution(n)
{
    return n.toString().split("").reduce((acc,cur)=> {return acc+=parseInt(cur);},0);
}

/* 다른 사람 풀이 
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

n+"" 를 하면 문자열이 된다.
(자바스크립트에서 덧셈 연산자 +를 사용할 때, 피연산자 중 어느 하나가 문자열이면 문자열이 아닌 다른 피연산자도 문자열로 타입이 변환되어 문자열을 합친 값이 반환됩니다.)

*/