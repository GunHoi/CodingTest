function solution(numbers) {
    // 모든 number들을 string으로 바꿔주고 문자열을 그대로 연결한 수(b+a) - 바꿔 연결한 수(a+b)가 양수이면
    // ex) b(3) + a(30) - a(30) + b(3) => 330 - 303 = 양수
    // 3 30 순서를 그대로 유지
    let temp = numbers.map((a) => String(a)).sort((a, b) => b + a - (a + b));

    // 모든 숫자가 0인 경우 000 이 나오지 않게 0을 출력
    if (temp.every((a) => a === '0')) {
        return '0';
    } else {
        return temp.join('');
    }
}

/* 다른 사람 풀이 (기본 원리는 같으나, 문자열 변환을 join함수를 이용)
function solution(numbers) {
    var answer = numbers.map(v=>v+'')
                        .sort((a,b) => (b+a)*1 - (a+b)*1)
                        .join('');

    return answer[0]==='0'?'0':answer;  //0에 대한 코드부 
}


*/