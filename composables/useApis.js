export function useApis() {
    const runtimeConfig = useRuntimeConfig();
    return {
        getDemo: async () => {
            console.log(runtimeConfig.public.API_URL + '/api/demo')
            return await useFetch(runtimeConfig.public.API_URL + '/api/demo', {
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 获取今日运势
        getAstroTodayFortune: async () => {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/today/fortune', {
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 明日运势
        async getAstroTomorrowFortune() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/tomorrow/fortune', {
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 本月运势
        async getAstroMonthFortune() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/month/fortune', {
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 本年运势

        async getAstroYearsFortune() {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/years/fortune', {
                credentials: 'include', // 设置 credentials 选项
            })
        },

        // 根据条件获取单条运势
        async getFortune(fortuneDate, astro, fortuneType) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/get/fortune', {
                query: {
                    fortuneDate: fortuneDate,
                    astro: astro,
                    fortuneType
                },
                credentials: 'include', // 设置 credentials 选项
            })
        },
        // 创建星盘
        async createAstro(params) {
            return await useFetch(runtimeConfig.public.API_URL + '/api/create/astro', {
                method: 'POST',
                body: params,
                credentials: 'include', // 设置 credentials 选项
            })
        },
        async getVerifyCode() {
            return await $fetch(runtimeConfig.public.API_URL + '/api/verifyCode', {
                credentials: 'include', // 设置 credentials 选项
                

            })
        },
        async getCode() {
            return await $fetch(runtimeConfig.public.API_URL + '/api/getVerifyCode', {
                credentials: 'include', // 设置 credentials 选项
            })
        }

    }
}