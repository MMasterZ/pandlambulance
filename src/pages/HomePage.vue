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
      :class="{
        'banner-main-mobile': responsiveSize.width <= 600,
        'banner-main': responsiveSize.width > 600,
      }"
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
        :class="{
          'banner-content-mobile': responsiveSize.width <= 600,
          'banner-content': responsiveSize.width > 600,
        }"
      >
        <div class="relative-position q-pa-md fit">
          <div class="font-b q-py-md">
            <h1 class="text-header-brand" style="line-height: 1">
              P&L Ambulance
            </h1>
          </div>
          <div class="f20 font-m text-content-brand">
            <p>
              ยินดีให้บริการรถฉุกเฉิน ตลอด 24 ชม. บริการเคลื่อนย้ายผู้ป่วย
              บริการโดยเจ้าหน้าที่บุคลากรผู้มีประสบการณ์ดูแลพร้อมรถพยาบาลที่มีอุปกรณ์ครบครันและทันสมัย
              สะอาดปลอดภัยได้มาตรฐาน
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region Group 1 -->
    <div class="relative-position" style="overflow: hidden">
      <div
        v-if="responsiveSize.width < 600"
        class="absolute-top-right"
        style="
          top: 500px;
          right: -70px;
          max-width: 350px;
          width: 80%;
          min-width: 200px;
          opacity: 0.8;
          z-index: 2;
        "
      >
        <q-img
          width="100%"
          style="transform: rotate(15deg)"
          src="/images/gallery/image-033.jpg"
          no-spinner
          no-transition
        ></q-img>
      </div>

      <!-- #region Content 1 -->
      <div
        class="body-main relative-position"
        style="overflow: visible"
        algn="center"
      >
        <!-- #region Background -->
        <!-- <div class="absolute-center" style="top: 40%; width: 1920px">
          <q-img
            src="/images/gallery/image-033.jpg"
            no-spinner
            no-transition
          ></q-img>
        </div>
        <div
          style="background-color: rgba(255, 255, 255, 0.7)"
          class="fit absolute-center"
        ></div> -->
        <!-- #endregion -->

        <!-- #region Image PC -->
        <div v-if="responsiveSize.width >= 1024">
          <div
            class="absolute-top"
            style="
              max-width: 500px;
              width: 45%;
              min-width: 300px;
              left: 15px;
              top: 3%;
              transform: rotate(-1deg);
              z-index: 2;
            "
          >
            <q-img
              width="100%"
              src="/images/gallery/image-031.jpg"
              no-spinner
              no-transition
            ></q-img>
          </div>

          <div
            class="absolute-top"
            style="
              max-width: 500px;
              width: 45%;
              min-width: 300px;
              left: 50px;
              top: 50%;
              transform: rotate(1deg);
              z-index: 2;
            "
          >
            <q-img
              width="100%"
              src="/images/gallery/image-032.jpg"
              no-spinner
              no-transition
            ></q-img>
          </div>

          <div
            class="absolute-top-right"
            style="
              max-width: 500px;
              width: 45%;
              min-width: 300px;
              right: 15px;
              top: 50%;
              transform: rotate(-1deg);
              z-index: 2;
            "
          >
            <q-img
              width="100%"
              src="/images/gallery/image-030.jpg"
              no-spinner
              no-transition
            ></q-img>
          </div>

          <div
            class="absolute-top-right"
            style="
              max-width: 500px;
              width: 45%;
              min-width: 300px;
              top: 30px;
              right: 35px;
              transform: rotate(1deg);
              z-index: 2;
            "
          >
            <q-img
              width="100%"
              src="/images/gallery/image-029.jpg"
              no-spinner
              no-transition
            ></q-img>
          </div>
        </div>
        <!-- #endregion -->

        <!-- #region Image Mobile -->
        <div v-if="responsiveSize.width < 1024">
          <div
            class="absolute-top-left"
            style="
              top: 10px;
              left: -30px;
              max-width: 350px;
              width: 80%;
              min-width: 200px;
              opacity: 0.8;
              z-index: 2;
            "
          >
            <q-img
              width="100%"
              style="transform: rotate(-15deg) rotateY(180deg)"
              src="/images/gallery/image-029.jpg"
              no-spinner
              no-transition
            ></q-img>
          </div>
        </div>

        <!-- #region Contact -->
        <div
          class="q-pa-md relative-position"
          style="max-width: 1200px; width: 100%; margin: auto; z-index: 3"
        >
          <div class="q-my-lg" align="center">
            <div
              class="text-title font-b width-fit q-pa-md"
              :style="
                responsiveSize.width >= 1024
                  ? 'background-color: rgba(255, 255, 255, 0.5)'
                  : 'background-color: rgba(255, 255, 255, 1)'
              "
              align="center"
            >
              <h1 class="f30" style="line-height: 0">
                สอบถามข้อมูลและค่าบริการ
              </h1>
            </div>
          </div>
          <div align="center">
            <!-- #region Line -->
            <div
              class="q-py-md"
              :style="responsiveSize.width <= 600 ? '' : ''"
              style="max-width: 300px; min-width: 250px; width: 80%"
            >
              <a
                :href="contactMenu[0].link"
                target="__blank"
                style="text-decoration: none"
              >
                <div class="box-contact-fast bg-green">
                  <q-img
                    :src="contactMenu[0].image"
                    no-spinner
                    no-transition
                  ></q-img>
                </div>
                <div class="f20 q-pa-md text-title">
                  {{ contactMenu[0].text }}
                </div>
              </a>
            </div>
            <!-- #endregion -->

            <!-- #region Button Call 1 -->
            <div
              class="q-pa-md relative-position"
              style="max-width: 400px; width: 43%; min-width: 300px; z-index: 3"
            >
              <a
                :href="`${contactMenu[2].link}`"
                style="text-decoration: none"
                target="__blank"
              >
                <q-btn round push class="box-contact-phone">
                  <div class="row justify-center q-pa-sm" align="left">
                    <div class="q-pa-sm self-center">
                      <q-icon name="fas fa-phone" size="25px"></q-icon>
                    </div>
                    <div class="self-center f26 phone font-m q-pa-sm">
                      {{ `083-058-7408 (คลิ๊ก)` }}
                    </div>
                    <div class="f16 phone">
                      {{ contactMenu[2].subText }}
                    </div>
                  </div>
                </q-btn>
              </a>
            </div>
            <!-- #endregion -->

            <!-- #region Button Call 2 -->
            <div
              class="q-pa-md relative-position"
              style="max-width: 400px; width: 43%; min-width: 300px; z-index: 3"
            >
              <a
                :href="`tel:0617749222`"
                style="text-decoration: none"
                target="__blank"
              >
                <q-btn
                  round
                  push
                  class="box-contact-phone"
                  style="animation-delay: 0.5s"
                >
                  <div class="row justify-center q-pa-sm" align="left">
                    <div class="q-pa-sm self-center">
                      <q-icon name="fas fa-phone" size="30px"></q-icon>
                    </div>
                    <div class="self-center f26 phone font-m q-pa-sm">
                      {{ `061-774-9222 (คลิ๊ก)` }}
                    </div>
                    <div class="col-12 f16 phone" align="center">
                      {{ "(คุณป๊อป)" }}
                    </div>
                  </div>
                </q-btn>
              </a>
            </div>
            <!-- #endregion -->
          </div>
        </div>
        <!-- #endregion -->
      </div>
      <!-- #endregion -->

      <div class="border-separate q-mb-md"></div>

      <!-- #region Content 2 -->
      <div class="body-main relative-position" algn="center">
        <div
          class="absolute-center"
          style="
            left: 70%;
            top: 30%;
            transform: rotate(-1deg);
            z-index: 2;
            opacity: 0.8;
          "
        >
          <q-img
            width="450px"
            src="/images/gallery/image-028.jpg"
            no-spinner
            no-transition
          ></q-img>
        </div>

        <div
          class="absolute-bottom"
          style="
            left: 70%;
            bottom: 5%;
            transform: rotate(1deg);
            z-index: 2;
            opacity: 0.8;
          "
        >
          <q-img
            width="400px"
            src="/images/gallery/image-03.jpg"
            no-spinner
            no-transition
          ></q-img>
        </div>

        <div
          class="q-px-md q-pb-md f20 box-body-content"
          :align="responsiveSize.width <= 600 ? 'left' : 'center'"
          :style="responsiveSize.width <= 1024 ? '' : ''"
        >
          <div>
            <div>
              <div
                class="text-title font-b"
                :align="responsiveSize.width <= 600 ? 'left' : 'center'"
              >
                <h1 class="f30" style="margin: auto; line-height: 3">
                  เกี่ยวกับเรา
                </h1>
              </div>
              <div
                align="left"
                :style="
                  responsiveSize.width <= 1024
                    ? 'background-color: rgba(255, 255, 255, 0.7)'
                    : ''
                "
              >
                <p>
                  <span class="f30 font-m">P&L Ambulance</span> บริการรถพยาบาล
                  เป็นบริการทางการแพทย์
                  บริการรถพยาบาลจะให้ความช่วยเหลือและดูแลผู้ป่วยหรือฉุกเฉินทางการแพทย์ในสถานการณ์ฉุกเฉินในกรณีฉุกเฉิน
                  รถพยาบาลบางครั้งเรียกว่า "รถฉุกเฉิน"
                  และมีคุณสมบัติพิเศษทางการแพทย์ที่ช่วยในการให้บริการการรักษาเบื้องต้นก่อนนำส่งโรงพยาบาลใกล้เคียงหรือตามความประสงค์ของคนไข้หรือญาติ
                  รถพยาบาลจะมีอุปกรณ์ทางการแพทย์ขั้นพื้นฐาน เช่น
                  เครื่องช่วยหายใจ (defibrillator), เครื่องวัดความดันเลือด,
                  อุปกรณ์การช่วยเหลืออื่น ๆ
                  ที่จำเป็นในการดูแลผู้ป่วยในสถานการณ์ฉุกเฉิน
                  บริการรถพยาบาลจะมีบุคคลากรทางการแพทย์ที่ประจำอยู่บนรถ
                  และกรณีคนไข้ต้องการพยาบาลประจำรถ
                  ทางเรามีเจ้าหน้าที่พยาบาลคอยให้การช่วยเหลือ
                  มีเจ้าหน้าที่ขับรถพยาบาลที่มีความรู้และความเชี่ยวชาญในการให้บริการในสถานการณ์ฉุกเฉิน
                  บริการรถพยาบาลมักถูกเรียกใช้ในสถานการณ์ที่รุนแรง เช่น
                  การเจ็บป่วยที่ร้ายแรง, หรือสถานการณ์ฉุกเฉินทางการแพทย์อื่น ๆ
                  เพื่อให้ผู้ป่วยได้รับการดูแลและการรักษาเบื้องต้นก่อนจะนำส่งโรงพยาบาล
                  การเรียกใช้บริการรถพยาบาลเป็นส่วนสำคัญในการช่วยให้ผู้ป่วยมีโอกาสรอดชีวิตในสถานการณ์ฉุกเฉิน
                  ข้อควรระวัง
                  ในการใช้บริการรถพยาบาลให้เหมาะสมและเรียกใช้ในกรณีที่จำเป็นเท่านั้น
                  เนื่องจากทรัพยากรทางการแพทย์มีจำกัดและควรจัดสรรให้ใช้ให้เหมาะสมกับสถานการณ์และความเร่งด่วนของผู้ป่วยที่ต้องการความช่วยเหลือ
                </p>
              </div>
            </div>

            <div
              :style="
                responsiveSize.width <= 1024
                  ? 'background-color: rgba(255, 255, 255, 0.7)'
                  : ''
              "
            >
              <div
                class="text-title font-b"
                :align="responsiveSize.width <= 600 ? 'left' : 'center'"
              >
                <h1 class="f30">บริการรถพยาบาลของเรา</h1>
              </div>
              <div class="q-pa-sm font-m">
                <div
                  class="row q-pa-xs"
                  v-for="(itemService, indexService) in serviceList"
                  :key="indexService"
                >
                  <div
                    class="col-1 width-fit"
                    style="width: fit-content"
                    :class="{
                      'q-mr-sm': responsiveSize.width <= 600,
                      'q-mr-md': responsiveSize.width > 600,
                    }"
                  >
                    <q-icon
                      name="fas fa-check-circle"
                      class="text-green"
                      size="20px"
                    ></q-icon>
                  </div>
                  <div align="left" class="col self-center">
                    <p>{{ `${itemService}` }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="q-my-md"
              :style="
                responsiveSize.width <= 1024
                  ? 'background-color: rgba(255, 255, 255, 0.7)'
                  : ''
              "
            >
              <div class="text-title font-b">
                <h1 class="f30">บริการรถพยาบาล Standby</h1>
              </div>
              <div class="q-pa-sm font-m">
                <div
                  class="row q-pa-xs"
                  v-for="(itemStandby, indexStandby) in standbyList"
                  :key="indexStandby"
                >
                  <div
                    class="col-1 width-fit"
                    style="width: fit-content"
                    :class="{
                      'q-mr-sm': responsiveSize.width <= 600,
                      'q-mr-md': responsiveSize.width > 600,
                    }"
                  >
                    <q-icon
                      name="fas fa-check-circle"
                      class="text-green"
                      size="20px"
                    ></q-icon>
                  </div>
                  <div align="left" class="col self-start">
                    <p>{{ `${itemStandby}` }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- #endregion -->
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
            <span class="text-white text-title font-b">
              <h1 class="f30" style="margin: auto">ผลงานของเรา</h1>
            </span>
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
                  v-for="i in 33"
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
            style="max-width: 600px; width: 100%"
            :align="responsiveSize.width <= 600 ? 'left' : 'center'"
          >
            <div class="">
              <span class="text-white font-b">
                <h1 class="f30" style="margin: auto">ติดต่อเรา</h1>
              </span>
            </div>
            <div
              class="row"
              :class="{
                'q-mt-md': responsiveSize.width <= 600,
                'justify-center': responsiveSize.width > 600,
              }"
              style="border-radius: 3px"
            >
              <div
                class="q-py-sm"
                v-show="itemContractFooter.name != 'phone'"
                v-for="(itemContractFooter, indexContractFooter) in contactMenu"
                :key="indexContractFooter"
                align="center"
                :class="{
                  'col-12': responsiveSize.width <= 600,
                  'q-ma-sm': responsiveSize.width > 600,
                }"
              >
                <a
                  :href="itemContractFooter.link"
                  target="__blank"
                  style="text-decoration: none"
                >
                  <div
                    :class="{
                      row: responsiveSize.width <= 600,
                    }"
                  >
                    <div class="col-1 width-fit" style="width: 80px">
                      <q-btn
                        round
                        flat
                        :style="`background-color:${itemContractFooter.hex}`"
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

            <div class="q-mt-md q-mb-sm">
              <span class="font-b">
                <h1 class="f30 text-white" style="margin: auto">
                  หรือต่อสายด่วนโทร
                </h1>
              </span>
            </div>

            <div
              class="col-12"
              :class="{ 'justify-center row': responsiveSize.width > 600 }"
            >
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
                    <span class="f26"
                      >083-058-7408 <span class="f20">(คุณเหลียง)</span></span
                    >
                  </div>
                </div>
              </div>
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
                    <span class="f26"
                      >061-774-9222 <span class="f20">(คุณป๊อป)</span></span
                    >
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
              :class="`${itemContract.name}`"
              :style="`background-color:${itemContract.hex}`"
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
        hex: "#4CAF50",
        link: "https://line.me/ti/p/-CuUb5ZsWW",
        text: "Line ID: liangpop0211",
        subText: "",
        image: "/images/image-line.jpg",
      },
      {
        name: "facebook",
        icon: "fab fa-facebook",
        color: "blue",
        hex: "#004AA7",
        link: "https://www.facebook.com/profile.php?id=100026942845287&mibextid=b06tZ0",
        text: "Facebook: P&L Ambulance",
        subText: "",
        image: "",
      },
      {
        name: "phone",
        icon: "fas fa-phone",
        color: "orange",
        hex: "#DA2C22",
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
