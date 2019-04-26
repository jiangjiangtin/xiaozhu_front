<template>
  <div id="app">
    <Head/>
    <div class="main-content">
      <transition name="fade" mode="out-in">
        <Parent/>
      </transition>
    </div>
  </div>
</template>

<script>
import Head from '@/components/headinfo/headinfo'
import Parent from '@/components/common/parent'

export default {
  name: 'App',
  components: {
    Head,
    Parent
  }
}
</script>

<style lang="scss" scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .main-content {
    padding-top: 130px;
  }
}
</style>
