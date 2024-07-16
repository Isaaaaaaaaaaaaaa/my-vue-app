<template>
  <div id="app">
    <router-view></router-view>
    <MusicPlayerButton :audioSrc="require('@/assets/music/BGM.mp3')" />
  </div>
</template>

<script>
import MusicPlayerButton from './components/MusicPlayerButton.vue';
export default {
  name: 'App',
  components: {
    MusicPlayerButton,
  },
};
</script>

<style>
/* App 组件样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
