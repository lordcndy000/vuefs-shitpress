<template>
  <div class="navigation">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Shitpress</span>
    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title navigation-title">Shitpress</span>
      </md-toolbar>

      <md-list class="navigation-list">
        <md-list-item class="navigation-list-item">
          <md-icon>view_module</md-icon>
          <router-link to="/dashboard" class="md-list-item-text">
            Dashboard
          </router-link>
        </md-list-item>
        <md-list-item class="navigation-list-item">
          <md-icon>code</md-icon>
          <router-link to="/treasury" class="md-list-item-text">
            Treasury
          </router-link>
        </md-list-item>

      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  props: {},
  data: () => ({
    showNavigation: false
  })
}
</script>

<style lang="scss" scoped>
.navigation {
  &-list {
    &-item {
      a {
        color: inherit;
      }
    }
  }
  .md-drawer {
    max-width: calc(100vw - 125px);
    width: 230px;
  }
}
</style>
