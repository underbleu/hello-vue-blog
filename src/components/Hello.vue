<template>
  <div class="hello">
    <div v-for="post in postList">
      <img :src="post.image" v-if="post.image" />
      <router-link :to="`/post/${ post._id }`">
        {{ post.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  components: {
    
  },
  beforeMount () {
    
  },
  mounted () {
    this.getList()
  },
  data () {
    return {
      postList: []
    }
  },
  props: {
    
  },
  methods: {
    getList: function () {
      this.$http.get(`http://localhost:3000/post`)
        .then((res) => {
          console.log(res)
          this.postList = res.data
        })
    }
  },
  computed: {
    
  },
  watch: {
    
  }
}
</script>

<style scoped>
.hello {
  
}
</style>
