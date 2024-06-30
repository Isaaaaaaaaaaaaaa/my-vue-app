<template>
      <NavBar />
      <LoginModule />
    <div class="home">
      <h1>首页</h1>
      <p>欢迎来到野生动物平台</p>

    </div>
    <FooterModule />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import LoginModule from '@/components/LoginModule.vue';
  import FooterModule from '@/components/FooterModule.vue';

  export default {
    name: 'HomePage',
    components: {
      NavBar,
      LoginModule,
      FooterModule,
    },
  };

  </script>
  
  <style scoped>
  .home {
    text-align: center;
  }

  </style>
  