import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/view/Money.vue'
import Label  from '@/view/Label.vue'
import Statistics  from '@/view/Statistics.vue'
import NotFound  from '@/view/NotFound.vue'
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'root',
    redirect:'/money'
  },
  {
    path:'/money',
    name:'money',
    component:Money
  },
  {
    path:'/label',
    name:'label',
    component: Label
  },
  {
    path:'/statistics',
    name:'statistics',
    component: Statistics
  },
  {
    path:'*',
    name:'notFound',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
