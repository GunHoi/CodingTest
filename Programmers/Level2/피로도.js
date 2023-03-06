function solution(k, dungeons) {
    let answer = findMax(k, dungeons, 0);
    return answer;
}
function findMax(k, dungeons, max){
    let count = max;
    count+=1;
    for(let i=0;i<dungeons.length;i++){
        let dungeon = [...dungeons];
        if(k>=dungeon[i][0]){
            let kk = k-dungeon[i][1];
            dungeon.splice(i,1);
            let value = findMax(kk, dungeon, count);
            if(value > max){
                max = value;
            }
        }
    }
    return max;
}

/* 다른 사람 풀이 
function solution(k, d) {
    const N = d.length
    const visited = new Array(N).fill(0)
    let ans = 0

    function dfs(k, cnt){
        ans = Math.max(cnt, ans)

        for (let j = 0; j < N; j++){
            if (k >= d[j][0] && !visited[j]){
                visited[j] = 1
                dfs(k - d[j][1], cnt + 1)
                visited[j] = 0
            }
        }
    }

    dfs(k, 0)
    return ans;
}
*/