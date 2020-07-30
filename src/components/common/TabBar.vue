<template>
    <div class="tabbar">
          <p class="p" @click="$router.push({path:'/'})">
            <span class="user-text">首页</span>
          </p>
          <p class="p" @click="$router.push({path:'/home'})">
            <span class="user-text">学习视频</span>
          </p>
          <p class="p" @click="$router.push({path:'/userinfo'})">
            <span class="user-text">我的信息</span>
          </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style land="less">
.tabbar{
    background-color: #fff;
    width: 100%;
    height: 7%;
    z-index: 100;
    position: fixed;
    bottom: 0;
    display: flex;
}
.p{
    flex: 1;
    font-size: 10px;
}
.user-text{
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>