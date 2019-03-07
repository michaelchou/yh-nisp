<style scoped>
    .bb{
      position: fixed;
      top: 50%; 
      left: 50%;
      -webkit-animation: clockwise 5s ;
      animation: clockwise 5s ;
      transform-origin: 300px 500px;
      animation-fill-mode: forwards;
    }
    .bb img {
      display: block;
      position:relative;
      width: 300px;
      height: 300px;
      opacity: 1;
      animation: change 5s, mylogo 0.6s  5.1s 4 alternate;
      -moz-animation: change 5s, mylogo 0.6s  5.1s 4 alternate;
      -webkit-animation: change 5s, mylogo 0.6s  5.1s 4 alternate;
      -o-animation: change 5s, mylogo 0.6s  5.1s 4 alternate;

      transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);

    }
    @-webkit-keyframes clockwise{
      0%  { -webkit-transform: rotate(0deg) ;  }
      100%{ -webkit-transform: rotate(90deg); }
    }
    @keyframes clockwise {
      0%  { transform: rotate(0deg) ; }
      100%{ transform: rotate(90deg); }
    }
    @keyframes change{
        from {
          width: 0px;
          height: 0px;
          opacity: 0;
        }
        to {
          width: 300px;
          height: 300px;
          opacity: 1;
        }
    }
    @keyframes mylogo{
        from {
          left : 20px;
        }
        to {
          left: -20px;
        }
    }
</style>
<template>
    <x-layout-main>
        <div class="bb"> <img :src="$root.imgPath('img/生日快乐.png')" alt=""></div>
    </x-layout-main>
</template>
