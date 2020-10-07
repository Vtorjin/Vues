<template>
  <div class="goods">
    <ul>
      <li class="goodList" v-for="item in list" :key="item.id">
        <keep-alive>
          <router-link
            :to="{
              name: 'Details',
              params: {
                id: item.id,
                src: item.src,
                price: item.price,
                info: item.info,
              },
            }"
          >
            <img :src="item.src" alt="图片" />
            <label>
              <b>折扣价:{{ sale(item.price) }}</b>
              <span
                >原价：<del>{{ item.price }}</del></span
              >
            </label>
          </router-link>
        </keep-alive>
        <a>点击图片查看详情</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    sale: function (p) {
      return Math.ceil(parseInt(p) * (Math.random() * 0.2 + 0.6));
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;

  li {
    width: 200px;
    margin-top: 16px;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 160px;
      height: 100px;
    }

    a{
      font-size: 14px;
    }
  }
}

label {
  display: grid;
  place-items: center;
  // grid-template-columns: 100px;
  // background-color: khaki;
  b {
    color: red;
  }
}
</style>