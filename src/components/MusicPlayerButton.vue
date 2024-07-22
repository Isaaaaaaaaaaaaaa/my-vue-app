<!-- src/components/MusicPlayerButton.vue -->
<template>
    <div class="music-player-button">
      <button @click="togglePlay">
        <span v-if="isPlaying">⏸️</span>
        <span v-else>▶️</span>
      </button>
      <audio ref="audio" :src="audioSrc" loop/>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isPlaying: false,
      };
    },
    props: {
      audioSrc: {
        type: String,
        required: true,
      },
    },
    methods: {
      togglePlay() {
        const audio = this.$refs.audio;
        if (this.isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        this.isPlaying = !this.isPlaying;
      },
    },
  };
  </script>
  
  <style scoped>
  .music-player-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }
  
  button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 50%;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  