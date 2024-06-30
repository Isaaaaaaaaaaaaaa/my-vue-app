<template>
  <NavBar />
  <LoginModule />
    <div class="animal-data">
      <h1>野生动物数据分析</h1>
      <p>这里是野生动物数据分析的内容</p>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import LoginModule from '@/components/LoginModule.vue';

  export default {
    name: 'AnimalData',
    components: {
      NavBar,
      LoginModule,
    },
  };
  </script>
  
  <style scoped>
  .animal-data {
    text-align: center;
  }
  </style>
  