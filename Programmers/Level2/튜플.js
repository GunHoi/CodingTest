function solution(s) {
    let arr = s
        .slice(2,-2)
        .split('},{')
        .map(el => el.split(',').map(x=>parseInt(x)))
        .sort((a,b)=> a.length-b.length)     //원소 갯수순으로 나열
    let answer = [];
    for(let i=0;i<arr.length;i++){
        //console.log(arr[i].filter(el=>!answer.includes(el))); 스프레드 연산자 미사용시 틀림
        //미 사용시 answer에 [el] 값이 push 되는데, filter에서 [el] 값과 el값을 비교하므로 계속해서 누적해서 쌓이게된다.
        //console.log(...arr[i].filter(el=>!answer.includes(el)));
        answer.push(...arr[i].filter(el=>!answer.includes(el)));
    }
    
    return answer;
}

/* 원소의 개수 순서대로 나열하고, 
방법 (1) 하나씩 빼면서 나열한다.
ex) {{1},{2,1},{3,1,2},{4,1,2,3}}
1을 빼고 이를 result에 저장 -> result=[1]
{2},{3,2},{4,2,3}
2를 빼면   -> result=[1,2]
{3},{4,3}
3을 빼면   -> result=[1,2,3]
{4}
4를 빼면   -> result=[1,2,3,4]

방법 (2) answer에 값을 넣고 answer과 비교해서 없으면 넣는다.
ex) {{1},{2,1},{3,1,2},{4,1,2,3}}   answer = {1}
{2,1} 과 answer 비교 -> 2가 없으므로   answer = {1,2}
. . .
와 같은 방식
*/

/* 다른 사람 풀이 
function solution(s) {
    return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
        if (n) {
            return arr.concat(v.filter(f => !arr.includes(f)));
        }
        return v;
    }, []);
}
*/