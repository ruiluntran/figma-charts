<template>
  <router-link class="aside-nav-item" :to="navItem.link"
               v-slot="{href, navigate,isExactActive}" custom>
    <a :href="href" @click="navigate" :class="[isExactActive && 'router-link-exact-active']">
      <div class="icon">
        <i class="mdi" :class="'mdi-' +navItem.icon"></i>
      </div>
      <div class="title">
        {{ navItem.title }}
      </div>
    </a>
  </router-link>
</template>

<script>
export default {
  name: "AsideNavigationItem",
  props: ['navItem']
}
</script>

<style lang="scss" scoped>

.aside-nav-item {
  text-align: center;
  margin-bottom: 30px;
  cursor: pointer;
  color: #CCCCCC;
  text-decoration: none;

  &:hover {
    color: #333333;
  }

  .icon {
    font-size: 26px;
  }

  .title {
    margin-top: 4px;
    font-size: 10px;
  }
}

.router-link-exact-active {
  color: #333333;
}
</style>
