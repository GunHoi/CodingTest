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

-> 정렬을 먼저 하고 시작하더라도, 조합의 덧셈 합에 의해서 오름차순이 깨질 수 있다.

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

그래서 위의 코드를 아래 코드처럼 다시 정렬해준다면 통과이다.
 => 결론 : 어차피 조합의 합을 구하는 경우에서 순서는 중요하지 않으니
 앞에서 정렬을 하지말고, 뒤에서 마지막에 한 번에 하는 것이 좋다.

function solution(numbers) {
    let answer = [];
    let temp = numbers.sort();  //정렬
    for(let i=0;i<temp.length-1;i++){
        for(let j=i+1;j<temp.length;j++){
            answer.push(temp[i]+temp[j]);   //조합합
        }
    }
    const set = new Set(answer);    //중복제거
    let a = [...set];
    a = a.sort((a,b)=>a-b);     //또 다시 정렬
    return a
}
*/