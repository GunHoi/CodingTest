function solution(strings, n) {
    let arr = strings.map((el,idx)=>el[n]+el).sort();
    let answer = arr.map((el)=>el.slice(1));
    return answer;
}
/* 방법2. (통과)
   n번째 문자를 맨 앞에 붙여서 정렬 후 다시 제거
*/
/* 방법3. (통과)  n번째 문자를 맨 앞에 붙여서 정렬 후 저장한 idx를 통해 다시 가져온다.
function solution(strings, n) {
    let arr = strings.map((el,idx)=>[el[n]+el,idx]).sort();
    let answer = arr.map((el)=>strings[el[1]]);
    return answer;
}

*/
/* 방법1 (58.3 / 100)
function solution(strings, n) {
    let arr = strings.sort().map((el,idx)=>[el[n],idx]).sort();
    console.log(arr);
    let answer = arr.map((el)=>strings[el[1]]);
    return answer;
}
   n이 같을 때는, 사전순이므로 미리 사전순으로 전체 정렬
   n값에 대해 정렬,(idx같이 저장)
   정렬된 n에 대하여 idx를 보고 기존 문자열 다시 가져옴
*/

/* 다른 사람 풀이 
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
*/