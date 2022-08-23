function solution(numbers) {
    let temp = [];
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            temp.push(numbers[i]+numbers[j]);
            }
        }
    const answer = [...new Set(temp)]
    return answer.sort((a,b) => a-b)
}

/*
아래와 같은 코드로 했을 때는 실패하였는데 이유가 뭘까??

function solution(numbers) {
    let answer = [];
    let temp = numbers.sort();
    for(let i=0;i<temp.length-1;i++){
        for(let j=i+1;j<temp.length;j++){
            answer.push(temp[i]+temp[j]);
        }
    }
    const set = new Set(answer);
    return [...set]
}
*/