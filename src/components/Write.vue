<template>
  <div class="write">
    <input v-model="title" placeholder="제목" />
    <input v-moder="image" placeholder="이미지" />
    <textarea v-model="markdown"></textarea>
    <div v-html="md2html"></div>
    <button @click.once="save">저장</button>
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
    save: function () {
      let post = {
        title: this.title,
        image: this.image,
        markdown: this.markdown
      }
      this.$http.post(`http://localhost:3000/post`, post)
        .then((res) => {
          this.$router.push('/') // 글이 저장되면 Home 화면으로 이동
        })
    }
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
