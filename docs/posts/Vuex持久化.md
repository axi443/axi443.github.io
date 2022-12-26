---
layout: Post
title: Vuex持久化
subtitle: vuex
author: a xi
date: 2022-12-26
useHeaderImage: true
headerImage: /images/home-bg/home-bg-2.jpg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - front end
---

# Vuex持久化

在我们页面登录的时候会有一个凭证token，一般这个token,我们是要存入本地的，所以，封装一下localStorage本地存储的三个方法

```js
// 基于localstorage封装
export function setToken (key, data) {
  return window.localStorage.setItem(key, data)
}
export function getToken (key) {
  return window.localStorage.getItem(key)
}
export function removeToken (key) {
  return window.localStorage.removeItem(key)
}
```

**实现逻辑**

其实就是将数据存入Vuex一份，再存入本地一份，优先获取本地token

```
vuex是基于内存的,存取虽然很快,但是页面刷新就会丢失
ls是基于磁盘的,存取虽然慢,但是刷新不会丢失
正是因为ls不会刷新丢失的特点
所以我们vuex+ls就享受vuex的存取速度快和ls的持久化
```

```js
// vuex的模块user.js
import { getToken, setToken } from '@/utils/ls'
export default {
  namespaced: true,
  state: ()=>({
    token: getToken('TOKEN') || ''  //优先使用本地token
  }),
  mutations: {
    settoken( state, token ){
      state.token = token
      setToken( 'TOKEN', token )
    }
  },
  actions: {}
}
```

```js
// 引入
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 组合模块的配置项
  modules: {
    user
  },
  getters
})

export default store
```

```js
// 调用
methods:{
  initMap(){ ...  
  },
  setToken(){
    this.$store.commit('user/settoken','sjlkdjlajidhwigi123');
  }
},
mounted(){
  this.initMap()
  this.setToken()
}
```

