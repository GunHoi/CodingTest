function solution(dirs) {
    var answer = 0;
    let maps = Array.from(Array(21), () => Array(21).fill(0));
    //2배 크기로 선언하고, 짝수는 점, 홀수는 선으로 만들어서 지나간 선의 개수만 구한다.
    let x = 10;
    let y = 10;
    maps[y][x]=1;
    dirs.split("").forEach((words)=>{
        switch(words){
            case "U":
                if(y>0){
                    y-=2;         
                    if(maps[y+1][x]===0){
                        answer+=1;
                        maps[y+1][x]=1;
                    }
                    maps[y][x]=1;
                }                   
                break;
            case "D":
                if(y<20){
                    y+=2;
                    if(maps[y-1][x]===0){
                        answer+=1;
                        maps[y-1][x]=1;
                    }                   
                    maps[y][x]=1;
                }
                break;
            case "R":
                if(x<20){
                    x+=2;
                    if(maps[y][x-1]===0){
                        answer+=1;
                        maps[y][x-1]=1;
                    }                 
                    maps[y][x]=1;
                }                
                break;
            case "L":
                if(x>0){
                    x-=2;
                    if(maps[y][x+1]===0){
                        answer+=1;
                        maps[y][x+1]=1;
                    }                   
                    maps[y][x]=1;
                }                
                break;
        }
    });
    return answer;
}