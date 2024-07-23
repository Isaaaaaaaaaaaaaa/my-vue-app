<!-- src/components/DetectModule.vue -->
<template>
  <section class="section section-lg bg-light text-left section-relative py-5">
    <div class="container">
      <div class="row justify-content-center justify-content-xxl-between">
        <div class="col-lg-6 col-xxl-5">
          <h3 class="mb-4 text-primary">系统功能</h3>
          <div class="tabs-custom" id="tabs-5">
            <ul class="nav nav-tabs mb-3" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: activeTab === 1 }"
                  href="#tabs-5-1"
                  role="tab"
                  data-bs-toggle="tab"
                  @click="selectTab(1)"
                >
                  功能一
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: activeTab === 2 }"
                  href="#tabs-5-2"
                  role="tab"
                  data-bs-toggle="tab"
                  @click="selectTab(2)"
                >
                  功能二
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div
                class="tab-pane fade"
                :class="{ show: activeTab === 1, active: activeTab === 1 }"
                id="tabs-5-1"
                role="tabpanel"
              >
                <h5 class="font-weight-normal mb-3">
                  功能一：野生动物图像识别
                </h5>
                <p>
                  用户上传动物图片后，系统会自动分析并识别出图片中的动物种类。
                </p>
                <ul class="list-unstyled">
                  <li>
                    功能描述：用户可以上传一张动物的图片，系统会自动分析并识别图片中的动物种类。
                  </li>
                  <li>
                    技术实现：该功能使用了机器学习和计算机视觉技术，比如卷积神经网络（CNN），通过预先训练的模型对图片进行分类。
                  </li>
                  <li>
                    用户体验：用户只需点击上传按钮选择图片，系统会在几秒钟内返回识别结果，包括动物的名称和可能的相关信息。
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                :class="{ show: activeTab === 2, active: activeTab === 2 }"
                id="tabs-5-2"
                role="tabpanel"
              >
                <h5 class="font-weight-normal mb-3">
                  功能二：图片标注
                </h5>
                <p>
                  系统在识别出动物后，会自动在图片中将识别到的动物用边框框起来，进行标注。
                </p>
                <ul class="list-unstyled">
                  <li>
                    功能描述：系统会自动识别并标注出图片中的动物，将识别到的动物框起来。
                  </li>
                  <li>
                    行为习性识别：采用图像识别和深度学习技术对动物行为进行识别和分类。
                  </li>
                  <li>
                    科学保护策略：根据识别结果制定科学有效的保护策略，为野生动物的保护工作提供重要支持。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-5">
          <div class="card shadow-sm p-4">
            <h4 class="card-title mb-3 text-center">体验野生动物图像识别</h4>
            <div class="mb-3">
              <label for="imageUpload" class="form-label"
                >请上传一张动物图片：</label
              >
              <input
                type="file"
                class="form-control"
                id="imageUpload"
                accept="image/*"
                @change="onImageUpload"
              />
            </div>
            <div class="text-center mb-3">
              <img
                id="imagePreview"
                :src="imageSrc"
                alt="上传的图片预览"
                class="img-fluid rounded"
              />
            </div>
            <div class="text-center mb-3">
              <button
                id="recognizeButton"
                class="btn btn-primary"
                @click="onRecognize"
              >
                识别
              </button>
            </div>
            <div id="result" class="alert alert-info text-center">
              {{ resultText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "@/axiosInstance";
import EventBus from "@/eventBus";

export default {
  data() {
    return {
      imageSrc: require("@/assets/images/slideImg1.jpg"), // 默认图片路径
      resultText: "Detected：------",
      activeTab: 1, // 默认选中第一个标签页
    };
  },
  methods: {
    onImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          this.imageSrc = reader.result;
        };
      } else {
        alert("请上传图片文件！");
      }
    },
    onRecognize() {
      if (this.imageSrc) {
        EventBus.emit('recognize-start');

        const formData = new FormData();

        const blob = this.dataURItoBlob(this.imageSrc);
        const fileName = this.fileNameFromURI(this.imageSrc);

        const file = new File([blob], fileName, { type: blob.type });

        formData.append("photo", file, fileName);

        axios
          .post("/upload-image", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            const responseData = response.data;

            // 将 Base64 编码的字符串转换回 Blob
            const byteCharacters = atob(responseData.image);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const imageBlob = new Blob([byteArray], { type: "image/jpeg" });

            // Convert Blob to Data URI
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              this.imageSrc = reader.result; // 显示检测到的图片
            };

            // 获取对象计数描述文本
            const objectCountsText = responseData.object_counts_text;
            this.resultText = objectCountsText || "未识别到任何对象.";
            EventBus.emit('recognize-end');
          })
          .catch((error) => {
            console.error("Error during recognition:", error);
            this.resultText = "识别失败，请重试。";
            EventBus.emit('recognize-end');
          });
          
      } else {
        alert("请先选择图片文件！");
      }
    },
    // Convert Data URI to Blob object
    dataURItoBlob(dataURI) {
      const byteString = atob(dataURI.split(",")[1]);
      const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], { type: mimeString });
    },

    // Extract original file name from Data URI
    fileNameFromURI(dataURI) {
      return decodeURIComponent(
        dataURI.split(",")[0].split(":")[1].split(";")[0].split("/").pop()
      );
    },

    selectTab(tabIndex) {
      this.activeTab = tabIndex;
    },
  },
};
</script>

<style scoped>
.section {
  background-color: #f8f9fa;
}

.nav-tabs .nav-link.active {
  background-color: #0d6efd;
  color: #fff;
  border-color: #0d6efd #0d6efd #fff;
}

.card {
  border: none;
}

.img-fluid {
  max-height: 300px;
  object-fit: cover;
}

.form-control {
  border-radius: 0.25rem;
}

.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.alert {
  margin-top: 20px;
}
</style>
