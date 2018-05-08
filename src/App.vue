<template>
  <div id="app">
      {{num}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      num:1 
    }
  },
  mounted(){
    this.num = this.operations(0.1,0.2,'+')
  }
}
</script>


