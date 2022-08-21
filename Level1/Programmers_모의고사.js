function solution(answers) {
    const array1 = [1,2,3,4,5];    //5
    const array2 = [2,1,2,3,2,4,2,5];      //8
    const array3 = [3,3,1,1,2,2,4,4,5,5];    //10
    let max_array = [];
    let answer = [];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    
    for(let i=0;i<answers.length;i++){        
        let array1_value = i%5;
        let array2_value = i%8;
        let array3_value = i%10;
        if(answers[i]===array1[array1_value]){
            count1 +=1;
        }
        if(answers[i]===array2[array2_value]){
            count2 +=1;
        }
        if(answers[i]===array3[array3_value]){
            count3 +=1;
        }
    }
    max_array[0] = count1;
    max_array[1] = count2;
    max_array[2] = count3;
    let max = Math.max(...max_array);
    for(let i=0;i<3;i++){
        if(max_array[i]===max){
            answer.push(i+1);
        }   
    }
    
    return answer;
    
}