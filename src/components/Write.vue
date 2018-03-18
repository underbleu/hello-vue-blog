<template>
  <div class="write">
    <input v-model="title" placeholder="제목" />
    <input v-moder="image" placeholder="이미지" />
    <textarea v-model="markdown"></textarea>
    <div v-html="md2html"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'write',
  components: {
    
  },
  beforeMount () {
    
  },
  mounted () {
    
  },
  data () {
    return {
      title: '',
      image: '',
      markdown: ''
    }
  },
  props: {
    
  },
  methods: {
    
  },
  computed: {
    md2html: function () {
      return marked(this.markdown)
    }
  },
  watch: {
    
  }
}
</script>

<style scoped>
.write {
  
}
</style>
