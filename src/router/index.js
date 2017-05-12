import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import Index from '@/pages/index'
import Lists from '@/pages/lists'
import Order from '@/pages/order'
import My from '@/pages/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
    	path: '/lists',
    	name: 'lists',
    	component: Lists
    },
    {
    	path: '/order',
    	name: 'order',
    	component: Order
    },
    {
    	path: '/my',
    	name: 'my',
    	component: My
    }
  ]
})
