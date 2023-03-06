/* DFS, 함수 안에 함수*/
function solution(numbers, target) {
    let count = 0;
    function calc(idx, sum){
        if(idx === numbers.length){
            if(sum === target){
                count+=1;
            }
            return 0;
        }
        let value = numbers[idx];
        calc(idx+1, sum+value);
        calc(idx+1, sum-value);
    }
    calc(0,0);
    return count;
}

/* 다른 사람 풀이 (같은 방식)
function solution(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}

*/