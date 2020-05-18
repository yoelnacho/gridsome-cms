<template>
  <Layout>
    <h1 v-text="$page.jobs.title" />
    <div v-html="$page.jobs.content"/>
  </Layout>
</template>

<page-query>
query($id: ID!){
  jobs(id: $id){
    title
    content
  }
}
</page-query>
