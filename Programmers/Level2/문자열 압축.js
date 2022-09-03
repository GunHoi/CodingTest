function solution(s) {
    let value = 0;
    let min = s.length;
    for(let j=1;j<s.length;j++){    //문자열을 j개 단위로 자르게 만들기.
        value = funcSubstr(s,j);
        if(min > value)
            min = value;
    }
    return min;
}
function funcSubstr(str, size) {
    const arr = [];
    for(let i=0; i<str.length; i+=size) {   //문자열을 잘라서 arr 배열에 저장
        arr.push(str.substring(i, i+size));
    }
    let cur = arr[0];
    let flag = 0;
    let count = arr.length;
    let cnt = 0;
    for(let j=1;j<arr.length;j++){  //배열끼리 중복확인
        if(cur===arr[j]){
            if(flag!==0){   //또 중복되는 게 있을 때,
                arr.splice(j,1);
                flag++;
                j--;
                arr[cnt] = flag;
            }
            else{          //처음 중복이 발견 됐을 때,
                arr[j]='2';
                cnt = j;
                flag = 2;
            }
        } else {          //다를 때,
            cur = arr[j];
            flag = 0;
        }
        
    }
    return arr.join('').length;
}

/* 다른 사람 풀이

function solution(s) {
  let minLen = s.length; //현재 스트링 길이로 시작한다.

  // 압축하는 문자열 길이를 1개씩부터, s의 반 까지 시도한다.
  top: for (let n = 1; n <= s.length / 2; n++) {
    // 이번 트라이얼의 문자열 길이 초기화한다.
    let curLen = 0;
    for (let i = 0; i < s.length; i += n) {
      // 이번 트라이얼의 길이 n 만큼 테스트를하고, 일치하는 수만큼 카운터로 계산
      // 불일치 시에 다음으로 진행
      let counter = 1;
      while (s.slice(i, i + n) === s.slice(i + n, i + 2 * n)) {
        i += n;
        counter++;
      }
      // 만약 하나도 일치가 없었으면, 테스트했던 문자열의 길이만큼만 더해주고,
      // 일치한 문자열이 하나라도 존재했다면 카운터를 스트링으로 변환 후 길이를 더해줌.
      if (counter !== 1) {
        curLen += n + (counter + "").length;
      } else {
        // 1일경우 그냥 n을 더해주는데, 혹시 맨 마지막에 남은 문자열이 n이하일 경우
        // 남는 수만 더해준다.
        curLen += s.length < i + n ? s.slice(i, i + n).length : n;
      }
      // 현재까지의 최소길이보다 현재길이가 커지는 순간, 다음 트라이얼 시작.
      if (minLen <= curLen) continue top;
    }
    // 여기까지 살아남았으면 이번 길이가 최소길이다.
    minLen = curLen;
  }
  return minLen;
}

*/