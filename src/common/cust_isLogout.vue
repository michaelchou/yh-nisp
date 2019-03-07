<template>
   <div class="x-modal">
		<p class="title">信息提示</p>
		<p style="text-align:center;font-size:2.7rem;top:30%;position: relative;">交易结束，是否继续办理业务？</p>

		<div class="modal_btnbox">
			<button class="btn surebtn" id="btn_back1">结束办理</button>
			<button class="btn surebtn" id="btn_sure1">继续办理</button>
		</div>
	</div>
</template>

<script>
export default {
	mounted () {
		//点击否
		document.getElementById("btn_back1").onclick=onBack;
     	function onBack(){
			exitScene("STA_CANCEL");
        }
		//点击是
		document.getElementById("btn_sure1").onclick=onSure;
		function onSure(){
            exitScene("STA_CONTINUE");
        }
	}
}
</script>