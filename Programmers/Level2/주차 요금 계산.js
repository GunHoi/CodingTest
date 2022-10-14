function solution(fees, records) {
    let car = [];
    let answer = [];
    let list = records.map((el)=>({     //객체로 분리 + 시간을 분으로 변형
        carTI: el.split(" ")[0].split(":")[0]*60+(+el.split(" ")[0].split(":")[1]),
        carNM: el.split(" ")[1],
        carIO: el.split(" ")[2],
    }));
    for(let i=0;i<list.length;i++){ //차량을 작은 번호순으로 차 종류를 담고 
        car.push(list[i].carNM);
    }
    car = [...new Set(car)];
    car = car.sort((a,b)=>(a-b));
    let arr = Array.from({length: car.length}, () => 0);    //누적 주차 시간을 담을 배열
    let flag = Array.from({length: car.length}, () => false);   //최종적으로 차가 주차 상태인지 확인
    for(let i=0;i<list.length;i++){
        let idx = car.findIndex(el=>el===list[i].carNM);
        if(list[i].carIO==="IN"){   //차가 주차중이라면 -시간, flag는 true(주차 중)
            arr[idx]-=list[i].carTI;
            flag[idx]=true;
        }else{  //차가 주차중이 아니라면 +시간, flag는 false
            arr[idx]+=list[i].carTI;
            flag[idx]=false;
        }
    }
    for(let j=0;j<flag.length;j++){ //주차 중이면 23:59분 시간으로 계산 (+1439)
        if(flag[j]){
            arr[j]+=1439;
        }
        answer[j]=(calc(arr[j]));
    }
    function calc(parkedTime){  //주차 계산, (기본 주차시간보다 누적 주차 시간이 적으면 음수가 나올 수 있으므로 에외 처리)
        let fee = Math.ceil((parkedTime-fees[0])/fees[2]) * fees[3];
        return fee>=0?fees[1]+fee:fees[1];
    }
    return answer;
}

/* 다른 사람 풀이 
function solution(fees, records) {
    const parkingTime = {};
    records.forEach(r => {
        let [time, id, type] = r.split(' ');
        let [h, m] = time.split(':');
        time = (h * 1) * 60 + (m * 1);
        if (!parkingTime[id]) parkingTime[id] = 0;
        if (type === 'IN') parkingTime[id] += (1439 - time);
        if (type === 'OUT') parkingTime[id] -= (1439 - time);
    });
    const answer = [];
    for (let [car, time] of Object.entries(parkingTime)) {
        if (time <= fees[0]) time = fees[1];
        else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]
        answer.push([car, time]);
    }
    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}
// 차량번호 오름차순으로 청구요금 담아 배열로 리턴

// 청구요금 구하기
// 기본요금 fee[1] + ( 주차시간 - 기본시간fee[0] ) / fee[2] * fee[3] 

// 기본시간이내 : 기본요금 
// 출차 시간 max = 23:59
// 분 단위는 올림

// 주차시간 구하기 
// records.forEach(r => r.split(' ')

// log 객체에 {차번호: 시간} 저장
// IN 이면 + (24시간(분) - 입차시간)
// OUT이면 -(1430 - 출차시간)
// 24시간 = 1440분

// ex) 05:34 (05 * 60) + 34 = 334
*/