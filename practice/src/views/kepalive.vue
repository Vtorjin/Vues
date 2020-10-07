<template>
  <div class="cj">
    <button @click.prevent="currentView = 'Food'">美食</button>
    <button @click.prevent="currentView = 'Tour'">景点</button>
    <button @click.prevent="currentView = 'Tourism'">旅游</button>
    <button @click.prevent="currentView = 'Fastfood'">外卖</button>
    <button @click.prevent="currentView = 'Hotel'">住宿</button>
    <button @click.prevent="currentView = 'Movie'">电影</button>
    <div class="container">
      <component :is="currentView"></component>
    </div>
  </div>
</template>

<script>
const Food = () => import("@/views/shouye/Food");
const Hotel = () => import("@/views/shouye/Hotel");
const Tourism = () => import("@/views/shouye/Tourism");
const Tour = () => import("@/views/shouye/Tour");
const Fastfood = () => import("@/views/shouye/Fastfood");
const Activity = () => import("@/views/shouye/Activity");
const Dd = () => import("@/views/shouye/Dd");
const Movie = () => import("@/views/shouye/Movie");
export default {
  components: {
    Food,
    Hotel,
    Tourism,
    Tour,
    Fastfood,
    Movie,
  },
  data() {
    return {
      currentView: "Food",
    };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>

</style>