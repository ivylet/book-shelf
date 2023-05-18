---
title: 线性回归
---
数据集
```python 
url = "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"  
names = ['花萼-length', '花萼-width', '花瓣-length', '花瓣-width', 'class']  
dataset = pd.read_csv(url, names=names)

# 下面我们提取数据集中花瓣宽度与花瓣长度数据，将花瓣数据分为训练数据与测试数据，  
# 训练数据用于训练线性回归模型，测试数据用于检测我们的模型的准确率。  
# 最终我们要达到的效果是：输入花瓣宽度，通过模型预测花瓣宽度。  
  
X = dataset["花瓣-length"]  
Y = dataset["花瓣-width"]  
X = X.values.reshape(len(X), 1)  
Y = Y.values.reshape(len(Y), 1)
```

```python
# 将数据集拆分数据集成训练集、测试集  
from sklearn.model_selection import train_test_split  
  
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=0)  
  
# 线性回归模型  
regression = LinearRegression()  

regression.fit(X_train, Y_train)  # 拟合  
# LinearRegression(copy_X=True, fit_intercept=True, n_jobs=1, normalize=False)  
print(regression.intercept_)  # 截距，以下画线结束  
print(regression.coef_)  # 斜率，回归系数  
# 反映了x对y影响的大小  
# 以下画线结束，表示模型自身的属性  
# 区别于用户设置的参数  
# array([ 0.2])  
regression.predict([[6]])  # 对未知点进行预测，结果为数组  
# array([ 1.6])  
  
import matplotlib.pyplot as plt  
  
plt.scatter(X_train, Y_train, color='red')  
plt.plot(X_train, regression.predict(X_train), color='green')  
plt.xlabel("Iris-length")  
plt.ylabel("Iris-width")  
plt.title("This is train dataset-kzb")  
plt.show()  
  
plt.scatter(X_test, Y_test, color='blue')  
plt.plot(X_train, regression.predict(X_train), color='green')  
plt.xlabel("Iris-length")  
plt.ylabel("Iris-width")  
plt.title("This is test dataset-kzb")  
plt.show()
```
