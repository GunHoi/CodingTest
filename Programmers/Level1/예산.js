function solution(d, budget) {
    d = d.sort((a,b)=>(a-b));
    let count = 0;
    for(let i=0;i<d.length;i++){
        budget-=d[i];
        if(budget<0){
            return count;
        }
        count+=1;
    }
    return count;
}
/* 다른 사람 풀이 ( ~연산자 사용 : 각 비트를 뒤집는 것 (NOT 연산자))
function solution(d, budget) {
    return ~(~d.sort((a,b)=>a-b).map(v => budget -= v).findIndex(v => v < 0) || ~d.length);
}

findIndex에서 찾기 실패시 -1을 리턴하는데(모든 예산을 지급한 경우) 
|| 연산자에서 -1은 참으로 인식하니 ~연산을 통해 0으로 변경 후 
|| 연산을 진행한거네요 ~연산을 한번 적용해줬으니 
다시한번 ~연산을 적용해야 원래값으로 돌아오고요 
~연산을 한번도 써본적이 없어서 이렇게 활용한게 신기하네요. 
물론 해당 문제에서는 ~연산이 아니더라도 -1인 경우 
d.length를 반환하도록 처리하면 되긴 합니다
*/