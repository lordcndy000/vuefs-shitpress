<template>
  <div class="treasury">
      <Navigation />
      <Treasure />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Treasure from '@/components/Treasury/Treasure.vue'

export default {
  name: 'treasury',
  components: {
    Navigation,
    Treasure
  }
}
</script>

<style lang="scss" scoped>
</style>
