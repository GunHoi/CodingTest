/*통과*/
function solution(today, terms, privacies) {
    var answer = [];
    today = today.split(".");
    let t_sum = ChangeDay(today);
    for(let i=0;i<privacies.length;i++){
        let pri_ym = privacies[i].split(".");   //year, month
        let pri_dt = pri_ym[2].split(" ");         //day , term_alpha
        let pri = [pri_ym[0], pri_ym[1], pri_dt[0]];
        if(t_sum >= ChangeDay(pri)+ChangeTerm(terms, pri_dt[1])){
            answer.push(i+1);
        }

    }
    return answer;
}
function ChangeDay(today){  
    return parseInt(today[0])*12*28+parseInt(today[1])*28+parseInt(today[2]);
}
function ChangeTerm(terms, alpha){
    for(let i=0;i<terms.length;i++){
        let terms_alpha = terms[i].split(" ");
        if(terms_alpha[0]===alpha){
            return parseInt(terms_alpha[1])*28;
        }
    }
}

/* 0년 0월 0일부터 시작이라하고, 1달에 28일 1년은 12*28일로 계산*/
/*통과*/