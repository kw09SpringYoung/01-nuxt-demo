<template>
    <div>
        <h1>Article Page</h1>
        <h2>{{ article.title }}</h2>
        <div>{{article.body}} </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ArticlePage',
    async asyncData(context) {
        const { data } = await axios({
            method: 'GET',
            url: 'http://localhost:51009/data.json'
        })
        console.log(data)
        return {
            article: data.posts.find(item => item.id === Number.parseInt(context.params.id))
        }
    },
};
</script>

<style lang="scss" scoped>

</style>