import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import GettingStarted1 from '../views/Tutorial/GettingStarted1.vue';
import DeclarativeRendering2 from '../views/Tutorial/DeclarativeRendering2.vue';
import AttributeBindings3 from '../views/Tutorial/AttributeBindings3.vue';
import EventListeners4 from '../views/Tutorial/EventListeners4.vue';
import FormBindings5 from '../views/Tutorial/FormBindings5.vue';
import ConditionalRendering6 from '../views/Tutorial/ConditionalRendering6.vue';
import ListRendering7 from '../views/Tutorial/ListRendering7.vue';
import ComputedProperty8 from '../views/Tutorial/ComputedProperty8.vue';
import LifecykleAndTemplatedRefs9 from '../views/Tutorial/LifecykleAndTemplatedRefs9.vue';
import Watchers10 from '../views/Tutorial/Watchers10.vue';
import Components11 from '../views/Tutorial/Components11.vue';
import Props12 from '../views/Tutorial/Props12.vue';
import Emits13 from '../views/Tutorial/Emits13.vue';
import Slots14 from '../views/Tutorial/Slots14.vue';
import NiceConfeti15 from '../views/Tutorial/NiceConfeti15.vue';
import GetUser from '../components/GetUser.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tutorial/1',
      name: 'GettingStarted1',
      component: GettingStarted1
    },
    {
      path: '/tutorial/2',
      name: 'DeclarativeRendering2',
      component: DeclarativeRendering2
    },
    {
      path: '/tutorial/3',
      name: 'AttributeBindings3',
      component: AttributeBindings3
    },
    {
      path: '/tutorial/4',
      name: 'EventListeners4',
      component: EventListeners4
    },
    {
      path: '/tutorial/5',
      name: 'FormBindings5',
      component: FormBindings5
    },
    {
      path: '/tutorial/6',
      name: 'ConditionalRendering6',
      component: ConditionalRendering6
    },
    {
      path: '/tutorial/7',
      name: 'ListRendering7',
      component: ListRendering7
    },
    {
      path: '/tutorial/8',
      name: 'ComputedProperty8',
      component: ComputedProperty8
    },
    {
      path: '/tutorial/9',
      name: 'LifecykleAndTemplatedRefs9',
      component: LifecykleAndTemplatedRefs9
    },
    {
      path: '/tutorial/10',
      name: 'Watchers10',
      component: Watchers10
    },
    {
      path: '/tutorial/11',
      name: 'Components11',
      component: Components11
    },
    {
      path: '/tutorial/12',
      name: 'Props12',
      component: Props12
    },
    {
      path: '/tutorial/13',
      name: 'Emits13',
      component: Emits13
    },
    {
      path: '/tutorial/14',
      name: 'Slots14',
      component: Slots14
    },
    {
      path: '/tutorial/15',
      name: 'NiceConfeti15',
      component: NiceConfeti15
    },
    {
      path: '/github/getuser',
      name: 'GetUser',
      component: GetUser
    }
  ]
})

export default router
