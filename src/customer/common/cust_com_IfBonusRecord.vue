
<template>
    <x-layout-main>
            <p class="title">打印存折交易明细</p>
            <p class="center_title">请确认存折翻至待打印页</p>
            <div class="btnbox">
                <button class="btn backbtn" id="btn_back">取消</button>
                <button class="btn surebtn" id="btn_sure">确定</button>
            </div>
    </x-layout-main>
</template>

<script>
export default {
mounted () {

    document.getElementById("btn_back").onclick=onBtn_back;
    function onBtn_back(){
        onCancel();
    }
    document.getElementById("btn_sure").onclick=onBtn_sure;
    function onBtn_sure(){
        onContinue();
    }

}
}
</script>
