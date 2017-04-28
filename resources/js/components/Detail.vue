<template lang="pug">
    #busDetail
        #topBar
            a(href="#/" class="page-back router-link-active")
                i(class="mintui mintui-back")
        #content
            mt-cell(title="item" v-for="item in busStations")
</template>
<style>
    #topBar {
        min-width: 100%;
        background-color: #fafafa;
        margin: 0;
        padding: 10px 0;
    }
</style>
<script>
    import axios from 'axios';

    export default {
        props: ['id'],
        data () {
            return {
                busStations: []
            }
        },
        created () {
            console.log(this.id)
        }
    }
</script>