<template>
    <div class="musicList">
       <vue-aplayer  v-if="isShow" :music="songs" :narrow="false" theme="#b7daff" mode="circulation">

       </vue-aplayer>
    </div>
    
</template>

<script>
import Axios from "axios"
import Vueaplayer from "vue-aplayer"
export default {
    components: {
        'vue-aplayer': Vueaplayer
    },
    data() {
        return {
            songs : [],
            isShow : false
        }
        
    },
    mounted() {
        let date=new Date();
        let mon=date.getMonth()+1;
        let day=date.getDate();
        let year =date.getFullYear();
        let hour=date.getHours();
        let min=date.getMinutes();
        let sec=date.getSeconds();
        console.log(date.getMinutes());
        console.log(date.getSeconds());
        
        let url="http://route.showapi.com/1143-7?showapi_appid=51020&showapi_timestamp="+ year+mon+day+hour+min+sec +"&showapi_sign=efbbffe40b9a49f8814ae1f7b15c549f&typeId=103&page=1&"
        Axios.get(url).then((res)=>{
            
            let data = res.data.showapi_res_body.pagebean.contentlist;
            console.log(res.data.showapi_res_body.pagebean.contentlist);
            console.log(data);
            data.forEach(element=>{
                let obj = {
                    title : element.songName,
                    author: element.artistName ,
                    url:  element.songUrl,
                    pic: element.albumLogo,
                    
                }
                this.songs.push(obj);
            })
            this.isShow=true;
        }).catch()
    }
}
</script>

<style scoped>
    .musicList {
        margin:1.2rem 0;
    }
</style>
