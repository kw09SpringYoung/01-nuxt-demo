<template>
    <div>
        <h1>Foo Page</h1>
        <ul>
            <li v-for="(item, index) in posts" :key="index"><nuxt-link :to = "'/article/' + item.id " >{{item.title}}</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FooPage',
    props: ['posts']
      
};
</script>

<style lang="scss" scoped>

</style>