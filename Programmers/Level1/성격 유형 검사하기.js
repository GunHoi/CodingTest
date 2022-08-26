function solution(survey, choices) {
    let personality = [['R','T','C','F','J','M','A','N'],[0,0,0,0,0,0,0,0]]
    var answer = '';
    //4를 기준으로 비교해서 값을 더해주고,
    //최종 저장 값들을 비교해서 나열
    //값이 같으면 알파벳순으로
    for(let i=0;i<survey.length;i++){
        let personalityFront = survey[i].substr(0,1);   //survey문자열을 분리(앞)
        let personalityBack = survey[i].substr(1,1);    //survey문자열을 분리(뒤)
        if(choices[i]>4){
            let num = personality[0].indexOf(personalityBack);  //num은 자른 문자의 위치 출력
            personality[1][num] += choices[i]-4;    //num 위치에 값 저장
        }
        else{
            let num = personality[0].indexOf(personalityFront);
            personality[1][num] += 4-choices[i];
        }
        console.log("i: "+personality[1]);
    }
    //Personality배열에는 R-T / C-F / J-M / A-N String순으로 되어있고
    //이에 해당하는 Value값이 써있으므로, 차례대로 비교해 가면서 큰 값 선택
    for(let i=0;i<4;i++){   //값이 동일하다면(else문) 사전순으로 
        let frontString = personality[0][i*2];
        let frontValue = personality[1][i*2];
        let backString = personality[0][i*2+1];
        let backValue = personality[1][i*2+1];
        
        if(frontValue>backValue){   //앞의 값이 더 크면, 앞의 값에 해당하는 문자 저장
            answer+=frontString;
        } else if(frontValue<backValue){    //뒤의 값이 더 크면, 뒤의 값에 해당하는 문자 저장
            answer+=backString;
        } else{
            if(frontString<backString)   //ASCII 코드로 비교
                answer+=(frontString);
            else
                answer+=(backString);
        }
    }
    return answer;
}