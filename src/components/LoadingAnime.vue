<template>
  <transition name="fade">
    <div v-if="showLoader" class="background">
      <div class="loading">
        <h2>pushing pixels</h2>
        <div class="loading-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PreLoader2',
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000); // 显示1秒后自动消失
  },
};
</script>

<style scoped lang="scss">
body {
  background: #222;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 让整个页面铺满视窗高度 */
  margin: 0;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, 0.8); /* 半透明背景 */
  z-index: 99998; /* 比预加载器低一层 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}

.loading h2 {
  color: #ccc;
  margin: 0;
  font: 0.8em verdana;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.loading-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.loading span {
  display: inline-block;
  vertical-align: middle;
  width: 0.6em;
  height: 0.6em;
  margin: 0.19em;
  background: #007db6;
  border-radius: 0.6em;
  animation: loading 1s infinite alternate;
}

.loading span:nth-of-type(2) {
  background: #008fb2;
  animation-delay: 0.2s;
}

.loading span:nth-of-type(3) {
  background: #009b9e;
  animation-delay: 0.4s;
}

.loading span:nth-of-type(4) {
  background: #00a77d;
  animation-delay: 0.6s;
}

.loading span:nth-of-type(5) {
  background: #00b247;
  animation-delay: 0.8s;
}

.loading span:nth-of-type(6) {
  background: #5ab027;
  animation-delay: 1s;
}

.loading span:nth-of-type(7) {
  background: #a0b61e;
  animation-delay: 1.2s;
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
