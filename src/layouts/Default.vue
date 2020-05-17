<template>
  <div class="wrapper">
    <main-header></main-header>
    <main>
      <b-container class="my-4">
        <slot />
      </b-container>
    </main>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { BButton, BContainer } from 'bootstrap-vue'
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
    BContainer,
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
