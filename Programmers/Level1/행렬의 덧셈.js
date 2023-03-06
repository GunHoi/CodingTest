function solution(arr1, arr2) {
    /* 자바스크립트에서는 다른 언어와는 다르게, 이차원 배열이란 개념이 없기 때문에
    2차원 배열 선언 시 var answer = [[]]와 같은 방식은 선언할 수 없다.
    따라서 배열안에 배열을 넣으면서 초기화를 해주어야한다.
    */
    var answer = Array.from(Array(arr1.length), () => new Array(arr1[0].length));
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1[0].length;j++){
            answer[i][j] = arr1[i][j]+arr2[i][j];
        }
    }
    return answer;
}

/* 다른 사람 풀이 (이중 map 함수를 이용하여 완성하였다.)
function solution(arr1, arr2) {
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}
*/