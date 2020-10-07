<template>
  <div class="content">
    <div class="back">
      <button @click.prevent="back">返回</button>
      <button @click.prevent="backInit">返回首页</button>
    </div>
    <div class="details">
      <img :src="$route.params.src" alt="图片" />
      <p>
        <b>原价为{{$route.params.price }}</b>
        <span> 现在大甩卖 </span>
      </p>
      <p>{{ $route.params.info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      price: "",
      info: "",
      src: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.price = this.$route.params.price;
    this.info = this.$route.params.info;
    this.src = this.$route.params.src;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    backInit() {
      this.$router.push("/shouye");
    },
    reload() {},
  },
};
</script>
<style scoped lang="scss" scoped>
.content {
  width: 90%;
  margin: 0 auto;
  .details {
    grid-row: 2;
    grid-column: 1/9;
    margin: 0 auto;

    img {
      width:50%;
    }
    b {
      color: red;
    }
  }
}

.back {
  width: 200px;
  margin-left: 6%;
  button {
    padding: 8px 16px;
    background-color: rgb(199, 199, 107);
    border-radius: 20px;
    border: 1px solid #ddd;
    cursor: pointer;
  }
}
</style>