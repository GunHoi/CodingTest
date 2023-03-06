function solution(a, b, n) {
    let count = 0;
    while(n>=a){
        let value = Math.floor(n/a);
        let drink = a*value;
        n -= drink;
        let coke = b*value;
        n += coke;
        count += coke;
    }
    return count;
}