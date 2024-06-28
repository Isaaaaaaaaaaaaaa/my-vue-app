<template>
      <NavBar />
    <div class="home">
      <h1>首页</h1>
      <p>欢迎来到野生动物平台</p>

    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';

  export default {
    name: 'HomePage',
    components: {
      NavBar,
    },
  };

  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }

  </style>
  