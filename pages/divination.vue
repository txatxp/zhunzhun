<template>
    <h1 class="z-divination-title">卜卦</h1>
    <Recommend></Recommend>
    <div class="z-divination">
      <img :src="runtimeConfig.public.APP_URL + zhunzhun_saizi" alt="卜卦" class="z-divination-saizi">
      <h3 class="z-subtitle"><span class="z-subtitle-text">欢迎来到准准卜卦</span></h3>
      <p class="z-tip">请输入问题，联系准准，进行卜一卦吧！</p>
      <p class="z-tip2">提问问题越精准，结果越准确哦！</p>
      <form id="zDivination" class="z-form" @submit.prevent="handleSubmit">
        <div class="z-form-item">
          <label for="phone" class="z-label">联系方式：</label>
          <input type="text" class="z-input" placeholder="请输入联系方式">
        </div>
        <div class="z-form-item">
          <label for="phone" class="z-label">姓名：</label>
          <input type="text" class="z-input" placeholder="请输入姓名">
        </div>
        <div class="z-form-item">
          <label for="phone" class="z-label">您的问题：</label>
          <input type="text" class="z-input" placeholder="请输入你要占卜的问题！">
        </div>
        <div class="z-form-item z-border0"><button type="submit" class="z-sbumit">联系准准/开始卜卦</button></div>
        <div class="z-form-item z-padding-top0"><span class="z-waring-icon">*</span><span class="z-waring">占卜不对未成年人开放，请确保您已成年！</span></div>
      </form>
      <p class="z-explain">占卜术它是原始占卜术士观测天体，日月星辰的位置及其各种变化后，作出解释，来预测人世间的各种事物。占星术以天体，尤其是行星和星座，都再以某种因果性或非偶然性的方式预示人间万物的变化。在天成像，在地成形，所有预期，所有事件都可以做出精准预测，以做警示。</p>
    </div>
</template>
<script setup>
useSeoMeta({
  title: '卜卦_占卜 - 准准',
  keywords: '卜卦,占卜,准准,准准卜卦,准准占卜,占卜师',
  description: '输入问题，联系准准，进行卜卦吧！问题越精细，结果越精准！',
})
definePageMeta({
  layout: 'divination'
})
import zhunzhun_saizi from '@/assets/img/saizi.png'
const runtimeConfig = useRuntimeConfig();
const handleSubmit = () => {
  alert(11)
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/form.scss';
</style>