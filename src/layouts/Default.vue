<template>
  <div>
    <main-header></main-header>
    <div class="main">
      <div class="main-container">
        <slot />
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import MainHeader from '~/components/MainHeader'
import MainFooter from '~/components/MainFooter'

export default {
  name: 'DefaultLayout',
  metaInfo: {
    meta: [
      { name: 'description', content: 'Jobs' }
    ]
  },
  components: {
    BButton,
    MainHeader,
    MainFooter
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
