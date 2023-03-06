function solution(n) {
    let answer = 0;
    for(let i=1;i<=n;i++){
        if(n%i===0){
            answer+=i;
        }
    }
    return answer;
}

/* 다른 사람 풀이 (재귀를 이용, 삼항연산자 중복)
function solution(n, a=0, b=0) {
    return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
}
*/