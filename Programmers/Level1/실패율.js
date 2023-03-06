/*
실패율 = 현재 stage 사람 수 / 현재 stage 사람 수 + 현재 stage 를 넘어선 사람 수 
분모 = (전체 - 현재 stage 못 깬 사람 수 )
라고 정의할 수 있다.
*/
function solution(N, stages) {
    let stay = []; 
    let fail = [];
    let answer = [];
    let count = stages.length;
    for(let i=1;i<=N;i++){
        stay[i] = stages.reduce((acc,cur) => acc+(cur === i),0);
        //stay[i]에 i번 stage에 머무르는 사람 수를 저장해준다.
        count!==0 ?fail[i] = stay[i]/count:fail[i]=0;
        //fail[i]에 i번의 실패율을 계산해서 저장한다.
        count -= stay[i];
    }
    //위 의 for문에서 직관적인 저장을 위해 0번째 값인 null 대신 -1 저장(가장 최소가 되도록)
    fail[0] = -1;
    for(let j=1;j<=N;j++){
        let maxValue = Math.max(...fail);
        answer[j-1]= fail.indexOf(maxValue);
        fail[answer[j-1]] = -1;
        //내림차순 -> 실패율 높은 것 부터-> 최대값의 인덱스를 찾아서 반환
    }
    return answer
}

/* 다른 사람 풀이
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

reach - stage에 도달한 유저 수
curr - 현재 stage에 있는 사람 수 

-> 실패율과, 해당 stage를 같이 result에 2차원 배열의 형태로 저장해
실패율을 내림차순으로 정렬하고 stage를 출력하는 방식
*/