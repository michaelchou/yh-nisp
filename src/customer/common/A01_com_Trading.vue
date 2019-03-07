<!--
	功能：交易处理中画面
	开发人：HHQ
	开发时间：2017/7/26
-->
<style scoped>
img{
    display: block;
    margin: auto;
    width: 20%;
}
</style>

<template>
    <div class="x-modal">
        <div id="modal_tradingBox" class="modal_tradingBox">
            <div>
                <img  :src="$root.imgPath('img/loading.gif')">
                <div id="TradingTip">交易正在进行，请稍候...</div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    mounted () {
        var strTransTip = getTransTip();
        if(strTransTip !=null && strTransTip !=""){
            $("#TradingTip").html(strTransTip);
        }   
        else{
            $("#TradingTip").html("交易正在进行，请稍候...");  
        }
    }
}
</script>
