function solution(k, tangerine) {
    tangerine = tangerine.sort((a,b)=>(b-a));
    let arr = new Array(tangerine[0]+1).fill(0);
    tangerine.forEach((el)=>{
        arr[el]+=1;
    })
    arr.sort((a,b)=>(b-a));
    arr.forEach((el)=>{ //이 부분은 하면 시간이 더 단축된다.
        if(el===0){
            arr.pop();
        }
    })
    let count = 0;
    arr.forEach((el)=>{
        if(k<=0){
            return 0;
        }else{
            k-=el;
            count+=1;
        }
    })
    return count;
}