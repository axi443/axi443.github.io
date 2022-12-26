---
layout: Post
title: 20个有用的单行Python代码
subtitle: python
author: a xi
date: 2022-12-26
useHeaderImage: true
headerImage: /images/home-bg/home-bg-1.jpg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - python
---



# 20个有用的单行Python代码

### 1、一行 For 循环

```python
#For循环在一行
mylist = [200, 300, 400, 500]
#正常方式
result = [] 
for x in mylist: 
    if x > 250: 
        result.append(x) 
print(result) # [300, 400, 500]
#一行代码方式
result = [x for x in mylist if x > 250] 
print(result) # [300, 400, 500]
```

### 2、一行 While 循环

```python
#方法 1 Single Statement 
while True: print(1) #infinite 1
#方法 2 多语句
x = 0 
while x < 5: print(x); x= x + 1 # 0 1 2 3 4 5
```

### 3、一行IF Else语句

```python
#if Else 在一行中
#Example 1 if else
print("Yes") if 8 > 9 else print("No") # No
#Example 2 if elif else 
E = 2 
print("High") if E == 5 else print("数据STUDIO") if E == 2 else 
print("Low") # 数据STUDIO 
 
#Example 3 only if
if 3 > 2: print("Exactly") # Exactly
```

### 4、一行合并字典

```python
# 在一行中合并字典
d1 = { 'A': 1, 'B': 2 } 
d2 = { 'C': 3, 'D': 4 }
#方法 1 
d1.update(d2) 
print(d1) # {'A': 1, 'B': 2, 'C': 3, 'D': 4}
#方法 2 
d3 = {**d1, **d2} 
print(d3) # {'A': 1, 'B': 2, 'C': 3, 'D': 4}
```

### 5、一行函数

```python
#函数在一行中
#方法一
def fun(x): return True if x % 2 == 0 else False 
print(fun(2)) # False
#方法2
fun = lambda x : x % 2 == 0 
print(fun(2)) # True 
print(fun(3)) # False
```

### 6、一行递归

```python
# 单行递归
#Fibonaci 单行递归示例
def Fib(x): return 1 if x in {0, 1} else Fib(x-1) + Fib(x-2)
print(Fib(5)) # 8
print(Fib(15)) # 987
```

### 7、一行数组过滤

```python
# 一行中的数组过滤
mylist = [2, 3, 5, 8, 9, 12, 13, 15]
#正常方式
result = [] 
for x in mylist: 
    if x % 2 == 0: 
        result.append(x)
print(result) # [2, 8, 12]
# 单线方式
result = [x for x in mylist if x % 2 == 0] 
print(result) # [2, 8, 12]
```

### 8、一行异常处理

```python
# 一行异常处理
#原始方式
try:
    print(x)
except:
    print("Error")
#单行方式
exec('try:print(x) \nexcept:print("Error")') # 错误
```

### 9、一行列表转字典

```python
# 字典在一行
mydict = ["John", "Peter", "Mathew", "Tom"]
mydict = dict(enumerate(mydict))
print(mydict) # {0: 'John', 1: 'Peter', 2: 'Mathew', 3: 'Tom'}
```

### 10、一行多变量

```python
#多行变量
#正常方式
x = 5 
y = 7 
z = 10 
print(x , y, z) # 5 7 10
#单行方式
a, b, c = 5, 7, 10 
print(a, b, c) # 5 7 10
```

### 11、一行交换值

```python
#换成一行
#正常方式
v1 = 100
v2 = 200
temp = v1
v1 = v2 
v2 = temp
print(v1, v2) # 200 100
# 单行交换
v1, v2 = v2, v1 
print(v1, v2) # 200 100
```

### 12、一行排序

```python
# 在一行中排序
mylist = [32, 22, 11, 4, 6, 8, 12] 
# 方法 1
mylist.sort() 
print(mylist) # # [4, 6, 8, 11, 12, 22, 32]
print(sorted(mylist)) # [4, 6, 8, 11, 12, 22, 32]
```

### 13、一行读取文件

```python
#一行读取文件
#正常方式
with open("data.txt", "r") as file: 
    data = file.readline() 
    print(data) # Hello world
#单行方式
data = [line.strip() for line in open("data.txt","r")] 
print(data) # ['hello world', 'Hello Python']
```

### 14、一行类

```python
# 一行中的类
#普通方式
class Emp: 
    def __init__(self, name, age): 
        self.name = name 
        self.age = age
        emp1 = Emp("云朵君", 22) 
print(emp1.name, emp1.age) # 云朵君 22
#单行方式
#方法 1 带有动态 Artibutes 的 Lambda

Emp = lambda:None; Emp.name = "云朵君"; Emp.age = 22
print(Emp.name, Emp.age) # 云朵君 22

#方法 2 
from collections import namedtuple
Emp = namedtuple('Emp', ["name", "age"]) ("云朵君", 22) 
print(Emp.name, Emp.age) # 云朵君 22
```

### 15、一行分号

```python
# 一行分号
# 例 1 
a = "Python"; b = "编程"; c = "语言"; print(a, b, c)
# 输出
# Python 编程语言
```

### 16、一行打印

```python
# 一行打印
#正常方式
for x in range(1, 5):
    print(x) # 1 2 3 4
#单行方式
print(*range(1, 5)) # 1 2 3 4
print(*range(1, 6)) # 1 2 3 4 5
```

### 17、一行map函数

```python
#在一行中map
print(list(map(lambda a: a + 2, [5, 6, 7, 8, 9, 10])))
# 输出
# [7, 8, 9, 10, 11, 12]
```

### 18、删除列表中第一行中的多个元素

```python
# 删除一行中的Mul元素
mylist = [100, 200, 300, 400, 500]
del mylist[1::2]
print(mylist) # [100, 300, 500]
```

### 19、一行打印图案

```python
# 在一行中打印图案# 
# 正常方式
for x in range(3):
    print('')
# 输出
#   
#单行方式
print('' * 3) #    
print('' * 2) #   
print('' * 1) # 
```

### 20、一行查找质数

```python
# 查找质数
print(list(filter(lambda a: all(a % b != 0 for b in range(2, a)),
                  range(2,20))))
# 输出
# [2, 3, 5, 7, 11, 13, 17, 19]
```

