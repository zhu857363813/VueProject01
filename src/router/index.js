import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import register from '../components/register.vue'
import Login from '../components/Login.vue'
import userinfo from '../components/userinfo.vue'
import article from '../components/Article.vue'
import Select from '../components/Select.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {path: '/', component: Select ,meta:{
      keepalive: true
    }},
    {path: '/register', component: register},
    {path: '/Login', component: Login},
    {path: '/userinfo', component: userinfo,meta:{istoken:true}},
    {path: '/article/:id', component: article},
    {path: '/Home', component: Home}
  ],
})
router.beforeEach((to,from,next) => {
  if(!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true){
    router.push('/login')
    return
  }
  next()
})

export default router



//router.beforeEach((to,form,next){
//  if(localStorage.getItem('token') || localStorage.getItem('id')){
//    next()
//  }else {
//    router.push('/login')
//  }
//})
