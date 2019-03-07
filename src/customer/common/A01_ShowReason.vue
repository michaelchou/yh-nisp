<template>
    <x-layout-main>
		<p class="title">信息提示</p>
		<p class="center_title" id="ShowReason"></p>
		<div class="modal_btnbox">
			<button class="btn" id="btn_sure1">确&nbsp;&nbsp;&nbsp;定</button>
		</div>
        <EMBED name="ViewSound" SRC="wav/交易已被取消请看屏幕提示.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
	</x-layout-main>
</template>

<script>
export default { 
mounted () {
      document.getElementById("btn_sure1").onclick=onSure;
	    function onSure(e){
			onContinue();
		}
}
}
</script>
