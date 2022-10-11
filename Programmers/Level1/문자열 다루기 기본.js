function solution(s) {
    return s.length === 4||s.length === 6? !(/[^0-9]/gi.test(s)) : false;
}
/* 다른 사람 풀이 
function solution(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

*/