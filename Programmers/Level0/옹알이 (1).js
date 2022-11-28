function solution(babbling) {
    let words = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    babbling.forEach((b)=>{
        let tmp = b;
        words.forEach((w)=>{
            tmp = tmp.replace(w,"1");
        });
        if(/[^1]/g.test(tmp)){
            
        }else{
            answer+=1;
        }
    })
    return answer;
}