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
            <div><img  :src="$root.imgPath('img/loading.gif')">交易正在进行，请稍候...</div>
        </div>
        <div class="modal_btnbox">
            <button class="btn" id="AD_btn_back">取&nbsp;&nbsp;&nbsp;消</button>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
	mounted () 
    {
        document.getElementById("AD_btn_back").onclick=AD_btn_back;
        function AD_btn_back() {
            pageLog("STA_CANCEL.");
            exitScene("STA_CANCEL");
        }
	}
}
</script>
