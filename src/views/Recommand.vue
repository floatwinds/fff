<template>
  <div class="recommand">
    <p>推荐</p>
    <Banner :abc="banners"></Banner>
  </div>
</template>

<script>
import { getBanner } from './../network/index'
import Banner from '../components/Banner'
export default {
  name: 'Recommand',
  created () {
    getBanner().then(res => { console.log(res.data.banners) }).catch(err => { console.log(err) })
    getBanner().then(res => { this.banners = res.data.banners }).catch(err => { console.log(err) })
  },
  components: {
    Banner
  },
  data () {
    return {
      banners: []
    }
  }
}
</script>

<style scoped>

</style>
