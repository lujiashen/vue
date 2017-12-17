<template>
    <div class="movie">
        <div>
            <span>请输入：</span>
            <input type="text" class="ipt" placeholder="快来查询吧" @blur="blur" ref="box">
             <button @click="serach" class="btn">查询</button>
             <ul class="list">
                 <li v-for="(item,index) in dataList" :key="index" > 
                        <p><span>菜品名称:</span> {{item.cp_name}}</p>
                        <p><span>菜品口味:</span>{{item.texing}}</p>
                        <p><span>使用调料:</span>{{item.tiaoliao}}</p>
                        <p><span>温馨提示:</span>{{item.tishi}}</p>
                        <p><span>菜品种类:</span>{{item.type_name}}</p>
                        <p><span>菜品原料:</span>{{item.yuanliao}}</p>
                        <p><span>菜品做法:</span>{{item.zuofa}}</p>

                 </li>
             </ul>
        </div>
       
    </div>
</template>

<script>
import Axios from "axios"

export default {
    data() {
        return {
           sth: "",
           dataList: []
        }
    },
    mounted() {
       
      
        
    },
    methods : {
        serach() { 
            let url="http://route.showapi.com/930-1?showapi_appid=51020&showapi_sign=efbbffe40b9a49f8814ae1f7b15c549f&num=10&word="+ this.sth +"&"
            Axios.get(url).then((res)=>{
            console.log(res);
            this.dataList=res.data.showapi_res_body.newslist;
        }).catch()
        },
        blur() {
            this.sth=this.$refs.box.value;
            console.log(this.sth);
        }
    }
}
</script>

<style scoped>
    .movie {
        margin: 1rem 0;
    }
    #city {
       
        height: 0.6rem;
        border: 1px solid #ccc;
        margin-right: 0.2rem;
    }
    .ipt {
        width: 50%;
        height: 0.6rem;
        border: 1px solid #ccc;
    }
    .btn {
        border: 1px solid;
    }
    .list {
        margin-top: 0.2rem;
    }
    .list li {
        border-bottom: 1px solid ;
    }
    .list li p {
        margin-left: 0.1rem;
    }
</style>
