<template>
    <div>
        <h1>{{ title }}</h1>
        <Foo :posts = 'posts' />
    </div>
</template>

<script>
import axios from 'axios'
import Foo from '@/components/Foo'
export default {
    name: 'HomePage',
    data() {
        return {
            
        };
    },
    async asyncData() {
        const { data } = await axios({
            method: 'GET',
            url: 'http://localhost:51009/data.json'
        })
        return data
    },
    components: {
        Foo
    }
};
</script>

<style>

</style>