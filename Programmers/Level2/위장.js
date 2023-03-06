/* 해시, 조합, 다항식 n차수 */
function solution(clothes) {
    var answer = 1;
    let sameTypeCount = [];
    let cases = clothes.map((cur,i)=>({
        name:cur[0],
        type:cur[1]
    }));
    let types = new Set(clothes.map((cur,i)=>cur[1]));
    types = [...types];
    for(let i=0;i<types.length;i++){
        sameTypeCount = cases.filter(el=>el.type===types[i]).length;
        answer *= (1+sameTypeCount);
    }
    return answer-1;
}

/* 
clothes를 종류 / 이름 별로 정렬하기 위해 cases객체를 만든 후
옷의 각 종류들의 갯수를 받아와 아래 식에 대입하면 된다.

a	1	2	3
b	4
c	5	6

1개만 선택	(6)	a,b,c	3+1+2
1,2,3,4,5,6

2개 선택	(11)	ab,ac,bc	3*1 + 3*2 + 1*2
14	15	16
23	25	26
34	35	36
45	46
	
3개 선택	(6)	abc	3*1*2	
145	146
245	246
345	346

만약에 옷의 종류가 1개라고 해봅시다. 개수는 a개입니다.
그럼 총 a가지의 경우가 있겠죠?

종류가 2개가 되고 각각의 옷의 개수는 a, b개입니다.
그럼 경우의 수는 a, b, ab가 되므로 조합의 개수는 (a+b) + (ab)가지입니다.

3개가 된다면? (a+b+c) + (ab+bc+ca) + (abc)가지입니다.

다항식을 배우는데 위의 가짓수는 n차식(n = 옷의 종류의 개수) 계수들의 합입니다.

즉 옷의 종류가 3가지고 각각의 옷의 개수가 a, b, c라면 (x+a)(x+b)(x+c) = x3 + (a+b+c)x2 + (ab+bc+ca)x + (abc)라는 식이 정립됩니다.(x에 1을 넣으면 합만 구할 수 있음.)
*/

/* 다른 사람 풀이 
function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}
2번 라인에서 reduce으로 배열을 돌리고 
3번 라인에서 각 종류에 따라 분류, 
5번에서 경우의 수를 찾아 반환하는 형식

객체에 {부위명: 부위명에 속한 옷 갯수} 형태로 갯수를 누적시킨다음,
 그 갯수들을 + 1 한 값으로 모두 곱한 후 최종 -1 하여 리턴
*/