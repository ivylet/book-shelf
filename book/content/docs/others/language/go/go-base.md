---
title: Go语言基础
---

## 简单程序
```go
package main
import "fmt"
func main(){
	fmt.Println("Hello World!")
}
```


## 变量
变量声明后必须使用，声明后不使用在编译时会报错！
### 变量的声明与赋值
```go
package main  
  
import (  
   "fmt"  
)  
  
func main() {  
   var quantity int  
   var length, width float64  
   var customerName string  
   quantity = 2  
   customerName = "Sofia"  
   length, width = 1.4, 2.1  
   fmt.Println(customerName)  
   fmt.Println("has ordered", quantity, "sheets")  
   fmt.Println("each with an area of")  
   fmt.Println(length*width, "square meters")  
   fmt.Printf("%d\n", quantity)  
   fmt.Printf("%s\n", customerName)  
   fmt.Printf("%f", length)  
  
}
```
其中Printf()与Println()两者打印不同，前者像C语言中的printf格式化打印，后者更像Java中的 System.out.println直接打印且换行。
#### 变量声明
```go
var quantity int
var length
```
#### 变量赋值
### 命名规则
## 函数
go语言的函数可以有多个返回值，比如：```
```go
file,err := os.Open(myfile.txt)
reader,err := bufio.NewReader(os.Stdin)
intput,err := reader.ReadString('\n')
```
如果函数执行出现异常，则会返回给`err`变量。

函数名第一位大写则证明可以在其他包中引用该包中的这个函数。