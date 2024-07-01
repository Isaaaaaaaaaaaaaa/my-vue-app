<template>
  <PreLoader />
  <div>
    <NavBar />
    <div class="animal-intro">
      <ImgBanner :image-src="require('@/assets/images/humanity.jpg')" />
      <div class="main-content">
        <h2>动物种类</h2>
        <div class="row">
          <div class="sidebar">
            <h3>选择动物</h3>
            <ul>
              <li v-for="(animal, index) in animalTypes" :key="index" @click="selectAnimal(animal)">
                {{ animal.name }}
              </li>
            </ul>
          </div>
          <div class="animal-info">
            <h2 v-if="selectedAnimal" class="animal-title">{{ selectedAnimal.name }}</h2>
            <p v-if="selectedAnimal" class="animal-description">{{ selectedAnimal.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <FooterModule />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import FooterModule from '@/components/FooterModule.vue';
import ImgBanner from '@/components/ImgBanner.vue';
import PreLoader from '@/components/PreLoader.vue';

export default {
  name: 'AnimalIntro',
  components: {
    NavBar,
    FooterModule,
    ImgBanner,
    PreLoader,
  },
  data() {
    return {
      animalTypes: [
        { id: 1, name: '狮子', description: '狮子是一种大型猫科动物，生活在非洲和印度次大陆。' },
        { id: 2, name: '大象', description: '大象是世界上最大的陆生动物，主要分布在非洲和亚洲。' },
        { id: 3, name: '斑马', description: '斑马是一种非洲草原上的哺乳动物，以其黑白相间的条纹而著称。' },
        { id: 4, name: '长颈鹿', description: '长颈鹿是世界上最高的陆地动物，主要分布在非洲的草原和森林地带。' },
        { id: 5, name: '犀牛', description: '犀牛是一种体型庞大的哺乳动物，主要分布在非洲和亚洲。' },
        { id: 6, name: '袋鼠', description: '袋鼠是一种澳大利亚特有的有袋动物，能够以跳跃方式高效移动。' },
        // 添加更多动物类型...
      ],
      selectedAnimal: null,
    };
  },
  methods: {
    selectAnimal(animal) {
      this.selectedAnimal = animal;
      // 在此处添加选中动物后的动画效果或特效逻辑
      // 例如，可以添加选中特效或动画
      const selectedElement = document.querySelector('.sidebar li.active');
      if (selectedElement) {
        selectedElement.classList.remove('active');
      }
      const newSelectedElement = document.querySelector(`.sidebar li:nth-child(${animal.id})`);
      if (newSelectedElement) {
        newSelectedElement.classList.add('active');
      }
    },
  },
};
</script>

<style scoped>
.animal-intro {
  text-align: center;
  position: relative;
  top: 100px;
}

.main-content {
  margin-top: 20px; /* 适当的间距 */
}

.row {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 垂直居上对齐 */
}

.sidebar {
  width: 30%; /* 侧边栏占30%宽度 */
  background-color: #f0f0f0;
  padding: 20px;
}

.sidebar h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.sidebar li:hover, .sidebar li.active {
  background-color: #e0e0e0;
}

.animal-info {
  flex: 1;
  padding: 20px;
  text-align: center;
}

.animal-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.animal-description {
  font-size: 16px;
  line-height: 1.6;
}
</style>
