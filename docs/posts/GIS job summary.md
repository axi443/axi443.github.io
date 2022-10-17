---
layout: Post
title: GIS job summary
subtitle: supermap、QGIS
author: a xi
date: 2022-10-17
useHeaderImage: true
headerImage: /images/home-bg/home-bg-6.jpg
headerMask: rgb(140, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - GIS
---


# GIS

excel生成好所需数据，包含经、纬度；
supermap，导入hb_county.shp，导入excel，叠加图层，小铅笔把经纬度点信息移动到底图(河北省)范围内；导出CSV格式；

------

导入.tif文件，转栅格，导入hb_county.shp文件， 坐标系2000
工具箱-栅格-重分级，无值-9999，                改名为了区分 级数
空间分析-栅格统计-区域统计，选择hb_county，SMid，总和，

------

将tif文件转 第二个坐标系，只为得到 每个像素点的面积，例200米 = 153
  属性表，追加两列， 
第一列：每个像素点所占面积，第二列： Sum_value * 第一列 换算单位自行补充
   选中-右击-更新列                      双字段运算

------

hb_county属性表 工具箱-追加列-用SMid，把总面积加进去，几级就加几列；最后导出excel数据，负数的改为0.

------


发布：新建，导入给的，转栅格，转坐标系。
裁剪：导入tif，导入shp，转栅格，转坐标系，工具箱-栅格裁剪，参数设置 设置方式 第三个(对象区域), 补充：只裁剪某个市，需要重新计算范围。

------

QGIS：导入shp，导入excel(图层-添加图层-文本数据图层)；
      相交： 顶部工具栏-矢量；
      先选择shp与excel相交，字段选择；再用 上一次相交好的相交 与另一个shp相交，最后导出第二次相交即可。