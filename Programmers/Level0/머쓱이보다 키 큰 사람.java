class Solution {
    public int solution(int[] array, int height) {
        int count = 0;
        for(int i=0;i<array.length;i++){
            if(array[i]>height){
                count++;
            }
        }
        return count;
    }
}

/* 다른 사람 풀이 - (1)
import java.util.Arrays;

class Solution {
    public int solution(int[] array, int height) {
        return (int) Arrays.stream(array).filter(value -> value > height).count();
    }
}
*/
/* 다른 사람 풀이 - (2)
class Solution {
    public int solution(int[] array, int height) {
        int answer = 0;
        for(int i : array) {
            if(i > height) answer++;
        }
        return answer;
    }
}

*/