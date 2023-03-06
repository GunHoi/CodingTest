function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length>=1){
        progresses.forEach((el,idx)=>{
            progresses[idx]+=speeds[idx];
        });
        if(progresses[0]>=100){
            let count = 0;
            while(progresses.length>=1 && progresses[0] >= 100){
                count += 1
                progresses.splice(0,1);
                speeds.splice(0,1);
            }
            answer.push(count);
        }
    }
    return answer;
}