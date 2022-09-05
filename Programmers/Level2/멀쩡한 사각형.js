
function solution(w, h){
    let num1 = w;
    let num2 = h;
    while(num2>0){  //num2가 0일때의 num1값 = 최대공약수
        if(num2>num1){
            let temp = num2;
            num2 = num1;
            num1 = temp;
        }
        let r = num1%num2;
        num1 = num2;
        num2 = r;   
    }   
    return w*h-(w+h-num1);
}
/* 방법1 대각선이 지나가는 단위 사각형의 갯수를 구하는 공식을 이용

바로 w + h - (w,h의 최대공약수) 이다. 

유클리드 호제법의 기본 원리는 
num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다는 것
r이 0이면 종료

12 % 8 = 4  GCD(12,8)
8 % 4 = 0   GCD(8,4)
GCD(4,0)    -> GCD = 4가된다.

*/

/* 방법2 전체 - 대각선이 지나가는 칸
-> 테스트케이스 12번 실패(이유는 아직도 잘 모르겠다..)
function solution(w, h) { 
    if(w<h){
        let tmp = 0;
        tmp = w;
        w = h;
        h = tmp;
    }
    let answer = w*h;
    for(let x=0;x<w;x++){
        let y1 = h/w * x;
        let y2 = h/w * (x+1);
        answer-=Math.ceil(y2)-Math.floor(y1);
    }
    return answer;
}
    //w를 x축, h를 y축이라 생각하고 대각선 함수
    //좌 하단을 (0,0)이라 하고 우 상단(w,h) 사이 거리
    //y = y증가량/x증가량 x;
    //y = 3/2x 라는 대각선함수,
    //x가 0,1,2,..일때 y의 값을 구해서 앞칸(올림) 뒷칸(내림) 갯수를 빼준다
    //x가 0일때 0(y1 내림), 1일때 0.xx(y2 올림)면 -> 1(y2)-0(y1) = 1이므로, 
    //-1해준다.
    //x가 1일때 0.xx, 2일때 1.xx이면 -> 2-0 = 2이므로 ,
    //-2해준다 이와 같은 방식으로 진행.
*/

/* 다른 사람 풀이 (1) 기울기 이용(대각선 밑에 있는 사각형 갯수를 세서 x2)
function solution(w,h){
    const slope = h / w;
    let result = 0;

    for(let i = 1; i <= w; i++){
        result += Math.ceil(slope * i);
    }

    return ((h * w) - result) * 2;
}

다른 사람 풀이 (2) 최대 공약수 이용
function solution(w,h){
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    return w * h - (w + h - gcd(w, h));
}
*/
