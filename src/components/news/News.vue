<template>
    <div class="news">
        <common-header bg="rgb(63,81,181)">
            <span slot="title">新闻首页</span>
        </common-header>
        <ul class="choose">
            <li ><router-link to="/news/newsList">体育新闻</router-link></li>
            <li ><router-link to="/news/newsHistory">历史的今天</router-link></li>
            <li><router-link to="/news/newsJoke">每日背单词</router-link></li>
         </ul>
        <router-view>
            
        </router-view>

        <common-footer bg="rgb(63,81,181)">

        </common-footer>
    </div>
   
</template>


<script>
import CommonHeader from "../common/Header"
import CommonFooter from "../common/Footer"
export default {
  components : {
      CommonHeader,
      CommonFooter
  },
  methods : {
     
  }
}
</script>

<style scoped>
    .news {
        margin: 1rem 0;
    }
    .choose {
        width: 100%;
        height: 0.5rem;
        display: flex;
    }
    .choose li {
        width: 0;
        flex-grow: 1;
        background: #ccc;
        
        border-right: 1px solid white;
        text-align: center;
        cursor: pointer;
    }
    .choose li a {
        color: black;
    }
    .choose li a.router-link-active {
        color: yellow;
    }
    
</style>
