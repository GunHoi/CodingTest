function solution(n, lost, reserve) {
    let realLost=lost.filter((l)=>!reserve.includes(l));
    let realReserve=reserve.filter((r)=>!lost.includes(r));
    // lost와 reserve에 중복되는 학생이 있을 수 있으므로, 중복학생 제거
    // 즉, 원래 체육복을 잃어버렸지만 여분이 있어 자신이 그것을 입을 수 있는 학생.
    let answer = n-realLost.length;
    // 전체학생 - 진짜 없는 학생
    realLost.sort((a,b)=>a-b);
    // 왜 정렬을 해줘야 하지? - lost = [4,2], reserve = [3,5]와 같은 케이스 때문
    
    realLost.forEach((l)=>{
        if(realReserve.length===0){
            return;
        }
        if(realReserve.includes(l-1)){  //앞 번호 학생의 여분옷을 빌리는 경우
            realReserve=realReserve.filter((r)=>r!==l-1);
            //빌려준 학생을 목록에서 제거
            answer++;
        }
        else if(realReserve.includes(l+1)){ //뒷 번호 학생의 여분옷을 빌리는 경우
            realReserve=realReserve.filter((r)=>r!==l+1);
            //빌려준 학생을 목록에서 제거
            answer++;
        }
    })
    return answer;
}
/* 문제에서 고려해야 할 점
1. lost학생과 reserve의 학생의 중복 여부
2. lost배열과 reserve 배열의 정렬 여부
3. 앞 번호 vs 뒷 번호 중 누구의 옷을 빌릴 것인가?
*/