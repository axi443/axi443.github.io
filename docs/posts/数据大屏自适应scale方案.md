---
layout: Post
title: 数据大屏自适应scale方案
subtitle: 大屏自适应
author: a xi
date: 2022-12-26
useHeaderImage: true
headerImage: /images/home-bg/home-bg-1.jpg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - front end
---

# 数据大屏自适应-scale 方案

无需适配 rem 单位

### React

```js
	/*
      JS部分
    */
       //数据大屏自适应函数
    const handleScreenAuto = () => {
        const designDraftWidth = 1920;//设计稿的宽度
        const designDraftHeight = 960;//设计稿的高度
        //根据屏幕的变化适配的比例
        const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
            (document.documentElement.clientWidth / designDraftWidth) :
            (document.documentElement.clientHeight / designDraftHeight);
        //缩放比例
        (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
    }

    //React的生命周期 如果你是vue可以放到mountd或created中
    useEffect(() => {
        //初始化自适应  ----在刚显示的时候就开始适配一次
        handleScreenAuto();
        //绑定自适应函数   ---防止浏览器栏变化后不再适配
        window.onresize = () => handleScreenAuto();
        //退出大屏后自适应消失   ---这是react的组件销毁生命周期，如果你是vue则写在deleted中。最好在退出大屏的时候接触自适应
        return () => window.onresize = null;
    }, [])


```

```html
	/*
      HTML部分
    */
    <div className="screen-wrapper">
        <div className="screen" id="screen">

        </div>
    </div>
```

```css
	/*
      CSS部分  --除了设计稿的宽高是根据您自己的设计稿决定以外，其他复制粘贴就完事
    */
  .screen-root {
    height: 100%;
    width: 100%;
    .screen {
        display: inline-block;
        width: 1920px;  //设计稿的宽度
        height: 960px;  //设计稿的高度
        transform-origin: 0 0;
        position: absolute;
        left: 50%;
    }
  }
```

**将上面 JS 部分的代码复制到大屏的页面中，然后在 id 为 screen 中绘制大屏，即可完成效果。**

### Vue

```js
    /**
    js部分
    */
    mounted(){
        //初始化自适应  ----在刚显示的时候就开始适配一次
        handleScreenAuto();
        //绑定自适应函数   ---防止浏览器栏变化后不再适配
        window.onresize = () => handleScreenAuto();
    },
    deleted(){
        window.onresize = null;
    },
    methods: {
        //数据大屏自适应函数
        const handleScreenAuto = (): void => {
            const designDraftWidth = 1920;//设计稿的宽度
            const designDraftHeight = 960;//设计稿的高度
            //根据屏幕的变化适配的比例
            const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
                (document.documentElement.clientWidth / designDraftWidth) :
                (document.documentElement.clientHeight / designDraftHeight);
            //缩放比例
            (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
        }
    }

```

```vue
    /* 
    html部分 
    */
    <template>
    <div className="screen-wrapper">
        <div className="screen" id="screen"></div>
    </div>
    </template>
```

```css
	/*
      CSS部分  --除了设计稿的宽高是根据您自己的设计稿决定以外，其他复制粘贴就完事
    */
   <style>
         .screen-root {
    height: 100%;
    width: 100%;
    .screen {
        display: inline-block;
        width: 1920px;  //设计稿的宽度
        height: 960px;  //设计稿的高度
        transform-origin: 0 0;
        position: absolute;
        left: 50%;
        }
    }
   <style>
```

**将上述生命周期和 methods 中的代码复制，然后在 id 为 screen 的 div 中编写数据大屏即可。**

### 原理

```js
问题是:为什么，使用以上方法可以实现自适应。
const handleScreenAuto = () => {
        const designDraftWidth = 1920;//设计稿的宽度
        const designDraftHeight = 960;//设计稿的高度
        //根据屏幕的变化适配的比例
        const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
            (document.documentElement.clientWidth / designDraftWidth) :
            (document.documentElement.clientHeight / designDraftHeight);
        //缩放比例
        (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
    }

//designDraftWidth / designDraftHeight；这两个属性，叫做:设计稿宽高。

//scale属性：英文直译:比例。

//如何计算缩放比例
const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
                (document.documentElement.clientWidth / designDraftWidth) :
                (document.documentElement.clientHeight / designDraftHeight);
```

scale 就是拿出 **当前的电脑屏幕宽度像素（1440）除以当前屏幕高度像素（900）** 去和我们的设计稿宽度像素（1920）除以设计稿高度（960）做一个比较。

如果当前屏幕比例<设计稿比例。那么我们需要缩放的比例就是屏幕宽度除以设计稿宽度

如果当前屏幕比例>设计稿比例。那么我们需要缩放的比例就是屏幕高度除以设计稿高度

那么 1440/900 = 1.6 。1920/960 = 2

因为 1.6 < 2。（当前屏幕比例小于设计稿比例）

所以我们需要缩放的比例是:屏幕宽度除以设计稿宽度 = 1440/1920 = 0.75。

```js
1920 * 960 的像素无法在1440 * 900像素中完全显示的原因是 1440 * 900无法完全展示超过自身的像素点。那么，我们只需要将当前视图整体✖我们刚刚算出来的缩放比例（0.75）。就可以让1440 * 900的屏幕去容纳我们的大屏了。

1920 * 0.75 === 1440；960 * 0.75 = 720。

经过缩放以后，原本1920 * 960 的大屏就可以在1440 * 900中展示。
```

> 值得注意的是，在退出大屏的时候，最好执行一下 **\*window.onresize = null\***。因为这种自适应主要是为数据大屏准备的。它并不适所有场景。如果是项目的其他内容需要自适应（比如表格表单页）。建议使用栅格化系统。

### demo

```html
/* html */

<div className="screen-wrapper">
  <div className="screen" id="screen">
    <div className="demo-root">
      <header>头部</header>
      <main>
        <div className="demo-left"></div>
        <div className="demo-center"></div>
        <div className="demo-right"></div>
      </main>
      <footer>底部</footer>
    </div>
  </div>
  <footer className="large-footer"></footer>
</div>
```

```css
/*
css
*/
.screen-wrapper {
  height: 100%;
  width: 100%;
  .screen {
    display: inline-block;
    width: 1920px;
    height: 960px;
    transform-origin: 0 0;
    position: absolute;
    left: 50%;
    .demo-root {
      header {
        width: 1920px;
        height: 200px;
        background: rgba(53, 150, 206, 0.3);
        font-size: 40px;
        text-align: center;
        line-height: 200px;
      }
      main {
        display: flex;
        height: 660px;
        div {
          width: 640px;
          height: 100%;
        }
        .demo-left {
          background: rgba(206, 52, 154, 0.3);
        }
        .demo-center {
          background: rgba(13, 30, 179, 0.3);
        }
        .demo-right {
          background: rgba(64, 163, 6, 0.849);
        }
      }
      footer {
        width: 100%;
        height: 100px;
        font-size: 40px;
        text-align: center;
        line-height: 100px;
        background: rgba(19, 211, 115, 0.3);
      }
    }
  }
}
```

```js
		/*
        js  ---react
    */

       //数据大屏自适应函数
    const handleScreenAuto = (): void => {
        const designDraftWidth = 1920;//设计稿的宽度
        const designDraftHeight = 960;//设计稿的高度
        //根据屏幕的变化适配的比例
        const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
            (document.documentElement.clientWidth / designDraftWidth) :
            (document.documentElement.clientHeight / designDraftHeight);
        //缩放比例
        (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
    }

    //React的生命周期 如果你是vue可以放到mountd或created中
    useEffect(() => {
        //初始化自适应  ----在刚显示的时候就开始适配一次
        handleScreenAuto();
        //绑定自适应函数   ---防止浏览器栏变化后不再适配
        window.onresize = () => handleScreenAuto();
        //退出大屏后自适应消失   ---这是react的组件销毁生命周期，如果你是vue则写在deleted中。最好在退出大屏的时候接触自适应
        return () => window.onresize = null;
    }, [])
```

```js
    /*
        js  ---vue
    */
      mounted(){
        //初始化自适应  ----在刚显示的时候就开始适配一次
        handleScreenAuto();
        //绑定自适应函数   ---防止浏览器栏变化后不再适配
        window.onresize = () => handleScreenAuto();
    },
    deleted(){
        window.onresize = null;
    },
    methods: {
        //数据大屏自适应函数
        const handleScreenAuto = (): void => {
            const designDraftWidth = 1920;//设计稿的宽度
            const designDraftHeight = 960;//设计稿的高度
            //根据屏幕的变化适配的比例
            const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
                (document.documentElement.clientWidth / designDraftWidth) :
                (document.documentElement.clientHeight / designDraftHeight);
            //缩放比例
            (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
        }
    }
```

### 坑

1. **当缩放比例过大时候，字体会有一点点模糊，就一点点。**
2. **当缩放比例过大时候，事件热区会偏移。**

**解：**
第一个问题它只有在缩放真的很极端情况下才会出现那种让人难以接受的模糊；第二个问题的出现条件比第一个问题还极端，日常使用没问题。
