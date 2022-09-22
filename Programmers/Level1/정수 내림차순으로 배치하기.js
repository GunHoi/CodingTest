function solution(n) {
    return parseInt((n+'').split('').sort((a,b)=>(b-a)).join(''));
}

/* 다른 사람 풀이(숫자로) 
function solution(n) {
    //숫자가 분명히 더 빠름
    var nums =[];
    do{
        nums.push(n%10);
        n=Math.floor(n/10);
    } while(n>0)

    return nums.sort((a,b)=>b-a).join('')*1;
    //문자는 느림
    return (n+"").split('').sort((a,b)=>b-a).join('')*1;
}
*/