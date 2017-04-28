<template lang="pug">
  #searchComponent
    mt-search(v-model="searchKeyWords" :result.sync="searchResult")
      mt-cell(v-for="item in searchResult" :title="item.lineName" :value="item.id" :key="item.id")
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
  }
  
}
</script>