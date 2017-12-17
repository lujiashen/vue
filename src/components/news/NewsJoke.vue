<template>
    <div class="joke">
        <ul class="jokeList">
            <li v-for="(item,index) in jokeList" :key="index">
                <div class="course" > 
                   
                </div>
                <div class="word">
                    <p>{{(item.class_title)}}</p>
                    <p>{{item.name}}{{item.desc}}</p>
                    <p></p>
                </div> 
                <div class="symbol">
                    <p>{{item.symbol}}</p>
                   
                </div>
                
                    
            </li>
        </ul>
        <div class="loading">
            <img src="../../assets/img/loading.gif" v-show="show" alt="">
        </div>
    </div>
</template>

<script>
import Axios from "axios"
export default {
    mounted(){
        
    this.getWords();
        let url =
        window.onscroll=()=>{
            let scrollHeight= document.documentElement.scrollHeight;
            let clientHeight=document.documentElement.clientHeight;
             let scrollTop =parseInt(document.documentElement.scrollTop);
          if(clientHeight+scrollTop==scrollHeight) {
                 this.num++;
                 this.getWords();
           }
         }
        
    },
    data() {
        return {
            show : true,
            jokeList : [],
            num: 1
        }
    },
        methods : {
            getWords() {
               
            Axios.get( "http://route.showapi.com/8-10?showapi_appid=51020&showapi_sign=efbbffe40b9a49f8814ae1f7b15c549f&class_id=45090&course="+this.num+"&").then((res)=>{
                console.log(res);
                this.jokeList=this.jokeList.concat(res.data.showapi_res_body.list);
             }).catch(()=>{});
        }
        }
        
    
}
</script>

<style scoped>
    .joke {
         margin: 0.2rem 0 1rem 0;
    }
    .loading {
        text-align: center;
    }
    .jokeList li {
       
        width: 100%;
        border-bottom: 1px solid #ccc;
        display: flex;
    }
    .word {
        width: 0;
        flex-grow: 2;
        margin-left: 0.1rem;
    }
    .symbol {
        width: 0;
        flex-grow: 1;
    }
    
</style>
