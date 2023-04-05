---
title: 排序算法
---
[1.0 十大经典排序算法 | 菜鸟教程](https://www.runoob.com/w3cnote/ten-sorting-algorithm.html)
## 常用排序算法
- 冒泡排序
- 选择排序
- 插入排序
- 希尔排序
- 归并排序
- 快速排序
- 堆排序
- 基数排序
- 桶排序
- 计数排序
## 排序算法的稳定性
#### 什么是稳定性？
稳定的算法是在排序后，相同排序属性的元素预期的前后顺序是已知的，不稳定的排序算法是未知的，即有可能是稳定算法的顺序，也有可能不是。
如果一个排序算法是稳定的，那么对于两个数值相同的元素而言，它们的相对位置是不变的。这对于只考虑排序属性的排序而言是无意义的，因为该排序是需要考虑排序属性的前后问题。但是如果排序的每个元素含有其他属性，这些属性需要保持一定的前后顺序，例如在排序含有姓名与年龄属性的用户时（待排序的用户是按照姓氏首字母的顺序排列），按照用户年龄排序，但是需要保证排序后相同年龄的用户前后顺序依旧是按照姓氏首字母来排，那么就需要保证排序算法的稳定性。
### 什么排序算法是稳定的？
稳定的排序算法如果细节未处理好就会变成不稳定的排序算法，而不稳定的排序算法得出的结果就是不稳定的。
稳定的排序算法有：
直接插入排序、冒泡排序、归并排序、基数排序
不稳定的排序算法：
希尔排序、选择排序、堆排序、快速排序
## 冒泡排序
#### 基本思想
重复走访要排序的数列，一次比较两个相邻的数字大小，如果不符合顺序就交换，交换后移动到下一位进行比较。遍历遍历完一次数组后，重新从头操作，直到没有任何一对数字需要比较。  
#### 代码实现  
```cpp  
void buble_sort(vector<int>& array){  
	int len = array.size();  
	int flag = 0;  //定义标志位,判断是否已经排好。
	for(int i = 0;i < len - 1;++i){  
		for(int j = 0;j < len - 1;++j){  
			if(array[j] > array[j+1]){  
				array[j] ^= array[j+1];  
				array[j+1] ^= array[j];  
				array[j] ^= array[j+1];// 交换  
				flag = 1;//如果有交换则证明排序未结束。  
			}  
		}  
		if(flag == 0) break;//一次遍历中无交换则证明排序已完成。  
		else flag = 0;  
	}  
}  
```
#### 时空损耗  
时间复杂度  
-   平均时间复杂度  
	O(n^2)
-   最好情况  
	O(n)，刚好就是预期的顺序。
-   最坏情况  
	O(n^2)，刚好就是反着的顺序。
空间复杂度  
O(1)，只使用了循环所需要的变量。    
## 选择排序
-   基本思想  
    首先在数组中找最小（大）的元素，找到了放到数组起始位置，然后开始在除去起始位置的数组中寻找第二小（大）的元素，然后放到第二位置，如此重复直到最后一个位置。
## 插入排序
## 希尔排序
## 归并排序
## 快速排序
#### 基本思想
快速排序采用了分治算法的思想，即分而治之。如果要排序一个数组，我可以先随意挑选选一个基准值（通常为数组的第一个元素，因为数组第一个元素一般是一般情况下都有的，取值方便），然后把比它大的放左边，比它小的放右边，然后这个问题就变成了基准值左边的小数组的排序和基准值右边的小数组的排序。然后我们可以对两个小数组进行快速排序，如此重复。
#### 代码实现
```cpp
int Paritition1(int A[], int low, int high){
	int pivot = A[low]; //设定基准值
	while (low < high){
		while (low < high && A[high] >= pivot){
			--high;
		}
		A[low] = A[high];
		while (low < high && A[low] <= pivot){
			++low;
		}
		A[high] = A[low];
	}
	A[low] = pivot;
	return low;
}//以基准来划分两边的数组。
void QuickSort(int A[], int low, int high){ //快排母函数
	if (low < high){
		int pivot = Paritition1(A, low, high);
		QuickSort(A, low, pivot - 1);
		QuickSort(A, pivot + 1, high);
	}
}
```
## 堆排序
## 基数排序
## 桶排序
## 计数排序