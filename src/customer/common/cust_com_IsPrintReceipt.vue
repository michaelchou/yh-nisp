<template>
    <x-layout-main>
            <p class="title">选择是否打印凭条</p>
            <div class="btnbox">
                <button class="btn backbtn" id="btn_back">否</button>
                <button class="btn surebtn" id="btn_sure">是</button>
            </div>
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