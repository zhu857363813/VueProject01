<template>
  <!--个人中心页-->
  <div class="userinfo">
    <nav-bar></nav-bar>
    <img src="@/assets/bannerTop.jpg" alt="" class="backiImg">
    <user-detail :userInfo="model"></user-detail>
     <tab-bar></tab-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/Navbar.vue'
import userDetail from '@/components/userComponent/userDetail.vue'
import TabBar from '@/components/common/TabBar'
export default {
  data(){
    return {
      model:{},
    }
  },
  components:{
    NavBar,
    userDetail,
    TabBar
  },
  methods:{
    async UserinfoData(){
  const res = await this.$http.get('/user/' + localStorage.getItem('id'))
  this.model = res.data[0]
    }
  },
  created(){
    this.UserinfoData()
  }
}
</script>

<style lang="less">
.userinfo{
  .backiImg{
    height: 151px;
    width: 100%;
  }
}
</style>
