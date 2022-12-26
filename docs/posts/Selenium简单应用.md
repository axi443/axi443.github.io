---
layout: Post
title: Selenium简单应用
subtitle: selenium
author: a xi
date: 2022-12-26
useHeaderImage: true
headerImage: /images/home-bg/home-bg-1.jpg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - test
---


# Selenium简单应用（爬取数据）

环境搭建：

```python
1、pip install selenium
2、下载对应“XX浏览器驱动”，解压后的文件放在Python解释器中，（步骤省略...）
```

代码部分：

```python
1、导入使用的模块
import time  #时间模块
from selenium.webdriver import Chrome  #浏览器驱动模块
from selenium.webdriver.chrome.options import Options  #无头浏览器模块
import csv  #csv的读写模块

2、配置无头浏览器参数
opt = Options()
opt.add_argument("--headless")
opt.add_argument("--disbale-gpu")

3、创建一个浏览器对象
web = Chrome(options=opt)  #创建一个浏览器对象
web.get("http://www.xinfadi.com.cn/priceDetail.html")  #用浏览器打开一个网站
time.sleep(3)  # 休息3秒，selenium的缺点就是慢，必须等待上一步完成后才能执行下一步操作，否则容易报错

4、创建一个CSV文件
ex = open("xinfadi_caijia2.csv", mode="w", encoding="utf8")  #打开一个文件
csvwriter = csv.writer(ex)  #设置写入的路径

5、获取表头的xpath，并写入csv文件
xpath_ex = '//*[@id="bbs"]/div/div/div/div[4]/div[1]/div/table/thead/tr'  #运用开发者工具，获取目标信息的xpath
ex_header = web.find_element_by_xpath(xpath_ex).text.split(' ')  #抓取并转换为列表信息
# print(ex_header)  #到这步时可以先测试一下是否能获取到信息
csvwriter.writerow(ex_header)  #将表头写入csv文件

6、运用循环抓取并保存页面信息
num = 0  # 初始化一个页码计数器，用于记录翻页次数
for i in range(0,19803):
    nr_ex = '//*[@id="tableBody"]'  #内容的xpath
    ex_diyiye = web.find_element_by_xpath(nr_ex).text.split(' ')  #提取出内容
    csvwriter.writerow(ex_diyiye)  #写入csv文件
    num = num + 1
    xpath_next = f'//*[@id="layui-laypage-{num}"]/a[7]'  #获取下一页的xpath
    click_next = web.find_element_by_xpath(xpath_next).click()  #定位下一页的xpath
    time.sleep(3)  # 休息3秒

#同上，作用是最后一页的内容的抓取与写入
nr_ex = '//*[@id="tableBody"]'  
ex_diyiye = web.find_element_by_xpath(nr_ex).text.split(' ')  
csvwriter.writerow(ex_diyiye)  

#关闭文件
ex.close()
```

