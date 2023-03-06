function solution(A, B) {
    A = A.sort((a,b)=>(a-b));
    B = B.sort((a,b)=>(a-b));
    let seqA = 0;
    let seqB = 0;
    let count = 0;
    while(seqB < B.length){
        if(A[seqA] < B[seqB]){
            count+=1;
            seqA+=1;
            seqB+=1;
        }else if(A[seqA] > B[seqB]){
            seqB+=1;
        }else{
            seqB+=1;
        }
    }
    
    return count;
}
// 다른 사람 풀이(x) 거의 다 비슷한 방법으로 풀이함
