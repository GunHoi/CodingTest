class Solution {
    public int solution(int number, int limit, int power) {
        int answer = 0;
        for(int j=1;j<=number;j++){
            int cnt = countNumber(j);
            if(cnt>limit){
                answer += power;
            }else{
                answer += cnt;
            }
        }
        return answer;
    }
    public int countNumber(int number){
        int count = 0;
        for (int i = 1; i * i <= number; i++) {
            if (i * i == number){
                count++;
            } 
            else if (number % i == 0){
                count += 2;
            } 
        }
        return count;
    }
}