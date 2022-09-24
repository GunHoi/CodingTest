function solution(str1, str2) {
    var answer = 0;
    str1 = str1.toLowerCase();  //모두 소문자로 바꾼 후
    str2 = str2.toLowerCase();
    let arr1=[];
    let arr2=[];
    let reg = /[a-z]/;      //정규식을 통해서 집합을 만들어준다.
    for(let i=0;i<str1.length-1;i++){
        if((reg.test(str1[i])) && (reg.test(str1[i+1]))){
            arr1.push(str1[i]+str1[i+1]);    
        }
    }
    for(let i=0;i<str2.length-1;i++){
        if((reg.test(str2[i])) && (reg.test(str2[i+1]))){
            arr2.push(str2[i]+str2[i+1]);    
        }
    }
    if(arr1.length === 0 && arr2.length === 0){
        return 65536;    //둘 다 0 (공집합)이면, 1이니 65536을 리턴
    }else if(arr1.length === 0 || arr2.length === 0){
        return 0;      //둘 중 하나라도 0이면 교집합이 0이기 때문에 0리턴
    }
    //하단 참조
    let inter1 = arr1.filter(el=>arr2.includes(el));
    const set = [...new Set(inter1)];
    let inter2 = arr2.filter(el=>arr1.includes(el));
    let inter = 0;
    for(let i=0;i<set.length;i++){
        let i1_len = inter1.filter(el=>el===set[i]).length;
        let i2_len = inter2.filter(el=>el===set[i]).length;
        if(i1_len >= i2_len){
            inter += i2_len;
        }else{
            inter += i1_len;
        }
    }
    let uni =  arr1.length + arr2.length - inter;   //A+B-(교집합)
    return Math.floor((inter/uni)*65536);
}
/* "aaaaabbc", "zaaabbbb" 의 문자열을 입력 시,
교집합은 aa aa ab bb 가 나와야하지만
let inter1 = arr1.filter(el=>arr2.includes(el)); 로 filter를 하면
let inter2 = arr2.filter(el=>arr1.includes(el));
inter1 :aa,aa,aa,aa,ab,bb 
inter2 :aa,aa,ab,bb,bb,bb 와 같이 다른 값이 나오게된다.
이를 set으로 중복을 제거해서 aa , ab, bb로 만들어주고
각 inter1, inter2에서 set의 원소가 적게 포함된 것의 갯수를 교집합에 더해주면서 교집합을 구한다.
*/

/* 다른 사람 풀이 (비슷한 방식)
function solution (str1, str2) {

  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);  //합집합에는 가장 많은 값을 더하고
    intersection += Math.min(has1, has2);   //교집합에는 가장 적은 값을 더한다
  })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}
*/