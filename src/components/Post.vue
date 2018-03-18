<template>
  <div class="post">
    {{ $route.params.id }}
    <img :src="post.image" :v-if="post.image" />
    <div>{{ post.title }}</div>
    <div v-html="md2html"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'post',
  components: {
    
  },
  beforeMount () {
    
  },
  mounted () {
    this.getPost()
  },
  data () {
    return {
      post: {}
    }
  },
  props: {
    
  },
  methods: {
    getPost: function () {
      this.$http.get(`http://localhost:3000/post/${this.$route.params.id}`)
        .then((res) => {
          this.post = res.data
        })
    }
  },
  computed: {
    md2html: function () {
      return marked(this.post.markdown)
    }
  },
  watch: {
    
  }
}
</script>

<style scoped>
.post {
  
}
</style>
