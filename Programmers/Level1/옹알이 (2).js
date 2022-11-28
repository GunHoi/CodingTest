function solution(babbling) {
    let words = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    babbling.forEach((b)=>{
        let tmp = b;
        words.forEach((w,idx)=>{
            tmp = tmp.replaceAll(w,idx);
        });
        if(/[^0123]/g.test(tmp)){
            
        }else{
            if(/00|11|22|33/g.test(tmp)){
            
           }else{
               answer+=1;
           }
        }
    })
    return answer;
}
/* 다른 사람 풀이 
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}
*/