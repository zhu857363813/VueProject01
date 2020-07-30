<template>
<div v-if="model">
    <nav-bar></nav-bar>
    <div class="detailinfo">
        <div class="video">
            <video controls="controls" :src="model.content"></video>
            <div>{{model.name}}</div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue' 
 export default {
     data(){
         return {
             model:null
         }
     },
     components: {
         NavBar
     },
     methods:{
         async articleitemData(){
             //console.log(this.$route);
             
             const res = await this.$http.get('/article/' + this.$route.params.id)
            // console.log(res);
             this.model = res.data[0]
         },
          async commendData(){
             const res = await this.$http.get('/commend')
             console.log(res); 
         }
     },
     created(){
         this.articleitemData()
         this.commendData()
         console.log(this.$route);
         
     }
 }
</script>

<style lang="less">
.detailinfo{
    .video{
        width: 100%;
        video{
            width: 100%;
        }
    }
}
</style>