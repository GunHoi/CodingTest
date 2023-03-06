function solution(n,a,b)
{
    let count = 0;
    while(true){
        if(Math.ceil(a/2)===Math.ceil(b/2)){
            return count+1;
        }
        else{
            a = Math.ceil(a/2);
            b = Math.ceil(b/2);
        }
        count+=1;
    }
    
}

/* 다른 사람 풀이  (같은 방식 좀 더 깔끔한 코드)
function solution(n,a,b)
{
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }

    return answer;
}
*/