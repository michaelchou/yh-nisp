<!--
Add ZHENGXIAOJUN 2017.6.27
-->
<template>
<div class="x-modal">
    <p class="modal_tip">{{ $t('tip.00001') }}</p>
    <div id="modal_CountDown" class="modal_time">10</div>
    <div class="modal_btnbox">
        <button class="btn backbtn" id="modal_btn_back">取&nbsp;&nbsp;&nbsp;消</button>
        <button class="btn surebtn" id="modal_btn_sure">确&nbsp;&nbsp;&nbsp;定</button>
    </div>
</div>
</template>

<script>
export default {
	beforeMount () {
		console.log('before Quit')
		this.$root.$emit('beforeQuit')
	},
mounted () {
	var vm = this;
	//模态框倒计时
	var intTime = $("#modal_CountDown").html();
	if(intTime <= 0){
		intTime = 10;
	}
	function setTimeHtml() {
		intTime -= 1;
		if(intTime <= 0)
		{
			clearInterval(interval);

			setVar("GD_A01_IsLogin","0");
			setVar("GD_A01_BUS_IDN_RST_PROC","1");
			exitScene("STA_CANCEL");
		}
		$("#modal_CountDown").html(intTime);
	}
	var interval = setInterval(setTimeHtml,1000);
	document.getElementById("modal_btn_sure").onclick=onSure;
    document.getElementById("modal_btn_back").onclick=onBack;
	function onSure() {		
		clearInterval(interval);

		setVar("GD_A01_IsLogin","0");
		setVar("GD_A01_BUS_IDN_RST_PROC","1");

		exitScene("STA_CANCEL");
	}
	function onBack() {
		console.log('emit cancelQuit');
		vm.$root.$emit('cancelQuit');
		clearInterval(interval);
		$("#pagePopup").fadeOut(500);		
	}	
}
}
</script>