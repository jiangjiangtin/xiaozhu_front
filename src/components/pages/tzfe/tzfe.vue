<template>
  <div id="tzfe">
    <div class="background">
      <div v-for="row in list" :key="row" class="clearfix">
        <div v-for="col in row" :key="col" class="fl col">{{col}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]
      ]
    }
  },
  method: {

  }
}
</script>

<style lang="scss" scope>
  #tzfe {
    .col {
      padding: 10px
    }
  }
</style>
