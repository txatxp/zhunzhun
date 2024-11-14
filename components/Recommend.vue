<template>
    <div class="z-recommend">
        <h3 class="z-recomment-title">推荐：</h3>
    
        <ul class="z-recomment-ul">
            <li class="z-recomment-li"><a href="#" class="z-recomment-link">今天刚和男朋友吵完架，明天他会联系我吗？</a></li>
            <li class="z-recomment-li"><a href="#" class="z-recomment-link">占卜能占卜什么问题？</a></li>
            <li class="z-recomment-li"><a href="#" class="z-recomment-link">占卜准确吗？</a></li>
            <li class="z-recomment-li"><a href="#" class="z-recomment-link">我想挣钱？</a></li>
        </ul>    
        <span class="z-change">换一批</span>
        <a href="#" class="z-more">更多推荐</a>
    </div>
</template>
<script setup>
</script>

<style scoped lang="scss">
.z-recommend {
    display: block;
    padding-top: 15px;
}
.z-recomment-title {
    color:#999999;font-weight: bold;font-size:0px;width:0px;overflow:hidden;
}
.z-recommend,.z-recomment-ul {
    overflow:hidden;
}
.z-recomment-title,.z-recomment-ul,.z-recomment-li {
    float:left;font-size: 16px;
    .z-recomment-link {
        color:#999999;text-decoration: none;padding-right: 20px;
    }
}
.z-marquee {
    float: left;
}
.z-change,.z-more {
    float:left;padding-right: 20px;color:#fff;text-decoration: underline;
}
</style>
  