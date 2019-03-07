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
				<p class="notice">温馨提示：请先联系科技部门更新版本,再启动机器！</p>
				<div class="btnbox">
                    <button class="btn" id="btn_sure">关&nbsp;&nbsp;&nbsp;机</button>
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
		DataTools.get("RP_THRespCode|RP_THRespMsg",function(data){
			var strRespCode = data[0];//错误码
			var strRespMsg = data[1];//错误码描述
			$("#ShowReason").html(strRespMsg + "<br>" + strRespCode);
		});
		//点击关机键
        document.getElementById("btn_sure").onclick=onSure;
	    function onSure(e){
			$("#ShowReason").html("正在关闭机器，请稍候...");
			clearInterval(interval);
			exitScene("STA_CONTINUE");
		}
}
}
</script>
<style scoped>
	.notice{
        position:absolute;
		bottom:25%;
		width:60%;
		text-align:center;
		left:20%;
	}
</style>
