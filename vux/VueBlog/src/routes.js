import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
import singleBlog from './components/singleBlog.vue'
import vux001 from './components/vux001'

export default[
  { path: '/', component: showBlogs },
  { path: '/add', component: addBlog },
  { path: '/blog/:id', component: singleBlog },
  { path: '/vux001', component: vux001 }
]
