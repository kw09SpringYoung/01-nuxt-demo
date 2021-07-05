/* Nuxt.js配置文件 */

module.exports = {
    router: {
        base: '/abc',
        extendRoutes (routes, resolve) {
            routes.push({
                name: 'custom',
                path: '*',
                component: resolve(__dirname,'pages/about.vue')
            })
        }
    }
}