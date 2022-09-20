function solution(arr1, arr2) {
    let answer = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));
    //2차원 배열을 행렬의 결과값 만큼 0으로 초기화하며 생성
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1[0].length;j++){
            for(let k=0;k<arr2[0].length;k++){
                answer[i][k] += arr1[i][j]*arr2[j][k];
            }
        }
    }
    return answer;
}
/* 다른 사람 풀이 reduce를 이용하여 누적합 계산 a=누적, b=현재값, c=인덱스
function solution(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}
*/

/* 행렬 곱 
1 4		3 3			a b
3 2		3 3			c d
4 1					e f

a = arr1[0][0]*arr2[0][0] + arr1[0][1]*arr2[1][0]
b = arr1[0][0]*arr2[0][1] + arr1[0][1]*arr2[1][1]

c = arr1[1][0]*arr2[0][0] + arr1[1][1]*arr2[1][0]
d = arr1[1][0]*arr2[0][1] + arr1[1][1]*arr2[1][1]

e = arr1[2][0]*arr2[0][0] + arr1[2][1]*arr2[1][0]
f = arr1[2][0]*arr2[0][1] + arr1[2][1]*arr2[1][1]

--------------------------------------------------

1 2    1 2 3    a b c
3 4    4 5 6    d e f
5 6             g h i

a = arr1[0][0]*arr2[0][0] + arr1[0][1]*arr2[1][0]
b = arr1[0][0]*arr2[0][1] + arr1[0][1]*arr2[1][1]
c = arr1[0][0]*arr2[0][2] + arr1[0][1]*arr2[1][2]

d = arr1[1][0]*arr2[0][0] + arr1[1][1]*arr2[1][0]
e = arr1[1][0]*arr2[0][1] + arr1[1][1]*arr2[1][1]
f = arr1[1][0]*arr2[0][2] + arr1[1][1]*arr2[1][2]

g = arr1[2][0]*arr2[0][0] + arr1[2][1]*arr2[1][0]
h = arr1[2][0]*arr2[0][1] + arr1[2][1]*arr2[1][1]
i = arr1[2][0]*arr2[0][2] + arr1[2][1]*arr2[1][2]

--------------------------------------------------

2 3 2	5 4 3		a b c
4 2 4	2 4 1		d e f
3 1 4 	3 1 1 		g h i


a = arr1[0][0]*arr2[0][0] + arr1[0][1]*arr2[1][0] + arr1[0][2]*arr2[2][0]
b = arr1[0][0]*arr2[0][1] + arr1[0][1]*arr2[1][1] + arr1[0][2]*arr2[2][1]
c = arr1[0][0]*arr2[0][2] + arr1[0][1]*arr2[1][2] + arr1[0][2]*arr2[2][2]

d = arr1[1][0]*arr2[0][0] + arr1[1][1]*arr2[1][0] + arr1[1][2]*arr2[2][0]
e = arr1[1][0]*arr2[0][1] + arr1[1][1]*arr2[1][1] + arr1[1][2]*arr2[2][1]
f = arr1[1][0]*arr2[0][2] + arr1[1][1]*arr2[1][2] + arr1[1][2]*arr2[2][2]

g = arr1[2][0]*arr2[0][0] + arr1[2][1]*arr2[1][0] + arr1[2][2]*arr2[2][0]
h = arr1[2][0]*arr2[0][1] + arr1[2][1]*arr2[1][1] + arr1[2][2]*arr2[2][1]
i = arr1[2][0]*arr2[0][2] + arr1[2][1]*arr2[1][2] + arr1[2][2]*arr2[2][2]
*/