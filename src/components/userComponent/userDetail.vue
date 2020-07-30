<template>
  <div class="userdetail">
    <div>
      <div class="user_img"><img src="@/assets/photo1.png" alt=""></div>
      <div class="user_edit">
        <div>
          <p>
            <span>0</span>
            <span class="user-text">粉丝</span>
          </p>
          <p>
            <span>0</span>
            <span class="user-text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="user-text">获赞</span>
          </p>
        </div>
        <div>
          <div class="user-editBtn">编辑资料</div>
        </div>
      </div>
    </div>
    <div>
      <h2>{{userInfo.name}}</h2>
      <p>这个人很神秘，什么都没留下</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['userInfo']
}
</script>

<style lang="less">
.userdetail{
  background-color: white;
  padding: 0 12px;
  >div{
  display: flex;
   }
  .user_img{
    margin-right: 20px;
    img{
      height: 85px;
      width: 85px;
    }
  }
.user_edit{
  flex: 1;
  div:nth-child(1){
    display: flex;
    p{
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 13px;
    }
    p:nth-child(1),p:nth-child(2){
      border-right: 1px solid #ccc;
    }
    .user-text{
      color: #aaa;
    }
  }
  div:nth-child(2){
    padding: 15px 10px;
    .user-editBtn{
      border: 1px solid #fb7a9f;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fb7a9f;
      border-radius: 3px;
    }
  }
}
}
</style>
