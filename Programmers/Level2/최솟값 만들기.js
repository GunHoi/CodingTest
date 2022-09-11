function solution(A,B){
    var answer = 0;
    A = A.sort((a,b)=>(a-b));
    B = B.sort((a,b)=>(b-a));
    for(let i=0;i<A.length;i++){
        answer = answer + (A[i]*B[i]);
    }
    return answer;
}

/* 다른 사람 풀이 (동일한 방법,but reduce함수 이용)
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}

reduce함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환
 - accumulator : 반환값 누적
 - currentValue : 배열의 현재 요소
 - index(Optional) : 배열의 현재 요소의 인덱스
 - array(Optional) : 호출한 배열
*/