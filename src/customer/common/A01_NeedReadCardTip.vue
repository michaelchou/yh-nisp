<template>
    <x-layout-main>
        <p class="title">信息提示</p>
        <p class="center_title" id="ShowReason">系统留存证件起始日期识别为新版证件，请读取证件或进行资料修改交易</p>
        <div class="btnbox">
            <button class="btn" id="btn_back" >读取证件</button>
        </div>
        
    </x-layout-main>
</template>

<script>
export default {
mounted () {
        document.getElementById("btn_back").onclick=onBack;
        function onBack(e){
			onContinue();
        }       
    }
}
</script>
