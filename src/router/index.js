import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
Vue.use(Router)

const router=  new Router({
  mode :'history',  
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld,
      meta : '默认界面'
    },{
      path: '/home',
      name :'home',
      component :Home,
      meta : '主页'
    },
    {
      path: "*",
      redirect :{
        path : '/'
      },
    },
  ],
  scrollBehavior (to,from ,savedPosition){
    console.log(to);
      if(savedPosition){
        return savedPosition;
      }else{
        return {x:0,y:0}
      }
  }
})
router.afterEach((to,from,next)=>{
    document.title = to.meta;    
})
export default router;
