<template>
    <div class="login-list">
        <div class="head">
            <img src="../../assets/logo.png" alt="">
                <span style="margin: 0.5rem">
                    <router-link to="/login/loginTest">登录</router-link>
                   
                </span>
               
        </div> 
        <div class="middle">
            <p>签名消失不见了！！！！！</p>
            <ul class="list">
                <li>
                    <router-link to=""><img src="../../../static/img/78c2883f69caadc7b42919e73f97d86c.jpg" alt=""></router-link>
                    <p>浏览记录</p>
                </li> 
                <li>
                    <router-link to=""><img src="../../../static/img/932d18c0078a255d1f1ac38ca27af856.jpg" alt=""></router-link>
                    <p>收藏</p>
                </li>                
                <li>
                    <router-link to=""><img src="../../../static/img/b3b5eb348950d7bc0e233d906427baaa.jpg" alt=""></router-link>
                    <p>消息</p>
                </li>                
                <li>
                    <router-link to=""><img src="../../../static/img/u=1836683126,1609025400&fm=27&gp=0.jpg" alt=""></router-link>
                    <p>修改资料</p>
                </li>                                               
            </ul>
        </div>
      
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .login-list {
        margin: 1rem 0;
        
    }
    .head {
        margin: 0.2rem;
        border-bottom: 1px dashed #ccc;
    }
    .head img{
        width: 1.5rem;
        height: 1.5rem;
        border: 1px solid #ccc;
        border-radius: 50%;
    }
    .head span {
        display: inline-block;
    }
    .middle {
        margin: 0.2rem;
    }
    .list {
        height: 2rem;
        width: 100%;
        display: flex;
        margin-top: 0.2rem;
    }
    .list li {
        text-align: center;
        flex-grow: 1;
    }
    .list li img {
        height: 0.5rem;
        width: 0.5rem;
    }
</style>
