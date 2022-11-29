function solution(k, score) {
    var answer = [];
    let ranking = [];
    score.forEach((sc)=>{
        ranking.push(sc);
        ranking.sort((a,b)=>(b-a));
        if(ranking.length<=k){
            answer.push(ranking[ranking.length-1]);
        }else{
            answer.push(ranking[k-1]);
        }
        
    })
    return answer;
}