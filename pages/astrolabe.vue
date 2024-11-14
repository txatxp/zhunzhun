<template>
    <Recommend></Recommend>
    <div class="z-divination">
      <img :src="runtimeConfig.public.APP_URL + astrolog" alt="星盘生成" class="z-divination-saizi" width="300" height="300">
      <h3 class="z-subtitle"><span class="z-subtitle-text">星盘生成</span></h3>
      <p class="z-tip">请尽可能填写真实准确信息，否则计算本命盘有所偏差！</p>
      <p class="z-tip2">提供的本命越精确，生成的本命盘越接近你的本命！</p>
      <ClientOnly>
        <CreateAstrolog></CreateAstrolog>
      </ClientOnly>
      <p  class="z-explain">“本命盘”通常是指在占星学中根据个人出生日期、出生时间和出生地点绘制的星盘。这个星盘可以提供关于个人性格、命运、健康、爱情、职业等方面的信息。在占星学中，本命盘是非常重要的工具，可以帮助人们更好地了解自己和未来的趋势。</p>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'astrolog'
})
useSeoMeta({
  title: '星盘生成 - 准准',
  keywords: '星盘生成,本命盘,星盘,准准',
  description: '提供出生年月日、地址、经纬度、夏令时、时区等信息生成自己本命盘。',
})
import astrolog from '@/assets/img/astrolog.png'
const runtimeConfig = useRuntimeConfig();


</script>
<style lang="scss" scoped>
@import '@/assets/css/form.scss';
.z-divination {
  width: 1440px;background-size: 100% auto;margin-top: 0px;
  .z-form {
    width: 1000px;
  }
  .z-divination-saizi {
    position: absolute;
    left: 50%;margin-left: 562px;top: -155px;
  }
  .z-explain {
    text-align: left;
  }
  
}
</style>