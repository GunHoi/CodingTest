function solution(n) {
    let tmp = 0;
    let count = 1 ; //자릿수
    let answer = [];
    for(let i=0;i<n;i++){       //자릿수를 count에 저장
        tmp += 3*(3**i);
        if(tmp>=n){
            count += i;
            break;
        }
    }
    answer[0] = 0;
    for(let j=0;j<count-1;j++){ 
        n -= 3**j;
        answer[count-j-1] = 1;
    }   //맨 앞자리를 제외한 나머지에 1을 채운다. 0111 이런식으로
    let cnt=0;
    for(let k=count-1;k>=0;k--){       //3,2,1,0    count = 4
        for(let l=3;l>=1;l--){
            let value = l*(3**k);   //맨 앞 [0] 부터 값을 빼면서 채워넣는다. 
            if(n>=value){
                n-=value;
                answer[cnt] += l    //현재 4대신 l에 3이 들어간다.
            }
        }
        cnt++;
    }
    answer = answer.join('');   //배열을 문자열로  
    answer = answer.replace(/3/g,'4');  //3을 4로 변경
    return answer;
}


/*
3진법으로 -> a*3^b + ... a*3^0 로 나타낼 수 있음 (a:1~3)(b:0~ )
*/

/* 다른 사람 풀이

function solution(n) {
    const number124 = [ 4, 1, 2];
    let answer = "";
    
    while(n){
        answer = number124[n%3] + answer;
        n = (n%3 == 0)? n/3 - 1 : Math.floor(n/3);
    }

    return answer
}
10  3   124 진법
1   1   1
2   2   2   
3   10  4
4   11  11
5   12  12
6   20  14
7   21  21
8   22  22
9   100 24
10  101 41
    ...
십진법을 각각 3진법, 124 숫자로 표현하면 위와 같다. 1, 2는 동일한데 0이 나올때만 값이 다르다. 3진법은 124숫자보다 한발 먼저 자릿수가 올라간다.

주어진 수를 3으로 나눈 나머지가 0일때는 4, 1일때는 1, 2일때는 2로 대체된다. 배열로 나타내면 [ 4, 1, 2] 이다.

answer에 n%3에 대체되는 124 숫자를 넣어준 후, 나머지가 0이라면, 몫에서 -1을 해준다. 
*/