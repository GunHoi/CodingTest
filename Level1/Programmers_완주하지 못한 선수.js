//내 풀이
function solution(participant, completion) {
    var answer = '';
    let pSorted = participant.sort();
    let cSorted = completion.sort();
    
    for(let i=0;i<participant.length;i++){
        if(pSorted[i]!==cSorted[i]){
            return pSorted[i];
        }
    }   
}
/* Best 풀이 - 1 

var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1)) 

-> 를 문제의 변수로 풀어서 쓰면 

var solution = (participant, completion)
=> participant.find(name => !completion[name]--, completion.map(name => completion[name]=(completion[name] | 0)+1))

완주자 배열을 {이름:완주자배열에 등장하는 횟수}로 맵핑하고,
그 맵에 참가자 이름 하나씩 넣어서 찾아볼때마다 횟수 떨어뜨려서 횟수 0나오는 놈 찾아뱉는 함수

*/