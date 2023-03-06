function solution(arr) {
    let answer = arr.reduce((acc,cur)=>acc+=cur);
    return answer/arr.length;
}