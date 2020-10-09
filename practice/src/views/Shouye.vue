<template>
  <div class="content">
    <!--导航模块 -->
    <router-link
      :to="item.to"
      class="gallery"
      v-for="(item, i) in categary"
      :key="i"
      :tag="'div'"
    >
      <i
        class="iconfont"
        v-html="item.classList"
        :style="{ color: item.color }"
      ></i>
      <span>{{ item.name }}</span>
    </router-link>

    <div class="container">
      <LunBo :img="img" />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import LunBo from "../components/LunBo";
export default {
  components: {
    LunBo,
  },
  data() {
    return {
      categary: [
        {
          to: "/shouye/food",
          name: "美食",
          classList: "&#xe6da;",
          color: "#D2691E",
        },
        {
          to: "/shouye/tourism",
          name: "旅游",
          classList: "&#xe647;",
          color: "#7EC0EE",
        },
        {
          to: "/shouye/hotel",
          name: "住宿",
          classList: "&#xe61e;",
          color: "#00CD00",
        },
        {
          to: "/shouye/movie",
          name: "电影",
          classList: "&#xe67d;",
          color: "#0A0A0A",
        },
        {
          to: "/shouye/activity",
          name: "娱乐",
          classList: "&#xe7f1;",
          color: "#ff9933",
        },
        {
          to: "/shouye/fastfood",
          name: "外卖",
          classList: "&#xe615;",
          color: "#f60",
        },
        {
          to: "/shouye/dd",
          name: "打车",
          classList: "&#xe609;",
          color: "#663366",
        },
        {
          to: "/shouye/tour",
          name: "景点",
          classList: "&#xe645;",
          color: "#B3EE3A",
        },
      ],
      img: [
        {
          src: require("../assets/img/banner/shouye/7.jpg"),
          title: "图片",
          id: 1,
        },
        {
          src: require("../assets/img/banner/shouye/8.jpg"),
          title: "图片",
          id: 2,
        },
        {
          src: require("../assets/img/banner/shouye/9.jpg"),
          title: "图片",
          id: 3,
        },
        {
          src: require("../assets/img/banner/shouye/10.jpg"),
          title: "图片",
          id: 4,
        },
        {
          src: require("../assets/img/banner/shouye/11.jpg"),
          title: "图片",
          id: 5,
        },
        {
          src: require("../assets/img/banner/shouye/12.jpg"),
          title: "图片",
          id: 6,
        },
      ],
    };
  },
  methods: {
    getList() {
      this.$http.get("/mi/json/app/food.json").then((res) => {
      });
    },
  },
  mounted() {

  },
};
</script>
<style lang="scss" scoped>
</style>