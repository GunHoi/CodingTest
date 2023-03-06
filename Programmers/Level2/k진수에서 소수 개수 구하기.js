function solution(n, k) {
    var answer = 0;
    let transNum = numTrans(n, k);
    let arr = transNum.split("0");
    arr = arr.map(el=>(parseInt(el)));
    for(let i=0;i<arr.length;i++){
        let flag = false;
        if(arr[i]>=2){
            flag = isPrime(arr[i]);
        }
        if(flag){
            answer+=1;
        }
    }
    return answer;
}
function numTrans(num, k){
    let trans = '';
    while(num>k){
        trans+=(num%k).toString();
        num = Math.floor(num/k);
    }
    trans += num.toString();
    return trans.split("").reverse().join("");
}
function isPrime(num) {
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
  return true; 
}
/* 
1. 숫자n을 k(3~10)진수로 변환할 것
2. split을 통해 0으로 구분할 것
3. 구분한 숫자들에서 소수의 갯수를 셀 것(에라토스테네스의 체 사용)
*/

/* 다른 사람 풀이 (k진법으로 바꿀 때, JS에서 지원해주는 toString(k) 를 통해 손 쉽게, k진법으로 변경하였다.)
function isPrime(num){
    if(!num || num===1) return false;
    for(let i=2; i<=+Math.sqrt(num); i++){
        if(num%i===0) return false;
    }
    return true;
}

function solution(n, k) {    
    // k진법으로 나눈 후 split
    const candidates = n.toString(k).split('0');
    // 소수 개수 세기
    return candidates.filter(v=>isPrime(+v)).length;
}
*/