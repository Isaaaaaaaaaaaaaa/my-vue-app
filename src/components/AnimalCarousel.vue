<template>
  <div id="animalCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        v-for="(image, index) in images"
        :key="index"
        :data-bs-target="'#animalCarousel'"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-current="index === 0 ? 'true' : null"
        aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <router-link :to="image.link">
          <img
            :src="image.src"
            class="d-block w-100 animate__animated animate__fadeIn"
            :alt="image.alt"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ image.caption }}</h5>
            <p>{{ image.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#animalCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#animalCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AnimalCarousel",
  data() {
    return {
      images: [
        {
          src: require("@/assets/images/slide1.jpg"),
          link: "/animal-intro",
          alt: "Slide 1",
          caption: "野生动物介绍",
          description: "探索不同种类的野生动物，了解它们的习性和栖息地。",
        },
        {
          src: require("@/assets/images/slide2.jpg"),
          link: "/animal-detect",
          alt: "Slide 2",
          caption: "野生动物图像检测",
          description: "使用先进的技术检测并识别野生动物图像。",
        },
        {
          src: require("@/assets/images/slide3.png"),
          link: "/animal-data",
          alt: "Slide 3",
          caption: "野生动物数据分析",
          description: "深入了解野生动物数据，探索背后的科学。",
        },
      ],
    };
  },
};
</script>

<style scoped>
#animalCarousel {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.carousel-item {
  height: 500px;
  transition: transform 0.5s ease-in-out;
}

.carousel-item img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

.carousel-item:hover img {
  transform: scale(1.05);
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

.carousel-caption h5 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}

.carousel-caption p {
  font-size: 16px;
  color: #ddd;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}

.carousel-indicators button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
}

.carousel-indicators .active {
  background-color: #fff;
}

router-link {
  display: block;
  height: 100%;
  text-decoration: none;
}
</style>
