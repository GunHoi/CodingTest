class Solution {
    public String solution(String my_string, String letter) {
        int idx = my_string.indexOf(letter);
        while(true){
            my_string = my_string.substring(0,idx)+my_string.substring(idx+1);
            idx = my_string.indexOf(letter);
            if(idx==-1){
                break;
            }
        }
        return my_string;
    }
}
/* 다른 사람 풀이 
class Solution {
    public String solution(String my_string, String letter) {
        String answer = "";

        answer = my_string.replace(letter, "");

        return answer;
    }
}
*/