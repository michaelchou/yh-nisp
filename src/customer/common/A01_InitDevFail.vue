<template>
<div>
    <header class="header">
		<div class="header_rightarea">
			<!--倒计时 -->
			<div id="Dev_CountDown" class="time"></div>
		</div>
	</header>

    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title">信息提示</p>
                <p class="center_title">对不起，设备初始化失败！</p>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
	mounted () {
			//模态框倒计时
			var intTime = $("#Dev_CountDown").html();
			if(intTime <= 0){
				intTime = 300;
			}
			$("#Dev_CountDown").html(intTime);//先显示一下
			function setTimeHtml() {
				intTime -= 1;
				if(intTime <= 0)
				{
					clearInterval(interval);
					exitScene("STA_CONTINUE");
				}
				$("#Dev_CountDown").html(intTime);
			}
			var interval = setInterval(setTimeHtml,1000);
	}
}
</script>
