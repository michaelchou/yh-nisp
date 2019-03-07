<style scoped>
.welcome-all {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
}

.welcome-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
}

</style>
<template>
    <div class="welcome-all">
      <video class="welcome-center" ref="video1" id="video2" autoplay @click="onStop" @ended="onOver">
        <source src="img/welcome.mp4" type="video/mp4">
      </video>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
        onStop () {
          //this.$refs.video2.stop();
          console.log(this.$refs.video1);
          $("#video2").stop();
          console.log($("#video2"));
        },
        onOver () {
          exitScene("STA_CANCEL");
        }
    }
  }
</script>