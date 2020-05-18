<template>
  <Layout>
    <p v-for="(i,index) in 4" :key="index">
      {{index}}) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum magnam similique quo ab, suscipit laudantium omnis necessitatibus alias blanditiis amet dolor accusantium autem deleniti nam quis. Ipsa, quod sint.
    </p>

    <h5 class="mt-5 mb-3">
      Búsquedas actuales (<strong>{{ $page.allJobs.totalCount }}</strong>)
    </h5>
    
    <b-card-group deck>
      <b-card
        v-for="job in jobList"
        :key="job.id"
        :title="job.node.title"
        :sub-title="job.node.date"
        tag="div"
        class="mb-2"
      >
        <b-card-text v-text="job.node.content"></b-card-text>

        <b-button :to="job.node.path" variant="primary">Aplicar</b-button>
      </b-card>
    </b-card-group>
  </Layout>
</template>

<script>
import { BCard, BCardText, BButton, BCardGroup } from 'bootstrap-vue'

export default {
  metaInfo: {
    title: 'Bienvenidos'
  },
  components: {
    BCard,
    BCardText,
    BCardGroup,
    BButton
  },
  computed: {
    jobList() {
      return this.$page.allJobs.edges
    }
  }
}
</script>

<page-query>
query{
  allJobs {
    totalCount
    edges {
      node {
        id
        title
        path
        date(format: "DD MMM, YYYY")
      }
    }
  }
}
</page-query>
