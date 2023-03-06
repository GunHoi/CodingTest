function solution(n) {
    let num1 = 0;
    let num2 = 1;
    let div = 1234567;
    for(let i=0;i<n-1;i++){
        let temp = num1%div;
        num1 = num2%div;
        num2 = (temp+num1)%div;
    }
    return num2;
}
/* 나머지 연산자가 가지고 있는 특징 을 이용
피보나치수가 오버플로우를 발생시키므로 그전에 % 하여 오버플로 방지

(a + b) % m = ((a % m) + (b % m)) % m

F(n) % m 
= (F(n-1) + F(n-2)) % m
= (F(n-1) % m + F(n-2) % m) % m
*/



/* 다른 사람 풀이 
F(n) = F(n-1) + F(n-2) 를 그대로 이용, 배열을 늘려가며 그 길이를 통해 n번째 수를 찾았다.

function solution(n) {
   var result = [0 , 1];
   while ( result.length !== n + 1) {
       var fibonacci = (result[result.length - 2] + result[result.length - 1]) % 1234567
       result.push(fibonacci);
   }
    return result[n];
}
*/
