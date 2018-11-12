<template>
  <div class="add-treasury">
    <Navigation />
    <md-app>
      <md-app-content class="add-treasury-container">
        <PageTitle title="Add Tresure" />
        <form @submit.prevent="handleAddTreasureSubmit()">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-70 md-small-size-100">
              <md-field>
                <label>Title</label>
                <md-input v-model="title"></md-input>
              </md-field>
              <froala :tag="'textarea'" :config="froalaConfig" v-model="content"></froala>
            </div>
            <div class="md-layout-item md-size-30 md-small-size-100">
              <md-field>
                <label for="category">Category</label>
                <md-select v-model="category" name="category" id="category">
                  <md-option value="blog">Blog</md-option>
                  <md-option value="snippet">Snippet</md-option>
                </md-select>
              </md-field>
              <md-chips v-model="tags" md-placeholder="Add tags..."></md-chips>
              <md-field>
                <label>Featured image</label>
                <md-file accept="image/*" />
              </md-field>
              <div class="add-treasury-submit-wrapper">
                <md-button type="submit" class="md-dense md-raised md-primary add-treasury-submit">Add Treasure</md-button>
              </div>
            </div>
          </div>
        </form>
      </md-app-content>
    </md-app>
  </div>
  
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg'
import PageTitle from '@/components/PageTitle.vue'
import Navigation from '@/components/Navigation'
export default {
  name: 'add-treasury',
  components: {
    Navigation,
    PageTitle
  },
  data() {
    return {
      title: '',
      content: '',
      category: '',
      tags: [],
      froalaConfig: {
        charCounterCount: false,
        heightMin: 500,
        heightMax: 500
      }
    }
  },
  methods: {
    handleAddTreasureSubmit() {}
  }
}
</script>

<style lang="scss" scoped>
.add-treasury {
  &-container {
    overflow-x: hidden;
  }
  &-submit-wrapper {
    text-align: right;
  }
}
</style>

