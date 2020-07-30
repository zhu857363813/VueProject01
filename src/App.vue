<template>
  <div id="app">
    <!--用来展示路由组件-->
    <!-- 表示页面不会被销毁，←返回上一步 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"/> 
    </keep-alive>
      <router-view v-if="!$route.meta.keepalive"></router-view>
  </div>
</template>

<script>
//export default { //es6暴露当前组件对象
//  name: 'App'
//}
</script>

<style lang="less">
body{
margin: 0;
padding: 0;
box-sizing: border-box;
background-color: #f4f4f4;
}
p{
  margin: 0;
  padding: 0;
}

</style>
