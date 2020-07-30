<template>
<div>
  <van-field
  :label="label"
  :type="type"
  :placeholder="placeholder"
  :rule="rule"
  v-model="content"
  />
</div>
</template>

<script>
export default {
  data(){
    return{content:''}
  },
  props:['label','type','placeholder','rule'],
  methods: {
    handlerulg(){
      const rue = new RegExp(this.rule);
      //校验正则
      if(rue.test(this.content)){
        //校验成功，向父组件发送数据
        this.$emit('inputChange',this.content)
      }
    }
  },
  watch:{
    content(){
      this.handlerulg()
    }
  },
}
</script>

<style>

</style>
