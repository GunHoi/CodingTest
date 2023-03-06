function solution(n, left, right) {
    var answer = [];
    for(var i=left; i<=right; i++)
        answer.push(Math.max(Math.floor(i / n), i % n) + 1);
    return answer;
}
/* 		1 2 3 4
	    2 2 3 4
	    3 3 3 4
	    4 4 4 4 을 1차원 배열로 풀면 

1

12 	  22

123	  223	333	

1234  2234	3334  4444

12345 22345 33345 44445 55555 와 같이 누적됨을 알 수 있고,

left인 7 부분을 left/n => 1 left%n = 3과 같이 나타내면 아래와 같이 되고
4	   3   3   3   4	 4   4   4
1-3 / 2-0 2-1 2-2 2-3 / 3-0 3-1 3-2

각 값에 1을 더해주었을 때,
2-4 / 3-1 3-2 3-3 3-4 / 4-0 4-2 4-3 

 left/n과 left%n중 큰 값으로 정해지는 것을 알 수 있다.
*/

/* 다른 사람 풀이 
function solution(n, left, right) {
    const ans = [];

    while (left++ <= right){
        const a = left % n,
              b = Math.ceil(left / n);
        if (!a) ans.push(n)
        else if (a < b) ans.push(b);
        else if (a < n) ans.push(a);
    }

    return ans;
}
2 번째 줄의 경우, 2번째 이하의 원소들은 2를 숫자로 갖는다.. 
이런 아이디어를 구현해보려고 했습니다. 
즉 몇번째 줄의 몇번째 원소냐가 숫자를 결정하는 유일한 요소들이므로, 
나누기와 모듈로%를 이용해보았습니다. 
*/