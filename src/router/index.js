import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from "@/components/news/News"
import NewsList from "@/components/news/NewsList"
import NewsDetail from "@/components/news/NewsDetail"
import NewsHistory from "@/components/news/NewsHistory"
import NewsJoke from "@/components/news/NewsJoke"
import Login from "@/components/login/Login"
import LoginList from "@/components/login/LoginList"
import LoginDetail from "@/components/login/LoginDetail"
import LoginTest from "@/components/login/LoginTest"
import LoginReg from "@/components/login/LoginReg"
import Music from "@/components/music/Music"
import MusicList from "@/components/music/MusicList"
import Movie from "@/components/movie/Movie"
import MovieList from "@/components/movie/MovieList"




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
     
    }, {
      path: "/news",
      component: News,
      children : [{
        path:"newsList",
        component: NewsList
      },{
        path:"newsDetail",
        component: NewsDetail
      },{
        path:"newsHistory",
        component : NewsHistory
      },{
        path: "newsJoke",
        component: NewsJoke
      }]
    }, {
      path: "/login",
      component : Login,
      directive:"/login/loginList",
      children:[{
        path:"loginList",
        component: LoginList
      },{
        path:"loginDetail",
        component: LoginDetail
      },{
        path:"loginTest",
        component: LoginTest
      },{
        path: "loginReg",
        component: LoginReg
      }]
    },{
      path: "/music",
      component : Music,
      children: [{
        path:"musicList",
        component:MusicList
      }]
    },{
      path: "/movie",
      component: Movie,
      children: [{
        path:"movieList",
        component:MovieList
      }
      ]
    }
  ]
})
