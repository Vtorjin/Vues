<template>
  <div class="banner" @mouseenter="clear" @mouseleave="again">
    <img
      :src="item.src"
      alt="item.title"
      v-for="(item, i) in img"
      :key="item.id"
      v-show="i == index"
    /> 
    <!-- 小圆点 -->
    <ul class="banner_circle" @>
      <li
        v-for="(item, i) in img"
        :key="item.id"
        :class="i == index ? active : ''"
        @click="index = i"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["img"],
  name: "LunBo",
  data() {
    return {
      index: 0,
      active: "active",
      timer: null,
    };
  },
  computed: {},
  methods: {
    count() {
      if (this.index >= this.img.length - 1) {
        return (this.index = 0);
      }
      this.index++;
    },
    clear() {

      clearInterval(this.timer);
    },
    again() {
      this.timer = setInterval(
        function () {
  
          this.count();
        }.bind(this),
        3500
      );
    },
    mounted() {
      this.timer = setInterval(
        function () {
          this.count();
        }.bind(this),
        3500
      );
    },
    destoryed() {
      this.clear();
    },
  },
};
</script>
 <style scoped>
 
</style>