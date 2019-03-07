<template>
<div>
    <header class="header">
		<div class="header_rightarea">
			<!--倒计时 -->
			<div id="Ver_CountDown" class="time"></div>
		</div>
	</header>

    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title">信息提示</p>
                <p class="center_title" id="ShowReason"></p>
				<div class="btnbox">
                    <button class="btn" id="btn_sure">重&nbsp;&nbsp;&nbsp;启</button>
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
mounted () {
		//模态框倒计时
	    var intTime = $("#Ver_CountDown").html();
	    if(intTime <= 0){
		    intTime = 30;
		}
		$("#Ver_CountDown").html(intTime);//先显示一下
	    function setTimeHtml() {
		    intTime -= 1;
		    if(intTime <= 0)
		    {
			    clearInterval(interval);
			    exitScene("STA_CONTINUE");
		    }
		    $("#Ver_CountDown").html(intTime);
	    }
		var interval = setInterval(setTimeHtml,1000);
		$("#ShowReason").html("应用未重启，请重启机器！");
		//点击重启键
        document.getElementById("btn_sure").onclick=onSure;
	    function onSure(e){
			$("#ShowReason").html("正在重启机器，请稍候...");
			clearInterval(interval);
			exitScene("STA_CONTINUE");
		}
}
}
</script>
