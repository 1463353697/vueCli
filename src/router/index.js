import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import hiOne from '@/components/hiOne'
import hiTwo from '@/components/hiTwo'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode:'history',//hush
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      } 
    },
    {
      path: '/zhangjie',
      name: 'HelloWorld',
      components:{
        default: HelloWorld,
        left: Hi2,
        right: Hi1
      } 
    },
    {
      path:'/params/:newsId/:newsTitle',
      component:params,
      beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        
        next(true);//不加参数的时候和加参数true是一样的效果
        //next({path:'/'})会跳转到根目录下面

      }

    },{
      path:'/goHome',
      redirect:'/'

    },{
      path:'/goParams/:newsId/:newsTitle',
      redirect:'/params/:newsId/:newsTitle'

    },{
      path:'hi1',
      component: Hi1,
      alias:'/zhangjie'
    },{
      path:'*',//404
      component: error
    },{
    	path: '/Hi',
    	component: Hi,
      children:[
        {path: '/',name:'Hi',component: Hi},
        {path: 'hiOne',name:'hiOne',component: hiOne},
        {path: 'hiTwo',name:'hiTwo',component: hiTwo}
      ]     
    }
  ]
})
