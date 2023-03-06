function solution(board, moves) {
    moves = moves.map(x => x-1);
    const bl = board.length-1;
    let basket = [];
    let count = 0;
    for(let i=0;i<moves.length;i++){
        basket.push(getElement(board,moves[i],0,bl));
    }
    basket = basket.filter(el => el!==0); //바구니에 null(0으로 저장)값을 제거
    for(let j=0; j<basket.length;j++){
        if(basket[j]===basket[j+1]){  //뒤의 값과 비교해서 같으면
            console.log(j);
            basket.splice(j,2);    //두 값을 터트리고
            count +=2;          //count를 2개 세준 후
            j=-1;                //다시 처음부터 확인
        }   
    }
    return count;
}
function getElement(arr,index,top,bl){  //바구니에 넣을 값들
    let answer = 0;
    if(top>bl){
        return 0;   //빈 공간인 경우 0으로 반환
    }
    else if(arr[top][index]!==0){   //스택에 값이 존재하면
        answer = arr[top][index];   //값을 저장 후 
        arr[top][index] =0;         //스택을 비워주고 
        return answer;              //값을 리턴한다
    }
    else{
        answer = getElement(arr,index,top+1,bl);    //스택에 없으면 아랫층으로 내려간다.
    }
    return answer;   
}
/* 다른 사람 풀이 best

function solution(board, moves) {

    var count =0;
    var stack = [];

    for(var i=0;i<moves.length;i++){
        var now = moves[i]-1
        for(var j=0;j<board.length;j++){
            if(board[j][now]!=0){
                if(stack[stack.length-1]===board[j][now]){
                    stack.pop();
                    count+=2;
                }
                else{
                    stack.push(board[j][now])
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    console.log(stack)
    return count
}

위 풀이를 보면서 느낀점
count를 세는 문제라면, 굳이 stack(basket)에 전부 다 넣을 필요 없다.
 = 즉, 어차피 같은 값이라면 넣고 빼는게 아니라 비교해서 맨 위랑 같은 값이 있으면
 넣지 않고 stack에서 빼버리는 방식.

+ 다른 사람 풀이를 보면서 느낀점
빈 공간의 경우 선처리를 통해 없애주는 것이 더 효율적인 탐색이 될 수 있을 것 같다.
*/