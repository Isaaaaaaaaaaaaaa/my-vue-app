<template>
  <div class="slideshow-container">
    <div 
      class="slide" 
      v-for="(slide, index) in slides" 
      :key="index" 
      :class="slideClasses(index)"
    >
      <router-link :to="slide.link" class="slide-link">
        <img :src="slide.image" alt="" />
      </router-link>
    </div>
    <a class="prev" @click="prevSlide">&#10094;</a>
    <a class="next" @click="nextSlide">&#10095;</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 0,
      slides: [
        { image: require('@/assets/images/slide1.jpg'), link: "/animal-detect" },
        { image: require('@/assets/images/slide2.jpg'), link: '/animal-intro' },
        { image: require('@/assets/images/slide3.png'), link: '/animal-data' }
      ]
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    showSlide() {
      this.slides.forEach((slide, index) => {
        slide.isActive = index === this.slideIndex;
        slide.isPrevious = index === this.prevSlideIndex();
        slide.isNext = index === this.nextSlideIndex();
      });
    },
    prevSlide() {
      clearInterval(this.slideTimer);
      this.slideIndex = this.prevSlideIndex();
      this.showSlide();
      this.startSlide();
    },
    nextSlide() {
      clearInterval(this.slideTimer);
      this.slideIndex = this.nextSlideIndex();
      this.showSlide();
      this.startSlide();
    },
    prevSlideIndex() {
      return (this.slideIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlideIndex() {
      return (this.slideIndex + 1) % this.slides.length;
    },
    startSlide() {
      this.slideTimer = setInterval(() => {
        this.slideIndex = this.nextSlideIndex();
        this.showSlide();
      }, 3000);
    },
    slideClasses(index) {
      return {
        'slide': true,
        'active-slide': index === this.slideIndex,
        'previous-slide': index === this.prevSlideIndex(),
        'next-slide': index === this.nextSlideIndex()
      };
    }
  }
};
</script>

<style scoped>
.slideshow-container {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 1200px;
  height: 500px;
  border-radius: 3px;
  overflow: hidden;
}

.slide {
  position: absolute;
  width: 100%;
  height: 500px;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
}

.slide.active-slide {
  opacity: 1;
  visibility: visible;
  transform: translateX(0%);
}

.slide.previous-slide {
  transform: translateX(-100%);
}

.slide.next-slide {
  transform: translateX(100%);
}

.slide img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.slide-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.slide:hover .slide-link {
  opacity: 1;
}

.slide-link:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  padding: 16px;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  transition: all 0.3s ease-in-out;
  border-radius: 0 3px 3px 0;
  cursor: pointer;
  z-index: 1;
}

.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}
</style>
