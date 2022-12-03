function solution(s) {
    let xCount = 0;
    let xAlpha = '';
    let yCount = 0;
    let count = 0;
    s.split('').forEach((el)=>{
        if(xAlpha===''){
            xAlpha = el;
            xCount+=1;
        }else if(xAlpha===el){
            xCount+=1;
        }else if(xAlpha!==el){
            yCount+=1;
        }
        if(xCount===yCount){
            count+=1;
            xAlpha='';
            xCount=0;
            yCount=0;
        }
    });
    if(xCount!==0){
        count+=1;
    }
    return count;
}