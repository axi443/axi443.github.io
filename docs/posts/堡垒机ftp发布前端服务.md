---
layout: Post
title: 堡垒机ftp发布前端服务
subtitle: xshell、ftp、docker
author: a xi
date: 2022-10-17
useHeaderImage: true
headerImage: /images/home-bg/home-bg-1.jpg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - deployment
---



## 堡垒机ftp——发布前端服务

------

* 进入堡垒机链接ftp，切换为 **图形登录**

* 进入目录，删除上个版本的包

* 将上个版本的文件包改名——yzt-frontend_bak20210709， 加***\*当前日期\****

* 上传要部署的文件

* 将dockerfile 和nginx配置文件放入最新上传的包的根目录

  ***\*切换字符登录\****
  
* 进入上传包的yzt-frontend目录下

* 命令 docker build -t yzt-frontend:v1.7 . 版本号依次递增，***\*保持最新\****

* 等待构建完成，用docker images查看是否构建成功

* docker ps 查看当前运行的容器；找到yzt-frontend 输入停止命令 docker stop id，

  删除该容器命令 docker rm id

  ***\*然后以最新的镜像去启动一个新容器\****

* 查找启动命令history | grep docker

* 输入docker run -d --name yzt-frontend -p 80:80 --restart=always yzt-frontend:v1.7 启动即可，镜像版本号同步改为新镜像的版本号

  启动完成后 docker ps 查看是否启动，可用 docker logs -f 容器id 查看启动日志，堡垒机ftp上可保留最近包以作备份 

  ------

  #### 总体思路：上传—构建—停止—删除—启动