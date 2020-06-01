<template>
  <div id="app">
    <Header/>
    <Tabbar/>
    <router-view/>
  </div>
</template>
<script>
import Header from './components/Header'
import Tabbar from './components/Tabbar'
export default {
  name: 'App',
  components: {
    Header,
    Tabbar
  }
}

</script>
<style scoped lang="scss">
</style>
