<template>
  <header class="z-header">
    <div class="z-menu-box">
        <a :href="APP_URL" title="准准" class="z-logo"
        ><img :src="APP_URL + logo" alt="准准" class="z-logo-img"
        /></a>
        <nav class="z-nav">
        <ul class="z-menu">
            <li
            :class="{
                'z-menu-list': true,
                'z-menu-active': routeName === 'index',
            }"
            >
            <a :href="APP_URL" class="z-menu-link">准准</a>
            </li>
            <li
            :class="{
                'z-menu-list': true,
                'z-menu-active': routeName === 'divination',
            }"
            >
            <a :href="APP_URL + '/divination'" class="z-menu-link">卜卦</a>
            </li>
            <li
            :class="{
                'z-menu-list': true,
                'z-menu-active': routeName === 'fortune',
            }"
            >
            <a :href="APP_URL + '/fortune'" class="z-menu-link">星座运势</a>
            </li>
            <li
            :class="{
                'z-menu-list': true,
                'z-menu-active': routeName === 'astrolabe',
            }"
            >
            <a :href="APP_URL + '/astrolabe'" class="z-menu-link">星盘生成</a>
            </li>
            <li
            :class="{
                'z-menu-list': true,
                'z-menu-active': routeName === 'course',
            }"
            >
            <a :href="APP_URL + '/course'" class="z-menu-link">占星课程</a>
            </li>
        </ul>
        </nav>    
    </div>
  </header>
</template>
<script setup>
import logo from "/assets/img/logo.png";
const apis = useApis()
const route = useRoute();
const routeName = route.name;
const APP_URL = ref("/");
const runtimeConfig = useRuntimeConfig();
APP_URL.value = runtimeConfig.public.APP_URL ?? "/";
const { data } = await apis.getDemo()
console.log(data.value.data, '-------')
onMounted(() => {
    console.log(data.value, '-------!!!')
})

</script>

<style scoped lang="scss">
.z-header {
  height: 110px;
  background: rgb(66 140 183 / 30%);background-size: 100% auto;
  .z-menu-box {
    width: 1400px;margin:auto;
  }
  .z-logo,
  .z-nav {
    float: left;
  }
  .z-logo {
    width: 260px;
    height: 110px;
    text-align: center;
    background-color: #fff;
    .z-logo-img {
      position: relative;
      top: 21px;
    }
  }
  .z-nav {
    overflow: hidden;
    height: 110px;
    line-height: 110px;
    .z-menu {
      padding-left: 35px;
      display: block;
      overflow: hidden;
    }
    .z-menu-active {
      background: url("/assets/img/menu-left-icon.png") no-repeat 0px center;
      .z-menu-link {
        background: url("/assets/img/menu-right-icon.png") no-repeat right 4px;
      }
    }
    .z-menu-list {
      float: left;
      padding-left: 35px;
    }
    .z-menu-link {
      color: #fff;
      text-decoration: none;
      padding-right: 35px;
    }
  }
}
</style>
