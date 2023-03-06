function solution(citations) {
    let annoPaper = citations.length;
    let answer = 0;
    citations = citations.sort((a,b)=>(a-b));
    for(let h=0;h<=citations[annoPaper-1];h++){
        let count = citations.findIndex(el=> el>=h);
        if(annoPaper-count >= h&&count <= h){
            answer = h;
        }
    }
    return answer;
}

/* 
h번 이상 인용된 논문의 수 >= h && (전체 - h번 이상 인용된 논문의 수) <= h
 :     annoPaper-count >= h && count <= h
이미 정렬하였고 최종으로 들어가는 값이 최대값이기 때문에 따로 최대값을 찾을 필요 X
*/

/* 다른 사람 풀이 (1)   

function solution(citations) {
     citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     return i;


     function sorting(a, b){
         return b - a;
     }
}
/*내림차순 정렬을 하고, i를 늘려가면서 i+1이 citations[i]보다 작은 범위 내에서 i+1을
최대까지 증가시켜주는 방법.

h번 이상 인용된 논문이 h편 이상이고, 에서 
앞의 h를 h1, 뒤의 h를 h2라 할 때,

citations[i] 값은 h1이 되고, i+1 값은 h2가 된다. (h1>=h2)

[6, 5, 5, 5, 3, 2, 1, 0]의 경우

citations[i]:6, i+1:1
citations[i]:5, i+1:2
citations[i]:5, i+1:3
citations[i]:5, i+1:4
citations[i]:3, i+1:5 (X)

*/
/*
다른 사람 풀이 (2)
const solution = (citations) => citations.sort((a, b) => b - a).filter((el, idx) => el >= idx + 1).length;
*/