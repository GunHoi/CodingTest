function solution(n, stations, w) {
    let DataRange = 2*w+1;
    let count = 0;
    let cur = 1;
    stations.forEach(el=>{
        el -= w;
        let value = Math.ceil((el-cur)/DataRange);
        count+=value;
        cur = el+DataRange;
    });
    if(cur<n){
        count+=Math.ceil((n-cur+1)/DataRange);
    }else if(cur===n){
        count+=1;
    }
    return count;
}
/* 
5G 데이터가 닿는 범위 = 본인 기준 양 옆으로 W 만큼 이므로 2*W + 1 (DataRange)
1 ~ N개의 칸 에서 stations를 기준으로
기지국이 닿지 않는 범위의 갯수를 DataRange의 범위로 나눈 것의 합

예제2) N = 16 / stations[9] / W = 2 / answer = 3
즉, 예제2에서 (1은 기지국, -는 전파가 닿는 곳, 0은 전파가 닿지 않는 곳)

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
0 0 0 0 0 0 - - 1  - -  0  0  0  0  0   에서

el = el-w를 통해, 기지국의 위치를 9->7로 옮기고 (범위는 그대로 7~11)
(cur) 현재 위치 부터 기지국 위치를 뺀 다. = 전파가 닿지 않는 곳의 범위( 7-1 )
이를, DataRange로 나눈 몫을 올림하여 (ex : 7/5 = 1.4 = 2개 설치필요)
그 후 현재 위치를 기지국의 바깥으로 이동, cur = el+DataRange = 7+5 = 12로 이동한다.
그 후 cur이 n을 넘어가면 그대로 count 반환,
만약 cur과 n이 같으면(cur 위치만 전파가 닿지 않으므로 +1)
cur이 n보다 작으면 위와 동일하게 n - cur+1을 통해 칸수를 세서 count에 더한다. 
*/