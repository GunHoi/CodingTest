function solution(X, Y) {
    X = X.split("").sort((a,b)=>(b-a));
    Y = Y.split("").sort((a,b)=>(b-a));
    var answer ="";
    let xi = 0, yi = 0;
    while(true){
        if(xi===X.length || yi===Y.length){
            break;
        }
        if(X[xi]===Y[yi]){
            answer+=X[xi];
            xi+=1; 
            yi+=1;
        }else if(X[xi]>Y[yi]){
            xi+=1;
        }else{
            yi+=1;
        }
    }
    if(answer.length<1){
        return "-1";
    }
    if(answer[0] === "0"){
        return "0";
    }
    return answer;
}
// (numObj[char] || 0) 를 사용하면, numObj[char]가 undefined여도 undefined 대신 0이 나온다.

/* 다른 사람 풀이 key - value를 이용해, 해당 숫자가 y에 몇 개씩 있는지 저장한 후 , x에서 확인하고 result에 넣는다.
    const solution = (x, y) => {
            let result = '';
            const map = new Map();
            for(let i = 0; i < y.length; i++){
                map.set(y[i], (map.get(y[i]) || 0) + 1);
            }

            for(let i = 0; i < x.length; i++){
                if(map.get(x[i]) >= 1){
                    map.set(x[i], (map.get(x[i]) || 0) -1)
                    result += x[i];
                }
            }

            if(result.length < 1) return '-1';
            return +result === 0 ? '0' : result.split('').sort((a, b) => b - a).join('');
        }
*/

/* 다른 사람 풀이 위와 동일한 방법. but 속도가 더 빠르다.
function solution(X, Y) {
    let result = '';
    const numObj = {};

    for (const char of X) {
        numObj[char] = (numObj[char] || 0) + 1;         
    }

    for (const char of Y) {
        if (!numObj[char]) continue;
        result += char;
        numObj[char]--;
    }

    if (result === '') return '-1';
    if (+result === 0) return '0';
    return [...result]
        .map((num) => +num)
        .sort((a, b) => b - a)
        .join('');    
}
*/