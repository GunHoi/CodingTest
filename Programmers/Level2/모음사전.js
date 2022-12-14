// 1-781개 / 2-156개 / 3-31개 / 4-6개 / 5-1개 : 각 자리가 바뀌기 위해 필요한 갯수
//EIO 는 781+156+156+31+31+31+3
function solution(word) {
    let len = word.length;
    let idxCount=[781,156,31,6,1];
    let match = {
        A:0,
        E:1,
        I:2,
        O:3,
        U:4
    }
    let answer = len;
    word.split("").forEach((el,idx)=>{
        answer=answer+(match[el]*idxCount[idx]);
    });
    return answer;
}

/* 다른 사람 풀이 
function solution(words) {
    return words.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}
*/