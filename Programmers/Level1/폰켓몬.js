function solution(nums) {
    const choices = (nums.length)/2;
    const set = [...new Set(nums)];
    const setNum = set.length;
    
    if(choices<setNum)
        return choices;
    else
        return setNum;
}
/*최대한 다양한 폰켓몬을 뽑아야하므로, 중복을 제거하고
뽑을 수 있는 최대 수(N/2) 보다 중복을 제거한 폰켓몬 수가 많다면 (choices < setNum)
최대 N/2 종류만큼 뽑을 수 있고,
아니라면 중복을 제거한 폰켓몬 수 전부를 가져오면된다.
*/