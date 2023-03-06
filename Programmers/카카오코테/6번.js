/*테스트케이스 1번 불통*/
function solution(n, m, x, y, r, c, k) {
    var answer = '';
let lr = c-y;   //음수이면 왼쪽이동, 양수이면 오른쪽 이동
let ud = r-x;   //음수이면 위로이동, 양수이면 아래로 이동 
let alr = Math.abs(lr);
let aud = Math.abs(ud);
let minCount = aud+alr;
let remainMove = k-minCount;
if(remainMove%2!==0 || k<minCount) return "impossible"; //홀수이면 불가능!
let cur = [x,y];
for(let i=1;i<=k;i++){
    let c_down = n-cur[0];
    let c_left = cur[1]-1;
    let c_right = m-cur[1];
    let c_up = cur[0]-1;
    if(c_down!==0){
        c_down-=1;
        c_up+=1;
        cur[0]+=1;
        answer+='d';
    }else if(c_left!==0){
        c_left-=1;
        c_right+=1;
        cur[1]-=1;
        answer+='l';
    }else if(c_right!==0){
        c_right-=1;
        c_left+=1;
        cur[1]+=1;
        answer+='r';
    }else if(c_up!==0){
        c_up-=1;
        c_down+=1;
        cur[0]-=1;
        answer+='u';
    }
    let fin = Math.abs(r-cur[0])+Math.abs(c-cur[1]);
    if(k-i===fin){
        lr = c-cur[1];   //음수이면 왼쪽이동, 양수이면 오른쪽 이동
        ud = r-cur[0];   //음수이면 위로이동, 양수이면 아래로 이동
        alr = Math.abs(lr);
        aud = Math.abs(ud);
        if(lr>0){answer+='r'.repeat(lr);}
        if(lr<0){answer+='l'.repeat(alr);}
        if(ud>0){answer+='d'.repeat(ud);}
        if(ud<0){answer+='u'.repeat(aud);}
        break;
    }
}
return answer;
}
/*현재 위치에서 상하좌우 어디로 갈 수 있는지 확인
d,l,r,u 우선순위로

남은 횟수 = 목적지-현재위치 같아지면 그 때 목적지로 무조건 출발해야한다.

*/