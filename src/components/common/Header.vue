<template>
    <div class="header" :style="{background:bg}">
        <span class="home" style="margin-left:0.5rem" @click="goHome">首页</span>
        <h2 class="title">
            <slot name="title">默认值</slot>
        </h2>
    </div>
</template>

<script>

export default {
   props:["bg"],
   methods : {
       goHome() {
           this.$router.push("/news/newsList");
       }
   }
}
</script>


<style scoped>
    .header {
        height: 1rem;
        position: fixed;
        width: 100%;
        top: 0;
        background: rgb(33,150,243);
        color: white;
        line-height: 1rem;
        z-index: 999;
    }
    .home {
        color: #fff;
    }
    .title {
        position: absolute;
        top: 50%;
        left:50%;
        transform:translate(-50%,-50%);
        color: #fff;
    }
</style>
