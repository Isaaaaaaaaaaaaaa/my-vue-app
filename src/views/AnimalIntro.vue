<template>
  <PreLoader />
  <div>
    <NavBar />
    <div class="animal-intro">
      <ImgBanner :image-src="require('@/assets/images/banner.jpg')" />
      <div class="main-content">
        <h2>栖息环境</h2>
        <WildlifeEnvironment />
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
              <div class="row mt-5">
                <div class="col-md-6">
                  <div class="card shadow-sm animate__animated animate__fadeInUp">
                    <div class="card-body">
                      <h5 class="card-title">动物生态信息</h5>
                      <p class="card-text">{{ selectedAnimal.habitat }}</p>
                      <a href="#" class="btn btn-primary">了解更多</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card shadow-sm animate__animated animate__fadeInUp">
                    <div class="card-body">
                      <h5 class="card-title">保护状态</h5>
                      <p class="card-text">{{ selectedAnimal.status }}</p>
                      <a href="#" class="btn btn-primary">支持保护</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else class="animate__animated animate__fadeInRight">
              <h2 class="animal-title">欢迎探索野生动物</h2>
              <p class="animal-description">点击左侧动物名称了解更多信息。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterModule class="footer-style" />
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import FooterModule from "@/components/FooterModule.vue";
import ImgBanner from "@/components/ImgBanner.vue";
import PreLoader from "@/components/PreLoader.vue";
import WildlifeEnvironment from '@/components/WildlifeEnvironment.vue';

export default {
  name: "AnimalIntro",
  components: {
    NavBar,
    FooterModule,
    ImgBanner,
    PreLoader,
    WildlifeEnvironment,
  },
  data() {
    return {
      animalTypes: [
        {
          id: 1,
          name: "狮子",
          description: "狮子是大型猫科动物，被称为“草原之王”。雄狮通常有一圈浓密的鬃毛，颜色从金黄到黑色不等，而雌狮则没有鬃毛。狮子的体重可以达到190公斤，体长可达3米，包括尾巴。狮子是群居动物，形成由几只雌狮、一只或几只雄狮和幼崽组成的狮群。狮群通常由雌狮负责捕猎和抚养幼崽，而雄狮负责保护领地和狮群。雌狮是主要的猎手，合作捕猎斑马、角马、羚羊等大型草食动物。狮子的吼声非常响亮，可以传递至数公里之外，用于宣示领地和沟通。狮子每天大部分时间都在休息，主要在清晨和黄昏时分捕猎。狮子的社会结构和群体生活使得它们在捕猎和防御中具有明显的优势。",
          habitat: "狮子主要生活在非洲的稀树草原和草原地区，少数亚种生活在印度的森林中。",
          status: "狮子目前被国际自然保护联盟（IUCN）列为“易危”物种。保护措施包括反偷猎行动、保护自然栖息地、与当地社区合作以减少人兽冲突，以及在动物园和保护区中进行繁育项目。",
          image: "slideImg3.jpg",
        },
        {
          id: 2,
          name: "大象",
          description: "大象是陆地上最大的哺乳动物，体重可达6吨以上，身高可达3-4米。它们拥有巨大的耳朵，可以帮助散热，长长的象鼻灵活且有力，不仅用来取食、喝水，还用于交流和抚摸同伴。象牙是它们的另一显著特征，主要用于防御和挖掘。大象的社交性很强，通常以家庭为单位生活，由一头年长的母象领导。它们每天需要大量的食物和水，以草、树叶、果实、树皮等为食物。",
          habitat: "大象分为非洲象和亚洲象。非洲象主要生活在撒哈拉以南的非洲草原和森林中，而亚洲象则分布在南亚和东南亚的森林和草原中。",
          status: "大象面临偷猎和栖息地丧失的威胁。非洲象被列为“易危”，而亚洲象被列为“濒危”物种。保护措施包括反偷猎、栖息地保护和恢复、象牙贸易禁令以及社区教育和参与。",
          image: "slideImg3.jpg",
        },
        {
          id: 3,
          name: "斑马",
          description: "斑马因其独特的黑白条纹而闻名，每一只斑马的条纹都是独一无二的，这有助于个体识别和群体保护。斑马的视觉和听觉都非常敏锐，能够迅速察觉到危险。它们以草为主食，偶尔也吃一些树叶和灌木。斑马通常以小群体生活，但在旱季可能会形成数百只的大群体，以便一起寻找水源和食物。",
          habitat: "斑马主要生活在非洲的草原和稀树草原地区。",
          status: "斑马的保护状况因种类而异。草原斑马的保护状况相对较好，而山斑马则被列为“濒危”物种。保护措施包括栖息地保护和防止非法狩猎。",
          image: "slideImg3.jpg",
        },
        {
          id: 4,
          name: "长颈鹿",
          description: "长颈鹿是世界上最高的陆地动物，雄性可达5.5米以上，雌性稍矮。它们的长脖子和长腿使它们能够轻松地取食高处的树叶，尤其是金合欢树的叶子。长颈鹿的舌头长而灵活，可以绕过树枝，摘取树叶。尽管它们的长脖子看似不适合饮水，但长颈鹿可以通过分开前腿或跪下的方式饮水。长颈鹿一般以小群体生活，群体结构相对松散。",
          habitat: "长颈鹿生活在非洲的稀树草原和森林边缘地带。",
          status: "长颈鹿被列为“易危”物种。保护措施包括栖息地保护、打击偷猎以及与当地社区合作以减少人类活动对其栖息地的影响。",
          image: "slideImg3.jpg",
        },
        {
          id: 5,
          name: "犀牛",
          description: "犀牛是体型庞大的哺乳动物，体重可达2吨以上。它们有厚重的皮肤和一对角，前角较大。犀牛视力较差，但嗅觉和听觉非常发达。它们主要以草为食，但也会吃树叶和果实。犀牛一般是独居或以小群体生活，母犀牛和幼崽会在一起较长时间。",
          habitat: "犀牛主要分布在非洲和亚洲的草原、稀树草原和森林地区。",
          status: "犀牛分为几种不同的种类，其中一些如爪哇犀和苏门答腊犀被列为“极危”物种。保护措施包括严格的反偷猎措施、栖息地保护和恢复、国际合作以及繁育项目。",
          image: "slideImg3.jpg",
        },
        {
          id: 6,
          name: "袋鼠",
          description: "袋鼠是澳大利亚的标志性动物，以其强壮的后腿和长尾巴著称。袋鼠的跳跃能力极强，跳跃时速可达60公里/小时。它们是草食性动物，主要以草和嫩叶为食。袋鼠以家庭为单位生活，母袋鼠的育儿袋是其显著特征，幼崽在袋中发育成熟。",
          habitat: "袋鼠主要生活在澳大利亚的草原、灌木丛和森林地区。",
          status: "大多数袋鼠种类的数量相对稳定，但也有少数种类面临栖息地丧失和气候变化的威胁。保护措施包括栖息地保护、科学研究和制定管理计划。",
          image: "slideImg3.jpg",
        },
        {
          id: 7,
          name: "老虎",
          description: "老虎是世界上最大的猫科动物，具有橙色皮毛和黑色条纹，每只老虎的条纹都是独特的。老虎是顶级掠食者，主要以大型哺乳动物为食，如鹿和野猪。它们独居，领地意识很强，每只老虎都有自己的活动范围。老虎善于游泳，常在水中捕猎和降温。",
          habitat: "老虎主要分布在亚洲的森林、草原和湿地。",
          status: "老虎被列为“濒危”物种。保护措施包括反偷猎、栖息地保护和恢复、减少人兽冲突、加强法律法规以及国际合作。",
          image: "slideImg3.jpg",
        },
        {
          id: 8,
          name: "猴子",
          description: "猴子种类繁多，从体型小巧的狨猴到体型较大的猩猩。它们是群居动物，社会结构复杂，有明确的等级制度。猴子主要以水果、种子、昆虫和小型动物为食。它们的智慧和灵巧的四肢使得它们能在树上快速移动和觅食。",
          habitat: "猴子生活在全球热带和亚热带地区的森林、草原和山区。",
          status: "不同种类的猴子保护状况各异，有些种类被列为“濒危”或“极危”物种。保护措施包括栖息地保护、打击非法捕捉和贸易以及社区教育。",
          image: "slideImg3.jpg",
        },
        {
          id: 9,
          name: "考拉",
          description: "考拉是树栖动物，以桉树叶为主要食物。它们有厚厚的灰色毛皮和大耳朵，体型小巧，通常重约5-15公斤。考拉的生活节奏很慢，每天大部分时间都在睡觉，只有几个小时用于觅食。它们的消化系统适应了处理桉树叶中的毒素。",
          habitat: "考拉主要生活在澳大利亚的桉树森林中。",
          status: "考拉被列为“易危”物种。保护措施包括栖息地保护和恢复、科学研究、减少森林砍伐和城市扩张的影响，以及公众教育和参与。",
          image: "slideImg3.jpg",
        },
        {
          id: 10,
          name: "企鹅",
          description: "企鹅是不会飞的鸟类，以其独特的黑白羽毛和适应寒冷环境的能力著称。它们善于游泳，主要以鱼类、鱿鱼和甲壳类为食。企鹅有很强的群体意识，通常成千上万只聚集在一起繁殖和保暖。它们的羽毛具有很好的防水性，能够在冰冷的水中保持温暖。",
          habitat: "企鹅主要生活在南半球，特别是在南极洲和周边的海域。",
          status: "不同种类的企鹅保护状况不同，一些种类面临气候变化和海洋污染的威胁。保护措施包括海洋保护区的建立、减少渔业对企鹅的影响以及科学研究。",
          image: "slideImg3.jpg",
        },
        {
          id: 11,
          name: "北极熊",
          description: "北极熊是世界上最大的陆地食肉动物，体重可达700公斤以上。它们有厚厚的白色毛皮和厚重的脂肪层，以适应极地寒冷的环境。北极熊主要以海豹为食，但也会捕食鱼类和鸟类。它们是优秀的游泳者，可以在冰冷的海水中游泳数公里寻找食物。",
          habitat: "北极熊主要生活在北极地区的海冰上。",
          status: "北极熊被列为“易危”物种，主要受到气候变化导致的海冰减少的威胁。保护措施包括减缓气候变化的全球努力、保护其栖息地以及国际合作。",
          image: "slideImg3.jpg",
        },
        {
          id: 12,
          name: "鳄鱼",
          description: "鳄鱼是现存最大的爬行动物，身体覆盖着厚厚的鳞片，长有强大的颌部和锋利的牙齿。它们是伏击型捕食者，通常潜伏在水中等待猎物靠近，然后迅速攻击。鳄鱼主要以鱼类、鸟类和哺乳动物为食。它们有很强的适应能力，可以在淡水和咸水中生存。",
          habitat: "鳄鱼生活在全球热带和亚热带地区的淡水和咸水栖息地中，包括河流、湖泊和沼泽。",
          status: "不同种类的鳄鱼保护状况各异，有些种类被列为“濒危”或“极危”物种。保护措施包括栖息地保护、打击非法捕猎和贸易以及科学研究。",
          image: "slideImg3.jpg",
        },
      ],
      selectedAnimal: null,
    };
  },
  methods: {
    selectAnimal(animal) {
      this.selectedAnimal = animal;
    },
  },
};
</script>

<style scoped>
.animal-intro ,.footer-style{
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
