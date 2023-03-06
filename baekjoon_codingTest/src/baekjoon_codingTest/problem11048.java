package baekjoon_codingTest;
import java.util.Scanner;

public class problem11048 {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int m = scan.nextInt();
		int[][] arr = new int[n][m];
		
		// 입력
		for (int i=0;i<n;i++) {
			for (int j=0;j<m;j++) {
				arr[i][j] = scan.nextInt();
			}
		}
		
		for (int i=0;i<n;i++) {
			for (int j=0;j<m;j++) {
				if (j == 0) {						// 1번째 열 (j=0일 때) 
					if(i == 0) {
						continue;
					} else {
						arr[i][j] += arr[i-1][j];		//위 의 값과의 합
					}
				} else if (i == 0) {				// 1번째 행 (i=0일 때)
					arr[i][j] += arr[i][j-1];		// 이전 값과의 합
				} else if (j < m) {
					if (arr[i-1][j] >= arr[i][j-1]) {	// 위 > 왼
						arr[i][j] += arr[i-1][j];
					} else {
						arr[i][j] += arr[i][j-1];
					}
				}
			}
//			printArr(arr, n, m);
		}
		System.out.println(arr[n-1][m-1]);
	}
	
	public static void printArr(int[][] arr, int n, int m) {
		System.out.println("----------------");
		for(int i=0;i<n;i++) {
			for(int j=0;j<m;j++) {
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}
	}
}
//	d:아래 이동
//	r:오른쪽 이동
//	\:대각선 이동 (d,r 둘다 0이면)
//	3 4
//	
//	1 2 3 4
//	0 0 0 5
//	9 8 7 6
//	
//	=> 31 (ddrrr)
//  d 나 r 이동은 사탕수를 단순 덧셈
//  \ 이동은 \갈 장소의 위, 왼쪽을 비교해서 더 큰 값과 덧셈
//  
//	1  3  6  10      -> 쭉 더해주고
//	1  3  6  15      -> 1번째 값은 위의 값과의 합, 2번 째 값 부터는 위의 값 vs 이전 값 해서 더 큰 값과 합
//	10 18 25 31      -> 위와 동일
// 