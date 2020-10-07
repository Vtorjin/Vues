<template>
  <div id="app">

    <keep-alive>
      <router-view />
    </keep-alive>
    <navlist v-show="$route.name!='Details'" />

  </div>
</template>

<script>
import navlist from "./views/Navlist.vue";
export default {
  name: "App",
  components: {
    navlist,
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto 0;

}

</style>
