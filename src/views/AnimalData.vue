<template>
  <div>
    <LoadingAnime />
    <NavBar />
    <LoginModule />
    <ImgBanner :image-src="require('@/assets/images/banner.jpg')" class="banner" />
    <div class="container mt-5 animal-data">
      <div class="mt-4">
        <div class="row">
          <!-- Data Summary Cards -->
          <div
            class="col-md-4 mb-4"
            v-for="(card, index) in dataSummaryCards"
            :key="index"
          >
            <div class="card text-white bg-info shadow-sm">
              <div class="card-body">
                <h5 class="card-title">{{ card.title }}</h5>
                <p class="card-text">{{ card.value }}</p>
              </div>
            </div>
          </div>
          <!-- Additional Data Analysis Cards -->
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">平均栖息地面积</h5>
                <p class="card-text">45 平方公里</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">最常见栖息地类型</h5>
                <p class="card-text">草原</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Bar Chart -->
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">动物数量柱状图</h5>
                <canvas id="barChart"></canvas>
              </div>
            </div>
          </div>
          <!-- Pie Chart -->
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">动物种类饼图</h5>
                <canvas id="pieChart"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Line Chart -->
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">动物数量趋势折线图</h5>
                <canvas id="lineChart"></canvas>
              </div>
            </div>
          </div>
          <!-- Radar Chart -->
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">栖息地分布雷达图</h5>
                <canvas id="radarChart"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Data Table -->
          <div class="col-12">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">动物数据表</h5>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>动物名称</th>
                      <th>数量</th>
                      <th>栖息地</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(animal, index) in animalData" :key="index">
                      <td>{{ animal.name }}</td>
                      <td>{{ animal.count }}</td>
                      <td>{{ animal.habitat }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterModule />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LoginModule from "@/components/LoginModule.vue";
import FooterModule from "@/components/FooterModule.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import LoadingAnime from "@/components/LoadingAnime.vue";
import Chart from "chart.js/auto";

export default {
  name: "AnimalData",
  components: {
    NavBar,
    LoginModule,
    FooterModule,
    ImgBanner,
    LoadingAnime,
  },
  data() {
    return {
      dataSummaryCards: [
        { title: "总动物数量", value: "1,235" },
        { title: "种类数量", value: "42" },
        { title: "最大栖息地", value: "非洲" },
      ],
      animalData: [
        { name: "狮子", count: 150, habitat: "非洲草原" },
        { name: "大象", count: 120, habitat: "亚洲森林" },
        { name: "斑马", count: 200, habitat: "非洲草原" },
        { name: "长颈鹿", count: 80, habitat: "非洲森林" },
        { name: "犀牛", count: 50, habitat: "亚洲草原" },
        { name: "袋鼠", count: 300, habitat: "澳大利亚" },
        // 添加更多动物数据...
      ],
      barChart: null,
      pieChart: null,
      lineChart: null,
      radarChart: null,
    };
  },
  mounted() {
    this.createBarChart();
    this.createPieChart();
    this.createLineChart();
    this.createRadarChart();
  },
  updated() {
    // 在更新时重新绘制图表
    if (this.barChart) {
      this.barChart.destroy();
    }
    if (this.pieChart) {
      this.pieChart.destroy();
    }
    if (this.lineChart) {
      this.lineChart.destroy();
    }
    if (this.radarChart) {
      this.radarChart.destroy();
    }
    this.createBarChart();
    this.createPieChart();
    this.createLineChart();
    this.createRadarChart();
  },
  beforeUnmount() {
    // 在组件销毁前销毁图表实例
    if (this.barChart) {
      this.barChart.destroy();
    }
    if (this.pieChart) {
      this.pieChart.destroy();
    }
    if (this.lineChart) {
      this.lineChart.destroy();
    }
    if (this.radarChart) {
      this.radarChart.destroy();
    }
  },
  methods: {
    createBarChart() {
      const ctx = document.getElementById("barChart").getContext("2d");
      this.barChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.animalData.map((animal) => animal.name),
          datasets: [
            {
              label: "数量",
              data: this.animalData.map((animal) => animal.count),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    createPieChart() {
      const ctx = document.getElementById("pieChart").getContext("2d");
      this.pieChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: this.animalData.map((animal) => animal.name),
          datasets: [
            {
              label: "种类",
              data: this.animalData.map((animal) => animal.count),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
    createLineChart() {
      const ctx = document.getElementById("lineChart").getContext("2d");
      this.lineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
          datasets: [
            {
              label: "动物数量趋势",
              data: [120, 150, 180, 170, 160, 200],
              fill: false,
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
    createRadarChart() {
      const ctx = document.getElementById("radarChart").getContext("2d");
      this.radarChart = new Chart(ctx, {
        type: "radar",
        data: {
          labels: ["空气质量", "水质", "栖息地多样性", "环境稳定性", "自然资源"],
          datasets: [
            {
              label: "栖息地分布",
              data: [45, 60, 55, 50, 40],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            r: {
              beginAtZero: true,
              suggestedMax: 100,
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  top: 100px;
}

.animal-data {
  text-align: center;
  position: relative;
  top: 100px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1.25rem;
}

.card {
  margin-bottom: 1rem;
}

canvas {
  max-width: 100%;
  height: auto; /* Let the canvas height adjust dynamically */
}
</style>
