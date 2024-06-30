<template>
  <NavBar />
  <LoginModule />
    <div class="animal-detect">
      <h1>野生动物识别</h1>
      <p>这里是野生动物识别的内容</p>
    </div>
    <FooterModule />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import LoginModule from '@/components/LoginModule.vue';
  import FooterModule from '@/components/FooterModule.vue';

  export default {
    name: 'AnimalDetect',
    components: {
      NavBar,
      LoginModule,
      FooterModule,
    },
  };
  </script>
  
  <style scoped>
  .animal-detect {
    text-align: center;
  }
  </style>
  