function solution(s){
    var answer = true;
    let count = 0;  //count를 세서 (는 +1, )는 -1이 되도록
    let len = s.length;
    for(let i=0;i<len;i++){
        if(count<0) return false;   //count가 음수, 즉 )의 개수가 더 많아져도 false
        else if(s[0]==="("){
            count+=1;               //count를 합산하고
            s=s.substr(1);          //문자열 s를 앞에서부터 하나씩 제거하면서 검사
        }
        else{
            count-=1;
            s=s.substr(1);
        }
    }
    if(count!==0) return false; //최종적으로 count가 0이 아니다 = (의 갯수가 더 많다 = false
    return answer;
}

/* 다른 사람 풀이   (비슷한 방법이지만, for of와 삼항연산자를 이용해서 간단하게 표현함.)
function solution(s){
    let cum = 0
    for (let paren of s) {  
        cum += paren === '('? 1: -1     //문자열이 (와 )만으로 이루어져있다는 것을 이용
        if(cum < 0) {   
            return false    //cum(count)가 음수이면 false
        }
    }
    return cum === 0? true: false;  //최종 cum(count)가 0이 아니면 false
}

*/