function solution(ingredient) {
    let count = 0;
    if(ingredient.length<4){
        return 0;
    }
    let stack = [ingredient[0],ingredient[1],ingredient[2]];
    for(let i=3;i<ingredient.length;i++){
        stack.push(ingredient[i]);
        if(stack[stack.length-4]===1 && stack[stack.length-3]===2 && stack[stack.length-2]===3 && stack[stack.length-1]===1){
            stack.pop();    //stack.pop()을 4번 하지 말고
            stack.pop();    //stack.splice(-4)를 통해 가장 마지막 4개를 제거할 수도 있다.
            stack.pop();
            stack.pop();
            count+=1;
        }
    }
    return count;
}
/* 다른 사람 풀이 
function solution(ingredient) {
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
}
*/