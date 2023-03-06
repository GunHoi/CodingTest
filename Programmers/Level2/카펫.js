// [x,y]라고 할 때, brown = 2x+2y-4 , yellow = (x-2)*(y-2) 이다.
// 이를 전개하면 bro + yel = {(bro-2y+4)/2}y 가 나오고 y에 대해서 반복해서 값을 찾는다.
// 그 후 x*y = bro + yel 이라는 것을 이용해서 yel을 찾고 리턴하면 끝
function solution(brown, yellow) {
    let y = 1;
    let answer = 0;
    while(true){
        if(brown+yellow === ((brown-(2*y)+4)/2)*y){
            answer = y;
            break;
        }
        y+=1;
    }
    return [(brown+yellow)/answer,answer];
}

/* 다른 사람 풀이 
function solution(brown, yellow) {
    var xpy=brown/2+2;
    for(var a=1;a<xpy;a++) if(a*(xpy-a)==brown+yellow)  return [Math.max(a,xpy-a),Math.min(a,xpy-a)];
}
*/