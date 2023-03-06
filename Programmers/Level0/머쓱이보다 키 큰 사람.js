function solution(array, height) {
    let answer = 0;
    array.forEach((el)=>{
        if(el>height){
            answer+=1;
        }
    });
    return answer;
}
/* 다른 사람 풀이 
function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}
*/