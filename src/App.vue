<script setup lang='ts'>
import Split from './components/common/split.vue'
import TopBanner from './components/top-banner.vue'
import TopNav from './components/top-nav.vue'
import Header from './components/header/index.vue'
import NavigationBar from './components/navigation-bar/index.vue'
import Carousel from './components/carousel.vue'
import MainServer from './components/main-server.vue'
import CustomerService from './components/customer-service.vue'
import Scene from './components/scene.vue'
import SceneTransverse from './components/scene-transverse.vue'
import FloorBox from './components/floor-box/index.vue'

/**
 * Components Data
 */
import { sceneData } from './data/scene'
import { sceneTransverseData } from './data/scene-transverse'
import { carouselData } from './data/carousel'
import { floorBoxData } from './data/floor-box'
</script>

<template>
  <!-- floating component -->
  <CustomerService />

  <!-- Navigation -->
  <TopBanner />
  <TopNav />
  <Header />
  <NavigationBar />
  <Carousel :imageList='carouselData' />

  <!-- Main Services -->
  <MainServer />
  <Split height='16px' />

  <!-- Scene Box -->
  <Scene :listData='sceneData' />
  <Split height='30px' />

  <!-- Scene Box (Transverse) -->
  <SceneTransverse :listData='sceneTransverseData' />
  <Split height='60px' />

  <!-- Floor Box -->
  <section class='floor-box' v-for='(item, i) in floorBoxData' :key='i'>
    <Split height='30px' />
    <FloorBox :data='item' />
    <Split height='60px' />
  </section>
</template>

<style lang='stylus' scoped>
section.floor-box:nth-child(2n - 1)
  background-color #f7f9fa

section.floor-box:nth-child(2n)
  background-color #e9ecf0
</style>
