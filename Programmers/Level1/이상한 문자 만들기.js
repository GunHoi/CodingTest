function solution(s) {
    s = s.toLowerCase().split(" ");
    var answer = '';
    for(let i=0;i<s.length;i++){
        answer+=" ";
        for(let j=0;j<s[i].length;j++){
            if(j%2===0)
                answer+=s[i][j].toUpperCase();
            else
                answer+=s[i][j];            
        }
    }
    return answer.slice(1);
}