<template>
    <section class="animal-detect-info">
      <div class="container">
        <div class="row justify-content-center">
          <!-- Left Column: Recognizable Wildlife Species -->
          <div class="col-lg-4">
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h3 class="card-title">能识别的野生动物</h3>
                <ul class="list-unstyled animal-list">
                  <li>野鸭 <span># wild duck</span></li>
                  <li>鸟类 <span># bird</span></li>
                  <li>鹿 <span># deer</span></li>
                  <li>山羊 <span># goat</span></li>
                  <li>松鼠 <span># squirrel</span></li>
                  <li>猫 <span># cat</span></li>
                  <li>大雁 <span># Anser cygnoides</span></li>
                  <li>獾 <span># badger</span></li>
                  <li>猴子 <span># monkey</span></li>
                  <li>野猪 <span># boar</span></li>
                  <li>狗 <span># dog</span></li>
                  <li>兔子 <span># rabbit</span></li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Right Column: Model Parameters and Performance -->
          <div class="col-lg-8">
            <div class="text-center mb-5">
              <h2 class="section-title">野生动物识别模型</h2>
              <p class="section-subtitle">探索我们先进的野生动物识别能力</p>
            </div>
  
            <!-- Model Parameters Section -->
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h3 class="card-title">模型参数</h3>
                <p class="card-text">
                  我们的模型采用先进的机器学习技术，优化了参数以提高在各种环境中识别野生动物的准确性和可靠性。
                </p>
              </div>
            </div>
  
            <!-- Performance Section -->
            <div class="card mb-4 shadow-sm">
              <div class="card-body">
                <h3 class="card-title">性能特点</h3>
                <p class="card-text">
                  模型表现出色，能够在各种复杂的环境条件下实现高准确率的野生动物识别。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AnimalDetectInfo",
  };
  </script>
  
  <style scoped>
  .animal-detect-info {
    padding: 80px 0;
    background-color: #f8f9fa;
  }
  
  .section-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .section-subtitle {
    font-size: 18px;
    color: #6c757d;
  }
  
  .card {
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .card-body {
    padding: 30px;
  }
  
  .card-title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 18px;
    line-height: 1.6;
  }
  
  .animal-list {
    list-style-type: none;
    padding: 0;
  }
  
  .animal-list li {
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .animal-list li span {
    font-size: 14px;
    color: #6c757d;
    margin-left: 10px;
  }
  
  @media (max-width: 768px) {
    .card-body {
      padding: 20px;
    }
  }
  </style>
  