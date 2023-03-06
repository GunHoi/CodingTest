class Solution {
    public int solution(int n, int k) {
        int service = n/10;
        int sheep = 12000*n;
        int drink = 2000*(k-service);
        
        return sheep+drink;
    }
}