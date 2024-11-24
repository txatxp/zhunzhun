<template>
    <form id="zDivination" class="z-form" @submit.prevent="handleSubmit">
        <div class="z-form-box">
            <div class="z-form-item">
                <label for="phone" class="z-label">联系方式：</label>
                <input type="number" class="z-input" placeholder="请输入联系方式" v-model="phone" maxLength="11">
            </div>
            <div class="z-form-item">
                <label for="phone" class="z-label">姓名：</label>
                <input type="text" class="z-input" placeholder="请输入姓名" v-model="userName">
            </div>
            
            <div class="z-form-item">
                <label for="phone" class="z-label">出生日期：</label>
                <div class="z-input z-input2">
                    <select v-model="defaultYearsVal" class="z-select">
                        <option :value="item" v-for="item in defaultYearsArr" :key="item">{{ item }}年</option>
                    </select> 
                </div>
                <div class="z-input z-input2">
                    <select v-model="defaultMonthVal" class="z-select">
                        <option :value="item" v-for="item in defaultMonthArr" :key="item">{{ item }}月</option>
                    </select> 
                </div>
                <div class="z-input z-input2">
                    <select v-model="defaultTodayVal" class="z-select">
                        <option :value="item" v-for="item in defaultTodayArr" :key="item">{{ item }}日</option>
                    </select> 
                </div>
            </div>
        
            <div class="z-form-item">
            <label for="phone" class="z-label">出生时间：</label>
            <div class="z-input z-input2">
                <select v-model="defaultHourVal" class="z-select">
                    <option :value="item" v-for="item in defaultHourArr" :key="item">{{ item }}时</option>
                </select> 
            </div>
            <div class="z-input z-input2">
                <select v-model="defaultMinuteVal" class="z-select">
                    <option :value="item" v-for="item in defaultMinuArr" :key="item">{{ item }}分</option>
                </select> 
            </div>
            <div class="z-input z-input2">
                <select v-model="defaultSecondVal" class="z-select">
                    <option :value="item" v-for="item in defaultSecondArr" :key="item">{{ item }}秒</option>
                </select> 
            </div>
            </div>
            <div class="z-form-item">
                <label for="phone" class="z-label">出生地址：</label>
                <div class="z-input z-input2">
                    <select v-model="defaultProvinces" class="z-select" placeholder="请选择省份" @change="provincesChange">
                        <option :value="item.code" v-for="item in provinces" :key="item.code">{{ item.name }}</option>
                    </select> 
                </div>
            <div class="z-input z-input2" v-if="cities" @change="citiesChange">
                <select v-model="defaultCitys" class="z-select" placeholder="请选择城市">
                    <option :value="item.code" v-for="item in cities" :key="item.code">{{ item.name }}</option>
                </select> 
            </div>
            <div class="z-input z-input2">
                <select v-model="defaultDistricts" class="z-select" placeholder="请选择区县" @change="districtsChange">
                    <option :value="key" v-for="(item, key) in districts" :key="key">{{ item }}</option>
                </select> 
            </div>
            </div>
            <div class="z-form-item">
                <label for="phone" class="z-label">是否夏令时：</label>
                <div class="z-input z-input2">
                    <select v-model="dst" class="z-select">
                        <option :value="item.value" v-for="item in dstArr" :key="item.value">{{ item.name }}</option>
                    </select> 
                    
                </div>
                <div class="z-float">
                    <el-popover 
                        placement="right"
                        title=""
                        :width="400"
                        trigger="hover"
                        content="中国曾于1986年至1991年实行夏令时制度，1986年：从5月4日开始，到9月14日结束。"
                    >
                        <template #reference>
                            <span><el-icon :size="15" :color="'#fff'" class="z-dst-icon"><QuestionFilled /></el-icon></span>
                        </template>
                    </el-popover>
                </div>
            </div>
            <div class="z-form-item">
                <label for="phone" class="z-label">时区：</label>
                <div class="z-input z-input2 z-input3">
                    <select v-model="defaultZone" class="z-select">
                        <option :value="item.value" v-for="item in defaultZoneArr" :key="item.value">{{ item.name }}</option>
                    </select> 
                </div>
                <div class="z-float">
                    <el-popover 
                        placement="right"
                        title=""
                        :width="400"
                        trigger="hover"
                    >
                        <template #reference>
                            <span><el-icon :size="15" :color="'#fff'" class="z-dst-icon"><QuestionFilled /></el-icon></span>
                        </template>
                        <div>
                            <p>1. 东五区（UTC+5）：覆盖新疆西部地区。</p>
                            <p>2. 东六区（UTC+6）：覆盖新疆东部、西藏西部地区。</p>
                            <p>3. 东七区（UTC+7）：覆盖西藏东部、青海、甘肃、内蒙古西部地区。</p>
                            <p>4. 东八区（UTC+8）：覆盖大部分中国领土，包括北京、上海、广州等主要城市。</p>
                            <p>5. 东九区（UTC+9）：覆盖黑龙江、吉林、辽宁等东北部地区。</p>
                        </div>
                    </el-popover>
                </div>
            </div>

            <div class="z-form-item z-form-item2">
                <label for="phone" class="z-label"></label>
                <div class="z-title z-edit" @click="edit">
                    <el-popover 
                        placement="top-start"
                        title=""
                        :width="200"
                        trigger="hover"
                        content="自己输入一个更准确的经纬度，生成星盘更准确"
                    >
                        <template #reference>
                            <span class="z-edit-sp">编辑-选填<el-icon :size="15" :color="'#fff'" class="z-edit-icon"><Edit /></el-icon></span>
                            
                        </template>
                    </el-popover>
                    
                </div>
            </div>

            <div class="z-form-item">
                <label for="phone" class="z-label">出生地-经度：</label>
                <input type="text" :class="{'z-input': true, 'z-disabled': readonly}" placeholder="请输入出生时，地区的经度，生成星盘更准确" v-model="map_lng" :disabled="readonly" >
            </div>
            <div class="z-form-item">
                <label for="phone" class="z-label">出生地-纬度：</label>
                <input type="text" :class="{'z-input': true, 'z-disabled': readonly}" placeholder="请输入出生时，地区的纬度，生成星盘更准确" v-model="map_lat" :disabled="readonly">  
            </div>

            <div class="z-form-item">
                <label for="phone" class="z-label"></label>
                <div class="z-float z-code" v-html="verifyCode" @click="getVerifyCode"></div>
            </div>
            <div class="z-form-item">
                <label for="phone" class="z-label">输入验证码：</label>
                <div class="z-input">
                    <input type="text" class="z-input" placeholder="请输入验证码" v-model="messageCode">
                </div>
            </div>
            
            <div class="z-form-item z-border0">
                <!-- <button type="submit" class="z-sbumit"></button> -->
                <el-button type="danger" round @click="submit" class="z-sbumit" :loading="loading">立即生成</el-button>
            </div>
            <!-- <div class="z-form-item z-padding-top0"><span class="z-waring-icon">*</span><span class="z-waring">占卜不对未成年人开放，请确保您已成年！</span></div>     -->
        </div>
        <div class="z-astro-config">

            <div class="z-astro-title">主题：</div>
            <el-radio-group v-model="theme">
                <el-radio value="1" size="large">默认</el-radio>
                <el-radio value="2" size="large">黑白</el-radio>
                <el-radio value="3" size="large">单色</el-radio>
            </el-radio-group>

            <div class="z-astro-title">线条类型：</div>
            <el-radio-group v-model="line">
                <el-radio value="0" size="large">粗线</el-radio>
                <el-radio value="2" size="large">细线</el-radio>
                <el-radio value="1" size="large">虚线</el-radio>
            </el-radio-group>


            <div class="z-astro-title">
                <span class="z-float-left">显示指定星体：</span>
            </div>
            <el-checkbox-group v-model="astro" :text-color="'#ffffff'">
                <el-checkbox value="1" class="z-el-checkbox">太阳</el-checkbox>
                <el-checkbox value="2" class="z-el-checkbox">月亮</el-checkbox>
                <el-checkbox value="3" class="z-el-checkbox">水星</el-checkbox>
                <el-checkbox value="4" class="z-el-checkbox">金星</el-checkbox>
                <el-checkbox value="5" class="z-el-checkbox">火星</el-checkbox>
                <el-checkbox value="6" class="z-el-checkbox">木星</el-checkbox>
                <el-checkbox value="7" class="z-el-checkbox">土星</el-checkbox>
                <el-checkbox value="8" class="z-el-checkbox">天王星</el-checkbox>
                <el-checkbox value="9" class="z-el-checkbox">海王星</el-checkbox>
                <el-checkbox value="10" class="z-el-checkbox">冥王星</el-checkbox>
            </el-checkbox-group>

            <div class="z-astro-title">显示指定神星：</div>
            <el-checkbox-group v-model="god" :text-color="'#ffffff'">
                <el-checkbox value="11" class="z-el-checkbox">凯龙星</el-checkbox>
                <el-checkbox value="12" class="z-el-checkbox">谷神星</el-checkbox>
                <el-checkbox value="13" class="z-el-checkbox">智神帕拉斯</el-checkbox>
                <el-checkbox value="14" class="z-el-checkbox">婚神星</el-checkbox>
                <el-checkbox value="15" class="z-el-checkbox">灶神星</el-checkbox>
                <el-checkbox value="34" class="z-el-checkbox">火神星</el-checkbox>
                <el-checkbox value="43" class="z-el-checkbox">卫生女神</el-checkbox>
            </el-checkbox-group>

            <div class="z-astro-title">相关点位：</div>
            <el-checkbox-group v-model="drop" :text-color="'#ffffff'">
                <el-checkbox value="16" class="z-el-checkbox">北交点</el-checkbox>
                <el-checkbox value="17" class="z-el-checkbox">南交点</el-checkbox>
                <el-checkbox value="18" class="z-el-checkbox">莉莉丝</el-checkbox>
                <el-checkbox value="19" class="z-el-checkbox">福点</el-checkbox>
                <el-checkbox value="31" class="z-el-checkbox">天顶</el-checkbox>
                <el-checkbox value="28" class="z-el-checkbox">下降点</el-checkbox>
                <el-checkbox value="20" class="z-el-checkbox">顶点</el-checkbox>
                <el-checkbox value="25" class="z-el-checkbox">天底</el-checkbox>
                <el-checkbox value="21" class="z-el-checkbox">东方点</el-checkbox>
                <el-checkbox value="22" class="z-el-checkbox">上升点</el-checkbox>
                
            </el-checkbox-group>

            <div class="z-astro-title">相关宫位：</div>
            <el-checkbox-group v-model="houses" :text-color="'#ffffff'">
                <el-checkbox value="23" class="z-el-checkbox">第二宫</el-checkbox>
                <el-checkbox value="24" class="z-el-checkbox">第三宫</el-checkbox>
                <el-checkbox value="26" class="z-el-checkbox">第五宫</el-checkbox>
                <el-checkbox value="27" class="z-el-checkbox">第六宫</el-checkbox>
                <el-checkbox value="29" class="z-el-checkbox">第八宫</el-checkbox>
                <el-checkbox value="30" class="z-el-checkbox">第九宫</el-checkbox>
                <el-checkbox value="32" class="z-el-checkbox">第十一宫</el-checkbox>
                <el-checkbox value="33" class="z-el-checkbox">第十二宫</el-checkbox>
            </el-checkbox-group>

            <div class="z-astro-title">其他：</div>
            <el-checkbox-group v-model="other" :text-color="'#ffffff'">
                <el-checkbox value="35" class="z-el-checkbox">库彼多</el-checkbox>
                <el-checkbox value="36" class="z-el-checkbox">哈迪斯</el-checkbox>
                <el-checkbox value="37" class="z-el-checkbox">宙斯</el-checkbox>
                <el-checkbox value="38" class="z-el-checkbox">克罗诺斯</el-checkbox>
                <el-checkbox value="39" class="z-el-checkbox">阿波罗</el-checkbox>
                <el-checkbox value="40" class="z-el-checkbox">阿德墨托斯</el-checkbox>
                <el-checkbox value="41" class="z-el-checkbox">瓦尔坎努斯</el-checkbox>
                <el-checkbox value="42" class="z-el-checkbox">波塞冬</el-checkbox>
                <el-checkbox value="44" class="z-el-checkbox">福勒斯</el-checkbox>
                <el-checkbox value="45" class="z-el-checkbox">厄里斯</el-checkbox>
                <el-checkbox value="46" class="z-el-checkbox">豪梅亚</el-checkbox>
                <el-checkbox value="47" class="z-el-checkbox">马克</el-checkbox>
                <el-checkbox value="48" class="z-el-checkbox">共工</el-checkbox>
                <el-checkbox value="49" class="z-el-checkbox">夸欧瓦尔</el-checkbox>
                <el-checkbox value="50" class="z-el-checkbox">塞德娜</el-checkbox>
                <el-checkbox value="51" class="z-el-checkbox">奥尔库斯</el-checkbox>
                <el-checkbox value="52" class="z-el-checkbox">火卫一</el-checkbox>
                <el-checkbox value="53" class="z-el-checkbox">火卫二</el-checkbox>
                <el-checkbox value="54" class="z-el-checkbox">伽倪墨得斯</el-checkbox> 
                <el-checkbox value="55" class="z-el-checkbox">卡利斯托</el-checkbox>  
                <el-checkbox value="56" class="z-el-checkbox">伊奥</el-checkbox>
                <el-checkbox value="57" class="z-el-checkbox">欧罗巴</el-checkbox>
                <el-checkbox value="58" class="z-el-checkbox">泰坦</el-checkbox>
                <el-checkbox value="59" class="z-el-checkbox">赖亚</el-checkbox>
                <el-checkbox value="60" class="z-el-checkbox">伊帕托斯</el-checkbox>
                <el-checkbox value="61" class="z-el-checkbox">迪俄涅</el-checkbox>
                <el-checkbox value="62" class="z-el-checkbox">提堤俄斯</el-checkbox>
                <el-checkbox value="63" class="z-el-checkbox">恩克拉多斯</el-checkbox>
                <el-checkbox value="64" class="z-el-checkbox">米玛斯</el-checkbox>
                <el-checkbox value="65" class="z-el-checkbox">海伯里安</el-checkbox>
                <el-checkbox value="66" class="z-el-checkbox">提泰妮娅</el-checkbox>
                <el-checkbox value="67" class="z-el-checkbox">欧伯隆</el-checkbox>
                <el-checkbox value="68" class="z-el-checkbox">翁布里埃尔</el-checkbox>
                <el-checkbox value="69" class="z-el-checkbox">阿瑞尔</el-checkbox>
                <el-checkbox value="70" class="z-el-checkbox">米兰达</el-checkbox>
                <el-checkbox value="71" class="z-el-checkbox">特里同</el-checkbox>
                <el-checkbox value="72" class="z-el-checkbox">普罗透斯</el-checkbox>
                <el-checkbox value="73" class="z-el-checkbox">奈瑞德</el-checkbox>
                <el-checkbox value="74" class="z-el-checkbox">卡戎</el-checkbox>
                <el-checkbox value="75" class="z-el-checkbox">许德拉</el-checkbox>
                <el-checkbox value="76" class="z-el-checkbox">尼克斯</el-checkbox>
                <el-checkbox value="77" class="z-el-checkbox">克尔柏洛斯</el-checkbox>
                <el-checkbox value="78" class="z-el-checkbox">斯提克斯</el-checkbox>
                <el-checkbox value="79" class="z-el-checkbox">木星中心轨道小行星带</el-checkbox>




            </el-checkbox-group>
            
        </div>
    </form>
    <div class="z-map" id="map"></div>
    <el-dialog
        v-model="dialogVisible"
        title="您的星盘生成成功！"
        width="830"
        :append-to-body="true"
        :before-close="handleClose"
        :align-center="true"
    >
        <img :src="astrologImg" alt="" v-if="astrologImg" width="800">
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="lookMaxImg">查看大图</el-button>
                <el-button type="primary" @click="contact">联系准准，分析命运</el-button>
            </div>
        </template>
    </el-dialog>
    <el-dialog
        v-model="zhunzhunCodeVisible"
        title="您的星盘生成成功！"
        width="440"
        :append-to-body="true"
        :before-close="handleClose"
    >
        <div>
            <img class="z-consult-img" :src="runtimeConfig.public.APP_URL + zhunzhun_weixin" alt="联系准准人工推运势" width="400" height="400">
            <div class="z-text-align-center">联系方式：15158808166</div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="zhunzhunCodeVisible = false">取消</el-button>
            </div>
        </template>
    </el-dialog>
    <el-dialog
        v-model="maxImgVisible"
        title="您的星盘生成成功！"
        width="60%"
        :append-to-body="true"
        :before-close="handleClose"
    >
        <div>
            <img class="z-consult-img" :src="astrologImg" alt="联系准准人工推运势" style="width: 100%;">
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="maxImgVisible = false">取消</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
import list from 'china-location/dist/location.json';
import ChinaLocation from 'china-location';
import { Edit, QuestionFilled } from '@element-plus/icons-vue';
import zhunzhun_weixin from '@/assets/img/weixin-code_10.png'
const runtimeConfig = useRuntimeConfig();
const apis = useApis()
// 显示星盘图片
let dialogVisible = ref(false)
// 准准的专属二维码
let zhunzhunCodeVisible = ref(false)
// 查看大图
let maxImgVisible = ref(false)

let astrologImg = ref('')
// 线条
let line = ref('0')
// 主题
let theme = ref('1')


// 显示指定星体
let astro = ref(['1','2','3','4','5','6','7','8','9','10'])


// 神星
let god = ref([])

let drop = ref([])

// 宫位
let houses = ref([])

// 其他
let other = ref([])


// 手机号
let phone = ref('')
// 姓名
let userName = ref('')

// 获取所有省份信息
const location = new ChinaLocation(list);
let address = null

// 省份
let provinces = location.getProvinces()
let defaultProvinces = ref('440000')

// 城市
let cities = ref()
let defaultCitys = ref()




// 省份改变触发事件
const provincesChange = () => {
    cities.value = location.getProvinceByCode(defaultProvinces.value).cities
    defaultCitys.value  = Object.keys(cities.value)[0]
    citiesChange()
    
}

// 市区县
let districts = ref()
let defaultDistricts = ref()

// 市区县改变触发事件
const citiesChange = () => {
    districts.value = cities.value[defaultCitys.value].districts
    defaultDistricts.value  = Object.keys(districts.value)[0]
    setCodes()
}

const districtsChange = () => {
    console.log(districts.value[defaultDistricts.value])
    setCodes()
}

const setCodes = () => {
    location.changeLocation(defaultProvinces.value, defaultCitys.value, defaultDistricts.value)
    address = location.getCurrentAddress()
    getPoint()
}

provincesChange()


// 时区
let defaultZone = ref(8)
let defaultZoneArr = [
    { value: 5, name: '东五区（UTC+5）' },
    { value: 6, name: '东六区（UTC+6）' },
    { value: 7, name: '东七区（UTC+7）' },
    { value: 8, name: '东八区（UTC+8）' },
    { value: 9, name: '东九区（UTC+9）' },
]

// 是否夏令时
let dst = ref(1)
let dstArr = [
    { value: 0, name: '否' },
    { value: 1, name: '是' },
]






let defaultYears = 1900
let defaultYearsVal = ref(1988)
let defaultYearsArr = []
let year = new Date().getFullYear()

for (let i = 0; i <= (year - defaultYears); i++) {
  defaultYearsArr.push(defaultYears + i)
}

let defaultMonthVal = ref(8)
let defaultMonthArr = []
for (let i = 1; i <= 12; i++) {
  defaultMonthArr.push(i)
}

let defaultTodayVal = ref(8)
let defaultTodayArr = []
for (let i = 1; i <= 31; i++) {
  defaultTodayArr.push(i)
}


let defaultHourVal = ref(8)
let defaultHourArr = []
for (let i = 1; i <= 23; i++) {
  defaultHourArr.push(i)
}

let defaultMinuteVal = ref(8)
let defaultMinuArr = []
for (let i = 0; i <= 59; i++) {
  defaultMinuArr.push(i)
}


let defaultSecondVal = ref(0)
let defaultSecondArr = []
for (let i = 0; i <= 59; i++) {
  defaultSecondArr.push(i)
}


let map_lat = ref()
let map_lng = ref()
let readonly = ref(true)

const edit = async () => {
    readonly.value = false
}


function getPoint() {
    const geocoding = new BMapGL.Geocoder();
    let addressStr = address.province.name + address.city.name + address.district.name
    console.log(addressStr)  
    geocoding.getPoint(addressStr, function(point) {
        if (point) {
            const lat = point.lat;
            const lng = point.lng;
            map_lat.value = lat
            map_lng.value = lng
            console.log(`经纬度: ${lat}, ${lng}`)
        } else {
            console.log('无法找到该地址')
        }
    }, address.city.name); // 可以指定城市，提高准确性 
}


let messageCode = ref()
let verifyCode = ref()
// 获取验证码
function getVerifyCode() {
    apis.getVerifyCode().then(res => {
        verifyCode.value = res.data
    })
}

onMounted(async () => {
    let map = new BMapGL.Map('map')
    getVerifyCode()
})

const loading = ref(false);
let reg = /1[2-9]{1}[0-9]{9}/

const submit = async () => {
    
    if (!phone.value) {
        alert('请输入手机号')
        return
    }
    if (phone.value) {
        if (!reg.test(phone.value)) {
            alert('手机号格式不正确')
            return
        }
    }
    if (!userName.value) {
        alert('请输入姓名')
        return
    }
    if (!map_lat.value) {
        alert('请输入纬度')
        return
    }
    if (!map_lng.value) {
        alert('请输入经度')
        return
    }
    if (!messageCode.value) {
        alert('请输入验证码')
        return
    }
    loading.value = true
    const params = {
        // 手机号
        phone: phone.value,
        // 姓名
        name: userName.value,
        // 经度
        longitude: `${map_lng.value.toFixed(6)}E`,
        // 纬度
        latitude: `${map_lat.value.toFixed(6)}N`,
        // 夏令时
        dst: dst.value,
        // 时区
        zone: `${defaultZone.value}E`,
        // 地址
        city: address.province.name + address.city.name + address.district.name,
        // 出生年月日
        month: defaultMonthVal.value,
        day: defaultTodayVal.value,
        year: defaultYearsVal.value,
        // 出生时分秒
        time: defaultHourVal.value + ':' + defaultMinuteVal.value + ':' + defaultSecondVal.value,
        astro: [...astro.value, ...god.value, ...drop.value, ...houses.value,...other.value],
        line,
        theme,
        messageCode: messageCode.value,
    }
    let res = await apis.createAstro(params)
    if (res.data.value.code == 200) {
        dialogVisible.value = true
        loading.value = false
        astrologImg.value = res.data.value.data
        messageCode.value = ''
        getVerifyCode()
    } else {
        loading.value = false
        getVerifyCode()
        if (res.data.value.code === 500) {
            alert(res.data.value.msg)
        } else {
            alert(res.data.value.msg)

        }
    }
}
const contact = () => {
    zhunzhunCodeVisible.value = true

}
const lookMaxImg = () => {
    maxImgVisible.value = true

}


   


</script>
<style lang="scss" scoped>
@import '@/assets/css/form.scss';
.z-form-box {
    width: 700px;
    margin: auto;
}
.z-disabled {
    opacity: 0.5;cursor: not-allowed;

}
.z-edit-icon,.z-edit-sp {
    vertical-align: middle;
}
.z-edit-icon {
    position: relative;
    left: 2px;
}
.z-dst-icon {
    position: relative;
    top: 15px;
}
.z-map {
    position: absolute;
    width: 1px;height: 1px;left: 0px;top: 0px;z-index: 999;
    background-color: aliceblue;
}
.z-code {
    background:#fff;cursor: pointer;
}
</style>