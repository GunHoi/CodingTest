package baekjoon_codingTest;
import java.util.Scanner;

public class problem14501 {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		scan.nextLine();
		int [] usedTime = new int[n];
		int [] earnMoney = new int[n];
		for (int i=0;i<n;i++) {
			usedTime[i] = scan.nextInt();
			earnMoney[i] = scan.nextInt();
		}
		int [] arr = new int[n+1];
		
		for (int i=0; i<n; i++) {
			if (i + usedTime[i] <= n) {
				//날짜가 범위를 넘어가지 않는 경우
				// (오늘 + 소요시간) 후 금액 = (오늘 + 소요시간) 후 금액 vs 오늘까지 금액 + 오늘 일한 금액
				arr[i + usedTime[i]] = Math.max(arr[i + usedTime[i]], arr[i] + earnMoney[i]);
			}
			// 현재 경우의 수가 0일 수 있기 때문에 이전의 최대값을 넣어주어야 한다.
			// 해당 날짜에 일할 수 없다면, 이전까지 일한 최대 값을 넣어주어야 한다.
			// 다음 날 일하지 못하더라도, 최소 오늘까지 일한 만큼은 일할 수 있으므로 그 값을 넣어준다.
			arr[i+1] = Math.max(arr[i+1], arr[i]);
		}
		System.out.println(arr[n]);
	}
}

/* 
	현재까지의 최대 금액을 구해야 한다.
	방법 : (오늘 + 소요시간) 후 금액 = (오늘 + 소요시간) 후 금액   vs   오늘까지 금액 + 오늘 일한 금액
	                    즉, 오늘(i일에) 일하지 않은 금액     vs   오늘 일한 금액
	<input>
	10
	
	일  소요	돈
	0	5 	50	arr[0+5] = Math.max(arr[0+5], arr[0]+50);	-> arr[5] = arr[0]+50 (0+50)
	1	4 	40  arr[1+4] = Math.max(arr[1+4], arr[1]+40);	-> arr[5] = arr[1+4] (50)
	2	3 	30	arr[2+3] = Math.max(arr[2+3], arr[2]+30); 	-> arr[5] = arr[2+3] (50)
	3	2	20	arr[5] = 50
	4	1	10	arr[5] = 50
	5	1 	10	arr[5+1] = Math.max(arr[5+1], arr[5]+10);	-> arr[6] = arr[5]+10 (50+10)
	6	2 	20	arr[6+2] = Math.max(arr[6+2], arr[6]+20); 	-> arr[8] = arr[6]+20 (60+20), arr[7]은 60을 이전값인 60을 넣어줌
	7	3 	30	arr[7+3] = Math.max(arr[7+3], arr[7]+30);   -> arr[10] = arr[7]+30 (90)
	8	4 	40
	9	5 	50

	<output>
	45
 */