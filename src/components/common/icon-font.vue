<script lang='ts' setup>
defineProps<{ readonly icon: string }>()
</script>

<template>
  <i class='iconfont' :class='[ `icon-${icon}` ]'></i>
</template>

<style lang='stylus' scoped>
@font-face
  font-family "iconfont"
  font-display swap
  src url('../assets/icons/iconfont.woff2') format('woff2')

.iconfont
  font-family "iconfont" !important
  font-size 16px
  font-style normal
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.icon-top:before
  content "\e632"

.icon-tel:before
  content "\e64e"

.icon-feedback:before
  content "\e616"

.icon-buy:before
  content "\e63f"

.icon-sevice:before
  content "\e64b"
</style>