function solution(num) {
    for(let i=0;i<500;i++){
        if(num===1){
            return i;
        }
        if(num%2===0){
            num = num/2;
        }else{
            num = num*3+1;
        }
    }
    return -1;
}
/* 다른 사람 풀이 
const solution = (num) => collatzGuessCount(num, 0);

const collatzGuessCount = (num, acc) => 
  (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);

const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
*/