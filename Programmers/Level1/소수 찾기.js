function solution(num){
    let answer = 0;
    for(let i=2;i<=num;i++){
        if(isPrime(i)){
            answer+=1;
        }
    }
    return answer;
}
function isPrime(num) {    //에라토스테네스의 체 (제곱근)
  if(num === 2) {
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false; 
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true; 
}
/* 다른 사람 풀이 (1) Set을 이용한 에라토스테네스의 체
function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j+=2){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}
*/

/* 다른 사람풀이 (2) (에라토스테네스의 체)
function solution(n){
  let s= [...Array(n).keys()]
  // console.log(s);
  s[0]=0
  for(let i=2; i<=parseInt(n**.5)+1;i++){
    // console.log(i);

    for (let j=2 ; j<=(n-i)/i+1; j++){
      s[i*j-1]=0
    }
  }
  return s.filter(x=>Boolean(x)).length;
}
*/