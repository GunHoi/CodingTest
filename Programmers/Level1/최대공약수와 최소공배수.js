function solution(n, m) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(n, m), lcm(n, m)];
}
/* 유클리드 호제법 이용 

num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다
lcm = gcd * (num1/gcd) * (num2/gcd)
num1 * num2 = gcd * lcm
lcm = (num1*num2) / gcd
*/
/* 다른 사람 풀이 
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}
*/