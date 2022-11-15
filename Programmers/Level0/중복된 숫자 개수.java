class Solution {
    public int solution(int[] array, int n) {
        int count = 0;
        for(int i=0;i<array.length;i++){
            if(array[i]==n){
                count++;
            }
        }
        return count;
    }
}
/* 다른 사람 풀이
class Solution {
    public int solution(int[] array, int n) {
        int answer = 0;
        for (int num : array) {
            if (num == n) answer++;
        }
        return answer;
    }
}
*/
/* 다른 사람풀이 (2) - java8 의 stream 이용
import java.util.Arrays;

class Solution {
    public int solution(int[] array, int n) {
        return (int) Arrays.stream(array).filter(i -> i == n).count();
    }
}
*/