<template>
  <md-app>
    <md-app-content>
      <div class="md-headline">Treasury</div>
      <Treasures />
    </md-app-content>
  </md-app>
</template>

<script>
import Treasures from './Treasures.vue'

export default {
  name: 'Treasure',
  components: {
    Treasures
  }
  // props: {
  //   msg: String
  // }
}
</script>

<style lang="scss" scoped>
</style>
