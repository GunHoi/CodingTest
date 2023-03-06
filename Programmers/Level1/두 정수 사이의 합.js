function solution(a, b) {
    var answer = 0;
    if(b<a){
        let tmp = b;
        b = a;
        a = tmp;
    }
    for(let i=a;i<=b;i++){
        answer+=i;
    }
    return answer;
}
/* 다른 사람 풀이 (가우스 공식 이용)
function solution(a, b){
    var result = 0
    return (a+b)*(Math.abs(b-a)+1)/2;
}

1~10 합일 경우
(1+10) * (10-1)의 절대값 +1 / 2
= 11 * 5 = 55
=(맨 처음값 + 맨 마지막값) * (갯수)

1~3 합일 경우
(1+3) * (3-1) + 1 / 2
4 * 1.5 = 6

*/