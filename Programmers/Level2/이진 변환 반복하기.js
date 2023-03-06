function solution(s) {
    let del = 0;    //0을 제거한 횟수
    let tra = 0;    //이진변환 횟수
    while(s.length!==1){
        let len1 = s.length;    //0제거전 길이
        s = s.replace(/0/g, '');
        let len2 = s.length;    //0제거 후 길이
        del += (len1 - len2);   //제거전 길이 - 제거후 길이 = 삭제된 0의 갯수
        s = len2.toString(2);   //2진법으로 변환
        tra+=1; //변환 횟수+1
    }
    return [tra,del];
}

/* 다른사람 풀이
function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;    //replace가 아닌 match를 이용해 0만 찾고 그 길이를 구한다.
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}
*/