
<style scoped>
.auditorC{
	border: 0px solid #008B6E;
	width: 60%;
	height: 70%;
	margin:50px auto;
	display: flex;
	justify-content:center;
	align-items: center
}
.auditorC img{
	width:50%;
}
.auditorcR{

	position: absolute;
	width:18%;
	height: 40%;
	display: inline-block;	
	right:0.8%;
	bottom: 1%;
}
.auditorcR img{
	width:95%;	
}
</style>
<template>
    <x-layout-main>
            <p class="title" id="RemoteTips">正在等待授权，请稍候</p>
 			<div class="auditorC">
				 <img src="img/loading.gif">
			</div>
			<div class="auditorcR">
		   		<img id = "idc_img" src="img/审核员.png">
			</div>
        <EMBED name="ViewSound" SRC="wav/正在等待授权，请稍后.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
	</x-layout-main>
</template>
