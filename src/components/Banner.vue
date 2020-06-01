<template>
    <swiper :options="swiperOptions" class="banner">
      <swiper-slide v-for="value in abc" :key="value.bannerId" class="item">
        <a :href="value.url">
          <img :src="value.pic" alt="">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Banner',
  // props: ['abc'],
  props: {
    abc: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.banner{
  item{
    img{
      width: 100%;
      height: 300px;
    }
  }
}
</style>
<style lang="scss">
  @import "./../assets/css/mixin";
  @import "./../assets/css/variable";
  .banner{
    .swiper-pagination{
      span{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        opacity: 1;
        &.swiper-pagination-bullet-active{
          @include bg_color;
        }
      }
    }
  }
</style>
