---
title: Python装饰器
---
## Python装饰器
为什么要用装饰器？
装饰器用于修改函数的功能，有利于让代码简短并且利于维护。例如我们要给一些函数加上权限检查和日志记录等功能，如果没有装饰器则需要对每一个函数进行修改。如果使用了装饰器，那么我们只需要定义权限检查函数好日志记录函数，然后在需要进行功能增强的函数上加上装饰标识就可以了。
举例：
```python
def select_data():
	print("I am checking permission!")
	print("Permission allowed!")
	print("selecting data!")
	print("writing log!")
def delete_data():
	print("I am checking permission!")
	print("Permission allowed!")
	print("deleting data!")
	print("writing log!")
```
在这两个函数中出现了大量的重复代码，如果需要进行权限检查和日志写入的函数增多，那么重复代码会更多。
```python
def check_permission(func):
	@wrap(func)
	def check():
		print("I am checking permission!")
		print("Permission allowed!")
		func()
		print("writing log!")
	return check
@check_permission
def select_data():
	print("selecting data!")
@check_permission
def delete_data():
	print("deleting data!")
```
使用装饰器在代码量很大的情况下可以有效减少代码量。其中`@wrap(func)`是用于修改使用了装饰器函数后的函数指向问题，即使用了装饰器后该函数指向的还是原函数，而非装饰器函数。
