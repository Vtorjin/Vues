<template>
  <div class="shouyelist">
    <h1>这里是景点组件</h1>
    <button @click.prevent="back">返回上一步</button>
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