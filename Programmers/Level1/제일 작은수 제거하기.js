function solution(arr) {
    arr.splice(arr.findIndex((el)=>{return el === Math.min(...arr)}),1);
    
    return arr.length===0 ? [-1] : arr;
}
/* 다른 사람 풀이 (indexOf 사용)
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
*/