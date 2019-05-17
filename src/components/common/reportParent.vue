<template>
  <div id="report-parent">
    <el-menu class="left-menu">
      <el-submenu index='withdrawManage'>
        <template slot="title">结算管理</template>
        <el-menu-item index="enableBalanceManage">
          <router-link :to="{ name: 'enableBalanceManage' }">提现管理</router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#report-parent {
  font-size: 14px;
  .content {
    padding: 10px 20px 20px 200px;
  }
  .header-class {
    color: red;
  }
}
</style>
