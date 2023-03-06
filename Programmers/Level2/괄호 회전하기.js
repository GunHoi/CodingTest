function solution(s) {
    var answer = 0;
    for(let i=0;i<s.length;i++){
        s = s.slice(1)+s[0];
        let stack = [];
        for(let j=0;j<s.length;j++){
            if(s[j]==='('||s[j]==='{'||s[j]==='['){
                stack.push(s[j]);
            }
            else if(s[j]===')'){
                if(stack[stack.length-1]==='('){
                    stack.pop();
                }else{
                    stack.push(s[j]);
                }
            }
            else if(s[j]==='}'){
                if(stack[stack.length-1]==='{'){
                    stack.pop();
                }else{
                    stack.push(s[j]);
                }
            }
            else if(s[j]===']'){
                if(stack[stack.length-1]==='['){
                    stack.pop();
                }else{
                    stack.push(s[j]);
                }
            }
        }
        if(stack.length!==0){
            answer+=1;
        }
    }
    return s.length-answer;
}

/* 다른 사람 풀이 (key:value를 이용해서 mapping을 통해서 각각이 짝인 것을 쉽게 구현하였다.
    flag를 집어넣어서 옳은 괄호 문자열 일 때만 answer을 더해줄 수 있도록했다.)
function solution(s) {
    if(s.length % 2 === 1) return 0;

    let answer = 0;
    const mapping = { "}" : "{", "]" : "[", ")" : "("};

    for(let i = 0; i < s.length; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        let flag = true;

        for(let j = 0; j < s.length; j++) {
            if(rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{" )
                stack.push(rotate[j]);
            else {
                const last = stack.pop();
                if(last !== mapping[rotate[j]]) {
                    flag = false
                    break;
                }
            }
        }

        if(flag) answer++;
    }

    return answer;
}
*/