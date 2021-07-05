<template>
    <div>
        <h1>父路由</h1>
        <!-- 子路由出口 ，如果中间没有内容，可单标签结束-->
        <nuxt-child id='vueUsers' />
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonUsers',

    components: {  },

    directives: {  },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>
#vueUsers {
    background:rgb(163, 228, 222);
    padding: 30px;
    margin:0 auto;
    width: 80vw;
}
</style>