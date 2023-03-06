package baekjoon_codingTest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class problem9461 {
	/*
	 * 0,1, 1, 	1,	 2,	 2,	   3,	 4,	   5,	  7,	 9,	 12,   16,   21,   28,   37
                        2+0   2+1   3+1   4+1    5+2    7+2  9+3  12+4  16+5  21+7  28+9  
	 * 
	 * P(N) = P(N-1) + P(N-5)
	 */
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int count = scan.nextInt(); // 반복 횟수
		scan.nextLine();
		
		for (int i=0;i<count;i++) {
			int num = scan.nextInt(); // P(N)의 N
			List<Long> dp = new ArrayList<>(Arrays.asList(0l,1l,1l,1l,2l));
			if(num<5) {
				System.out.println(dp.get(num));
			}
			else {
				for(int j=5;j<=num;j++) {
					dp.add(j,dp.get(j-1) + dp.get(j-5));
				}
				System.out.println(dp.get(dp.size()-1));
			}
		}
	}
	
	/* 재귀 방법
	public static long getP(int num) {
		if (num < 5) {
			if (num == 1 || num == 2 || num==3) {
				return 1;
			} else if (num == 4) {
				return 2;
			} else {
				return 0;
			} 
		} else {
			return getP(num-1)+getP(num-5);
		}
	}
	*/
}