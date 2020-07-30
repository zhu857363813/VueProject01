<template>
<div @click="$router.push(`/article/${detailitem.id}`)">
    <div class="detailItem">
        <div class="imgparent">
            <img :src="detailitem.img" alt="" style="width:100%">
            <span class="video">1233</span>
            <span class="comment">{{detailitem.commentlen}}</span>
        </div>
        <p>{{detailitem.name}}</p>
    </div>
</div>
</template>

<script>
 export default {
     props:['detailitem']
 }
</script>

<style lang="less">
.detailItem{
    p{
        font-size: 2.389vw;
    }
}
.imgparent{
    position: relative;
    .video{
        position: absolute;
        left: 5px;
        bottom: 0;
    }
    .comment{
        position: absolute;
        right: 5px;
        bottom: 0;
    }
}
</style>