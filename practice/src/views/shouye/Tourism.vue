<template>
  <div class="shouyeList">
    <Goods :list="list" />
  </div>
</template>

<script>
import Goods from "../../components/ShowGoods";
export default {
  components: {
    Goods,
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    getList() {
      this.$http.get("/mi/json/app/tourism.json").then((res) => {
        this.list = res.data.list;
      });
    }
  },
  mounted(){
    this.getList();
  }
};
</script>
<style >
</style>