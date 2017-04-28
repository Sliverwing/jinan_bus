<template lang="pug">
    #busDetail
        #topBar
            a(href="#/" class="page-back router-link-active")
                i(class="mintui mintui-back")
        #content
            mt-cell(:title="item.stationName" v-for="item in stations" key="id")
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
                stations: [],
                lineName: null,
                startStationName: null,
                endStationName: null
            }
        },
        created () {
            axios.get('/api/busline/' + this.id)
                .then( r => {
                    this.lineName = r.data.result.lineName;
                    this.startStationName = r.data.result.startStationName;
                    this.endStationName = r.data.result.endStationName;
                    this.stations = r.data.result.stations;
                })
        }
    }
</script>