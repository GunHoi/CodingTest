function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((el,i) => signs[i] ? answer+=absolutes[i] : answer-=absolutes[i]);
                      
    return answer;
}


/* 다른 사람 풀이 ( reduce 함수 사용, 양수 음수 변환 -> -1을 곱해서 했다.)
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}



reduce함수 : 배열의 요소를 순차적으로 순회하면서, 리듀서 함수를 실행하고 하나의 결과값을 반환

arr.reduce(callback(accumulator, currentValue, index, array), initialValue)

arr
- 순회하고자 하는 배열
 
accumulator
- 누적되는 값
- callback 함수의 반환값을 누적
- initialValue를 설정한 경우 callback의 최초 호출시 initialValue로 값으로 초기화
- initialValue가 없을 경우 arr의 0번째 인덱스 값으로 초기화
 
currentValue
- 현재 배열의 요소
 
index(생략 가능)
- 현재 배열 요소의 index
 
array(생략 가능)
- reduce 함수를 호출한 배열
 
initialValue(생략 가능)
- callback의 최초 호출시 accumulator 초기값

*/