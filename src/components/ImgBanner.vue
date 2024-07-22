<!-- src/components/ImaBanner.vue -->
<template>
    <div id="banner">
      <img :src="imageSrc" alt="Banner Image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  #banner {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 0 auto;
    width: 80%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  
  #banner img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: brightness(80%);
    transition: filter 0.3s ease;
  }
  
  #banner:hover img {
    filter: brightness(100%);
  }
  </style>
  