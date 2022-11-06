/* 20점 */
function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    for(let j=0;j<n;j++){
        let acc = 0;
        let cur = 0;
        for(let i=n-1;i>=0;i--){
            if(deliveries[i]!==0){
                if(cur<=i){
                    cur = i+1;
                }
            }
            if(cap >= acc+deliveries[i]){
                acc+=deliveries[i];
                deliveries[i]=0;
            }
        }
        answer+=cur*2;
    }
    return answer;
}
/* 가장 먼 곳부터 무조건 방문 -> 돌아오면서 cap을 최대한으로 채운다.
ex) 2 3 4 0 2 1  (cap = 4)
    0 0 0 0 0 0 일 때, 합을 무조건 딱 맞추는 방식을 사용하면 (단방향)
    6(1+3) + 5(2+2) + 3 = 14가 되고
    먼 곳부터 최대한으로 채우면
    6(1+2) + 3(4) + 2(3) + 1 12가 된다
    (정답은 X2한 값)
*/