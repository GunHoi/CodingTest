function solution(nums) {
    let answer = 0;
    let sum = [];
    
    for(let i=0;i<nums.length-2;i++){   //i번째 자리를 fix한채로, i이후의 배열들을 combination함수를 불러 2개를 선택한다.
        let remainSum = combination(nums.slice(i+1,nums.length));   //i번째 이후의 배열로 쪼갠 것을 combination 함수로 넘김
        sum.push(...remainSum.map(x => x + nums[i]));   //combination의 결과를 i와 더해서 sum 배열에 저장하는데
    }                                                   //이 때 전개연산자를 이용해 2차원이 되지 않도록함
    for(let i=0;i<sum.length;i++){  //소수 판별하는 부분
        answer += isPrime((sum[i]));
    }
    return answer;
}
function combination(arr){  //나머지배열에서 2개 골라서 합들의 배열을 리턴해주는 함수
    let a = [];
    for(let i=0;i<arr.length-1;i++){    
        for(let j=i+1;j<arr.length;j++){
            a.push(arr[i]+arr[j]);
        }
    }
    return a
}
function isPrime(num) {
    for(let i=2;i<num;i++){
        if(num%i===0){
            return 0;
        }
    }
    return 1;
}
/*
    (1) 1개를 고정해놓고, 2개 뽑는 조합의 합을 구한다.
    (2) (1)에서 구한 값을 1개 고정된 값과 더한다
    (3) 합들을 모아둔다.
    (4) 1~3 과정을 반복
    (5) 소수를 판별해서 갯수를 세준다.
*/