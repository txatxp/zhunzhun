<template>
    <Recommend></Recommend>
    <ul class="z-fortune-type-ul">
      <li :class="{'z-fortune-type-li': true, 'z-fortune-type-active-li': fortuneDateType === 'today' || !fortuneDateType}">
        <a :href="runtimeConfig.public.APP_URL + '/fortune?fortuneDateType=today'" class="z-link">今日运势</a>
      </li>
      <li :class="{'z-fortune-type-li': true, 'z-fortune-type-active-li': fortuneDateType === 'tomorrow'}">
        <a :href="runtimeConfig.public.APP_URL + '/fortune?fortuneDateType=tomorrow'" class="z-link">明日运势</a>
      </li>
      <li :class="{'z-fortune-type-li': true, 'z-fortune-type-active-li': fortuneDateType === 'month'}">
        <a :href="runtimeConfig.public.APP_URL + '/fortune?fortuneDateType=month'" class="z-link">本月运势</a>
      </li>
      <li :class="{'z-fortune-type-li': true, 'z-fortune-type-active-li': fortuneDateType === 'years'}">
        <a :href="runtimeConfig.public.APP_URL + '/fortune?fortuneDateType=years'" class="z-link">今年运势</a>
      </li>
    </ul>
    <div class="z-fortune">
        <h1 class="z-fortune-title">十二星座运势 {{ date }}</h1>
        <ul class="z-astro-ul">
            <li class="z-astro-li" v-for="item in data">
                <img :src="runtimeConfig.public.APP_URL + `/${item.name2}.png`" class="z-astro-img" :alt="`${item.name}图片`" height="80" width="80">
                <div class="z-astro-content">
                    <h2 class="z-astro-aries">{{ item.name }}</h2>
                    <p class="z-comprehensive-fortune">
                        综合运势得分：{{item.comprehensiveFortune}}分<a :href="runtimeConfig.public.APP_URL + `/fortune/${item.name2}${fortuneDateType ? '?fortuneDateType=' + fortuneDateType : '?fortuneDateType=today'}`" class="z-more-fortune">详细运势</a>
                    </p>
                    <p class="z-short-comment">{{ fortuneDateType === 'month' ? '' : '简短评价：' }}{{ item.shortComment}}</p>
                </div>
            </li>
        </ul>
        <br>
        <p class="z-man-made">
            <span class="z-consult">添加好友咨询，真人解释运势情况！</span>
            <img class="z-consult-img" :src="runtimeConfig.public.APP_URL + zhunzhun_weixin" alt="联系准准人工推运势" width="400" height="400">
            
        </p>
    </div>
</template>
<script setup> 
import zhunzhun_weixin from '@/assets/img/weixin-code_10.png'
useSeoMeta({
  title: '星座运势 - 准准',
  keywords: '星座运势,运势,十二星座运势,12星座运势,运势查询,准准',
  description: '查询12星座今日运势，准准为您提供12星座今日运势、明日运势查询服务！',
})
definePageMeta({
  layout: 'fortune'
})
const apis = useApis()
const route = useRoute()
const fortuneDateType = route.query?.fortuneDateType
const runtimeConfig = useRuntimeConfig();
let res = null
const date = ref('')
if (fortuneDateType === 'tomorrow') {
    res = await apis.getAstroTomorrowFortune()
    date.value = getTomorrowDate()
} else if (fortuneDateType === 'today' || !fortuneDateType) {
    res = await apis.getAstroTodayFortune()
    date.value = getTodayDate()
} else if (fortuneDateType === 'month') {
    res = await apis.getAstroMonthFortune()
    date.value = getMonthDate()
} else if (fortuneDateType === 'years') {
    res = await apis.getAstroYearsFortune()
    date.value = new Date().getFullYear() + '年'
}

const { data } = res.data.value
</script>
<style lang="scss" scoped>
.z-fortune {
  padding: 30px;background:rgba(255,255,255,0.2);
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  .z-fortune-title {
    font-size: 16px;color:#fdd500;
  }
  .z-astro-ul {
    overflow:hidden;display: block;padding-top: 20px;
    .z-astro-li,.z-astro-link {
        overflow:hidden; width: 446px;float:left;overflow: hidden;display: block;height: 80px;;
    }
    .z-astro-li {
        margin-bottom: 20px;
    }
    .z-astro-img {
        float:left;border-radius: 6px;overflow: hidden;
    }
    .z-astro-content {
        float:left;padding-left: 10px;color:#fff;width: 330px;;
        .z-astro-aries {
            font-size: 15px;
        }
        .z-comprehensive-fortune,.z-short-comment {
            display: block;padding-top:7px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;position: relative;

        }
        .z-more-fortune {
            font-size: 13px;color:#ffee00;padding-left: 10px;
        }
        .z-contact-fortune {
            font-size: 12px;
            color: #ffb404;
            padding-left:10px;
            text-decoration: underline;
            cursor: pointer;
        }
    }
  }
}
.z-fortune-type-ul {
  display: block;height: 50px;overflow:hidden;border-top-left-radius: 12px;
  .z-fortune-type-li {
    float:left;height: 50px;line-height: 50px;padding: 0px 30px;
    margin-right: 5px;
    background:rgba(255,255,255,1);
    &:last-child {
      border-top-right-radius: 12px;;
    }
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