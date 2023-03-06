function solution(phone_number) {
    let count = phone_number.length;
    
    return '*'.repeat(count-4)+phone_number.slice(count-4,count);
}
/* 다른 사람 풀이 (정규식) 
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}*/