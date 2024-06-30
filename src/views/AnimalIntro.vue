<template>
  <NavBar />
  <LoginModule />
    <div class="animal-intro">
      <h1>野生动物介绍</h1>
      <p>这里是野生动物的介绍内容</p>
    </div>
    <FooterModule />
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import LoginModule from '@/components/LoginModule.vue';
  import FooterModule from '@/components/FooterModule.vue';

  export default {
    name: 'AnimalIntro',
    components: {
      NavBar,
      LoginModule,
      FooterModule,
    },
  };
  </script>
  
  <style scoped>
  .animal-intro {
    text-align: center;
  }
  </style>
  