<style scoped>
img{
    display: block;
    margin: auto;
    margin-top: 8%;
    width: 20%;
}
.center_title{
    margin-top: 0px;
}
</style>
<template>
<div>
    <header class="header">
		<div class="header_rightarea">
			<!--倒计时 -->
			<div id="CountDown" class="time"></div>
			<!--<img id="card_status" src="img/未读卡.png"/>-->
		</div>
	</header>

    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title">信息提示</p>
                <img :src="$root.imgPath('img/loading.gif')">
                <p class="center_title" id="Main1">系统正在处理，请稍候...</p>
            </div>
        </div>
    </main>
</div>
</template>
