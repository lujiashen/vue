<template>
 
      <ul class="footer" :style="{background:bg}">
          <li class="news"><router-link to="/news/newsList">新闻</router-link> </li>
          <li><router-link to="/music/musicList">音乐</router-link></li>
          <li><router-link to="/movie/movieList">菜谱</router-link></li>
          <li class="login"><router-link to="/login/loginList">我的</router-link></li>
      </ul>
  
</template>

<script>

export default {
    
    props: ["bg"]
}
</script>


<style >

    .footer {
        height: 1rem;
        position: fixed;
        width: 100%;
        bottom: 0;
        background:rgb(33,150,243);
        display: flex;
    }
    .footer li {
        color: white;
        flex-grow: 1;
        text-align: center;
        line-height: 1rem;
        float: left;
    }
   
    .footer li a {
        color:#ccc;   
        text-align: center; 
    }
    .footer a.router-link-active {
        color: #fff; 
        
    }
</style>
