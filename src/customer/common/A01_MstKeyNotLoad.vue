<template>
<div>
    <header class="header">
		<div class="header_rightarea">
			<!--倒计时 -->
			<div id="CountDown" class="time"></div>
		</div>
	</header>

    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title">信息提示</p>
                <p class="center_title" id="ShowReason"></p>
                <div class="btnbox">
                    <button class="btn surebtn disp_none" id="btn_sure">加载主密钥</button>
                </div>
                <p class="center_title" id="Msg1"></p>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
mounted () {   
    document.getElementById("btn_sure").onclick=onSure;
    function onSure(){
        onContinue();
    }
}
}
</script>