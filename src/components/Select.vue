<template>
    <div>
        <nav-bar></nav-bar>
        <my-swiper></my-swiper>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
import NavBar from '@/components/common/Navbar'
import MySwiper from '@/components/userComponent/MySwiper'
import TabBar from '@/components/common/TabBar'
    export default {
        components:{
            NavBar,
            MySwiper,
            TabBar
        }
    }
</script>

<style lang="less">
// span{
//     height: 25px;
// }
</style>