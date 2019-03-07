<template>
<div>
    <header class="header">
        <div class="header_rightarea">
			<div class="login_status">已登录</div>
            <div class="btn_exit"></div>
            <!--倒计时 -->
            <div id="CountDown" class="time"></div>
            <!--<img id="card_status" src="img/未读卡.png"/>-->
        </div>
    </header>
    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title">信息提示</p>
                <p class="center_title" id="ShowReason">密码错误</p>
                <div class="btnbox">
                    <button class="btn backbtn disp_none" id="btn_back">取&nbsp;&nbsp;&nbsp;卡</button>
                    <button class="btn surebtn disp_none" id="btn_sure">确&nbsp;&nbsp;&nbsp;定</button>
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
