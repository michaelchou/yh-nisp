<template>
   <div class="x-modal">
		<p class="title">信息提示</p>
		<p style="text-align:center;font-size:2.7rem;top:30%;position: relative;">是否为新款外国人永久居留身份证？</p>

		<div class="modal_btnbox">
			<button class="btn" id="btn_back1">否</button>
			<button class="btn" id="btn_sure1">是</button>
		</div>
	</div>
</template>

<script>
export default {
	mounted () {
		document.getElementById("btn_back1").onclick = function () {	
			setVar("GD_A01_IDCardIsIC","0");			
			exitScene("STA_CONTINUE");
		};

		document.getElementById("btn_sure1").onclick = function () {	
			setVar("GD_A01_IDCardIsIC","1");
            exitScene("STA_CONTINUE");
		};		
	}
}
</script>