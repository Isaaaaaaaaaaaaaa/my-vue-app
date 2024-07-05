<template>
    <div class="wildlife-environment">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6">
            <img :src="require('@/assets/images/slide1.jpg')" class="img-fluid rounded mb-4 animate__animated animate__fadeInLeft" alt="Wuling Mountain Nature Reserve">
          </div>
          <div class="col-md-6">
            <h2 class="mb-4 animate__animated animate__fadeInRight">雾灵山自然保护区</h2>
            <p class="animate__animated animate__fadeInRight">
              雾灵山自然保护区位于湖南、湖北和重庆三省市交界处，是我国重要的自然保护区之一。保护区生态系统完整，物种丰富，特别是对多种珍稀濒危动植物的保护工作做得较好。
            </p>
            <p class="animate__animated animate__fadeInRight">
              保护区内的野生动物包括狍子、岩羊、亚洲黑熊等，这些动物在这里找到了天然的栖息地和繁衍环境，展现了自然的原始风貌。
            </p>
            <a href="#" class="btn btn-primary animate__animated animate__fadeInUp">了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WildlifeEnvironment',
  }
  </script>
  
  <style scoped>
  .wildlife-environment {
    background-color: #f8f9fa;
    padding: 60px 0;
  }
  
  .wildlife-environment h2 {
    font-size: 2.5rem;
  }
  
  .wildlife-environment p {
    font-size: 1.1rem;
  }
  
  .wildlife-environment img {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
  }
  
  .wildlife-environment .btn-primary {
    margin-top: 20px;
  }
  </style>
  