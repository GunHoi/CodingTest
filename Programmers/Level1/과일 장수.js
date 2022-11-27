function solution(k, m, score) {
    let len = score.length;
    let answer = 0;
    let count = Math.floor(len/m);  //몇 박스 나오는지
    score = score.sort((a,b)=>(b-a));
    for(let i=1;i<=count;i++){
        answer += score[i*m-1]*m;
    }
    return answer;
}