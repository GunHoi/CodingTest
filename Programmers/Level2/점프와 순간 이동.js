function solution(n)
{
    let count = 0;
    while(n>0){
        if(n%2!==0){
            n -= 1;
            count +=1;
        }
        n = n/2;
    }
    return count;
}
/* n값을 2로 계속 나누다가 나누어 떨어지지 않으면(홀수이면) -1해서 짝수로 만들어주고 count,
다시 계속 2로 나눈다. 값이 0이될 때 까지 반복 */

/* 다른 사람 풀이 - (1) 이진수
function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}

다른 사람 풀이 - (2) 정규식
function solution(n)
{
    return n.toString(2).replace(/0/g,"").length
}

*/