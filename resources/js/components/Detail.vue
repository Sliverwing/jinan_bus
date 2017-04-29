<template lang="pug">
    #busDetail
        #topBar
            a(href="#/" class="page-back router-link-active")
                i(class="mintui mintui-back")
        #content
            mt-cell(:title="item.stationName" v-for="(item, index) in stations" key="id")
                span(v-if="bus.stationSeqNum == index + 1" v-for="bus in buses") {{ bus.busId }}
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
                endStationName: null,
                buses: []
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
            this.refreshStatus();
            this.IntervalEvent();
        },
        methods : {
            refreshStatus: function () {
                axios.get('/api/busline/' + this.id + '/position')
                    .then( r => {
                        this.buses = r.data.result;
                    });
            },
            IntervalEvent: function () {
                setInterval(this.refreshStatus, 3000);
            }
        }
    }
</script>