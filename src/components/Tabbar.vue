<template>
  <div class="tabbar">
    <router-link tag="div" class="item" to="recommand"><span>推荐</span></router-link>
    <router-link tag="div" class="item" to="singer"><span>歌手</span></router-link>
    <router-link tag="div" class="item" to="rank"><span>排行</span></router-link>
    <router-link tag="div" class="item" to="search"><span>搜索</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped lang="scss">
  @import "./../assets/css/mixin";
  @import "./../assets/css/variable";
.tabbar{
  width: 100%;
  height: 84px;
  @include bg_sub_color;
  display: flex;
  .item{
    flex: 1;
    align-items: center;
    text-align: center;
    span{
      display: inline-block;
      box-sizing: border-box;
      line-height: 84px;
      height: 100%;
      @include font_size($font_medium_s);
      @include font_color();
      border-bottom: 5px solid transparent;
    }
    &.router-link-active{
      span{
        @include font_active_color();
        @include border_color();
      }
    }
  }
}
</style>
