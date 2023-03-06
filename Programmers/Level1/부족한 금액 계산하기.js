function solution(price, money, count) {
    let fee = (price*((count*(count+1))/2));
    return money >= fee ? 0 : fee-money;
}
/* 3*(1+2+3+4) , 즉, 3 * n(n+1)/2 */

/* 다른 사람 풀이 
const solution = (..._) => Math.max(_[0]*_[2]*++_[2]/2-_[1], 0);

설명을 하자면 ..._ 는 코딩 테스트시 solution 함수에 들어오는 매개변수의 목록을 의미하고,
결과적으로, 함수 몸체에서 _[0] 은 price, _[1]은 money, _[2]는 count가 됩니다.
Math.max 부분은 0과 우리가 계산하고자 하는 결과 둘 중에 더 큰 수를 반환하게 하여,
계산 결과가 음수인 경우, 즉 돈이 부족하지 않은 경우에는 0이 나오도록 한 것입니다.
'++_[2]' 부분은 전위연산자로써, _[2]에 대해 먼저 +1하고 계산하는.. 
즉 count+1을 의미한다고 보시면 됩니다.
*/