<template>
  <div class="app-container">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css" rel="stylesheet">
    <div class="nav-aside">
      <div class="logo-container">
        <img src="https://via.placeholder.com/50x50?text=Logo" alt="">
      </div>
      <AsideNavigationItem v-for="(navItem, index) of navItems" :key="index" :nav-item="navItem"></AsideNavigationItem>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AsideNavigationItem from "./components/nav/AsideNavigationItem";

export default {
  data() {
    return {
      navItems: [
        {
          icon: 'chart-bar',
          title: 'Bar',
          link: '/bar-chart'
        },
        {
          icon: 'chart-pie',
          title: 'Pie',
          link: '/pie-chart'
        },
        {
          icon: 'chart-donut',
          title: 'Donut',
          link: '/donut-chart'
        },
        {
          icon: 'chart-line',
          title: 'Line',
          link: '/line-chart'
        },
        {
          icon: 'chart-areaspline-variant',
          title: 'Area',
          link: '/area-chart'
        },
        {
          icon: 'chart-scatter-plot',
          title: 'Bubble',
          link: '/bubble-chart'
        }
      ]
    };
  },
  components: {
    AsideNavigationItem
  },
  mounted() {
  }
};
</script>

<style lang="scss">
* {
  font-family: 'Open Sans', sans-serif;
}

.app-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .nav-aside {
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 100%;
    border-right: 1px solid #CCCCCC;
    padding: 15px 5px;

    .logo-container {
      max-width: 100%;
      height: 50px;
      padding-bottom: 15px;
      margin-bottom: 20px;
      border-bottom: 1px solid #CCCCCC;
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 480px;
    padding: 5px;
  }

}
</style>
