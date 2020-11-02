import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Student from "../components/Student";
import User from "../components/User";
import UserAdd from "../components/UserAdd";
import UserEdit from "../components/UserEdit";
Vue.use(Router)
//路由规则
export default new Router({
  routes: [
    {path: '/', redirect:'/home'},
    {path: '/home', component:Home},
    {path: '/student', component:Student},
    {path: '/user', component:User,
      children:[
        {path: 'add', component:UserAdd},
        {path: 'edit',component:UserEdit},
      ]

    },
  ]
})
