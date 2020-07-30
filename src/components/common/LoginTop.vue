<template>
<div class="LoginTop">
  <div></div>
  <div>{{middleTop}}</div>
  <div>
    <slot name="right"/>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
export default{
props:['middleTop']
}
</script>

<style lang="less">
.LoginTop{
height: 45px;
background-color: white;
display: flex;
div{
flex: 1;
display: flex;
justify-content: center;
align-items: center;
font-size: 4.444vw;
}
}

</style>
