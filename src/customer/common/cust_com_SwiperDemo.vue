<!-- The ref attr used to find the swiper instance -->
<template>
  <x-layout-main>
		 <div class="gcover"></div>
	    <div class="citySelector">
            <div class="selectSlide"></div>
            <div class="province">
                <swiper :options="provinceOption" :not-next-tick="notNextTick" ref="provinceSwiper">
                  <swiper-slide>Slide 1</swiper-slide>
                  <swiper-slide>Slide 2</swiper-slide>
                  <swiper-slide>Slide 3</swiper-slide>
                  <swiper-slide>Slide 4</swiper-slide>
                  <swiper-slide>Slide 5</swiper-slide>
                  <swiper-slide>Slide 6</swiper-slide>
                  <swiper-slide>Slide 7</swiper-slide>
                  <swiper-slide>Slide 8</swiper-slide>
                  <swiper-slide>Slide 9</swiper-slide>
                  <swiper-slide>Slide 10</swiper-slide>
                 </swiper>
            </div>
            <div class="city">
                <swiper :options="cityOption" :not-next-tick="notNextTick" ref="citySwiper">
                  <swiper-slide>Slide 1</swiper-slide>
                  <swiper-slide>Slide 2</swiper-slide>
                  <swiper-slide>Slide 3</swiper-slide>
                  <swiper-slide>Slide 4</swiper-slide>
                  <swiper-slide>Slide 5</swiper-slide>
                  <swiper-slide>Slide 6</swiper-slide>
                  <swiper-slide>Slide 7</swiper-slide>
                  <swiper-slide>Slide 8</swiper-slide>
                  <swiper-slide>Slide 9</swiper-slide>
                  <swiper-slide>Slide 10</swiper-slide>
                </swiper>
            </div>
        </div>
  </x-layout-main>
</template>

<script>
  // swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        provinceOption: {
          direction: 'vertical',
          slidesPerView: 3,
          spaceBetween:1,
          centeredSlides: true,
          slideActiveClass : 'activeSlide',  //活动块的类名
          mousewheelControl: true,
          slideToClickedSlide: true,
          onTransitionEnd: function(swiperPro){
            var indexPro =swiperPro.activeIndex; //切换结束时，返回slide下标
            console.log('province changed!')
          }
        },
        cityOption: {
          direction: 'vertical',
          slidesPerView: 3,
          spaceBetween:0,
          slideActiveClass : 'activeSlide',  //活动块的类名
          mousewheelControl: true,
          slideToClickedSlide: true,
          centeredSlides: true,
          onTransitionEnd: function(swiperPro){
            var indexPro =swiperPro.activeIndex; //切换结束时，返回slide下标
            console.log('city changed')
          }
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper1() {
        return this.$refs.provinceSwiper.swiper
      },
      swiper2() {
        return this.$refs.citySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      //console.log('this is current swiper instance object', this.swiper1)
      this.swiper1.slideTo(1, 1000, false)
      this.swiper2.slideTo(4, 1000, false)
    }
  }
</script>

     <style scoped>
        .province, .city {
            display:inline-block;
        }
        .province .swiper-container,.city .swiper-container {
            width: 400px;
            height: 400px;
            margin:50px 20px 20px 10px;
        }
		 .swiper-slide {
            text-align: center;
            font-size: 2.5rem;
            background-color: transparent;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
			 position:relative;  
        }
		.activeSlide{
            font-weight: bold;
        }
        .citySelector{
            position:relative;     
            width:100%;
            height:65%;
            text-align:center;
            color:#008B6E;
            z-index: 9999;	
            /*bottom: 0px; 
             margin:10px auto;*/
            background-color: #ffffcc;
    
        }
             
        .selectSlide{
            width:100%;
            height:77px;
            position:absolute;
            z-index: 1;
            top:38%;
            background-color: #bfbfbf;
            opacity: 0.4;
        }
   		.gcover{
			display: none;
			position: absolute;
			width: 100%;
			height: 100%;
			bottom: 0%;
			left: 0%;
			z-index: 2000;
		}
    </style>
