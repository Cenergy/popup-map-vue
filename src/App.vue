<template>
  <div id="app">
    <div>
      <Portal to="right-basic">
        <p class="red">
          This is content from the left/top container (green). The cool part is,
          it works across components, so you can send your content anywhere!
        </p>
      </Portal>
    </div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
export default {};
</script>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
