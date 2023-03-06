function solution(s) {
    s = s.toLowerCase()
    let arr = s.split(" ").map(function(el){
        if((/[a-z]/).test(el[0]) && el[0]!==undefined)
            //undefined는 정규표현식 [a-z]로 검사하였을 때, true로 나오므로 예외처리
            return el[0].toUpperCase()+el.slice(1);
        else
            return el
    });
    return arr.join(" ");
}

/* 다른 사람 풀이

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

return s.toLowerCase().split(" ").map(v => v[0].toUpperCase() + v.substring(1)).join(" "); 이거는 왜 안되나요??

추가적으로 말씀을 드리자면 문제에서 "s는 알파벳과 공백문자(" ")로 이루어져 있습니다."
라고 나와있는 것으로 보아 테스트케이스 중에서 연속된 '공백'이 있을 것으로 판단됩니다. 

그럼 공백을 기준으로 split을 하게 되면 '빈 문자열'이 요소로 있는 경우가 생기구요, 해당 요소를 배열 인덱스로 접근할 경우 undefined를 반환하기 때문에
toUpperCase()에서 런타임 오류가 발생하는 것입니다. :)

이 문제로 v[0]에서 문제가 생기더라구요. 빈 문자열인데 0번째 인덱스 접근이라 문제생기는듯

*나의 생각
 => 나도 이와 같은 문제가 발생하였어서, 이를 undefined를 빼버리는 예외처리를 하였지만 charAt(0)을 통한 문자 접근을 알게 되었다.

 */
