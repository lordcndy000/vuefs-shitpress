<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@include md-register-theme(
  'default',
  (
    primary: $primary,
    // The primary color of your application
      accent: $secondary// The accent or secondary color
  )
);
@import '~vue-material/dist/theme/all';
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}
</style>
