#### 两个进程函数

- `fork()` 函数
	在 LINUX 系统创建一个新进程的唯一方法是使用`fork()`函数.
	- 函数说明
	`fork()`函数用于在一个已知进程中创建一个新进程,新进程被称为子进程,原进程为父进程.自进程继承了父进程整个进程的地址空间,包括进程的上下文、代码段、进程堆栈、内存信息、打开的文件描述符、符号控制设定、进程优先级、进程组号、当前工作目录、根目录、资源限制和控制终端等.子进程相比而言独有的是进程号,资源使用和计时器等.
	父进程的`fork()`函数返回的是创建的子进程的pid值,而子进程执行的`fork()`函数返回的值是0,可以通过这个来区分子进程与父进程.
	`fork()`函数复制了父进程的大部分内容,使得系统开销很大,而且执行速度也不快.
	
	| 所需头文件 | \#include<sys/types.h>/\*提供类型pid\*/</br>\#include<unistd.h> |
	| --- | --- |
	| 函数原型 | pid_t fork(void)  |
	| 函数返回值 | 0:子进程</br>子进程PID(大于0的整数:父进程</br>-1:出错|

- `exec()` 函数
	按照我的理解是,终止当前进程的所有内容,运行选择的进程的内容
	- 函数说明