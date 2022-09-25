function solution(cacheSize, cities) {
    var answer = 0;
    let cache = []
    if (cacheSize === 0) return 5 * cities.length
    for (const city of cities) {
        const cityLC = city.toLowerCase()
        if (cache.includes(cityLC)) {
            cache.splice(cache.indexOf(cityLC), 1)
            cache.unshift(cityLC)
            answer += 1
        } else {
            if (cache.length >= cacheSize) cache.pop()
            cache.unshift(cityLC)
            answer += 5
        }
    }
    return answer;
}
/* 테케11,16,19,20 실패 -> 해결
function solution(cacheSize, cities) {
    cities = cities.join(',').toLowerCase().split(","); //전부 소문자로
    var answer = 0;
    let arr = [];
    let i=0;
    let count = cities.length;
    let cnt = 0;    //cacheSize가 가득차기 전까지 cities를 어디까지 방문하는지.
    if(cacheSize===0){
        return cities.length *5;
    }
    while(arr.length<cacheSize){    
        //없으면 맨 뒤에 추가, 있으면 삭제 후 맨뒤에 다시 추가
        if(count === 0){
            return answer;
        }
        let idx = arr.findIndex(el=>el===cities[i]);
        if(idx === -1){ //miss
            arr.push(cities[i]);
            answer+=5;
            i+=1;
            cnt+=1;
        }else{  //hit
            arr.splice(idx,1);
            arr.push(cities[i]);
            answer+=1;
            i+=1;
            cnt+=1;
        }
        count-=1;
    }
    for(let j=cnt;j<cities.length;j++){   
        //없으면 맨 앞 삭제 후 맨 뒤에 추가, 있으면 삭제 후 맨뒤에 다시 추가
        let idx = arr.findIndex(el=>el===cities[j]);
        if(idx === -1){ //miss
            arr.splice(0,1);
            arr.push(cities[j]);
            answer+=5;
        }else{  //hit
            arr.splice(idx,1);
            arr.push(cities[j]);
            answer+=1;
        }
    }
    return answer;
}
*/
/* 테스트케이스 11,16,19,20 안됐는데 그 이유
["a", "a", "a", "b", "b", "b", "c", "c", "c"] // 답: 21 와 같을 경우
아래 for문에서 cacheSize에서부터 시작하게 되었는데
cacheSize는 2이고, while문을 반복한 후에 현재 cities는 2번째 b부터 시작해야하지만 cacheSize인 2 즉, 3번째 a부터 시작해 오류가 발생하였다. 
*/

/* 다른 사람 풀이 
function solution(cacheSize, cities) {
    const map = new Map();
    const cacheHit = (city, map) => {
        map.delete(city);
        map.set(city, city);
        return 1;
    };
    const cacheMiss = (city, map, size) => {
        if(size === 0) return 5;
        (map.size === size) && map.delete(map.keys().next().value);
        map.set(city, city);
        return 5;
    };
    const getTimeCache = (city, map, size) => (map.has(city.toLocaleLowerCase()) ? cacheHit : cacheMiss)(city.toLocaleLowerCase(), map, size);
    return cities.map(city => getTimeCache(city.toLocaleLowerCase(), map, cacheSize)).reduce( (a, c) => a + c, 0);
}

*/
