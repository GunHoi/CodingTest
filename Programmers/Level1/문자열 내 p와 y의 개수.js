function solution(s){
    s = s.toLowerCase();
    return (s.split('p').length-1)===(s.split('y').length-1) ? true : false;
    //삼항연산자 안쓰고 그냥 같은지만 판별해도 된다.
}

/* 다른 사람 풀이 match를 이용, 
const solution = s => (s.match(/p/ig)||[]).length === (s.match(/y/ig)||[]).length;

||[]가 있는 이유는 s가 비어있을 경우 match는 null을 반환하고
null의 length를 구하라 하기에 undefined가 출력된다. 이를 방지하기 위해서
match로 찾지 못하면 빈 배열의 길이를 반환하라는 예외처리인 것이다.
*/
