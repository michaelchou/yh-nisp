<template>
    <x-layout-main>
                <p class="title">信息提示</p>
                <p class="center_title" id="ShowReason"></p>
                <div class="btnbox">
                    <button class="btn backbtn disp_none" id="btn_back">取&nbsp;&nbsp;&nbsp;卡</button>
                    <button class="btn surebtn disp_none" id="btn_sure">继&nbsp;&nbsp;&nbsp;续</button>
                </div>
        <EMBED name="ViewSound" SRC="wav/交易失败，请查看详情！.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>        
    </x-layout-main>
</template>

<script>
export default {
mounted () {
       document.getElementById("btn_back").onclick=onBack;
	    function onBack(){
			onCancel();
        }
        document.getElementById("btn_sure").onclick=onSure;
		function onSure(){
			onContinue();
		}
}
}
</script>
