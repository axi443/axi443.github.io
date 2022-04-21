import { defineClientAppEnhance } from "@vuepress/client";
import { addIcons } from "oh-vue-icons";
import {
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  HiMail,
  FaPaw,
  AiCv,
  AiGoogleScholarSquare,
  // home
  RiHomeHeartLine,
  // tags
  PrTags,
  // links
  FaLink,
  // about
  RiFileList3Line,
  // mail
  RiMailCheckLine,
  // github
  RiGithubLine,
  // qq
  CoTencentQq
} from "oh-vue-icons/icons";
import About from "./components/About.vue"

addIcons(
  CoTencentQq,
  RiGithubLine,
  RiMailCheckLine,
  RiFileList3Line,
  FaLink,
  PrTags,
  RiHomeHeartLine,
  // - - - - - - - - -
  FaFortAwesome,
  FaSatelliteDish,
  FaTag,
  OiRocket,
  RiLinkM,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiZhihuLine,
  HiMail,
  FaPaw,
  AiCv,
  AiGoogleScholarSquare
);

export default defineClientAppEnhance(({ app }) => {
  app.component("About", About);
});
