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
      img: [],
    };
  },
  methods: {
    getList() {
      this.$http.get("/mi/json/app/faxianImg.json").then((res) => {
        this.img = res.data.img;
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
<style scoped>
</style>