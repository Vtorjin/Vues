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
      list: [
        {
          price: "28",
          src: require('../../assets/img/food/1.jpg'),
          info: "",
          id: "21",
        },
        {
          price: "18",
          src: require('../../assets/img/food/2.jpg'),
          id: "22",
          info: "",
        },
        {
          price: "38",
          src: require('../../assets/img/food/3.jpg'),
          id: "23",
          info: "",
        },
        {
          price: "18",
          src: require('../../assets/img/food/4.jpg'),
          id: "24",
          info: "",
        },
        {
          price: "28",
          src: require('../../assets/img/food/5.jpg'),
          id: "25",
          info: "",
        },
        {
          price: "18",
          src: require('../../assets/img/food/6.jpg'),
          id: "26",
          info: "",
        },
        {
          price: "28",
          src: require('../../assets/img/food/7.jpg'),
          id: "27",
          info: "",
        },
        {
          price: "18",
          src: require('../../assets/img/food/8.jpg'),
          id: "28",
          info: "",
        },
        {
          price: "28",
          src: require('../../assets/img/food/9.jpg'),
          id: "29",
          info: "",
        },
        {
          price: "18",
          src: require('../../assets/img/food/10.jpg'),
          id: "30",
          info: "",
        },
        {
          price: "28",
          src: require('../../assets/img/food/8.jpg'),
          id: "31",
          info: "",
        },
        {
          price: "18",
          src: require('../../assets/img/food/12.jpg'),
          id: "32",
          info: "",
        },
        {
          price: "28",
          src: require('../../assets/img/food/13.jpg'),
          id: "33",
          info: "",
        },
        {
          price: "18",
          src: require('../../assets/img/food/14.jpg'),
          id: "34",
          info: "",
        },
        {
          price: "28",
          src: require('../../assets/img/food/1.jpg'),
          id: "35",
          info: "",
        },
        {
          price: "18",
          src: require('../../assets/img/food/5.jpg'),
          id: "36",
          info: "",
        },
        {
          price: "28",
          src: require('../../assets/img/food/6.jpg'),
          id: "37",
          info: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>

</style>