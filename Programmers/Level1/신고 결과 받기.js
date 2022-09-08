function solution(id_list, report, k) {
    var answer = [];
    let list = id_list.map((cur,idx)=>({
        ID : cur,   //유저명
        count : 0,  //신고받은 횟수
        reported : [],  //유저를 신고한 사람명단
        mail : 0, //메일을 받은 횟수
    }));  
    
    for(let i=0;i<report.length;i++){
        const value = report[i].split(" ");
        const reportedIdx = list.findIndex((el)=>el.ID===value[1]);
        if(!list[reportedIdx].reported.includes(value[0])){ // 신고한 유저명이 있으면(중복신고) 신고처리X
            list[reportedIdx].reported.push(value[0]);  //신고한 유저명 저장
            list[reportedIdx].count+=1;             //신고당한 횟수
        }
    }
    let mail = [];  //메일을 받을 사람 명단
    for(let j=0;j<list.length;j++){
        if(list[j].count>=k){
            mail.push(...list[j].reported);
        }
        answer[j]=0;    //answer배열 0으로 초기화
    }
    for(let k=0;k<mail.length;k++){         //명단이름과 id 리스트가 같으면
        const mailIdx = id_list.findIndex((el)=>el===mail[k]);  //해당 인덱스를 찾아서 answer[인덱스]에 +1
        answer[mailIdx] += 1;   
    }
    return answer;
}

/* 다른 사람 풀이

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});   //중복되는 신고를 없애고, 띄어쓰기부분을 배열로 변환
    let counts = new Map();         //Map을 만든다 (key, value)
    for (const bad of reports){     //counts에는 신고당한 유저명과 신고당한 횟수가 저장된다.
        counts.set(bad[1],counts.get(bad[1])+1||1)  //counts에 있으면 counts.get(bad[1])+1, 없으면 1
    }
    let good = new Map();   
    for(const report of reports){   //good에는 신고한 유저명과 메일을 받은 횟수가 저장된다.
        if(counts.get(report[1])>=k){   //신고당한 유저의 신고당한 횟수가 k를 넘으면
            good.set(report[0],good.get(report[0])+1||1)    //good에 있으면 good.get(report[0])+1, 없으면1
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)     //good에 id_list의 유저명이 있으면 메일 수를, 아니면 0을 answer에 저장 
    return answer;
}


** Map 과 같은 key,value가 있을 때
for .. in 은 key값을, for .. of 는 value값을 가져온다.

*/