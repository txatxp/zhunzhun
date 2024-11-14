<template>
    <Recommend></Recommend>
    <h1 class="z-title">
        <span class="z-title-text">准准</span>
    </h1>
    <h2 class="z-sub-title">职业：占星师 / 心里咨询师 / 占卜师 / 疗愈师/巫术派系通灵者 / 企业家庭风水师 / 元成宫精读</h2>
    <p class="z-introduce">实战经验：占星师7年；疗愈师<span class="z-introduce-color z-padding-left">6年</span>；巫术派系通灵者<span class="z-introduce-color z-padding-left">5年</span>；巫术派系通灵者<span class="z-introduce-color z-padding-left">5年</span>；室内外风<span class="z-introduce-color z-padding-left">4年</span>等等...</p>
    <p class="z-introduce">我是准准，<span class="z-introduce-color">一个具有古老灵魂的现代游历者</span>，占星/占卜师/钵音疗愈师，心里咨询探秘者，巫术派系通灵者，经手的案例有<span class="z-introduce-color z-padding-left">万人</span>以上，是一位有独特见解的占星/占卜师，精准预测事件发生的过程和原因。</p>
    <p class="z-introduce">同时做为一名心里咨询探秘者，挖掘人性深痛的卡点，帮助咨询者，找到问题的痛点并解决。同时可以获得房屋水晶，动物，植物的能量感知，以及房屋风水问题，与小动物们愉快的聊天 ,获得解决问题，最有效的办法。</p>
    <p class="z-introduce">玛雅历图腾：“蓝猴”，有趣的背后，隐藏着巨大力量。风水堪测，手机号码能量测试，元成功解读调整。</p>
    <img :src="runtimeConfig.public.APP_URL + zhunzhun_picture" alt="准准" class="z-zhunzhun-img">
    <h3 class="z-weixin">
        <span class="z-title-text">联系准准</span>
    </h3>
    <ul class="z-contact-ul">
        <li class="z-contact-li">
            <img class="z-contact-img" :src="runtimeConfig.public.APP_URL + zhunzhun_weixin" alt="扫一扫，添加准准微信" width="282" height="282">
            <span class="z-contact-text">扫一扫，添加准准微信</span>
        </li>
        <li class="z-contact-li">
            <img class="z-contact-img" :src="runtimeConfig.public.APP_URL + zhunzhun_douyin" alt="关注准准抖音" width="282" height="282">
            <span class="z-contact-text">扫一扫，关注准准抖音</span>
        </li>
        <li class="z-contact-li">
            <img class="z-contact-img" :src="runtimeConfig.public.APP_URL + zhunzhun_xiaohongshu" alt="关注准准小红书" width="282" height="282">
            <span class="z-contact-text">扫一扫，关注准准小红书</span>
        </li>
        <li class="z-contact-li">
            <img class="z-contact-img" :src="runtimeConfig.public.APP_URL + zhunzhun_bilibili" alt="关注准准B站" width="282" height="282">
            <span class="z-contact-text">扫一扫，关注准准B站</span>
        </li>
        <li class="z-contact-li">
            <img class="z-contact-img" :src="runtimeConfig.public.APP_URL + zhunzhun_toutiao" alt="关注准准头条" width="282" height="282">
            <span class="z-contact-text">扫一扫，关注准准头条</span>
        </li>
    </ul>
    <h3 class="z-weixin z-contact-title">
        <span class="z-title-text">粉丝反馈</span>
    </h3>
    <ul class="z-case-ul">
        <li class="z-case-li">
            <img class="z-case-img" :src="runtimeConfig.public.APP_URL + a1" alt="客户反馈" width="400">
        </li>
        <li class="z-case-li">
            <img class="z-case-img" :src="runtimeConfig.public.APP_URL + a2" alt="客户反馈" width="400">
        </li>
        <li class="z-case-li">
            <img class="z-case-img" :src="runtimeConfig.public.APP_URL + a3" alt="客户反馈" width="400">
        </li>
        <li class="z-case-li">
            <img class="z-case-img" :src="runtimeConfig.public.APP_URL + a4" alt="客户反馈" width="400">
        </li>
    </ul>
</template>
<script setup>
import zhunzhun_picture from '@/assets/img/zhunzhun_picture_03.png'
import zhunzhun_weixin from '@/assets/img/weixin-code_10.png'
import zhunzhun_douyin from '@/assets/img/zhunzhun_douyin.png'
import zhunzhun_xiaohongshu from '@/assets/img/zhunzhun_xiaohongshu.png'
import zhunzhun_bilibili from '@/assets/img/zhunzhun_bilibili.png'
import zhunzhun_toutiao from '@/assets/img/zhunzhun_toutiao.png'
import a1 from '@/assets/img/13373899553479404.jpg'
import a2 from '@/assets/img/13373899561647660.png'
import a3 from '@/assets/img/13373899570148426.png'
import a4 from '@/assets/img/13373899585827180.png'
const runtimeConfig = useRuntimeConfig();
useSeoMeta({
  title: '准准占卜_星盘生成_星盘分析_星座查询_占星视频课程_精准卜卦 - 准准',

  keywords: '准准,准准星座,准准卜卦,卜卦,准准占卜,占卜,星盘生成,星盘分析,星座查询,准准占星视频课程,占星视频课程,星座讲解课程,卜卦教程',
  description: '这是准准占星师的一个网站，专门提供占卜事情、运势分析、星座查询、星盘生成、星盘分析、情感分析、心里咨询、占星视频课程等服务。',
})

</script>
<style lang="scss" scoped>
.z-title {
    display: block;padding-top: 103px;position: relative;width: 600px;
    
}
.z-weixin {
    display: block;padding-top: 120px;
}
.z-contact-title {
    padding-top: 0px;
}
.z-title-text {
    display: inline-block;
    background-color:#fff;padding: 0px 10px;line-height: 48px;
    border-radius: 3px;
    font-size: 32px;
}

.z-sub-title {
    display: block;padding-top: 20px;color:#fff;
    font-weight: normal;font-size: 22px;width: 600px;
}
.z-introduce {
    font-size: 16px;color:#999999;padding-top: 50px;width: 600px;
    .z-introduce-color {
        color:#fff;font-weight: bold;
    }
    .z-padding-left{
        padding: 0px 5px;
    }
}
.z-zhunzhun-img {
    position: absolute;right: 0px;top:90px;
}
.z-contact-ul,.z-case-ul {
    overflow: hidden;padding-top: 40px;padding-bottom: 60px;

    .z-contact-li,.z-case-li {
        float:left;padding-right:60px;margin-bottom: 60px;
    }
    .z-contact-img {
        border:2px solid #fff;box-shadow: 1px 1px 3px #000;border-radius: 10px;display: block;
    }
    .z-case-img {
        display: block;
    }
    .z-contact-text {
        display: block;text-align: center;padding-top: 10px;color:#fff;
    }
}
</style>