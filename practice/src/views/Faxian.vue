<template>
  <div class="content">
    <h1>这是发现组件 <strong>404：not found!!!!</strong></h1>
    <div class="container">
      <LunBo :img="img" />
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
      img: [
        {
          src: require("../assets/img/banner/faxian/1.jpg"),
          title: "图片1",
          id: 12,
        },
        {
          src: require("../assets/img/banner/faxian/2.jpg"),
          title: "图片1",
          id: 11,
        },
        {
          src: require("../assets/img/banner/faxian/3.jpg"),
          title: "图片1",
          id: 10,
        },
        {
          src: require("../assets/img/banner/faxian/4.jpg"),
          title: "图片1",
          id: 9,
        },
        {
          src: require("../assets/img/banner/faxian/5.jpg"),
          title: "图片1",
          id: 8,
        },
        {
          src: require("../assets/img/banner/faxian/6.jpg"),
          title: "图片1",
          id: 7,
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>