<template>
<div>
    <x-header></x-header>
    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title">信息提示</p>
                <p class="center_title" id="ShowReason">密码错误</p>
                <div class="btnbox">
                    <button class="btn backbtn disp_none" id="btn_back">取&nbsp;&nbsp;&nbsp;卡</button>
                    <button class="btn surebtn disp_none" id="btn_sure">继&nbsp;&nbsp;&nbsp;续</button>
                </div>
            </div>
        </div>
    </main>
   <!-- <x-footer></x-footer>-->
</div>
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
