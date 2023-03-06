function solution(number) {
    var answer = 0;
    for(let i=0;i<number.length;i++){
        for(let j=i+1;j<number.length;j++){
            for(let k=j+1;k<number.length;k++){
                if(number[i]+number[j]+number[k] === 0){
                    answer+=1;
                }
            }
        }
    }
    return answer;
}
/* 다른 사람 풀이 - 조합 이용
function solution(number) {
    let result = 0;

    const combination = (current, start) => {
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}
서로 다른 사람 3명을 필요로 하므로,
current.length 가 3일 때, 합을 구해서 0이면 count++
*/