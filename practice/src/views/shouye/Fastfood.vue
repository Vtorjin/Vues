<template>
  <div class="shouyeList">
    <h1>这里是外卖组件</h1>
     <button @click.prevent="back">返回</button>
      <button @click.prevent='backInit'>返回首页</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    backInit(){
      this.$router.push('/shouye');
    }
  },
};
</script>
<style >
</style>