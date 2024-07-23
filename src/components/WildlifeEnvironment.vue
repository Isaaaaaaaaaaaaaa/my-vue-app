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
              雾灵山本名伏凌山，曾叫孟广硎山、五龙山，位于河北省承德市兴隆县境内，地处北京、天津、唐山、承德四城市之间，距首都北京120公里。经过亿万年的沧桑巨变、陆海沉浮，雾灵山成为燕山山脉的主峰，最高海拔2118米。
            </p>
            <p class="animate__animated animate__fadeInRight">
              雾灵山自然保护区的保护对象为“温带森林生态系和猕猴分布北限”，森林覆盖率93%，动植物资源十分丰富，其中有高等植物1870种，陆生脊椎动物173种。
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
  