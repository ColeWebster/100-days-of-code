// -- GO Variables -- 
/* Four types of variables  in Go
		int - stores intergers ( whole numbers )
		float32 - stores floating point numbers with decimals ( 19.99 )
		string - stores text
		bool - boolean = true or false
	var variablename type = value
	:= will allow the variable to be inferred from the value input
*/
package main

import "fmt"

func main() {
	var student1 string = "John"
	var student2 = "Jane"
	x := 2

	fmt.Println(student1)
	fmt.Println(student2)
	fmt.Println(x)
}