function solution(people, limit){
    let arr = people.sort((a,b)=>(a-b));
    let min = 0;
    let max = arr.length-1;
    let count = 0;
    let arrLen = arr.length; 
    for(let i=0;i<arr.length;i++){
        if(min>=max){
            return count+arrLen;
        }
        if(limit-arr[min]>=arr[max]){   //A
            min+=1;
            max-=1;
            count+=1;
            arrLen -=2;
        } else{ //B
            max-=1;
            count+=1;
            arrLen -=1;
        }
    }
}
/* 아래와 비슷한 방식이지만, count만 셀 수 있도록 변경.
arrLen을 추가한 이유 : [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100의 경우
B : min:10, max:100     min = 0 max = 9 count = 1           arrLen = 10
A : min:10, max:90      min = 0 max = 8 count = 2           arrLen = 9
A : min:20, max:80      min = 1 max = 7 count = 3           arrLen = 7
A : min:30, max:70      min = 2 max = 6 count = 4           arrLen = 5
A : min:40, max:60      min = 3 max = 4 count = 5           arrLen = 3
    
를 하고 50을 탐지할 차례에 min = 4 max = 3 이 되어 return 되기 때문에 
        50              min = 4 max = 3 count = 5           arrLen = 1
arrLen을 추가해서 지나간 갯수만큼 빼줘서 남은 인원을 추가해준다.
*/
/* 효율성 (1,2,3 시간초과)
function solution(people, limit) {
    let arr = people.sort((a,b)=>(a-b));
    let count = 0;
    while(arr.length>0){
        if(arr[0]>limit/2){ //남은 인원들 중 가장 가벼운 사람이 limit의 절반보다 크면
            count+=arr.length;  //무조건 1명씩 밖에 타지 못한다.
            break;
        }
        let min = arr[0];   //가장 작은값을 선택
        arr = arr.slice(1); //가장 작은값을 arr에서 삭제
        let maxArr = arr.filter((el)=>el<=limit-min);   //limit-가장작은값 들의 배열
        let max = maxArr[maxArr.length-1];  //남은 자리에 들어갈 수 있는 가장 큰 값 선택
        if(max!==undefined){    //max가 없으면 넘어가고, 존재하면 그 값을 arr에서 삭제
            let remainArr = arr.splice(arr.findIndex(el=>el===max),1);
        }
        count+=1;
    }
    return count;
} */
/* 오름차순으로 정렬 후
가장 작은 값 선택하고, 나머지 배열중 (limit - 작은값)을 filter로 걸러서 그중 가장 큰 값과 같이 태운다
*/

/* 다른 사람 풀이
function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}

return시에 어떻게 -i가 가능한가 ??? => 호이스팅(Hoisting) 때문 (var과 let의 차이)
for문 안의 i를 var가 아닌 let으로 선언시 error가 뜨지만 var는 정상적으로 작동하는데
참고로, 변수는 선언 단계 > 초기화 단계 > 할당 단계 에 걸쳐 생성되는데

var 으로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 하지만,
let 로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.

그래서 가능한 것
*/