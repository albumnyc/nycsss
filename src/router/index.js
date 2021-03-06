import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home'
const Notes = r => require.ensure([], () => r(require('../pages/notes.vue')), 'notes');
const Loverecords = r => require.ensure([],()=>r(require('../pages/loverecords.vue')),'loverecords');
const Hehe = r => require.ensure([],()=>r(require('../pages/hehe.vue')),'hehe');
Vue.use(Router)

const router=  new Router({
  mode :'hash',  
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
    },{
      path : '/notes',
      component :Notes,
      meta : '纪念日',
      name : 'notes'
    },{
      name : 'loverecords',
      meta: '恋爱打卡',
      component : Loverecords,
      path: '/loverecords'
    },{
      name : 'hehe',
      meta: '实验内容区域',
      component : Hehe,
      path: '/hehe'
    },{
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
