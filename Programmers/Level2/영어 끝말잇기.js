function solution(n, words) {
    var answer = [];
    let stack = [words[0]];
    let loc = 0;
    for(let i=1;i<words.length;i++){
        if(stack.indexOf(words[i]) !== -1){ //중복 검사
            loc = i;
            return [Math.floor(loc%n)+1,Math.floor(loc/n)+1];
        }
        let lastWord = stack[stack.length-1];
        if(lastWord[lastWord.length-1] === words[i][0]){    //끝 말 검사
            stack.push(words[i]);
        } else{
            loc = i;
            return [Math.floor(loc%n)+1,Math.floor(loc/n)+1];
        }
    }
    return [0,0];
}
/* 
1. 중복되는지 검사해야한다
2. 끝말로 잘 시작하는지 검사해야한다.
*/

/* 다른 사람 풀이 
function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}


 answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
    words.slice(0, idx)를 통해 여태까지 말한 것을 불러오고 indexOf(now)로 현재 값이 포함되있는지 찾는다.
    -1이 아니라면? = 값이 존재한다 = 중복이 있다 (true) || 
    prev에는 이전 글자의 마지막 글자가 저장되고 now[0] 첫번째 글자와 비교해서 다르면 (true)
    즉, 중복이 있거나, 끝 말이 다르면 idx가 return, 정상적이라면 answer(0)를 return 한다.
    그래서 최종적으로 answer에는 idx가 저장되어 answer가 0이면 false이므로 [0,0] return
    아니면 idx를 [번호, 차례] 형태로 return하게 된다.
*/