function solution(operations) {
    var answer = [];
    operations.forEach((el)=>{
       let word = el.split(" ");
        if(word[0]==="I"){
            answer.push(parseInt(word[1]));
        }else if(word[0]==="D"){
            if(answer.length>=1){
                if(word[1][0]==="-"){   //최소값 삭제
                    let value = Math.min(...answer);
                    let idx = answer.indexOf(value);
                    answer.splice(idx,1);
                }else{  //최대값 삭제
                    let value = Math.max(...answer);
                    let idx = answer.indexOf(value);
                    answer.splice(idx,1);
                }
            }
        }
    });
    if(answer.length===0){
        return [0,0];
    }else{
        return [Math.max(...answer), Math.min(...answer)];
    }
}