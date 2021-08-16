import Vue from "vue";
import App from "./App.vue"
import BarChart from "./views/BarChartView";
import VueRouter from 'vue-router';
import PieChart from "./views/PieChart";
import DonutChart from "./views/DonutChart";
import LineChart from "./views/LineChart";
import AreaChart from "./views/AreaChartView";
import BubbleChart from "./views/BubbleChart";

const routes = [
  {
    path: '/bar-chart',
    component: BarChart
  },
  {
    path: '/pie-chart',
    component: PieChart
  },
  {
    path: '/donut-chart',
    component: DonutChart
  },
  {
    path: '/line-chart',
    component: LineChart
  },
  {
    path: '/area-chart',
    component: AreaChart
  },
  {
    path: '/bubble-chart',
    component: BubbleChart
  }
];

const router = new VueRouter({
  routes
})

Vue.use(VueRouter);

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
