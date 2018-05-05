import Vue from 'vue'
import Router from 'vue-router'
import Dashbord from '@/components/Dashbord'
import MyCruise from '@/components/MyCruise'
import Agents from '@/components/Agents'
import Help from '@/components/Help'
import All from '@/components/All'
import Physical from '@/components/Physical'
import Virtual from '@/components/Virtual'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Dashbord',
      name: 'Dashbord',
      component: Dashbord
    },
    {
      path: '/',
      redirect: '/Dashbord'
    },
    {
      path: '/MyCruise',
      name: 'MyCruise',
      component: MyCruise
    },
    {
      path: '/Agents',
      redirect:'/Agents/Physical'
    },
    {
      path: '/Agents',
      component:Agents,
      children: [
      	 {
          path: 'All',
          component: All
        },
        {
          path: 'Physical',
          component: Physical
        },
        {
          path: 'Virtual',
          component: Virtual
        }
      ]
    },
    {
      path: '/Help',
      name: 'Help',
      component: Help
    }
    
    
  ]
})
