function solution(numbers) {
    const answer = numbers.reduce((acc,cur)=>{
        return acc+=cur;
    })
    return answer/numbers.length;
}