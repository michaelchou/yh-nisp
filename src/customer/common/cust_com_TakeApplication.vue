<template>
    <x-layout-main>
                <p class="title">信息提示</p>
                <p class="center_title">请取走申请书并签名区域内签字</p>
                <div class="btnbox">
                    <button class="btn surebtn" id="btn_sure">确定</button>
                </div>
    <div id="goodcover">
        <div class="modal">
            <p class="modal_title">信息提示</p>
            <p class="md_center_title">是否确认已在申请书签字？</p>
            <div class="modal_btnbox">
                <button class="btn backbtn" id="modal_btn_back">返&nbsp;&nbsp;&nbsp;回</button>
                <button class="btn surebtn" id="modal_btn_sure">确&nbsp;&nbsp;&nbsp;定</button>
            </div>
        </div>
    </div>
    </x-layout-main>
</template>

<script>
export default {
mounted () {
        document.getElementById("btn_sure").onclick=onSure;
        function onSure(){
            $("#goodcover").fadeIn(300);
        }
        document.getElementById("goodcover").onclick=onCover;
        function onCover() {
            $(this).fadeOut(300);
        }
}
}
</script>
