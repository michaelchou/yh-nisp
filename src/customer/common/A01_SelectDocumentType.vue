<style scoped>
.MediaKind{
    width:95%;
    justify-content: center;
}
.CardMedia{
    width: 596px;
    height: 300px;
    margin-right: 30px;
    margin-left: 10px; 
}
@media screen and (max-width: 1300px) { 
    .CardMedia{
            width: 480px;
            height: 280px;
        }
}
@media screen and (max-height: 850px) { 
    .CardMedia{
        width: 400px;
        height: 240px;
    }
    .CardMedia p{
        font-size:3.0rem;
        margin-top:-15px;
    }
}
</style>

<template>
    <x-layout-main>
  <p class="title">选择证件类型</p>

        <div class="MediaKind">
                <div class="CardMedia" id="IDCard"  style="display:none">
                    <img :src="$root.imgPath('img/二代身份证.png')" alt="">
                    <p value ="110001">二代身份证</p>
                </div>
                <div class="CardMedia" id="HKOrMacau"   style="display:none">
                    <img :src="$root.imgPath('img/港澳居民来往内地通行证.png')" alt="">
                    <p value ="110019">港澳居民来往内地通行证</p>
                </div>
				<div class="CardMedia" id="TAIWAN"  style="display:none">
                    <img :src="$root.imgPath('img/台湾居民来往大陆通行证.png')" alt="">
                    <p value ="110021">台湾居民来往大陆通行证</p>
                </div>
				<div class="CardMedia" id="PRCard"   style="display:none">
                    <img :src="$root.imgPath('img/外国人永久居留证1.png')" alt="">
                    <p value ="110037">外国人永久居留证</p>
                </div>
                <div class="CardMedia" id="PASSPORt"   style="display:none">
                    <img :src="$root.imgPath('img/外国护照.png')" alt="">
                    <p value ="110025">外国护照</p>
                </div>
            </div> 
    </x-layout-main>
</template>

<!--点击搜索区域弹出模态框-->
<script>
export default {
mounted () {
    //证件掩码处理
    DataTools.get("GD_A01_Cust_IDTypeMask",function(data){
        //掩码5位：二代证-港澳-台湾-护照-外国居留证|，二代证默认支持
        var strMask = data.toString();
        // strMask = "10001";
        if(strMask == "")
        {
            //默认支持二代证
            strMask = "10000";
        }
        //显示对应的介质
        // if(strMask.replace(/0/g,"").length==3){
        //     $(".MediaKind").css("width", "96%");
        //     $(".CardMedia").css("margin-left", "4%");
        // }
        if(strMask.substr(0,1) == "1")
        {
            $("#IDCard").css("display","block");
        }
        if(strMask.substr(1,1) == "1")
        {
            $("#HKOrMacau").css("display","block");
        }
        if(strMask.substr(2,1) == "1")
        {
            $("#TAIWAN").css("display","block");
        }
        if(strMask.substr(3,1) == "1")
        {
            $("#PASSPORt").css("display","block");
        }
        if(strMask.substr(4,1) == "1")
        {
            $("#PRCard").css("display","block");
        }
    });
    //证件选择单选事件处理
    document.getElementById("IDCard").onclick=onCardMedia;
    document.getElementById("HKOrMacau").onclick=onCardMedia;
    document.getElementById("TAIWAN").onclick=onCardMedia;
    document.getElementById("PRCard").onclick=onCardMedia;
    document.getElementById("PASSPORt").onclick=onCardMedia;
    function onCardMedia() {
        //获取证件类型标志
        $(".CardMedia").removeClass("on");
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
