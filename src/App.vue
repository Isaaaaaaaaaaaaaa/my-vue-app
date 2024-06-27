<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="error">{{ error }}</div>
    <div v-if="data">
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.name }}: {{ item.value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: null,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/data');
        this.data = response.data;
        this.error = null;
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>
