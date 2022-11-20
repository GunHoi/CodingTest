function solution(n, arr1, arr2) {
    let answer = [];
    arr1 = arr1.map(el=>parseInt(el.toString(2)));
    arr2 = arr2.map(el=>parseInt(el.toString(2)));
    for(let i=0;i<n;i++){
        let val = (arr1[i]+arr2[i]).toString();
        let len = val.length;
        val = val.replace(/[1-9]/g,'#');
        val = val.replace(/0/g,' ');
        answer[i]= val;
        if(len<n){
            answer[i] = ' '.repeat(n-len)+answer[i];
        }
    }
    return answer;
}
/* 다른 사람 풀이 (1)   | 연산자를 통해 하나라도 1이면 1, 둘 다 0일때 0이 되도록 만들고, (v | arr2[i]).toString(2)
                         정규식과 삼항연산자를 결합해 1과 0을 동시에 판별했다. (/1|0/g, a => +a ? '#' : ' ')
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
*/

/* 다른 사람 풀이 (2) -> padStart() 이용
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))

padStart : padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워,
 주어진 길이를 만족하는 새로운 문자열을 반환합니다.
 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다
*/