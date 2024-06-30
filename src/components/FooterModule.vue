<template>
  <footer>
    <h2>加入我们，一起保护环境！</h2>
    <div id="copyright">
      <p>&copy; 2024 tty团队</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterModule', 
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

footer {
  position: relative;
  top: 100px;
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 16px;
}

footer h2 {
  font-family: "方正硬笔行楷";
  font-size: 40px;
}

#copyright {
  display: inline-block;
  padding-top: 10px;
  font-size: 14px;
}

@font-face {
  font-family: "方正硬笔行楷";
  src: url("@/assets/fonts/FZYBXSK.TTF");
}
</style>
