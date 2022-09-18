
/* 방법 1 피보나치 수열이용.*/
function solution(n) {
    let cnt1 = 1;
    let cnt2 = 1;
    for(let i=1;i<n;i++){
        let tmp = (cnt1)%1234567+(cnt2)%1234567;
        cnt1 = cnt2;
        cnt2 =tmp;
    }
    return cnt2%1234567;
}

/*
1 = 1                               1
2 = 11 / 2							2
3 = 111 / 12 / 21 					3
4 = 1111 / 112 / 121 / 211 / 22	    5 
5 = 11111/                          
	1112/1121/1211/2111				
    122/212/221
                                    8

6 = 111111	1
	11112	5
	1122    6
	222		1                       13

7 = 21
8 = 34
9 = 55 . . . 를 보면 알 수 있듯이 피보나치 수열이다.
답은 1234567로 나눈 나머지를 return -> 엄청크니 오버플로 발생할 것이다. 라는 의미이기에

나머지 연산자가 가지고 있는 특징 을 이용
피보나치수가 오버플로우를 발생시키므로 그전에 % 하여 오버플로 방지

(a + b) % m = ((a % m) + (b % m)) % m

F(n) % m 
= (F(n-1) + F(n-2)) % m
= (F(n-1) % m + F(n-2) % m) % m
*/

/* 방법2 조합
function solution(n) {
    let answer = 1; //항상 1로만 구성된 것은 1개이기에 아래 for문은 1부터 시작
    let count = Math.floor(n/2)+1;
    for(let i=1;i<count;i++){
        let cnt1 = n-i;
        let cnt2 = i;
        answer = answer%1234567 +Combination(cnt1, cnt2)%1234567;
    }
    return answer%1234567;
}
function Combination(n1, n2){
    let numerator = 1;  //분자 
    let denominator = 1;    //분모
    let n2Len = n2;
    for(let i=0;i<n2Len;i++){
        numerator = numerator*n1;
        denominator = denominator * n2;
        n1 -=1;
        n2 -=1;
    }
    return (numerator/denominator);
}*/
/*
                   Combination 함수를 만들어서 아래 식 구현
6 = 111111	6C0 1   =>    1
	11112	5C1 5   =>    5/1
	1122	4C2 6   =>    4x3/2x1
	222		3C3 1   =>    3x2x1/3x2x1
    총 13개
    
    (A+B) % m = ((A%m)+(B%m))%m
    A,B = (a*b)/(e*f)
    
    -페르마의 소정리-
    (A / B) % p = (A * B^(p-2)) % p = ((A % p) * (B^(p-2) % p)) % p
    
    A % m = ((a*b)/(e*f))%m 
    = ((a*b)*(e*f)^(m-2))%m 
    = (((a*b)%m) * ((e*f)^(m-2)%m))%m 로 나타낼 수 있다.
    
    여기서 (a*b)%m = ((a%m)*(b%m))%m 으로 나타낼 수 있으므로
    
    ((((a%m)*(b%m))%m * ((e*f)^(m-2)%m))%m 로 바꿀 수 있는데,
    
    (e*f)^(m-2) 부분에서 OverFlow가 발생할 것이므로 이 방법은
    나머지 연산의 특징인 나머지의 법칙을 적용해도 힘들 것 같다.
*/
