<style scoped>
.ul_Result_scroll{
    margin:2% 38%;
    width: 60%;
}
 .ReceiptQRImage {
	position:absolute;
	float:left;
	bottom:45%;
	left:3%;
	width:360px;
	height:360px
}
 .ReceiptQRImage img{
		width:100%;
}
.QRCode {
	position:absolute;
	float:left;
	bottom:0%;        
}  
@media screen and (max-height: 850px) {
     .ReceiptQRImage {
        width: 310px;
        height: 310px;
        bottom:43%;
     }
    .QRCode img{
       max-width: 80%;       
    }  
    .ul_Result_scroll{
        width: 60%;
        max-height: 480px;
        font-size: 2.6rem;
    }       
}

@media screen and (min-width: 1300px) and  (max-width:1380px) {  
    .ul_Result_scroll{
        width: 60%;
        height: 65%;
        font-size: 2.6rem;
    }       
}
</style>
<template>
    <x-layout-main>
        <p class="title" id="title">交易已结束，请仔细核对交易结果</p>
        <div class="ReceiptQRImage" id="QRIMG">
            <img id="IMG" src="">
        </div>
        <div class="QRCode" id="QRGIF">
            <img src="img/二维码动画.gif" >
        </div>
		<ul class="ul_Result_scroll" id="TranList">	  

		</ul>
        <p class="tips" id="tip">对不起，暂无法提供回单打印服务，请仔细核对交易结果</p>
		<div class="btnbox">
            <button class="btn" id="btn_sure">确&nbsp;&nbsp;&nbsp;定</button>
        </div> 
    </x-layout-main>
</template>
<script>
export default {
    mounted () {
        DataTools.get("GD_A01_Cust_RQImgName|GD_A01_ForceShowResultHtmlValue",function(data){
            $("#IMG").attr("src",data[0]);
            $("#TranList").html(data[1].replace(/\@!@/g, "="));
        });

        document.getElementById("btn_sure").onclick=onSure;
	    function onSure(e){
			onContinue();
		}
    }
}
</script>