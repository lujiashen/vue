<template>
    <div class="newsList">
        <ul class="list">
            <li v-for="(item,index) in newsList" :key="index" @click="jumpDetail">
                <a :href="item.url" class="link">
                    <div class="photo">
                            <img :src="item.picUrl" alt="">
                        </div>
                        <div class="text"> 
                            <p>{{item.title}}</p>
                            <p >{{item.ctime}}</p>
                        </div>
                </a>
                        
                      
            </li>
        </ul>

        <div class="loading">
            <img src="../../assets/img/loading.gif" alt="" v-show="show">
        </div>

        <div class="bottom" v-show="showBottom">
            <h4>已经到底了</h4>
        </div>
    </div>
</template>

<script>

import Axios from "axios"
export default {
    mounted() {
            this.getNews();
        window.onscroll=() => {
            let scrollHeight= document.documentElement.scrollHeight;
            let clientHeight=document.documentElement.clientHeight;
            let scrollTop =parseInt(document.documentElement.scrollTop);
            if(clientHeight+ scrollTop == scrollHeight) {
                
                if(!this.showBottom) {
                    this.getNews();
                }
                else {
                    this.show=false;
                }
                
            }
        }
        
        
    },
    data() {
        return {
            newsList : [],
            show : true,
            showBottom : false
           

        }
    },
    methods: {
        jumpDetail() {
            Axios.get("")
        },
        getNews(){
            let url="http://route.showapi.com/196-1?showapi_appid=51020&showapi_sign=efbbffe40b9a49f8814ae1f7b15c549f&num=50&rand=1&"
            Axios.get(url).then((res)=>{
            console.log(res);
            let list = res.data.showapi_res_body.newslist;
            let data=list.slice(this.newsList.length,this.newsList.length+10);
            if(data.length<10) {
                this.showBottom=true;
            }
            this.newsList=this.newsList.concat(data);
        }).catch();
        }
    }
    
}
</script>

<style scoped>
    .newsList {
        margin: 0.2rem 0 1rem 0;
    }
    .list {
        margin-top: 0.1rem; 
    }
    .list li {
        width:100%;
        height: 1.6rem;
        overflow: hidden;
        border-bottom: 2px solid #ccc;
       
       cursor: pointer;
    }
    .link {
        display: flex;
        color: #000;
    }
    .link::hover {
        color: skyblue;
    }
    .photo {
        
        flex-grow: 1;
        width: 0;
       
    }
    .photo img {
        height: 100%;
    }
     .text {
         text-indent: 0.2rem;
         width: 0;
        flex-grow: 2;
        height: 100%;
        /* position: relative; */
    }
    .text p:last-child {
        width: 90%;
        text-align: right;
    }
    .loading {
        text-align: center;
    }
    .bottom {
        color: #ccc;
        text-align: center;
    }
</style>
