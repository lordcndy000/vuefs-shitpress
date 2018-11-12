<template>
  <div class="treasury">
      <Navigation />
      <md-app>
        <md-app-content>
          <PageTitle title="Treasury" />
          <Treasure />
        </md-app-content>
      </md-app>
      <md-button to="/treasury/add" class="md-fab md-primary md-fab-bottom-right">
        <md-icon>add</md-icon>
      </md-button>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Navigation from '@/components/Navigation.vue'
import Treasure from '@/components/Treasury/Treasure.vue'

export default {
  name: 'treasury',
  components: {
    PageTitle,
    Navigation,
    Treasure
  }
}
</script>

<style lang="scss" scoped>
</style>
