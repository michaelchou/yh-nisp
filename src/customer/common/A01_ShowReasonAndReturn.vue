<template>
    <x-layout-main>
                <p class="title">信息提示</p>
                <p class="center_title" id="ShowReason"></p>
                <div class="btnbox">
                    <button class="btn backbtn disp_none" id="btn_back">结束</button>
                    <button class="btn surebtn disp_none" id="btn_sure">返回</button>
                </div>
    </x-layout-main>
</template>

<script>
export default {
mounted () {
        document.getElementById("btn_back").onclick=onBack;
        function onBack(e){
			onCancel();
        }
        document.getElementById("btn_sure").onclick=onSure;
	    function onSure(e){
			onContinue();
		}
}
}
</script>
