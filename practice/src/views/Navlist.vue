<template>
  <div class="nav_bottom">
    <ul>
      <li>
        <router-link to="/shouye">
          <i class="iconfont">&#xe606;</i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/faxian">
          <i class="iconfont">&#xe616;</i>
          <span>发现</span>
        </router-link>
      </li>
      <li>
        <router-link to="/page">
          <i class="iconfont">&#xe64e;</i>
          <span>分页效果</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <i class="iconfont">&#xe67e;</i>
          <span>我</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navlist",
};
</script>
<style lang='scss' scoped>
// @import url('../assets/scss/main');
.active{
  color:red;
}
</style>