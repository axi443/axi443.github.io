<template>
  <div class="box">
    <div id="prompt" v-if="show">
      <div class="modal">
        <div class="modal-header">
          {{ modalTitle }}
        </div>
        <div class="modal-content">
          <input
            type="text"
            placeholder="请输入"
            v-model="inputValue"
            ref="getfocus"
            @keyup.enter="okHandle"
          />
        </div>
        <div class="modal-footer">
          <button class="btn" @click="cancelHandle">取消</button>
          <button class="btn blue" @click="okHandle">确定</button>
        </div>
      </div>
    </div>
    <div id="cover" v-if="showCower"></div>
    <div class="iframe" v-if="!showCower">
      <a href="/blog/resume.pdf" target="_blank"
        ><button>点击此处查看/下载源文件</button></a
      >
      <br />
      <b>或点击下方路径</b>
      <iframe
        width="80%"
        height="90%"
        frameborder="0"
        scrolling="no"
        :src="srcPdf"
      ></iframe>
    </div>
    <!-- <div class="resume-content theme-gungnir-content">
    <content v-if="!showCower"> </content>
  </div> -->
    <common />
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import common from "vuepress-theme-gungnir/lib/client/components/Common.vue";

const show = ref(true);
const showCower = ref(true);
const modalTitle = ref("请输入访问密码");
const inputValue = ref("");
const srcPdf = ref("/blog/resume.pdf");
const getfocus = ref(null);
const loadJs = (src) => {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  document.body.appendChild(script);
};
const cowerShowHandle = () => {
  showCower.value = true;
  var cower = document.getElementById("cover");
  cower.style.display = "block";
  cower.style.height = document.body.clientHeight + "px";
};
const cowerHideHandle = () => {
  var cower = document.getElementById("cover");
  showCower.value = false;
  cower.style.display = "none";
};
const okHandle = () => {
  console.log("点击确定");
  var pwd = md5("test");
  console.log(pwd);
  if (md5(inputValue.value) == pwd) {
    setTimeout(() => {
      alert("密码正确，欢迎浏览！");
    }, 0);
    show.value = !show.value;
    cowerHideHandle();
  } else {
    setTimeout(() => {
      alert("密码不正确，请正确输入密码！");
    }, 0);
  }
};
const cancelHandle = () => {
  console.log("点击取消");
  var bin = window.confirm(
    "正确输入密码后方可进入。\n点击确定继续输入密码，点击取消将关闭网页！"
  );
  if (!bin) {
    window.history.go(-1);
  } else {
    nextTick(() => {
      getfocus.value.focus();
    });
  }
};
onMounted(() => {
  loadJs("https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.18.0/js/md5.js");
  confirm("访问此页面需输入密码！确定要访问吗？")
    ? true
    : (window.location.href = window.location.href);
  show.value = true;
  cowerShowHandle();
  nextTick(() => {
    getfocus.value.focus();
  });
  window.onload = function () {
    //屏蔽键盘事件
    document.onkeydown = function () {
      var e = window.event || arguments[0];
      //F12
      if (e.keyCode == 123) {
        return false;
        //Ctrl+Shift+I
      } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
        //Shift+F10
      } else if (e.shiftKey && e.keyCode == 121) {
        return false;
        //Ctrl+U
      } else if (e.ctrlKey && e.keyCode == 85) {
        return false;
      } else if (e.ctrlKey && e.keyCode == 83) {
        // e.preventDefault();
        // e.returnValue = false;
        return false;
      }
    };
    //屏蔽鼠标右键
    document.oncontextmenu = function () {
      return false;
    };
    //禁止选中文字
    document.onselectstart = function () {
      return false;
    };
    document.oncopy = function () {
      return false;
    };
  };
});
</script>

<style>
.box {
}
.iframe {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  height: 1000px;
}
.iframe button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}
.iframe button:hover {
  background-color: #3e8e41;
}
.iframe button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.iframe a {
  display: inline-block;
}
.iframe iframe {
  display: block;
}
#cover {
  background: #111111;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  filter: alpha(opacity=30);
  opacity: 0.8;
  display: none;
  z-index: 2;
}
#prompt {
  border-radius: 8px;
  width: 350px;
  height: 190px;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;
}
.modal {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  height: 190px;
}
.modal-header {
  color: #333333;
  border-radius: 6px 6px 0 0;
  padding: 20px;
  font-weight: bolder;
  font-size: 16px;
}
.modal-content {
  padding: 20px;
  padding-top: 10px;
}
.modal-content input {
  display: inline-block;
  width: 300px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
}
.modal-footer {
  padding: 15px 18px 0 0;
  text-align: right;
}
.modal-content input:focus {
  border: 1px solid #36a4fd;
  outline: none;
}
.btn {
  border: 1px solid #d1d1d1;
  border-radius: 6px;
  background-color: #f7f7f7;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#f7f7f7), to(#f2f2f2));
  background: -moz-gradient(linear, 0 0, 0 100%, from(#f7f7f7), to(#f2f2f2));
  background: -o-gradient(linear, 0 0, 0 100%, from(#f7f7f7), to(#f2f2f2));
  background: -ms-gradient(linear, 0 0, 0 100%, from(#f7f7f7), to(#f2f2f2));
  height: 28px;
  padding: 0 20px;
  cursor: pointer;
  line-height: 28px;
  display: inline-block;
  color: #000;
  margin-right: 5px;
  outline: none;
  opacity: 0.6;
}
.blue {
  border: 1px solid #36a4fd;
  background-color: #36a4fd;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#2f7de3), to(#36a4fd));
  background: -moz-gradient(linear, 0 0, 0 100%, from(#2f7de3), to(#36a4fd));
  background: -o-gradient(linear, 0 0, 0 100%, from(#2f7de3), to(#36a4fd));
  background: -ms-gradient(linear, 0 0, 0 100%, from(#2f7de3), to(#36a4fd));
  color: #ffffff;
  margin-left: 5px;
  opacity: 1;
}
</style>
