function solution(cap, n, deliveries, pickups) {
    function getMaxValue(array, cap, idx, maxIdx){
        while(idx>=0){
            if(cap<=0||idx<0){
                break;
            }
            let curValue = array[idx];
            if(cap>=curValue){
                if(curValue===0){
                    idx-=1;
                    continue;
                }
                maxIdx = maxIdx < idx ? idx: maxIdx;
                array.splice(idx,1,0);
                cap-=curValue;
                idx-=1;
            }
            else{
                maxIdx = maxIdx < idx ? idx: maxIdx;
                array.splice(idx,1,curValue-cap);
                cap-=cap;
                break;
            }
        }
        return [idx,maxIdx];
    }
    var answer = 0;
    let idxD = n-1;
    let idxP = n-1;
    while(true){
        if(idxD<0 && idxP<0){
            break;
        }
        let maxD=-1;
        let maxP=-1;
        let getDValue = getMaxValue(deliveries, cap, idxD, maxD);
        idxD = getDValue[0];
        maxD = getDValue[1];
        let getPValue = getMaxValue(pickups, cap, idxP, maxP);
        idxP = getPValue[0];
        maxP = getPValue[1];
        let resultMaxIdx = 0;
        if(maxD>=0||maxP>=0){
            resultMaxIdx = Math.max(maxD,maxP)+1;
            answer+=(resultMaxIdx*2);
        }
    }
    return answer;
}
