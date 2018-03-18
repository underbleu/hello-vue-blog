<template>
  <div class="app-header">
    <router-link to="/">블로그</router-link>
    <router-link to="/write">글쓰기</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  components: {
    
  },
  beforeMount () {
    
  },
  mounted () {
    
  },
  data () {
    return {
      
    }
  },
  props: {
    
  },
  methods: {
    
  },
  computed: {
    
  },
  watch: {
    
  }
}
</script>

<style scoped>
.app-header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #eee;
  a {
    margin: 0 20px;
  }
}
</style>
