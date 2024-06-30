<template>
      <NavBar />
      <LoginModule />
    <div class="home">
      <h1>首页</h1>
      <p>欢迎来到野生动物平台</p>

    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import LoginModule from '@/components/LoginModule.vue';

  export default {
    name: 'HomePage',
    components: {
      NavBar,
      LoginModule,
    },
  };

  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }

  </style>
  