<style scoped>
    .box{
            height: 775px;
            margin-top: 30px;
        }
    .top, .bottom{
            display: flex;
            justify-content: center;
            margin-bottom: 45px;
    }
    .card{
            width: 596px;
            height: 280px;
            margin-right: 30px;
            text-align: center;
            font-size: 3rem;   
        }
        .card>img{
            width:50%;
            height: 60%;
        }
@media screen and (max-width: 1300px) { 
    .card{
            width: 480px;
            height: 250px;
        }
}
    .cardbox{
            display: flex;
            justify-content: space-between;
            border: none;
            box-shadow: none;
        }
    .cardbox div{
            height: 100%;
            width: 46%;
        }
    .Docimg img{
            margin-top: 35px;
        }
    @media screen and (max-width: 1300px) { 
      .Docimg img{
            margin-top: 25px;
        }
    }
@media screen and (max-height: 850px) { 
     .box{
            margin-top: 30px;
        }
    .card{
        width: 480px;
        height: 240px;
    }
    .Docimg img{
        margin-top: 20px;
    }
    .top, .bottom{
            margin-bottom: 35px;
    }
}
</style>

<template>
    <x-layout-main>
  <p class="title">选择证件类型</p>

        <div class="box">
            <div class="top">
                <div class="card Docimg" id="IDCard">
                    <img :src="$root.imgPath('img/二代身份证.png')" alt="">
                    <p value ="110001">二代身份证</p>
                </div>
                <div class="card Docimg" id="HKOrMacau">
                    <img :src="$root.imgPath('img/港澳居民来往内地通行证.png')" alt="">
                    <p value ="110019">港澳居民来往内地通行证</p>
                </div>
            </div>
            <div class="bottom">
                <div class="card Docimg" id="TAIWAN">
                    <img :src="$root.imgPath('img/台湾居民来往大陆通行证.png')" alt="">
                    <p value ="110021">台湾居民来往大陆通行证</p>
                </div>
                <div class="card cardbox">
                    <div class="Docimg" id="PRCard">
                        <img :src="$root.imgPath('img/外国人永久居留证.png')" alt="">
                        <p value ="110037">外国人<br>永久居留证</p>
                    </div>
                    <div class="Docimg" id="PASSPORt">
                        <img :src="$root.imgPath('img/外国护照.png')" alt="">
                        <p value ="110025">外国护照</p>
                    </div>                    
                </div>
            </div>           
        </div>
    </x-layout-main>
</template>

<!--点击搜索区域弹出模态框-->
<script>
export default {
beforeDestroy(){
     $(".Docimg").unbind("click");
},
mounted () {
    //证件选择单选事件处理
    document.getElementById("IDCard").onclick=onDocimg;
    document.getElementById("HKOrMacau").onclick=onDocimg;
    document.getElementById("TAIWAN").onclick=onDocimg;
    document.getElementById("PRCard").onclick=onDocimg;
    document.getElementById("PASSPORt").onclick=onDocimg;
 function onDocimg() {
        //获取证件类型标志
        $(".Docimg").removeClass("on");
		$(this).addClass("on");
        var DocumentType = $(this).find('p').attr('value');
        setVar("GD_CodPid",DocumentType);
        switch(DocumentType){
            case "110001":
                setVar("P_CodCountry","156");
                exitScene("STA_CONTINUE"); 
                break;
            case "110025": case "110019": case "110021":
                exitScene("STA_CONTINUE");
                break;
            case "110037":
                //外国人永久居留证，默认支持非芯片类型
                setVar("GD_A01_IsSupportNICPRCard","1");
                exitScene("STA_CONTINUE"); 
                break;
            default:
                exitScene("STA_FAIL");
                break;
        }
        
    }
}
}
</script>
