<template>
  <PreLoader />
  <div>
    <NavBar />
    <div class="animal-intro">
      <ImgBanner :image-src="require('@/assets/images/banner.jpg')" />
      <div class="main-content">
        <h2>动物种类</h2>
        <div class="row">
          <div class="sidebar">
            <h3>选择动物</h3>
            <ul>
              <li
                v-for="(animal, index) in animalTypes"
                :key="index"
                @click="selectAnimal(animal)"
                :class="{ active: selectedAnimal === animal }"
                class="animate__animated animate__fadeInLeft"
              >
                {{ animal.name }}
              </li>
            </ul>
          </div>
          <div class="animal-info">
            <div v-if="selectedAnimal" class="animate__animated animate__fadeInRight">
              <h2 class="animal-title">{{ selectedAnimal.name }}</h2>
              <div class="row">
                <div class="col-md-6">
                  <img
                    :src="require(`@/assets/images/${selectedAnimal.image}`)"
                    class="img-fluid rounded"
                    alt=""
                  />
                </div>
                <div class="col-md-6">
                  <p class="animal-description">{{ selectedAnimal.description }}</p>
                </div>
              </div>
            </div>
            <div v-else class="animate__animated animate__fadeInRight">
              <h2 class="animal-title">欢迎探索野生动物</h2>
              <p class="animal-description">点击左侧动物名称了解更多信息。</p>
            </div>
            <!-- 新增的模块 -->
            <div class="row mt-5">
              <div class="col-md-6">
                <div class="card shadow-sm animate__animated animate__fadeInUp">
                  <div class="card-body">
                    <h5 class="card-title">动物生态信息</h5>
                    <p class="card-text">
                      在其自然栖息地中，{{
                        selectedAnimal ? selectedAnimal.name : "这种动物"
                      }}通常生活在...
                    </p>
                    <a href="#" class="btn btn-primary">了解更多</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card shadow-sm animate__animated animate__fadeInUp">
                  <div class="card-body">
                    <h5 class="card-title">保护状态</h5>
                    <p class="card-text">
                      {{
                        selectedAnimal ? selectedAnimal.name : "这种动物"
                      }}的保护状况及相关措施...
                    </p>
                    <a href="#" class="btn btn-primary">支持保护</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 新增结束 -->
          </div>
        </div>
      </div>
    </div>
    <FooterModule />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterModule from "@/components/FooterModule.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import PreLoader from "@/components/PreLoader.vue";

export default {
  name: "AnimalIntro",
  components: {
    NavBar,
    FooterModule,
    ImgBanner,
    PreLoader,
  },
  data() {
    return {
      animalTypes: [
        {
          id: 1,
          name: "狮子",
          description: "狮子是一种大型猫科动物，生活在非洲和印度次大陆。",
          image: "slideImg3.jpg",
        },
        {
          id: 2,
          name: "大象",
          description: "大象是世界上最大的陆生动物，主要分布在非洲和亚洲。",
          image: "slideImg3.jpg",
        },
        {
          id: 3,
          name: "斑马",
          description: "斑马是一种非洲草原上的哺乳动物，以其黑白相间的条纹而著称。",
          image: "slideImg3.jpg",
        },
        {
          id: 4,
          name: "长颈鹿",
          description: "长颈鹿是世界上最高的陆地动物，主要分布在非洲的草原和森林地带。",
          image: "slideImg3.jpg",
        },
        {
          id: 5,
          name: "犀牛",
          description: "犀牛是一种体型庞大的哺乳动物，主要分布在非洲和亚洲。",
          image: "slideImg3.jpg",
        },
        {
          id: 6,
          name: "袋鼠",
          description: "袋鼠是一种澳大利亚特有的有袋动物，能够以跳跃方式高效移动。",
          image: "slideImg3.jpg",
        },
        {
          id: 7,
          name: "老虎",
          description: "老虎是一种大型猫科动物，生活在亚洲各地的森林和草原地带。",
          image: "slideImg3.jpg",
        },
        {
          id: 8,
          name: "猴子",
          description: "猴子是灵长目动物的一类，主要分布在亚洲、非洲和南美洲的各种环境中。",
          image: "slideImg3.jpg",
        },
        {
          id: 9,
          name: "考拉",
          description: "考拉是一种澳大利亚特有的树栖有袋动物，以其爱睡觉和食用桉树叶而著称。",
          image: "slideImg3.jpg",
        },
        {
          id: 10,
          name: "企鹅",
          description: "企鹅是一种生活在南极洲和周围海域的鸟类，以其不会飞行而著称，是优秀的游泳者。",
          image: "slideImg3.jpg",
        },
        {
          id: 11,
          name: "北极熊",
          description: "北极熊是生活在北极地区的大型食肉动物，以其白色的皮毛和潜水捕猎能力而著称。",
          image: "slideImg3.jpg",
        },
        {
          id: 12,
          name: "鳄鱼",
          description: "鳄鱼是一种生活在热带和亚热带地区的大型爬行动物，以其危险的捕食能力而著称。",
          image: "slideImg3.jpg",
        },
      ],
      selectedAnimal: null,
    };
  },
  methods: {
    selectAnimal(animal) {
      this.selectedAnimal = animal;
      // 在此处添加选中动物后的动画效果或特效逻辑
      // 例如，可以添加选中特效或动画
    },
  },
};
</script>

<style scoped>
.animal-intro {
  text-align: center;
  position: relative;
  top: 100px;
  margin: 0 auto;
}

.main-content {
  margin: 20px auto; /* 适当的间距 */
  max-width: 1600px;
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

.sidebar li:hover,
.sidebar li.active {
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

.card {
  margin-bottom: 20px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}
</style>
