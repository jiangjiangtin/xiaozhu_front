import Vue from 'vue'
import Router from 'vue-router'
import withdrawManageRouter from './withdrawManageRouter'

Vue.use(Router)
const Parent = () => import('../components/common/parent')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/pig',
      component: Parent,
      children: [
        {
          path: 'list',
          meta: {
            title: '全部券'
          },
          component: () => import('../components/pages/ticket')
        }
      ]
    },
    withdrawManageRouter
  ]
})

export default router
