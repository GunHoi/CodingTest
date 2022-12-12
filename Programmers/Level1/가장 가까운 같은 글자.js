function solution(s) {
    let tmp = [];
    let answer = [];
    s.split("").forEach((el,elIdx)=>{
        let idx = tmp.lastIndexOf(el);
        if(idx===-1){
            tmp.push(el);
            answer.push(-1);
        }else{
            tmp.push(el);
            answer.push(elIdx-idx);
        }
    })
    return answer;
}