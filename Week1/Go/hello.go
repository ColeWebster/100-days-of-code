// Package declaration and every Go program starts here
package main

import "fmt"

import "rsc.io/quote"

func main() {
	fmt.Println(quote.Go())
}

// Normal function

/* In Go, statements are separated by ending a line (hitting the Enter key) or by a semicolon ";".
 Hitting the Enter key adds ";" to the end of the line implicitly (does not show up in the source code).
 The left curly bracket { cannot come at the start of a line. */

