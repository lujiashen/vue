<template>
<div class="history">
    <ul class="historyList">
        <li v-for="(item,index) in historyList" :key="index" >
            <div class="photo">
               <img :src="item.img" alt="">
            </div>
            <div class="text">
                {{item.title}}
                <p class="time"> {{item.year}}年{{item.month}}月{{item.day}}日</p>
            </div>
        </li>
    </ul>
    <div class="loading">
        <img src="../../assets/img/loading.gif" alt="" v-show="show">
    </div>
    <div class='sad' v-show="sad">
        <h4> 回忆太多黯然神伤，今天就到这吧。 </h4>
    </div>
</div>
    
</template>

<script>
import Axios from "axios"
export default {
    mounted() {
        let date=new Date();
         let mth = date.getMonth()+1;
        if(date.getMonth()<10) {
            mth = "0"+mth;
        }
        let day = date.getDate();
    
        if(day<10) {
            day="0"+day;
        }
        console.log(day);
       
        window.onscroll=() => {
            let scrollHeight= document.documentElement.scrollHeight;
            let clientHeight=document.documentElement.clientHeight;
            let scrollTop =parseInt(document.documentElement.scrollTop);
            // console.log(scrollTop);
            // console.log(clientHeight);
            // console.log(scrollHeight);
            if(clientHeight+scrollTop==scrollHeight) {
                this.show=false;
                this.sad=true;
                
            }
        }


        let url="http://route.showapi.com/119-42?showapi_appid=51020&showapi_sign=efbbffe40b9a49f8814ae1f7b15c549f&date="+mth+""+day;
        Axios.get(url).then((res)=>{
            console.log(res);
            this.historyList=res.data.showapi_res_body.list;
            //console.log(this.historyList.length);
            for(let i= 0;i<this.historyList.length;i++) {
                console.log(this.historyList[i].img);
                if(!this.historyList[i].img) {
                   
                    this.historyList[i].img="http://img.lssdjt.com/201112/9/A3124139654.jpg";
                }
            }
        }).catch(()=>{});
    },
    data() {
        return {
            show : true,
            historyList : [],
            sad:false
        }
    }
}
</script>

<style scoped>
    .history {
         margin: 0.2rem 0 1rem 0;
    }
    .loading {
        text-align: center;
    }
    .sad {
        text-align: center;
        color: #ccc;
    }  
    .historyList li {
        display: flex;
        height: 1.5rem;
        width: 100%;
    } 
    .photo {
        width: 0;
        height: 100%;
        flex-grow: 1;
    }
    .photo img {
        width: 100%;
        height: 100%;
    }
    .text {
        width: 0;
       position: relative;
        flex-grow: 2;
        text-indent: 0.2rem;
    }
    .time {
        position: absolute;
        bottom: 0;
        right: 5px;
    }
</style>
