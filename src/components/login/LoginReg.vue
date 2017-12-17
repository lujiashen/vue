<template>
    <div class="reg">
        <div>
            <h3>请注册你的信息！！</h3>
            <hr>
        </div>
        <div class="text">
             <p>用户名:<input type="text" placeholder="请输入您要注册的名字"></p>
             <p>密码:<input type="password" placeholder="请输入您要注册的密码" class="word"></p>
        </div>
       
        <p>
            请输入您的性别：
            男<input type="radio" name="sex">
            女<input type="radio" name="sex">
        </p>

        <p>
            请选择学历：
            <select name="" id="" class="school">
                    <option value="school">小学</option>
                    <option value="school">初中</option>
                    <option value="school">高中</option>
                    <option value="school">大学</option>
            </select>
        </p>
        
        <p>
            <textarea class="txt" name="" id="" cols="30" rows="10"></textarea>
        </p>

        <p class="btn">
            <button>确认注册</button>
            <button ><router-link to="/login/loginList"> 取消注册</router-link></button>
        </p>
    </div>
</template>

<script>
export default {
  
} 
</script>

<style scoped>
    .reg {
        margin: 1rem 0;
    }
    .text {
        margin: 0.2rem;
    }
    .text input{
        margin-bottom: 0.2rem;
        width: 4rem;
        height: 0.4rem;
        border: 1px solid #ccc;
    }
    .word {
        margin-left: 13px;
    }
    .school {
        width: 4rem;
        height: 0.6rem;
        border: 1px solid #ccc;
        margin-left: 0.2rem;
    }
    .txt {
        margin-top: 0.2rem;
        border: 1px solid #ccc;
        margin-left: 0.2rem;
    }
    .btn button{
        width: 50%;
        height: 0.6rem;
        color: white;
        background-color: green;
        margin-bottom: 0.2rem;
        margin-left: 0.2rem;
    }
</style>
