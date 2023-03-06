function solution(s, n) {
    var answer = '';
    for(let i=0;i<s.length;i++){
        if(s[i]===' '){
            answer+=(' ');
            continue;
        }
        let tmp = s.charCodeAt(i);  //ASCII 코드로 변환
        if(tmp<=90){    //65~90 - A~Z
            if(tmp+n>90){
                answer+=String.fromCharCode(tmp+n-26);
            }
            else{
                answer+=String.fromCharCode(tmp+n);
            }
        }else{  //97~122 - a~z
            if(tmp+n>122){
                answer+=String.fromCharCode(tmp+n-26);
            }
            else{
                answer+=String.fromCharCode(tmp+n);
            }
        }
    }
    return answer;
}

/* 다른 사람 풀이 
function caesar(s, n) {
    var result = s.replace(/[a-z]/ig, c => [ c = c.charCodeAt(0), String.fromCharCode((c & 96) + (c % 32 + n - 1) % 26 + 1) ][1]);

    // 함수를 완성하세요.
    return result;
}

32를 나머지 연산하는 이유:
2진법으로 대문자의 코드들은 1000001~1011010, 소문자는 1100001~1111010라서 앞에 2자리로 빼고는 같습니다. 
즉, 앞의 2자리로 대소문자를, 나머지 5자리로 알파벳을 구분합니다. 
따라서 '(c & 96(1100000))'으로 앞의 2자리만 가져와 먼저 대소문자 구분부를 빼놓습니다.
뒤에 남은 5자리의 수(00001~11010)를 가져오기 위해 'c % 32(100000)'를 합니다. 
a가 1부터 시작하니 나머지 계산을 위해 '- 1'을 해서 초기점을 0으로(00000~11001) 잡아줍니다. 
럼 0~25의 숫자 중 하나가 나오고 여기서 n만큼 더해준 뒤 26으로 나머지 계산을 하고 다시 아까 빼 준 1을 다시 더한 것입니다.
*/