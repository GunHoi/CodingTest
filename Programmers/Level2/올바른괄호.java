class Solution {
	static boolean solution(String s) {
        int count = 0;
        for(int i=0;i<s.length();i++) {
	        if(s.charAt(i)=='('){
	            count+=1;
	        }else{
                count-=1;
                if(count<0){
                    return false;
                }
	        }
        }
        if(count==0){
            return true;
        }else{
            return false;
        }
    }
}