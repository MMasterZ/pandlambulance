<template>
  <q-resize-observer @resize="onResize" />
  <q-page class="brx container-main">

    <!-- #region Header -->
    <div class="header-main q-pa-md row justify-between">
      <div class="col-1 width-fit brx relative-position" style="width:10px;">
        <q-img src="/images/logo.png" no-spinner no-transition width="250px"></q-img>
      </div>
      <div class="col-2 brx row justify-end relative-position font-b" style="width:200px;z-index: 50;" align="right">
        <div class="self-start button-menu ">ผลงาน</div>
        <div class="self-start button-menu ">ติดต่อเรา</div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region Banner -->
    <div class="brx banner-main relative-position">
      <div style="width: 1600px;" class="brx absolute-center">
        <div v-for="i in 4" :key="`image-banner-${i}`">
          <div v-if="imageBannerNumber == i" class="aniamtion-fade-in">
            <q-img fit="cover" no-spinner no-transition class="animation-zoom-image" :src="`/images/banner-${i}.jpg`" />
          </div>
        </div>
      </div>

      <div class="brx backdrop"></div>
      <div class="absolute-center banner-content brx">
        <div class="font-b text-header-brand">
          P&L Ambulance
        </div>
        <div class="f20 font-m text-content-brand">
          บริการรถฉุกเฉิน ตลอด 24 ชม. บริการเคลื่อนย้ายผู้ป่วย บริการโดยเจ้าหน้าที่บุคลากรผู้มีประสบการณ์ พร้อมรถพยาบาลทีอุปกรณ์ครบครัน สะอาดและปลอดภัยตามมาตฐาน
          </div>
      </div>
    </div>
    <!-- #endregion -->

    <!-- #region Content -->
    <div class="brx body-main" algn="center">

    <div class="brx q-pa-md f16 box-body-content absolute-center"  align="center">
        รถพยาบาล รับ-ส่ง เคลื่อนย้ายผู้ป่วย
พร้อมให้บริการรับส่งตลอด 24 ชั่วโมง
รถ พยาบาล รับ-ส่ง เคลื่อนย้ายผู้ป่วยในทุกระดับอาการ
อาทิเช่น ผู้ป่วยวิกฤต ผู้ป่วยต้องพบแพทย์ตามนัด
หรือ ผู้ป่วยที่ต้องการกลับภูมิลำเนาต่างจังหวัด
ดูแลและควบคุมคุณภาพโดยเจ้าหน้าที่เฉพาะทาง
พร้อมทั้งอุปกรณ์ในการดูแลผู้ป่วยที่ทันสมัย
รถพยาบาลสะอาดและปลอดภัยมีประกันภัยการเดินทางให้แก่ผู้ใช้บริการ
      </div>

      <!-- <span class="absolute-center"></span> -->
    </div>
    <!-- #endregion -->

    <!-- #region Details -->
    <div class="brx body-main">

      <q-parallax
      src="/images/parallax.jpg"
    >

    </q-parallax>

    </div>
    <!-- #endregion -->

    <!-- #region Footer Map -->
    <div class="brx footer-main relative-position">
      <div class=" box-footer-content  row fit">
        <div class="col-12 self-center row justify-center">
        <div class="col-6 q-pa-md" style="max-width:600px;width:100%;">
          <div class=" q-py-lg" align="center">
            <q-img src="/images/logo-footer.png" style="max-width:300px;width:100%;"></q-img>
          </div>
          <div class="row bg-white q-py-lg justify-center q-pa-md " style="border-radius:3px">
            <div class="q-ma-sm q-my-lg" v-for="(itemContractFooter,indexContractFooter) in contractMenu" :key="indexContractFooter" align=center>
              <div>
                <q-icon size="70px" :class="`text-${itemContractFooter.color}`"  :name="itemContractFooter.icon"></q-icon>
              </div>
              <div class="q-pt-sm">
                <a :href="itemContractFooter.link" target="__blank">
                <span>{{ `${itemContractFooter.text}` }}</span>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6  q-pa-md" style="max-width:600px;width:100%;">
          <iframe style="width:100%;height:350px;border:0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3787.6620210759834!2d99.3986862!3d18.3170581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d96f16dfbfffff%3A0x976a71e1b9d234bb!2z4Liq4LiZ4Liy4Lih4Lif4Li44LiV4Lia4Lit4Lil!5e0!3m2!1sth!2sth!4v1690725854137!5m2!1sth!2sth" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div class="col-12 q-pa-xs" align="center">
        <span class="f16 font-m text-white"> COPYRIGHT 2023 | DERVER </span>
      </div>
      </div>

    </div>
    <!-- #endregion -->


    <div class="fixed-bottom-right q-pa-md brx">

      <div v-if="isShowFloatMenu">
      <div class="q-mb-md" v-for="(itemContract,indexContract) in contractMenu" :key="indexContract">
        <q-btn push round @click="itemContract.link" class="float-button line" :class="`${itemContract.name} bg-${itemContract.color}`">
          <q-icon  :name="itemContract.icon"></q-icon>
        </q-btn>
      </div>
    </div>

      <q-btn round push class="float-button contract" @click="isShowFloatMenu = !isShowFloatMenu">
        <q-icon name="fas fa-headset"></q-icon>
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]" transition-show="scale"
          transition-hide="scale">
          <span>ติดต่อเรา</span>
        </q-tooltip>
      </q-btn>
    </div>

  </q-page>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue'
  export default {

  setup() {

    const imageBannerNumber = ref(1)

    const isShowFloatMenu =  ref(false)
    const contractMenu = ref([
      {
        name:"line",
        icon:"fab fa-line",
        color:"green",
        link:"",
        text:"Line ID: liangpop0211",
      },
      {
        name:"facebook",
        icon:"fab fa-facebook",
        color:"blue",
        link:"https://www.facebook.com/profile.php?id=100026942845287&mibextid=b06tZ0",
        text:"Facebook: P&L Ambulance"
      },
      {
        name:"phone",
        icon:"fas fa-phone",
        color:"orange",
        link:"",
        text:"Tel: 083-058-7408"
      }
    ])

    let listenTimeBanner;
    onMounted(() => {
      listenTimeBanner = setInterval(() => {
        if(imageBannerNumber.value >= 3){
          imageBannerNumber.value = 1
        }else{
          imageBannerNumber.value++
        }
      }, 10000);

    })


    onBeforeUnmount(() => {
      if(listenTimeBanner){
        clearInterval(listenTimeBanner)
      }
    })

    return {
      imageBannerNumber,
      contractMenu,
      isShowFloatMenu,

      onResize (size) {
        // report.value = size
       console.log(size);
      },
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
