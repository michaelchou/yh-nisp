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
                <p class="title">本机暂停服务</p>
                <p class="center_title" id="ShowReason"></p>
				<!--div class="btnbox">
                    <button class="btn" id="btn_sure">重&nbsp;&nbsp;&nbsp;试</button>
                </div-->
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
		    intTime = 300;
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
		DataTools.get("RP_THRespCode|RP_THRespMsg",function(data){
			var strRespCode = data[0];//错误码
			var strRespMsg = data[1];//错误码描述
			$("#ShowReason").html(strRespMsg + "<br><br>" + strRespCode);
		});
		//点击重试键
        document.getElementById("btn_sure").onclick=onSure;
	    function onSure(e){
			clearInterval(interval);
			exitScene("STA_CONTINUE");
		}
}
}
</script>
