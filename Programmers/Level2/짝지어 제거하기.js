function solution(s)
{
    let arr = [];   //스택을 이용
    for(let i=0;i<s.length;i++){
        if(s[i]===arr[arr.length-1]){   //앞으로 넣을 원소랑 스택의 맨위 원소랑 비교해서
            arr.pop();  //같으면 삭제시키므로 pop하고
        }
        else{
            arr.push(s[i]); //다르면 push한다.
        }
    }
    return arr.length>0 ? 0 : 1;    //마지막에 arr에 원소가 남아있으면 false 아니면 true
}

/* 다른 사람 풀이 (비슷하지만, 최초에 홀수개이면 바로 return 0을 할 수 있도록 추가하였다.)
const solution = (s) => {
  if (s.length % 2 != 0) return 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const b = s.charAt(i);
    if (stack[stack.length - 1] === b) {
      stack.pop();
    } else {
      stack.push(b);
    }
  }

  return stack.length > 0 ? 0 : 1;
};

*/