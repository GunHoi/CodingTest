function solution(n, k) {
    let service = Math.floor(n/10);
    let sheep = 12000*n;
    let drink = 2000*(k-service);
    
    return sheep+drink;
}