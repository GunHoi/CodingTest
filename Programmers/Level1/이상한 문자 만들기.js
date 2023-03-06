function solution(s) {
    s = s.toLowerCase().split(" ");
    var answer = '';
    for(let i=0;i<s.length;i++){
        answer+=" ";
        for(let j=0;j<s[i].length;j++){
            if(j%2===0)
                answer+=s[i][j].toUpperCase();
            else
                answer+=s[i][j];            
        }
    }
    return answer.slice(1);
}

/* 다른 사람 풀이 
function toWeirdCase(s){
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}

function toWeirdCase(s){
  return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}
*/