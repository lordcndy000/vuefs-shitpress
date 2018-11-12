<template>
  <div class="dashboard">
      <Navigation />
      <md-app>
        <md-app-content>
          <PageTitle title="Dashboard" />
          
        </md-app-content>
      </md-app>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'dashboard',
  components: {
    PageTitle,
    Navigation
  }
}
</script>

<style>
</style>
