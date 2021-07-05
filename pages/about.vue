<template>
    <div>
        <h1>About Page</h1>
        <nuxt-link to="/">首页</nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',

    components: {  },

    directives: {  },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        onClick (){
            this.$router.push('/')
        }
    },
};
</script>

<style lang="scss" scoped>

</style>