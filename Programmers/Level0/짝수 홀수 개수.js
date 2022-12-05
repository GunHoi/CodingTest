function solution(num_list) {
    let answer = [0,0];
    num_list.forEach((el)=>{
        if(el%2===0){
            answer[0]+=1;
        }else{
            answer[1]+=1;
        }
    })
    return answer;
}
/* 다른 사람 풀이 
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
*/