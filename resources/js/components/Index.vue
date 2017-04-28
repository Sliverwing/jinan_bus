<template lang="pug">
  #searchComponent
    mt-search(v-model="searchKeyWords" :result.sync="searchResult")
      router-link(:to="'/' + item.id + '/detail'" v-for="item in searchResult" :key="item.id" )
        mt-cell(:title="item.lineName" :value="item.startStationName + '/' +item.endStationName " is_link)
</template>
<script>

import axios from 'axios';

export default {
  
  data () {
    return {
      searchKeyWords: null,
      searchResult: [],
    }
  },
  created () {
    
  },
  watch: {
    searchKeyWords: function () {
      if (this.searchKeyWords != '') {
        axios.get('/api/search/' + this.searchKeyWords)
          .then ( r => {
            this.searchResult = r.data['result']['result'];
          })
      }
    }
  },
  method: {
    handleClick: (id) => {
      this.$router.push('/' + id + '/detail')
    }
  }

}
</script>