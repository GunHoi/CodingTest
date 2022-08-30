function solution(s) {
    let answer = '';
    for(let i=0;i<s.length;i++){
        switch(s[i]){
            case 'z':
                answer+='0';
                i+=3;
                break;
            case 'o':
                answer+='1';
                i+=2;
                break;
            case 't':
                if(s[i+1]==='w'){
                    answer+='2';
                    i+=2;
                }
                else{
                    answer+='3';
                    i+=4;
                }
                break;
            case 'f':
                if(s[i+1]==='o'){
                    answer+='4';
                    i+=3;
                }
                else{
                    answer+='5';
                    i+=3;
                }
                break;
            case 's':
                if(s[i+1]==='i'){
                    answer+='6';
                    i+=2;
                }
                else{
                    answer+='7';
                    i+=4;
                }
                break;
            case 'e':
                answer+='8';
                i+=4;
                break;
            case 'n':
                answer+='9';
                i+=3;
                break;
            default:
                answer+=s[i];
        }
    }
    return parseInt(answer);
}
/* 다른 사람 풀이 1 

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

split()은 문자열을 분할하는 메서드
join()은 배열의 원소들을 연결하여 하나의 값으로 만든다.

다른 사람 풀이 2

function solution(s) {
    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
}

replace() 함수는
문자열에서 변경하려는 문자열이 여러 번 반복될 경우,
첫 번째로 발견한 문자열만 치환해준다.

정규식으로 찾으려는 문자열은 '/'로 감싸서, 
파라미터로 들어가는 값이 정규식 임을 알려줍니다.

g -> 모든 문자열 치환
i -> 대소문자 구분없이
*/