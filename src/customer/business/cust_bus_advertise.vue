<style scoped>
.advertise {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
}

img .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
}

</style>
<template>
    <div class="advertise">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in images" :key="item"><a @click="onOver"><img :src="'advertise/' + item" class="center"></img></a></swiper-slide>
      </swiper>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
            "A0001.jpg",
            "A0002.jpg",
            "A0003.jpg",
            "A0004.jpg"
        ],
        swiperOption: {
          autoplay: 3000,
          effect: "fade",
          autoplayDisableOnInteraction: false
        }

      }
    },
    methods: {
        onOver () {
            exitScene("STA_CANCEL");
        }
    }
  }
</script>