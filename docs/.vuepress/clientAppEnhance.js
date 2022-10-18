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
  CoTencentQq,
  // hand
  FaRegularHandSpock,
  // more
  MdMoreOutlined,
  // more
  MdMoretimeOutlined
} from "oh-vue-icons/icons";
import About from "./components/about.vue"

addIcons(
  MdMoretimeOutlined,
  MdMoreOutlined,
  FaRegularHandSpock,
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
