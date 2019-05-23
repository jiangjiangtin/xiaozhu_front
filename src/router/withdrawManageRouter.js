const reportParent = () => import('../components/common/reportParent')

const withdrawManageRouter = {
  path: '/withdrawManage',
  component: reportParent,
  children: [
    {
      path: 'enableBalanceManage',
      name: 'enableBalanceManage',
      meta: {
        name: '可提现余额管理'
      },
      component: () => import('../components/pages/withdrawManage/enableBalanceManage')
    },
    {
      path: 'tzfe',
      name: 'tzfe',
      meta: {
        name: '2048'
      },
      component: () => import('../components/pages/tzfe/tzfe')
    }
  ]
}

export default withdrawManageRouter
