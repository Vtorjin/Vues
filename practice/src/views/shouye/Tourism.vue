<template>
  <div class="shouyeList">
    <Goods :list="list"/>
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
      list: [
        {
          price: "2888",
          src: require("../../assets/img/tourism/1.jpg"),
          id: "41",
          info: "",
        },
        {
          price: "3000",
          src: require("../../assets/img/tourism/2.jpg"),
          id: "42",
          info: "",
        },
        {
          price: "4288",
          src: require('../../assets/img/tourism/3.jpg'),
          id: "43",
          info: "",
        },
        {
          price: "4999",
        "src": require('../../assets/img/tourism/4.jpg'),
          id: "44",
          info: "",
        },
        {
          price: "4558",
        "src": require('../../assets/img/tourism/5.jpg'),
          id: "45",
          info: "",
        },
        {
          price: "2528",
         "src": require('../../assets/img/tourism/1.jpg'),
          id: "46",
          info: "",
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    backInit() {
      this.$router.push("/shouye");
    },
  },
};
</script>
<style >
</style>