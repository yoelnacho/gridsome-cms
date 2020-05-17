<template>
  <Layout>
    <p v-for="(i,index) in 10" :key="index">
      {{index}}) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum magnam similique quo ab, suscipit laudantium omnis necessitatibus alias blanditiis amet dolor accusantium autem deleniti nam quis. Ipsa, quod sint.
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Bienvenidos'
  }
}
</script>
