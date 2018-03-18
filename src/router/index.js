import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Write from '@/components/Write'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/write',
      component: Write
    },
    {
      path: '/post/:id',
      component: Post
    }
  ]
})
