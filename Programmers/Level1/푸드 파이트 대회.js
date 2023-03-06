function solution(food) {
    let answer = '';
    for(let i=1;i<food.length;i++){
        let count = Math.floor(food[i]/2);
        let value = i.toString();
        answer += value.repeat(count);
    }
    answer+="0"
    for(let i=food.length-1;i>0;i--){
        let count = Math.floor(food[i]/2);
        let value = i.toString();        
        answer += value.repeat(count);
    }    
    return answer;
}

/* 다른 사람 풀이 (for문을 한번만 돌리고, reverse를 통해 붙였다.)
function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}
*/