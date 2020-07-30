<template>
<div class="home">
  <nav-bar></nav-bar>
  <van-tabs v-model="active" sticky swipeable>
    <van-tab v-for="(item,index) in category" :key="index" :title="item.title">
      <van-list
        v-model="item.loading"
        :immediate-check="false"
        :finished="item.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
       <div class="detailparent">
          <detail class="detailitem" :detailitem="categoryitem" v-for="(categoryitem,categoryindex) in item.list" :key="categoryindex"/>
       </div>
      </van-list>
    </van-tab>
  </van-tabs>
   <tab-bar></tab-bar>
</div>
</template>

<script>
  import NavBar from '@/components/common/Navbar'
  import Detail from './Detail'
  import TabBar from '@/components/common/TabBar'
  export default {
    data(){
      return {
        category:[],
        active:0
      }
    },
    components:{
      NavBar,
      Detail,
      TabBar
    },
    methods:{
      async selectCategory(){
        const res = await this.$http.get('/category')
        this.changeCategory(res.data)
      },
      changeCategory(data){
//        console.log(data);
       const category1 = data.map((item,index) => {
         item.list = []
         item.page = 0
         item.finished = false
         item.loading = false
         item.pagesize = 10 //每页需要显示的数目
         return item
      })
       this.category = category1
      },
        async selectActicle(){
         const categoryitem = this.categoryItem()
         const res = await this.$http.get('/detail/' +categoryitem._id,{
           params:{
             page:categoryitem.page,
             pagesize:categoryitem.pagesize
           }
         })
        // console.log(res);
         categoryitem.list.push(...res.data)
         categoryitem.loading = false
         if (res.data.length < categoryitem.pagesize){
           categoryitem.finished = true
         }
      },
      onLoad(){
       // console.log('已经到底部了'); 
       const categoryitem = this.categoryItem()
       setTimeout(() =>{
         categoryitem.page += 1
         this.selectActicle()
       },1000)
       //console.log(categoryitem);
      },
      categoryItem(){
        const categoryitem = this.category[this.active] 
        return categoryitem 
    },
    },
    watch:{
      active(){
        this.selectActicle()
      }
    },
    created(){
      this.selectCategory()
      console.log(this.$route)
    }
  }
</script>

<style lang="less">
.home{
  background-color: white;
}
.detailparent{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .detailitem{
    width: 45%;
  }
}
</style>
