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
/* 테케11,16,19,20 실패
function solution(cacheSize, cities) {
    cities = cities.join(',').toLowerCase().split(","); //전부 소문자로
    var answer = 0;
    let arr = [];
    let i=0;
    let count = cities.length;
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
        }else{  //hit
            arr.splice(idx,1);
            arr.push(cities[i]);
            answer+=1;
        }
        count-=1;
    }
    for(let j=cacheSize;j<cities.length;j++){   
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
