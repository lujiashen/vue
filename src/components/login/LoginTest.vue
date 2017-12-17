<template>
    <div class="login"> 
         <div class="photo">
             <img src="../../assets/logo.png" alt="">
        </div>
        <div class="message">
            <p><input type="text" v-model="name" placeholder="请输入用户名"></p>
            <p><input type="password" v-model="password" placeholder="请输入密码"></p>
            <p><button @click="login">登录</button></p>
            <p><router-link to="/login/loginReg"> 没有账号？注册一个！</router-link></p>
        </div>
    </div>
   
</template>

<script>
export default {
    data() {
        return {
            name: "",
            password: ""
        }
    },
    methods:{
        login() {
            
        }
    }
}
</script>

<style scoped>
    .login {
        margin: 1rem 0;
    }
    .photo {
        text-align: center;
    }
    .message {
        margin-top: 0.2rem;
    }
    .message p{
       text-align: center;
    }
    .message input{
        border: 1px solid #ccc;   
        height: 0.6rem;
        width: 4rem;   
        margin-bottom: 0.1rem;
    }
    .message button {
        width: 4rem;
        height: 0.6rem;
        background: green;
    }
    .message a {
        color: #ccc;
    }
</style>
