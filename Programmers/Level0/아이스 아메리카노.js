function solution(money) {
    let cups = Math.floor(money/5500);
    return [cups,money-(5500*cups)];
}