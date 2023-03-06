class Solution {
    public String solution(String my_string) {
        StringBuffer sb = new StringBuffer(my_string);
        String reverse = sb.reverse().toString();
        return reverse;
    }
}
/* 다른 사람 풀이 
import java.util.*;

class Solution {
    public String solution(String my_string) {
        StringBuilder sb = new StringBuilder();
        sb.append(my_string);
        sb.reverse();

        return sb.toString();
    }
}
*/
/* 다른 사람 풀이 
class Solution {
    public String solution(String my_string) {
        String answer = "";

        for(int i=my_string.length()-1; i>=0; i--){
            answer+=my_string.charAt(i);
        }

        return answer;
    }
}

*/