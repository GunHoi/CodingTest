function solution(a, b) {
    const day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const diffDate = new Date('2016-'+a+'-'+b).getTime()-new Date('2016-01-01').getTime();
    let date = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
    return day[date%7];
}

/* 다른 사람 풀이 (1) 
function getDayName(a,b){
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay()
    return arr[day];
}
Date.prototype.getDay()
getDay() 메서드는 주어진 날짜의 현지 시간 기준 요일을 반환합니다. 0은 일요일을 나타냅니다. 

*/
/* 다른 사람 풀이 (2) 
function getDayName(a,b){
    var dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;
  if(a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
    return dayList[daySum % 7];
}
*/