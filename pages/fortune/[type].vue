<template>
    <Recommend></Recommend>
    <ul class="z-fortune-type-ul">
      <li :class="{'z-fortune-type-li': true, 'z-fortune-type-active-li': fortuneDateType === 'today' || !fortuneDateType}">
        <a :href="runtimeConfig.public.APP_URL + `/fortune/${astroType}?fortuneDateType=today&type=${explain}`" class="z-link">今日运势</a>
      </li>
      <li :class="{'z-fortune-type-li': true, 'z-fortune-type-active-li': fortuneDateType === 'tomorrow'}">
        <a :href="runtimeConfig.public.APP_URL + `/fortune/${astroType}?fortuneDateType=tomorrow&type=${explain}`" class="z-link">明日运势</a>
      </li>
      <li :class="{'z-fortune-type-li': true, 'z-fortune-type-active-li': fortuneDateType === 'month'}">
        <a :href="runtimeConfig.public.APP_URL + `/fortune/${astroType}?fortuneDateType=month&type=${explain}`" class="z-link">本月运势</a>
      </li>
      <li :class="{'z-fortune-type-li': true, 'z-fortune-type-active-li': fortuneDateType === 'years'}">
        <a :href="runtimeConfig.public.APP_URL + `/fortune/${astroType}?fortuneDateType=years&type=${explain}`" class="z-link">今年运势</a>
      </li>
    </ul>
    <div class="z-fortune">
      <div class="z-header-box">
        <h1 class="z-fortune-title">{{ astroConfig[astroType] }}{{dateTypeConfig[fortuneDateType]}} {{ date }}</h1>
        
        <ul class="z-astro-ul">
          <li class="z-astro-li" v-for="(item,key) in astroConfig" :key="key">
            <img :src="runtimeConfig.public.APP_URL + `/${key}.png`" class="z-astro-img" :alt="`${item}图片`" height="16" width="16">
            <a :href="runtimeConfig.public.APP_URL + `/fortune/${key}${fortuneDateType ? '?fortuneDateType=' + fortuneDateType : '?fortuneDateType=today'}&type=${explain}`"  class="z-astro-link">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="z-fortune-explain">
        <a :href="`${runtimeConfig.public.APP_URL + '/fortune'}/${astroType}?fortuneDateType=${fortuneDateType}&type=1`" :class="{'z-other-fortune': true, 'z-other-fortune-active': explain === '1' || !explain }">运势解释1</a>
        <a :href="`${runtimeConfig.public.APP_URL + '/fortune'}/${astroType}?fortuneDateType=${fortuneDateType}&type=2`" :class="{'z-other-fortune': true, 'z-other-fortune-active': explain === '2' }">运势解释2</a>
      </div>
      
      <div class="z-fortune-box">
        <img :src="runtimeConfig.public.APP_URL + `/${astroType}.png`" :alt="`${astroConfig[astroType]}图片`" height="100" width="100" class="z-fortune-astro-img">
        <div class="z-fortune-content">
          <template v-if="explain === '1'">
            <p class="z-p">
              <span class="z-comprehensive-fortune-score">综合运势：<em class="z-yellow">{{ fortuneData.comprehensiveFortune }}分</em></span>
              <span class="z-love-fortune-score">爱情运势：<em class="z-yellow">{{ fortuneData.loveFortune }}分</em></span>
              <span class="z-work-fortune-score">事业/学习运势：<em class="z-yellow">{{ fortuneData.workFortune }}分</em></span>  
            </p>
            
            <p class="z-p">
              <template v-if="fortuneDateType === 'today' || fortuneDateType === 'tomorrow'">
                <span class="z-wealth-fortune-score">财富运势：<em class="z-yellow">{{ fortuneData.wealthFortune }}分</em></span>
                <span class="z-health-fortune-score">健康运势：<em class="z-yellow">{{ fortuneData.healthFortune }}分</em></span>
                <span class="z-talk-fortune-score">商聊运势：<em class="z-yellow">{{ fortuneData.talkFortune }}分</em></span>  
              </template>
              <template v-if="fortuneDateType === 'month'">
                <span class="z-wealth-fortune-score">财富运势：<em class="z-yellow">{{ fortuneData.wealthFortune }}分</em></span>
                <span class="z-health-fortune-score">健康运势：<em class="z-yellow">{{ fortuneData.healthFortune }}分</em></span>
              </template>
              <template v-if="fortuneDateType === 'years'">
                <span class="z-wealth-fortune-score">财富运势：<em class="z-yellow">{{ fortuneData.wealthFortune }}分</em></span>
                <span class="z-health-fortune-score">健康运势：<em class="z-yellow">{{ fortuneData.healthFortune }}分</em></span>
              </template>
            </p>
            
            <p class="z-p">
              <template v-if="fortuneDateType === 'today' || fortuneDateType === 'tomorrow'">
                <span class="z-lucky-color">幸运颜色：<em class="z-yellow">{{ fortuneData.luckyColor }}</em></span>
                <span class="z-lucky-number">幸运数字：<em class="z-yellow">{{ fortuneData.luckyNumber }}</em></span>
                <span class="z-lucky-astro">幸运星座：<em class="z-yellow">{{ fortuneData.matchAstro }}</em></span>  
              </template>
            </p>
          </template>
          <template v-if="explain === '2'">
            <template v-if="fortuneDateType === 'today' || fortuneDateType === 'tomorrow'">
              <p class="z-p">
                <span class="z-comprehensive-fortune-score">综合运势：<em class="z-yellow">{{ fortuneData.comprehensiveFortune }}分</em></span>
                <span class="z-love-fortune-score">爱情运势：<em class="z-yellow">{{ fortuneData.loveFortune }}分</em></span>
                <span class="z-work-fortune-score">事业/学习运势：<em class="z-yellow">{{ fortuneData.workFortune }}分</em></span>  
                <span class="z-wealth-fortune-score">财富运势：<em class="z-yellow">{{ fortuneData.wealthFortune }}分</em></span>
                <span class="z-health-fortune-score">健康运势：<em class="z-yellow">{{ fortuneData.healthFortune }}分</em></span>
              </p>  
              <p class="z-p">
                <span class="z-lucky-color">幸运颜色：<em class="z-yellow">{{ fortuneData.luckyColor }}</em></span>
                <span class="z-lucky-number">幸运数字：<em class="z-yellow">{{ fortuneData.luckyNumber }}</em></span>
                <span class="z-lucky-astro">幸运星座：<em class="z-yellow">{{ fortuneData.matchAstro }}</em></span>  
                <span class="z-lucky-astro">幸运吉时：<em class="z-yellow">{{ fortuneData.auspiciousHour }}</em></span>  
              </p>
            </template>
            <template v-if="fortuneDateType === 'month'">
              <p class="z-p">
                <span class="z-comprehensive-fortune-score">综合运势：<em class="z-yellow">{{ fortuneData.comprehensiveFortune }}分</em></span>
                <span class="z-love-fortune-score">爱情运势：<em class="z-yellow">{{ fortuneData.loveFortune }}分</em></span>
                <span class="z-work-fortune-score">事业/学习运势：<em class="z-yellow">{{ fortuneData.workFortune }}分</em></span>  
                <span class="z-wealth-fortune-score">财富运势：<em class="z-yellow">{{ fortuneData.wealthFortune }}分</em></span>
                <span class="z-wealth-fortune-score">贵人星座：<em class="z-yellow">{{ fortuneData.dignitaryAstro }}</em></span>  
              </p>
              <p class="z-p">
                <span class="z-comprehensive-fortune-score">小人星座：<em class="z-yellow">{{ fortuneData.villainAstro }}</em></span>
                <span class="z-lucky-number">幸运数字：<em class="z-yellow">{{ fortuneData.luckyNumber }}</em></span>
                <span class="z-lucky-color">幸运颜色：<em class="z-yellow">{{ fortuneData.luckyColor }}</em></span>
              </p>
            </template>
            <template v-if="fortuneDateType === 'years'">
              <p class="z-p">
                <span class="z-comprehensive-fortune-score">综合运势：<em class="z-yellow">{{ fortuneData.comprehensiveFortune }}分</em></span>
                <span class="z-love-fortune-score">爱情运势：<em class="z-yellow">{{ fortuneData.loveFortune }}分</em></span>
                <span class="z-work-fortune-score">事业/学习运势：<em class="z-yellow">{{ fortuneData.workFortune }}分</em></span>  
                <span class="z-wealth-fortune-score">财富运势：<em class="z-yellow">{{ fortuneData.wealthFortune }}分</em></span>
                <span class="z-health-fortune-score">健康运势：<em class="z-yellow">{{ fortuneData.healthFortune }}分</em></span>
              </p>
            </template>
          </template>
          
          <p class="z-p">
            <span class="z-fortune-summary">运势简短总结：<em class="z-yellow">{{ fortuneData.shortComment }}</em></span>  
          </p>
          
        </div>
      </div>
      <p class="z-fortune-detail">
        <strong class="z-fortune-subtitle">综合运势：</strong>
        {{ fortuneData.comprehensiveFortuneDetail }}
      </p>
      <p class="z-fortune-detail">
        <strong class="z-fortune-subtitle">爱情运势：</strong>
        {{ fortuneData.loveFortuneDetail }}
      </p>
      <p class="z-fortune-detail">
        <strong class="z-fortune-subtitle">事业/学习运势：</strong>
        {{ fortuneData.workFortuneDetail }}
      </p>
      <p class="z-fortune-detail">
        <strong class="z-fortune-subtitle">财富运势：</strong>
        {{ fortuneData.wealthFortuneDetail }}
      </p>
      <p class="z-fortune-detail">
        <strong class="z-fortune-subtitle">健康运势：</strong>
        {{ fortuneData.healthFortuneDetail }}
      </p>
      <p class="z-man-made">
          <span class="z-consult">添加好友咨询，真人解释运势情况！</span>
          <img class="z-consult-img" :src="runtimeConfig.public.APP_URL + zhunzhun_weixin" alt="联系准准人工推运势" width="400" height="400">
          
      </p>
    </div>
</template>
<script setup>
import zhunzhun_weixin from '@/assets/img/weixin-code_10.png'
// 获取api接口
const apis = useApis()
// 路由
const route = useRoute()
/**
 * 运势时间类型
 * fortuneDateType：tomorrow
 * fortuneDateType：today
 * fortuneDateType：month
 * fortuneDateType：years
 */
const fortuneDateType = route.query?.fortuneDateType
/**
 * 星座类型
 * aries
 * taurus
 * gemini
 * cancer
 * leo
 * virgo
 * libra
 * scorpio
 * aquarius
 * pisces
 * 
 */
const astroType = ref()
astroType.value = route.params.type

// 获取环境变量
const runtimeConfig = useRuntimeConfig();
// 获取运势数据
let res = null
const date = ref('')
// 星座配置
const astroConfig = {
  'aries': '白羊座',
  'taurus': '金牛座',
  'gemini': '双子座',
  'cancer': '巨蟹座',
  'leo': '狮子座',
  'virgo': '处女座',
  'libra': '天秤座',
  'scorpio': '天蝎座',
  'sagittarius': '射手座',
  'capricorn': '摩羯座',
  'aquarius': '水瓶座',
  'pisces': '双鱼座'
}
// 中文枚举
const dateTypeConfig = {
  'tomorrow': '明日运势',
  'today': '今日运势',
  'month': '本月运势',
  'years': '今年运势'
}
if (fortuneDateType === 'tomorrow') {
    date.value = getTomorrowDate()
}
if (fortuneDateType === 'today' || !fortuneDateType) {
    date.value = getTodayDate()
}
if (fortuneDateType === 'month') {
    date.value = getMonthDate()
}
if (fortuneDateType === 'years') {
    date.value = new Date().getFullYear() + '年'
}
useSeoMeta({
  title: `${astroConfig[astroType.value]}运势 - 准准`,
  keywords: `${astroConfig[astroType.value]}运势,${astroConfig[astroType.value]}${dateTypeConfig[fortuneDateType]},${astroConfig[astroType.value]}${date.value}运势,准准`,
  description: `查询${astroConfig[astroType.value]}运势, 查询${astroConfig[astroType.value]}爱情运势,查询${astroConfig[astroType.value]}事业运势,查询${astroConfig[astroType.value]}综合运势,查询${astroConfig[astroType.value]}健康运势,查询${astroConfig[astroType.value]}财富运势,查询${astroConfig[astroType.value]}幸运数字,查询${astroConfig[astroType.value]}幸运颜色`,
})
definePageMeta({
  layout: 'fortune'
})
const fortuneType = route.query.type || '1'
const explain = fortuneType
if (fortuneDateType === 'tomorrow') {
    res = await apis.getFortune(getTomorrowDate(), astroType.value, fortuneType)
} else if (fortuneDateType === 'today' || !fortuneDateType) {
    res = await apis.getFortune(getTodayDate(), astroType.value, fortuneType)
} else if (fortuneDateType === 'month') {
    res = await apis.getFortune(getMonthDate(), astroType.value, fortuneType)
} else if (fortuneDateType === 'years') {
    res = await apis.getFortune(new Date().getFullYear(), astroType.value, fortuneType)
} 



const { data, code } = res.data.value
const fortuneData = ref({})
if (data && data.length && code === 200) {
  fortuneData.value = data[0]
}
</script>
<style lang="scss" scoped>
.z-fortune {
  padding: 30px;background:rgba(255,255,255,0.2);
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  .z-header-box {
    height: 21px;
    .z-fortune-title {
      float: left;
    }
    
    .z-astro-ul {
      float:right;position: relative;bottom: -35px;z-index: 10;
      .z-astro-li {
        float:left;padding-left: 15px;
        .z-astro-img,.z-astro-link {
          vertical-align: middle;
        }
        .z-astro-link {
          color:#fff;font-size: 12px;position: relative;
          top: -1px;padding-left: 5px;text-decoration: none;
        }
      }
    }
  }
  .z-fortune-title {
    font-size: 16px;color:#fdd500;
  }
}
.z-fortune-type-ul {
  display: block;height: 50px;overflow:hidden;border-top-left-radius: 12px;
  .z-fortune-type-li {
    &:last-child {
      border-top-right-radius: 12px;;
    }
    float:left;height: 50px;line-height: 50px;padding: 0px 30px;
    margin-right: 5px;
    background:rgba(255,255,255,1);

    .z-link {
      color:#000;
      text-decoration: none;
    }
  }
  .z-fortune-type-active-li  {
   
    background:rgba(255,255,255,0.2);
    .z-link {
      color:#fff;
    }
  }
}
.z-fortune-explain {
  height: 35px;;position: relative;bottom: -15px;
  .z-other-fortune {
    float:left;margin-left: 0px;font-size: 13px;color:#fff;height: 35px;padding: 0px 30px;
    line-height: 35px;background:rgba(255,255,255,0.3);border-top-left-radius: 12px;position: relative;
    border-top-right-radius: 12px;text-decoration: none;margin-right: 5px;
  }
  .z-other-fortune-active {
    background: #fff;color:#000;
  }
}
.z-fortune-box {
  overflow: hidden;display: block;background: #fff;
  padding: 20px;margin-top:15px;border-radius: 12px;margin-bottom: 40px;border-top-left-radius: 0px;
  .z-fortune-content {
    float:left;overflow: hidden;
    .z-p {
      display: block;
    }
  }
  .z-fortune-astro-img {
    float:left;margin-right: 20px;
  }
  .z-comprehensive-fortune-score,.z-love-fortune-score,.z-work-fortune-score,.z-wealth-fortune-score,.z-health-fortune-score,.z-talk-fortune-score,.z-lucky-color,.z-lucky-number,.z-lucky-astro,.z-fortune-summary{
    float:left;color:#3f3f3f;padding-right: 20px;font-size: 14px;width: 200px;line-height: 22px;;display: block;padding-bottom: 4px;;
  }
  .z-fortune-summary {width: 100%;display: block;padding-bottom: 5px;;}
  .z-yellow {
    color:#ff8400;
  }
}
.z-fortune-detail {
  display: block;padding-bottom: 30px;color:#c7c7c7;font-size: 14px;
  .z-fortune-subtitle {
    display: block;padding-bottom: 10px;color:#fdd500;;font-size: 16px;
  }
}
.z-man-made {
    text-align: center;
    .z-consult-img {
        border-radius: 12px;
    }
    .z-consult {
        display: block;
        color:#fff;
        padding-bottom: 15px;
    }
}
</style>