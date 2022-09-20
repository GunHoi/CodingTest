function solution(n) {  //%1했을때 나머지가 있으면 실수, 없으면 정수
    let answer = Math.sqrt(n);
    return answer%1===0?(answer+1)**2:-1;
}