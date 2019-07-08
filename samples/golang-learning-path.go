package main
import "fmt"
func main(){
	// 幫自己找問題，從無到有的把它解決
	// 1. 讓使用者輸入兩個數字，做加法，輸出
	var n1 int
	var n2 int
	fmt.Println("輸入兩個數字，得到加法結果")
	fmt.Scanln(&n1)
	fmt.Scanln(&n2)
	fmt.Println(n1+n2)
	// 2. 練習基本迴圈
	fmt.Println("練習基本迴圈，印出 0 ~ 3")
	for i:=0;i<4;i++{
		fmt.Println(i)
	}
	// 3. 練習函式，寫一個加法的函式
	fmt.Println("練習簡單的函式呼叫")
	fmt.Println(add(3,4))
}
// 函式：函式如何定義，參數，回傳值要怎麼寫
func add(n1 int, n2 int) int {
	return n1+n2
}