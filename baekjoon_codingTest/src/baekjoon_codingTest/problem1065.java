package baekjoon_codingTest;

import java.util.Scanner;

public class problem1065 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		if (n<100) {
			System.out.println(n);
		} else {
			int cnt = 99;
			
			for (int i=100;i<=n;i++) {
				int a = i/100;
				int b = (i%100)/10;
				int c = (i%100)%10;
				
				if(a+c == b*2) {
					cnt+=1;
				}
			}
			System.out.println(cnt);
		}
	}

}
/*
 	등차수열 공식
 	첫번째 + 마지막 = 2번째의 2배이다 (3자리 일 경우 )
 	
	어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 
	등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
	N이 주어졌을 때, 1보다 크거나 같고, 
	N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
	
	100 -> 99개 (1~99)
	110 -> 99
	
	100~ 110까지 안됨 11개 빼면 99개
	
	1자리수 됨.
	2자리수 전부 됨.
	3자리수 부터 고려 필요.
	
	1 -> 1
	210 -> 105
	1000 -> 144
	500 -> 119

	100
	0차이		111
	1차이		123
	2차이		135
	3차이		147
	4차이		159
	
	200		
	-1차이	210
	0차이		222
	1차이		234
	2차이		246
	3차이		258
	
	300
	-1차이	321
	0차이		333
	1차이		345
	2차이		357
	3차이		369
	
	400
	-2차이	420
	-1차이	432
	0차이		444
	1차이		456
	2차이		468
	
	500
	-2차이	531
	-1차이	543
	0차이		555
	1차이		567
	2차이		579
	
	600
	-3차이	630
	-2차이	642
	-1차이	654
	0차이		666
	1차이		678
	
	1000
	0차이		1111
	1차이		1234
	2차이		1357
	
	2000
	0차이		2222
	1차이		2345
	2차이		2468
	
	3000
	0차이		3333
	1차이		3456
	2차이		3579
	
	4000
	-1차이	4321
	0차이		4444
	1차이		4567	
	
	
	10000
	0차이		11111
	1차이		12345
	2차이		13579
	
	100000
	0차이		111111
	1차이		123456
 */