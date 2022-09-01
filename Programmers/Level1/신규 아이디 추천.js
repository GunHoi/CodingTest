function solution(new_id) {
    new_id = new_id.toLowerCase();  //1단계 (대문자 제거)
    new_id = new_id.match(/[a-z0-9\-\_\.]/g).join('');  //2단계 (소문자,숫자,-,_,. 제외 제거)
    new_id = new_id.replace(/\.{2,}/g,'.');  //3단계 (.2개이상일 때 1개로)
    console.log(new_id);
    if(new_id[0]==='.')                    //4단계 (.이 맨 앞일 때 제거)
        new_id = new_id.substr(1);
    if(new_id[new_id.length-1]==='.')      //4단계 (.이 맨 뒤일 때 제거)
        new_id = new_id.substr(0,new_id.length-1);
    
    if(new_id==='')                        //5단계 (문자열 공백일 때 a 삽입)
        new_id='a';
    
    if(new_id.length>=16)                   //6단계(글자 길이 15(이상이면 자르기))
        new_id = new_id.slice(0,15);
    if(new_id[14]==='.')                    //6단계(.이 맨 뒤일 때 제거)
        new_id = new_id.slice(0,14);
    
    switch(new_id.length){                  //7단계 (0인 경우는 5에서 처리했기 때문에 X)
        case 1:                             // 1글자 일때 
            new_id = new_id[0].repeat(3);
            break;
        case 2:                             // 2글자 일 때
            new_id = new_id[0]+new_id[1].repeat(2);
            break;
    }
    return new_id;
}

/* 다른 사람 풀이

function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

LV
2 : \w 의미 : 영어 알파벳, 숫자, 언더스코어(_)
3 : + 의미 : 최소 한개(한개 || 여러개)
4 : ^문자열	: 특정 문자열로 시작(괄호 없음 주의!)        vs [^문자]	괄호안의 문자를 제외한 것
    문자열$ : 특정 문자열로 끝남
5 : ^$ : 공백으로 시작, 공백으로 끝남 = 공백
6 : slice 후 마지막 .확인
*/