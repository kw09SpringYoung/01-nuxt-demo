<template>
    <div>
        <h1> {{ title }} </h1>
        <nuxt-link to="/about">About</nuxt-link>
        <Foo :posts = 'posts' />
    </div>
</template>

<script>
import axios from 'axios'
import Foo from '@/components/Foo'
export default {
    name: 'HomePage',
    // 当你想要动态页面内容有利于SEO，或者是提升首屏渲染速度的时候，就在asyncData中发请求那数据
    async asyncData (){
        console.log(this)
        const res = await axios({
            method:'GET',
            url: 'http://localhost:51009/data.json'
        })
        return res.data
    },
    components:{
        Foo
    },
    // 如果是非异步数据或普通数据，则正常的初始化到data中即可
    data() {
        return {
            page:'index'
        };
    }
};
/* 
#### Nuxt.js 异步数据 - asyncData 方法

- 基本用法
  - 它会将 asyncData 返回的数据融合组件data方法返回数据一并给组件
  - 调用时机： 服务端渲染期间和客户端路由更新期间
- 注意事项
  - 只能在页面组件中使用
  - 没有 this，因为它是在组件初始化之前被调用的
  
  非页面组件想要asyncData中的数据，则需要通过页面组件获取并传递。
  */
</script>

<style lang="scss" scoped>

</style>