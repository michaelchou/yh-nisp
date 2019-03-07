<template>
<div>
    <header class="header">
        <div class="header_rightarea">
            <div class="btn_exit" id="btnExit"></div>
            <!--倒计时 -->
            <div id="CountDown" class="time" ></div>          
        </div>
    </header> 
    <div class="pub_content">
            <div class="panel">
                <p class="title">本机暂停服务</p>
                <p class="center_title" id="ShowReason">本机暂停服务</p>
            </div>
        </div>
</div>
</template>
<script>
export default {
    mounted () {
        document.getElementById("btnExit").onclick=onExit;
	    function onExit(){
			exitScene("STA_ADMIN");
		}
    }
}
</script>
