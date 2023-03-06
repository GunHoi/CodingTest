function solution(record) {
    let list = {};
    for (let i = 0; i < record.length; i++) {
      let uid = record[i].split(' ')[1];
      let name = record[i].split(' ')[2];
      if (name) {
        list[uid] = name;
      }
    }
    let records = [];
  
    for (let i = 0; i < record.length; i++) {
      let action = record[i].split(' ')[0];
      if (action === 'Enter') {
        records.push(`${list[record[i].split(' ')[1]]}님이 들어왔습니다.`);
      } else if (action === 'Leave') {
        records.push(`${list[record[i].split(' ')[1]]}님이 나갔습니다.`);
      }
    }
  
    return records;
  }
  /*
      list객체에 uid와 name을 짝지어주고,
      짝지어진 list를 토대로 Enter와 Leave 상태에 따라 records에 저장
  */

/* 다른 사람 풀이 (1) 
function solution(record) {
    var nick = {}, a = record.map(v => v.split(' '))
    a.slice().reverse().forEach(v => { if (v[2] && !nick[v[1]]) { nick[v[1]] = v[2] } })
    return a.filter(v => { return v[0] !== 'Change' }).map(v => { return v[0] === 'Enter' ? nick[v[1]] + '님이 들어왔습니다.' : nick[v[1]] + '님이 나갔습니다.' })
}
*/

/* 다른 사람 풀이 (2) 
function solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }

    record.forEach((v) => {
        const [state, id, nick] = v.split(' ');

        if(state !== "Change") {
            action.push([state, id]);
        }

        if(nick) {
            userInfo[id] = nick;
        }
    })

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;    
    })
}
*/ 