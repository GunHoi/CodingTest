function solution(n) {
    let answer = n.toString(2); //2진법으로 변환
    let count = answer.match(/1/g).length;  //'1'의 개수
    let temp = 0;
    if(answer.substr(0,count)==='1'.repeat(count)){ //11100 과 같이 자릿수가 늘어야하는 경우
        answer = '1'+'0'.repeat(answer.length+1-count)+'1'.repeat(count-1);
        return parseInt(answer, 2); //10진수 숫자로 변환
    }
    else {  //10110 과 같이 1이 왼쪽으로 이동할 공간이 있는 경우
        let arr = '';
        for(let i=answer.length-1;i>0;i--){
            if(answer[i]==='1' && answer[i-1]==='0'){
                arr = answer.substring(0,i-1)+'1'+'0'.repeat(answer.length-(i+temp))+'1'.repeat(temp);
                return parseInt(arr, 2);
                
            }else if(answer[i]==='1' && answer[i-1]==='1'){
                temp += 1;  //지나온 1의 개수
            }
        }
    }
}
/* 10110 과 같이 1이 왼쪽으로 이동할 공간이 있는 경우
뒤에서부터 1이 '01'과 같이 좌측에 공간이 있으면 01 -> 10으로 바꿔주고 뒤에 있는 1을 맨 뒤부터 차례대로 채워준다.

즉, 1010100의 경우에는 1011000가 되고 (가장 뒤의 1이 앞으로 이동(0으로 이동)하고, 나머지 뒤에 1이 없으므로 그대로.)
1001100의 경우에는 1010001 (가장 뒤의 1 옆에 1이 있으므로, 뒤에서 2번째 1을 앞으로 옮기고, 나머지 뒤에 1을 맨뒤부터 채워준다.)
*/ 

/* 다른 사람 풀이 (정규식을 이용해서 1씩 숫자를 늘려가며 찾는다.)

function solution(n,a=n+1) {
    return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}

*/