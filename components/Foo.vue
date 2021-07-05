<template>
    <div>
        <h1>components/Foo.vue组件</h1>
        <ul>
            <li
            v-for="(item, key) in posts" 
            :key="key"
            > {{ item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FooPage',
    props:['posts'],
    data() {
        return {
            
        };
    }
};
</script>

<style lang="scss" scoped>

</style>