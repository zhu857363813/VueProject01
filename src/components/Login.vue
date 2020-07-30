<template>
  <div>
    <login-top middleTop="登录用户">
      <div slot="right" @click="$router.push({path:'/register'})">切换到注册</div>
    </login-top>
    <login-text
      label="账号"
      style="margin: 4.167vw 0"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="res => model.username = res"
    />
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="res => model.password = res"
    />
    <login-btn btntext="登录" @registerSubmit="registerSubmit"></login-btn>
  </div>
</template>

<script>
  import LoginTop from '@/components/common/LoginTop.vue'
  import LoginText from '@/components/common/LoginText.vue'
  import LoginBtn from '@/components/common/LoginBtn.vue'
  export default {
    data(){
      return {
        model:{
          username:'',
          password:''
        }
      }
    },
    components:{
      LoginTop,
      LoginText,
      LoginBtn
    },
    methods:{
      async registerSubmit(){
    if(this.model.username&&this.model.password){
      const res = await this.$http.post('/login',this.model)
      this.$msg.fail(res.data.msg)
      if(res.data.code == 301 || res.data.code == 302){
        return
      }
      localStorage.setItem('token',res.data.token)
      localStorage.setItem('id',res.data.id)
      setTimeout(()=>{
        this.$router.push('/userinfo')
      },1000)
    }else {
      this.$msg.fail('格式不正确，重新输入')
    }
//      console.log('被点击了')
//    let rulg = /^.{6,16}$/;
//    if(rulg.test(this.model.username) && rulg.test(this.model.password)){
//      //通过正则校验
////        console.log('成功')
//      const res = await this.$http.post('/login',this.model)
//      this.$msg.fail(res.data.msg)
//    }else {
//      this.$msg.fail('格式不正确，重新输入')
//    }
  }
  }
  }
</script>

<style>

</style>
