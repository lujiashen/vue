<template>
    <div class="hello">
        <div class="top">
            <i>Proudly News</i>
        </div>
       <img src="../assets/img/HupuBBS_171208191332-1242822577.png" alt="">
       <div class="bottom">
            <button @click="enter">进入新闻</button>
       </div>
    </div>
     
 
</template>

<script>
export default {
 methods: {
   enter() {
     this.$router.push("/news/newsList");
   }
 },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html {
      height: 100%;
  }
  body {
    height: 100%;
  }
    img {
      height: 100%;
      
    }
    .top,.bottom {
      line-height: 1rem;
      text-align: center;
      height: 1rem;
      background:black;
      color: white;
      width: 100%;
    }
    .bottom button {
      width: 1rem;
      height: 1rem;
      color: black;
      position: absolute;
      border: 1px solid #ccc;
      bottom: 1rem;
      right: 0.1rem;
      border-radius: 50%;
      
    }
</style>
