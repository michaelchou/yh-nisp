<template>
<!--div class="header header_bg">
    <div class="header_rightarea">
        <select v-model="$root.currentView">
            <option v-for="item in $root.pages" 
                :key="item[1]"
                :value="item[1]">{{item[0]}}</option>
        </select>
        <a class="H_adm_info" id="HomeBtn"><img src="img/adm/home.png"></img>返回首页</a>
        <a class="H_adm_info" id="AdminName"><img src="img/adm/name.png"></img>罗雨晴</a>
        <a class="H_adm_info" id="ExitBtn"><img src="img/adm/quit.png"></img>安全退出</a>
    </div>
</div-->
<div class="x-modal">
         <p class="modal_title">省市区选择</p>
                    <div class="citySelector">
                        <div class="selectSlide"></div>
                            <div class="province">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper"></div>
                                </div>
                            </div>
                    <div class="city">
                        <div class="swiper-container">
                            <div class="swiper-wrapper"></div>
                        </div>
                    </div>
                <div class="district">
                    <div class="swiper-container">
                        <div class="swiper-wrapper"></div>
                    </div>
                </div>
            </div>

</div>


</template>
<script>
export default {
    mounted() {
            //swiper初始化
            var indexPro = 0;
            var indexCty = 0;
            var indexDst = 0;
            var swiperPro = new Swiper('.province .swiper-container', {
            direction :"vertical",
            //        loop:true,   //使用loop获取的activeIndex值复制
            slideActiveClass : 'activeSlide',  //活动块的类名
            slidesPerView:5,
            spaceBetween:3,
            loopedSlides:5,
            centeredSlides: true,
            slideToClickedSlide: true,
            onSlideChangeEnd: function(swiperPro){
                swiperCty.removeAllSlides();
                swiperDst.removeAllSlides();
                indexPro =swiperPro.activeIndex; //切换结束时，返回slide下标
                initCity();
                initDistrict();
                swiperCty.update();
            }
        });
        var swiperCty = new Swiper('.city .swiper-container', {
            direction :"vertical",
    //        loop:true,   //使用loop获取的activeIndex值复制
            slideActiveClass : 'activeSlide',  //活动块的类名
            slidesPerView:5,
            spaceBetween:3,
            loopedSlides:5,
            centeredSlides: true, 
            slideToClickedSlide: true,
            onSlideChangeEnd: function(swiperCty) {
                swiperDst.removeAllSlides();
                indexCty = swiperCty.activeIndex; //切换结束时，返回slide下标
                initDistrict();
                swiperDst.update();
            },
            onClick: function(swiperCty) {
                swiperDst.removeAllSlides();
                indexCty = swiperCty.activeIndex;
                initDistrict();
                swiperDst.update();
            }
        });
        var swiperDst = new Swiper('.district .swiper-container', {
            direction :"vertical",
    //        loop:true,   //使用loop获取的activeIndex值复制
            slideActiveClass : 'activeSlide',  //活动块的类名
            slidesPerView:5,
            spaceBetween:3,
            loopedSlides:5,
            centeredSlides: true,
            slideToClickedSlide: true,
            onSlideChangeEnd: function(swiperDst){
                indexDst = swiperDst.activeIndex;
            }
        });
        /*测试数据*/
        var str = [{"province":"广东省","ctyList":[{"city":"深圳市","dstList":["南山区_10000","龙岗区_40000","罗湖区_60000","宝安区_80000","盐田区_12000","福田区_30000"]},
                          {"city":"汕头市","dstList":["龙湖区_10001","濠江区_10002","潮南区_10003","南澳县_10004","金平区_10005","潮阳区_10006","澄海区"]},
                          {"city":"珠海市","dstList":["香洲区_11000","金湾区_12000","斗门区_13000"]},
                          {"city":"惠州市","dstList":["惠城区_14000","博罗县_15000","龙门县_16000","惠阳区_17000","惠东县_18000"]},
                          {"city":"佛山市","dstList":["三水区","禅城区","顺德区","高明区","南海区"]}]},
               {"province":"北京市","ctyList":[{"city":"北京市","dstList":["通县","西城区","宣武区","丰台区","海淀区","房山区","顺义区","大兴区","平谷区","延庆区","东城区","崇文区","朝阳区","石景山区","门头沟区","通州区","昌平区","怀柔区","密云县"]}]},
               {"province":"内蒙古自治区","ctyList":[{"city":"锡林郭勒盟","dstList":["锡林浩特市","多伦县","苏尼特右旗","西乌珠穆沁旗","正镶白旗","二连浩特市","阿马嗄旗","阿巴嘎旗","苏尼特左旗","东乌珠穆沁旗","太仆寺旗","正蓝旗","镶黄旗"]},
                          {"city":"兴安盟","dstList":["科尔沁右翼中旗","突泉县","科右中旗","科尔沁右翼前旗","扎赉特旗","乌兰浩特市","阿尔山市"]},
                          {"city":"阿拉善盟","dstList":["阿拉善左旗","前郭尔罗斯蒙古族自治县","阿拉善右旗"]}]},
               {"province":"江苏省","ctyList":[{"city":"南京市","dstList":["玄武区","秦淮区","鼓楼区"]}]},
               {"province":"上海市","ctyList":[{"city":"上海市","dstList":["黄浦区","浦东新区","嘉定区"]}]},
               {"province":"黑龙江省","ctyList":[{"city":"哈尔滨市","dstList":["松北区","木兰县","方正县"]}]},
               {"province":"吉林省","ctyList":[{"city":"长春市","dstList":["农安县","绿园区","二道区"]}]},
               {"province":"辽宁省","ctyList":[{"city":"沈阳市","dstList":["大东区","苏家屯区","于洪区"]}]},
               {"province":"浙江省","ctyList":[{"city":"杭州市","dstList":["西湖区","萧山区","桐庐县"]}]},
               {"province":"安徽省","ctyList":[{"city":"合肥市","dstList":["庐阳区","肥东县"]}]},
               {"province":"福建省","ctyList":[{"city":"福州市","dstList":["鼓楼区"]}]},
               {"province":"广西壮族自治区","ctyList":[{"city":"南宁市","dstList":["青秀区"]}]}];

        function initProvince(){
            for(var i=0;i<str.length;i++){
                swiperPro.appendSlide("<div class=\"swiper-slide swiper-slideN\">"+str[i]["province"]+"</div>");
            }
        }
        function initCity(){
            for(var j=0;j<str[indexPro]["ctyList"].length;j++){
                swiperCty.appendSlide("<div class=\"swiper-slide swiper-slideN\">"+str[indexPro].ctyList[j]["city"]+"</div>");
            }
        }
        function initDistrict(){
            for(var j=0;j<str[indexPro].ctyList[indexCty]["dstList"].length;j++){
                swiperDst.appendSlide("<div class=\"swiper-slide swiper-slideN\">"+str[indexPro].ctyList[indexCty].dstList[j].split("_")[0]+"</div>");
            }
        }
        initProvince();
        initCity();
        initDistrict();
    	$("#btn_sure").on('click', function() {		
        // alert("省份："+str[indexPro]["province"]+"  城市："+str[indexPro].ctyList[indexCty]["city"]+"  区县："+str[indexPro].ctyList[indexCty].dstList[indexDst].split("_")[0]
        // +"  邮编："+str[indexPro].ctyList[indexCty].dstList[indexDst].split("_")[1]);
        // alert("continue");
        exitScene("STA_CONTINUE");
	    });
	    $("#btn_back").on('click', function() {
        exitScene("STA_CANCEL");		
	});	


}
}
</script>
    <style>
        .province, .city, .district {
            display:inline-block;
        }
        .province .swiper-container,.city .swiper-container,.district .swiper-container  {
            width: 280px;
            height: 400px;
            margin:10px 20px 20px 10px;
        }
        .swiper-slideN {
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
        }
        .activeSlide{
            font-weight: bold;
        }
        .citySelector{
            position:relative;
            margin:10px auto;
            width:90%;
            height:65%;
            text-align:center;
            color:#008B6E;
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
    </style>
