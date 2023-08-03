<template>
  <q-resize-observer @resize="onResize" />
  <q-page class="container-main">
    <!-- #region Header -->
    <div class="row justify-between header-main q-pa-sm">
      <div class="col-1 relative-position" style="width: fit-content">
        <div>
          <q-img
            :src="`/images/logo-page.png`"
            no-spinner
            no-transition
            :width="'250px'"
          ></q-img>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region Banner -->
    <div
      class="relative-position"
      :class="
        responsiveSize.width <= 600 ? 'banner-main-mobile' : 'banner-main'
      "
    >
      <div style="width: 1900px" class="absolute-center">
        <div v-for="i in 4" :key="`image-banner-${i}`">
          <div v-if="imageBannerNumber == i" class="aniamtion-fade-in">
            <q-img
              fit="cover"
              no-spinner
              no-transition
              class="animation-zoom-image"
              :src="`/images/banner-${i}.jpg`"
            />
          </div>
        </div>
      </div>

      <div class="backdrop"></div>
      <div
        class="absolute-center"
        :class="
          responsiveSize.width <= 600
            ? 'banner-content-mobile'
            : 'banner-content'
        "
      >
        <div class="relative-position q-pa-md fit">
          <div class="font-b text-header-brand">P&L Ambulance</div>
          <div class="f20 font-m text-content-brand">
            ยินดีให้บริการรถฉุกเฉิน ตลอด 24 ชม. บริการเคลื่อนย้ายผู้ป่วย
            บริการโดยเจ้าหน้าที่บุคลากรผู้มีประสบการณ์ดูแลและควบคุมคุณภาพโดยทีมแพทย์และพยาบาลวิชาชีพเฉพาะทาง
            พร้อมรถพยาบาลทีมีอุปกรณ์ครบครันและทันสมัย สะอาดปลอดภัยได้มาตฐาน
            มีประกันภัยการเดินทางให้แก่ผู้ใช้บริการ
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region Content 1 -->
    <div class="body-main relative-position" algn="center">
      <div class="q-pa-md" style="max-width: 1200px; width: 100%; margin: auto">
        <div class="q-my-md">
          <div class="f30 text-title font-b" align="center">
            สอบถามข้อมูลและค่าบริการ
          </div>
        </div>

        <div class="" align="center">
          <div class="q-pa-md" style="max-width: 350px; width: 100%">
            <a
              :href="contactMenu[0].link"
              target="__blank"
              style="text-decoration: none"
            >
              <div class="box-contact-fast bg-green">
                <q-img :src="contactMenu[0].image"></q-img>
              </div>
              <div class="f20 q-pa-md text-title">
                {{ contactMenu[0].text }}
              </div>
            </a>
          </div>

          <div class="q-pa-md" style="max-width: 350px; width: 100%">
            <a
              :href="`${contactMenu[2].link}`"
              style="text-decoration: none"
              target="__blank"
            >
              <q-btn round push class="box-contact-phone">
                <div class="row justify-center" align="left">
                  <div class="q-pa-sm self-center">
                    <q-icon :name="contactMenu[2].icon" size="25px"></q-icon>
                  </div>
                  <div class="self-center f20 font-m q-pa-sm">
                    {{ `083-058-7408 (คลิ๊ก)` }}
                  </div>
                  <div class="f16">
                    {{ contactMenu[2].subText }}
                  </div>
                </div>
              </q-btn>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <div class="border-separate q-my-md"></div>

    <!-- #region Content 2 -->
    <div class="body-main relative-position" algn="center">
      <div
        class="absolute-center"
        style="
          left: 73%;
          top: 25%;
          transform: rotate(-25deg);
          z-index: 2;
          opacity: 0.3;
        "
      >
        <q-img
          width="250px"
          height="195px"
          src="/images/gallery/image-013.jpg"
        ></q-img>
      </div>
      <div
        class="absolute-center"
        style="
          left: 80%;
          top: 65%;
          transform: rotate(30deg);
          z-index: 2;
          opacity: 0.3;
        "
      >
        <q-img width="200px" src="/images/gallery/image-03.jpg"></q-img>
      </div>

      <div
        class="q-pa-md f20 box-body-content"
        :align="responsiveSize.width <= 600 ? 'left' : 'center'"
      >
        <div class="q-my-md">
          <div
            class="f30 text-title font-b"
            :align="responsiveSize.width <= 600 ? 'left' : 'center'"
          >
            บริการรถพยาบาลของเรา
          </div>
          <div class="q-pa-sm font-m">
            <div
              class="row q-pa-xs"
              v-for="(itemService, indexService) in serviceList"
              :key="indexService"
            >
              <div
                class="col-1 width-fit q-py-xs"
                :class="responsiveSize.width <= 600 ? 'q-mr-sm' : 'q-mr-md'"
                style="width: fit-content"
              >
                <q-icon
                  name="fas fa-check-circle"
                  class="text-green"
                  size="20px"
                ></q-icon>
              </div>
              <div align="left" class="col self-center q-py-xs">
                {{ `${itemService}` }}
              </div>
            </div>
          </div>
        </div>

        <div class="q-my-md">
          <div class="f30 text-title font-b">บริการรถพยาบาล Standby</div>
          <div class="q-pa-sm font-m">
            <div
              class="row q-pa-xs"
              v-for="(itemStandby, indexStandby) in standbyList"
              :key="indexStandby"
            >
              <div
                class="col-1 width-fit q-py-xs"
                :class="responsiveSize.width <= 600 ? 'q-mr-sm' : 'q-mr-md'"
                style="width: fit-content"
              >
                <q-icon
                  name="fas fa-check-circle"
                  class="text-green"
                  size="20px"
                ></q-icon>
              </div>
              <div align="left" class="col self-start q-py-xs">
                {{ `${itemStandby}` }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region Details -->
    <div class="body-main relative-position">
      <div class="box-detail-content row justify-center" style="z-index: 5">
        <div class="backdrop-parallax-image"></div>
        <div class="backdrop-parallax"></div>
        <div class="col-12 row reverse justify-center relative-position">
          <div
            class="col-12 self-start q-pa-md"
            :align="responsiveSize.width <= 600 ? 'left' : 'center'"
          >
            <span class="text-white f30 text-title font-b">ผลงานของเรา</span>
          </div>
          <div
            class="col-6 sefl-center q-pa-md"
            align="center"
            style="max-width: 400px; width: 100%"
          >
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100026942845287&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              style="
                max-width: 500px;
                width: 100%;
                height: 500px;
                border: none;
                overflow: hidden;
              "
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div
            class="col-6 sefl-center q-pa-md"
            style="max-width: 700px; width: 100%"
          >
            <div class="box-image-content shadow-5">
              <q-carousel
                swipeable
                animated
                v-model="slideImage"
                infinite
                autoplay=""
                ref="carousel"
              >
                <q-carousel-slide
                  :name="i"
                  :img-src="`/images/gallery/image-0${i}.jpg`"
                  v-for="i in 20"
                  :key="i"
                />

                <template v-slot:control>
                  <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                  >
                    <q-btn
                      push
                      round
                      dense
                      class="float-button"
                      icon="arrow_right"
                      @click="$refs.carousel.next()"
                    />
                  </q-carousel-control>
                  <q-carousel-control position="bottom-left" :offset="[18, 18]">
                    <q-btn
                      push
                      round
                      dense
                      class="float-button"
                      icon="arrow_left"
                      @click="$refs.carousel.previous()"
                    />
                  </q-carousel-control>
                </template>
              </q-carousel>

              <!-- <q-img
                fit="contain"
                class="fit"
                :src="`/images/gallery/image-0${slideImage}.jpg`"
              ></q-img> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region Footer Map -->
    <div class="footer-main relative-position">
      <div class="box-footer-content row fit">
        <div class="col-12 self-center row justify-center">
          <div
            class="col-6 self-center q-pa-md"
            :align="responsiveSize.width <= 600 ? 'left' : 'center'"
            style="max-width: 600px; width: 100%"
          >
            <div class="">
              <span class="f30 text-white font-b"> ติดต่อเรา </span>
            </div>
            <div
              class="row"
              :class="
                responsiveSize.width <= 600 ? 'q-mt-md' : 'justify-center'
              "
              style="border-radius: 3px"
            >
              <div
                class="q-py-sm"
                :class="responsiveSize.width <= 600 ? 'col-12' : 'q-ma-sm'"
                v-show="itemContractFooter.name != 'phone'"
                v-for="(itemContractFooter, indexContractFooter) in contactMenu"
                :key="indexContractFooter"
                align="center"
              >
                <a
                  :href="itemContractFooter.link"
                  target="__blank"
                  style="text-decoration: none"
                >
                  <div :class="responsiveSize.width <= 600 ? 'row' : ''">
                    <div class="col-1 width-fit" style="width: 80px">
                      <q-btn
                        round
                        flat
                        :class="`bg-${itemContractFooter.color}`"
                      >
                        <div>
                          <q-icon
                            class="text-white"
                            :name="itemContractFooter.icon"
                          ></q-icon>
                        </div>
                      </q-btn>
                    </div>
                    <div class="col self-center q-pa-sm" align="left">
                      <span class="f14 font-m text-white">{{
                        `${itemContractFooter.text}`
                      }}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="q-mt-md">
              <span class="f30 font-b">
                <span class="text-white">หรือต่อสายด่วนโทร</span>
              </span>
            </div>

            <div class="col-12">
              <div class="phone-box">
                <div class="row">
                  <div class="col-1 q-pa-md width-fit" style="width: 70px">
                    <q-icon
                      size="30px"
                      class="text-white"
                      name="fas fa-phone"
                    ></q-icon>
                  </div>
                  <div class="col self-center q-pa-sm" align="left">
                    <span class="f26">083-058-7408</span>
                  </div>
                  <div
                    class="col-12"
                    :class="responsiveSize.width <= 600 ? 'q-px-md' : ''"
                  >
                    คุณ ณัฏฐเอก ชวรัตน์ศศิกุล (เหลียง)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 q-pa-md" style="max-width: 600px; width: 100%">
            <iframe
              style="
                width: 100%;
                min-width: 300px;
                min-height: 350px;
                height: 100%;
                border: 0;
              "
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3874.1042040424645!2d100.43147131483134!3d13.832780890295076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDQ5JzU4LjAiTiAxMDDCsDI2JzAxLjIiRQ!5e0!3m2!1sth!2sth!4v1690903369224!5m2!1sth!2sth"
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div class="col-12 q-pa-xs" align="center">
          <div
            style="width: 80%; margin: 10px auto; border-top: 1px solid #fff"
          ></div>
          <span class="f16 font-m text-white"> COPYRIGHT 2023 | DERVER </span>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region Floating Button -->
    <div class="fixed-bottom-right q-pa-md z-max">
      <div v-if="isShowFloatMenu">
        <div
          class="q-mb-md"
          v-for="(itemContract, indexContract) in contactMenu"
          :key="indexContract"
        >
          <a :href="itemContract.link" target="__blank">
            <q-btn
              push
              round
              @click="itemContract.link"
              class="float-button line"
              :class="`${itemContract.name} bg-${itemContract.color}`"
            >
              <q-icon :name="itemContract.icon"></q-icon>
            </q-btn>
          </a>
        </div>
      </div>

      <q-btn
        round
        push
        class="float-button contact"
        @click="isShowFloatMenu = !isShowFloatMenu"
      >
        <q-icon name="fas fa-headset"></q-icon>
        <q-tooltip
          anchor="center left"
          self="center right"
          :offset="[10, 10]"
          transition-show="scale"
          transition-hide="scale"
        >
          <span>ติดต่อเรา</span>
        </q-tooltip>
      </q-btn>
    </div>
    <!-- #endregion -->
  </q-page>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";
export default {
  setup() {
    const imageBannerNumber = ref(1);
    const slideImage = ref(1);

    const isShowFloatMenu = ref(false);
    const contactMenu = ref([
      {
        name: "line",
        icon: "fab fa-line",
        color: "green",
        link: "https://line.me/ti/p/-CuUb5ZsWW",
        text: "Line ID: liangpop0211",
        subText: "",
        image: "/images/image-line.jpg",
      },
      {
        name: "facebook",
        icon: "fab fa-facebook",
        color: "blue",
        link: "https://www.facebook.com/profile.php?id=100026942845287&mibextid=b06tZ0",
        text: "Facebook: P&L Ambulance",
        subText: "",
        image: "",
      },
      {
        name: "phone",
        icon: "fas fa-phone",
        color: "orange",
        link: "tel:0830587408",
        text: "Tel: 083-058-7408",
        subText: "คุณ ณัฏฐเอก ชวรัตน์ศศิกุล (เหลียง)",
        image: "",
      },
    ]);

    const serviceList = ref([
      "บริการรถพยาบาล นำส่งผู้ป่วยฉุกเฉิน",
      "บริการรถพยาบาล นำส่งผู้ป่วยติดเตียง นัดฟอกไต นัดเจาะเลือด",
      "บริการรถพยาบาล เคลื่อนย้ายผู้ป่วย ส่งตรวจตามแพทย์นัด",
      "บริการรถพยาบาล เคลื่อนย้ายผู้ป่วย กลับบ้านพักในกรุงเทพฯ ต่างจังหวัด กลับภูมิลำเนา",
      "บริการรถพยาบาล ทำธุรกรรมต่างๆ ย้ายโรงพยาบาล",
      "บริการรถพยาบาล ผู้ป่วยต้องใช้ Oxygen",
    ]);

    const standbyList = ref([
      "บริการรถพยาบาล เข้าฉากกองถ่ายทำภาพยนต์",
      "บริการรถพยาบาล ในงานคอนเสิร์ต งานแข่งขันกีฬา",
      "บริการรถพยาบาล งานวิ่งมาราธอน งานปั่นจักรยาน",
      "บริการรถพยาบาล ติดตามคณะทัวร์",
      "บริการรถพยาบาล งาน Motosport",
      "บริการรถพยาบาล ตามขบวน Rally",
      "บริการรถพยาบาล งานประชุม สัมนา งานแสดงสินค้า และ Eventต่างๆ",
    ]);

    let listenTimeBanner;
    onMounted(() => {
      listenTimeBanner = setInterval(() => {
        if (imageBannerNumber.value >= 3) {
          imageBannerNumber.value = 1;
        } else {
          imageBannerNumber.value++;
        }
      }, 10000);
    });

    onBeforeUnmount(() => {
      if (listenTimeBanner) {
        clearInterval(listenTimeBanner);
      }
    });

    const responsiveSize = ref({
      width: 0,
      height: 0,
    });

    return {
      responsiveSize,
      imageBannerNumber,
      contactMenu,
      isShowFloatMenu,
      slideImage,

      serviceList,
      standbyList,

      onResize(size) {
        // report.value = size
        responsiveSize.value = size;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
