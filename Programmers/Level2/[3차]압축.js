function solution(msg) {
    let dic =[null,'A','B','C','D','E','F','G','H',
              'I','J','K','L','M','N','O','P',
              'Q','R','S','T','U','V','W','X','Y','Z'];
    var answer = [];
    let i = 0;
    let w = msg[i];
    let c = w+msg[i+1];
    while(i<msg.length){
        if(dic.indexOf(c)==-1){
            let idx = dic.indexOf(w);
            answer.push(idx);
            dic.push(c);
            i+=1;
            w = msg[i];
            c = w+msg[i+1];
        }else{
            let idx = dic.indexOf(c);
            i+=1;
            w = c;
            c = w+msg[i+1];
        }
    }
    return answer;
}
/* w - 현재 입력, c - 다음 글자
1. w+c 가 있는지 확인
1-1. w+c가 없으면 w 출력 후 w+c를 사전에 추가
1-2 w+c가 있으면 w+c를 w로 하고 그 다음 c를 또 추가 . . 다시 1로 올라감 (반복)
*/

/* 다른 사람 풀이 - (1) 
function solution(msg) {
    let answer = [],
        dictionary = [''].concat([...Array(26).keys()].map(v => String.fromCharCode(v + 65)));

    while (msg.length) {
        for (let i = dictionary.length - 1; i >= 0; i--) {
            let characters = dictionary[i];

            if (new RegExp('^' + characters).test(msg)) {
                let newCharacter = msg.substr(0, characters.length + 1);

                if (dictionary.indexOf(newCharacter) < 0) dictionary.push(newCharacter);

                msg = msg.substr(characters.length);
                answer.push(i);
                break;
            }
        }
    }

    return answer;
}
*/

/* 다른 사람 풀이 - (2) 
function solution(msg) {
    const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').reduce((dict, c, i) => {
        dict[c] = i+1;
        return dict;
    }, {});
    dict.nextId = 27;
    const ans = [];
    for(let i = 0, j = 0; i < msg.length; i = j){
        j = msg.length;
        let longest = '';
        while(dict[(longest = msg.substring(i, j))] === undefined) --j;
        ans.push(dict[longest]);
        dict[longest + msg[j]] = dict.nextId++;
    }

    return ans;
}
*/ 