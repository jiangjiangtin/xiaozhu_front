<template>
  <div id="header-info">
    <div class="container">
      <div class="head clearfix">
        <p class="fl invalid-text text-small">吼吼~小猪钱钱后台管理</p>
        <a href="http://www.baidu.com" target="blank" class="fl invalid-text text-pd text-small">我的小猪</a>
        <a href="http://www.baidu.com" target="blank" class="fr invalid-text text-small text-pd">抢手券</a>
      </div>
      <div class="search-box clearfix">
        <el-form inline>
          <el-form-item class="fl">
            <img src="../../assets/logo4.png">
          </el-form-item>
          <el-form-item class="search">
            <el-input size="large" placeholder="请输入要搜索的淘口令" class="search-input">
              <el-button slot="append" class="search-button">搜索</el-button>
            </el-input>
            <el-button type="text" style="color: red" @click="xiezi()">鞋子</el-button>
            <el-button type="text" style="color: blue" @click="nvzhuang()">女装</el-button>
            <el-button type="text" style="color: red" @click="tongzhuang()">童装</el-button>
            <el-button type="text" style="color: blue" @click="nanzhuang()">男装</el-button>
            <el-button type="text" style="color: red" @click="caizhuang()">彩妆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  methods: {
    caizhuang () {
      alert('彩妆')
    },
    nanzhuang () {
      alert('男装')
    },
    tongzhuang () {
      alert('童装')
    },
    nvzhuang () {
      alert('女装')
    },
    xiezi () {
      alert('鞋子')
    }
  }
}
</script>

<style lang="scss" scope>
@import '../../styles/common.scss';
@import '../../styles/mixin.scss';

#header-info {
  position: fixed;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-bottom: 30px;
  border-bottom: 1px solid $light-border-color;
  background-color: #f2f2f2;
  z-index: 10;

  .headers {
    padding: 0 366px;
  }

  .search {
    margin-top: 10px;
  }
}
</style>
