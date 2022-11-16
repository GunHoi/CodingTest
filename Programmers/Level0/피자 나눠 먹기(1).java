class Solution {
    public int solution(int n) {
        int value = n/7, remain = n%7;
        return remain == 0?value:value+1;
    }
}