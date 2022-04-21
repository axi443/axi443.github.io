<template>
  <common>
    <template #page>
      <div class="about-profile">
        <div class="about-avatar">
          <img :src="$withBase(pageData.frontmatter.avatar)" />
        </div>
        <div class="about-info">
          <h1 class="name">{{ pageData.frontmatter.name }}</h1>
          <p class="subname">{{ pageData.frontmatter.subname }}</p>
          <div class="sns">
            <div v-for="(link, platform) in LINKS" :key="`sns-${link}`" class="sns-item">
              <a target="_blank" :href="link">
                <v-icon :name="snsIcon(platform)" scale="1.82" />
              </a>
            </div>
            <div class="show sns-item">
              <a class="show-a">
                <v-icon name="co-tencent-qq" scale="1.82" animation="spin"/>
              </a>
              <a>
                <b class="show-b">&nbsp;QQ:1315926581</b>
              </a>
            </div>
            <div v-if="pageData.frontmatter.cv" class="sns-item">
              <a :href="pageData.frontmatter.cv">
                <v-icon name="ai-cv" scale="2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="about-content theme-gungnir-content">
        <content />
      </div>
    </template>
  </common>
</template>

<script setup>
import { pageData } from "@vuepress/client";
import Common from "vuepress-theme-gungnir/lib/client/components/Common.vue";
const qqShow = true;
const LINKS = {
  github: "https://github.com/axi443",
  // linkedin: "",
  // googleScholar: "“,
  // facebook: "https://www.facebook.com/",
  // twitter: "https://www.twitter.com/",
  // qq: `11<img src="/images/home-bg/home-bg-6.jpg"/>`,
  zhihu: "https://www.zhihu.com/people/xiao-tian-zi-zi",
  email: "mailto:chuyi008ban@163.com"
};

const ICONS = {
  github: "ri-github-line",
  // linkedin: "ri-linkedin-box-fill",
  // googleScholar: "ai-google-scholar-square",
  // facebook: "ri-facebook-box-fill",
  // twitter: "ri-twitter-fill",
  // qq: "ri-qq-line",
  zhihu: "ri-zhihu-line",
  email: "ri-mail-check-line"
};

const snsIcon = platform => ICONS[platform];
</script>
<style>
.show .show-b {
  display: none;
}
.show:hover .show-b {
  display: block;
}
</style>
