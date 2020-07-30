<template>
  <div class="navbar">
    <div class="logo"><img src="@/assets/logo1.png" alt=""></div>
    <div>
      <p>
        <van-icon class="ipt-icon" name="search"></van-icon>
      </p>
    </div>
    <div>
      <img src="@/assets/photo1.png" alt="">
      <p>下载 App</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.navbar{
  height: 12.5vw;
  background-color: white;
  display: flex;
  .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    img{
      width: 80%;
       }
   }
div:nth-child(2){
  flex: 1;
  display: flex;
  align-items: center;
  p{
    padding: 12px;
    background-color: #f4f4f4;
    width: 90%;
    position: relative;
    border-radius: 12px;
    .ipt-icon{
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translate(0,-50%);
      color: #aaa;
    }
  }
}
div:nth-child(3){
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 24px;
    height: 24px;
  }
  p{
    border-radius: 3px;
    margin: 0 8px;
    padding: 5px 10px;
    background-color: #fb7299;
    color: white;
    font-size: 13px;
  }
}
}
</style>
