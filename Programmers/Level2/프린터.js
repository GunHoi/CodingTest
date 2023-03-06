function solution(priorities, location) {
    let answer = 0;
    let cur = priorities[location];
    let count = priorities.length;
    for(let i=0;i<count;i++){
        let max = Math.max(...priorities);  //최대값을 구하고
        let maxIndex = priorities.findIndex(el=>el===max);  //최대값의 위치를 구한다(제일 처음 오는 최대값)
        answer+=1;  //횟수 +1
        if(location===maxIndex){    //찾고자 하는 idx의 위치와 현재 최대값의 위치가 같으면(찾고자하는 문서이면)
            return answer;  
        }
        else if(location>maxIndex){ //location의 위치 재배치 
            location = location-maxIndex-1; //(아래에서 slice하면서 max를 제거할 것이기 때문에 -1)
        }
        else{
            location = location+ (priorities.length-maxIndex)-1;    
        }
        let arr1 = priorities.slice(0,maxIndex);    //앞부분을 잘라서
        priorities = priorities.slice(maxIndex+1,priorities.length);    //max를 제외한 것에
        priorities.push(...arr1);   //다시 붙인다.
    }
}
/* 다른 사람 풀이 (기본 방식은 동일하지만, 객체를 쓰고 some함수를 사용)
function solution(priorities, location) {
    var list = priorities.map((t,i)=>({     //list 객체에 값과 위치 저장 (location 값만 true, 나머지는 false)
        my : i === location,
        val : t
    }));
    var count = 0;        
    while(true){    
        var cur = list.splice(0,1)[0];  //맨 앞부터 잘라서 (cur에는 [0], list에는 [1~...])
        if(list.some(t=> t.val > cur.val )){    //[0]번째가 t.val보다 작으면 push
            list.push(cur);                        
        }
        else{            //크면 count (push를 하지 않으므로 자동적으로 삭제된다.)
            count++;
            if(cur.my) return count;
        }
    }
}

some 함수 : 
배열을 순회하면서 특정조건을 만족하는 지 검사한다.
조건에 부합하면 true를, 부합하지 않으면 false를 반환한다.
실제 배열의 내부 값에 대한 검토를 할 때 자주 사용 된다.
(some은 조건에 하나라도 부합하면 true를, every는 전부 부합해야 true를 반환한다.)
*/