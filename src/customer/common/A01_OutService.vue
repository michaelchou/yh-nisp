<template>
<div>
    <header class="header">
		<div class="header_rightarea">
			<div class="btn_exit" id="btnExit"></div>
		</div>
	</header>

    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title">本机暂停服务</p>
                <p class="center_title">由于设备故障，无法提供服务，<br/><br/>给您带来不便，敬请谅解！(密码键盘硬件故障)</p>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
mounted () {
		//点击管机员键
        document.getElementById("btnExit").onclick=onExit;
	    function onExit(){
			exitScene("STA_ADMIN");
		}
}
}
</script>
