function solution(arr) {    //1씩 증가시키면서 모든 원소를 나눠보는 방법
    let answer = 1;
    while(true){
        let count = arr.length;     //배열의 원소가 나눠지면 count-1
        for(let i=0;i<arr.length;i++){
            if(answer%arr[i]===0){
                count-=1;
            }
        }
        if(count===0){      //count===0 이라는 뜻은, 모든 원소가 answer값으로 나눠진다는 뜻
            return answer;
        }
        answer+=1;
    }
}

/* 다른 사람 풀이
function solution(num) {
 return num.reduce((a,b) => a*b / gcd(a,b))  
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}

방법1 : 1부터 증가시키면서 나눠보고 각각 모두를 나눴을 때, 나머지가 0이면 최소공배수이다.    -> 나의 풀이

방법2 - 유클리드 호제법을 이용  -> 다른 사람풀이 (훨씬 빠르고 성능이 좋다.)

유클리드 호제법의 기본 원리는 num1를 num2로 나눈 나머지를 r이라고 했을 때,
GCD(num1, num2) = GCD(num2, r)과 같다는 것이다. (GCD = 최대공약수)

최소공배수는 위에서 구했던 GCD를 응용해서 구할 수 있다.
두 수 num1, num2의 최대공약수를 gcd라고 했을 때, 
최소공배수 lcm = gcd * (num1/gcd) * (num2/gcd) 이다.
num1 * num2 = gcd * lcm 과 같다는 원리를 이용하는 것이다.
lcm = (num1*num2) / gcd 이다.
*/