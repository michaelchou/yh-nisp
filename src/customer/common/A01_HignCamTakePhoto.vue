<style scoped>
.picL{
    display: inline-block;
	width: 45%;
	height: 60%;
	float: left;
	margin: 0% 7%;
}
.picR{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	height: 100%;
	justify-content: center;
	width:30%;
	float: right;
}
.photo_bg {
	width: 100%;
	flex-grow: 0;
	height: 33%;
	margin-right: 2%;
}
.photo_bg img {
	width: 100%;
	height: 80%;
	display: block;
}
@media screen and (max-height: 850px) {
    .photo_bg img {
	    height: 75%;
    }
}

@media screen and (max-height: 780px) {
    .picL{
	    margin: 2% 7%;
    }
}
</style>

<template>
    <x-layout-main>
		<div class="main_conter">
			<div class="picL">
				<img id="pic01" style="max-height:100%;max-width: 100%;">
			</div>
			<div class="picR">
				<div class="photo_bg">
					<img id="pic02">
					<span value='02' id="picname02" style="font-size:large;"></span>
				</div>
				<div class="photo_bg" >
					<img id="pic03">
					<span value='03' id="picname03" style="font-size:large;"></span>
				</div>

				<div class="photo_bg">
					<img id="pic04">
					<span value='04' id="picname04" style="font-size:large;"></span>
				</div>
			</div>

	</div>		
	<div class="btnbox">
		<button class="btn backbtn" style="display:none;" id="Retake">重摄</button>
		<button class="btn surebtn" style="display:inline;" id="Pictake">拍摄</button>
		<button class="btn surebtn" id="BtnSure"  disabled="true" >下一步</button>
	</div>
    </x-layout-main>
</template>

<script>

export default {
	created () {
	    this.$root.$on('beforeQuit', onBeforeQuit);
        function onBeforeQuit() {
			exitScene("STA_BEFOREQUIT");
		};
		
		this.$root.$on('cancelQuit', onCancelQuit);
        function onCancelQuit() {
			exitScene("STA_CANCELQUIT");
		};
        
	},
	destroyed () {   
        this.$root.$off('beforeQuit');     
        this.$root.$off('cancelQuit');        
	},
	mounted () {
		//$("#picname02").html("港澳居民来往内地通行证（带人像）");
				//$("#picname03").html("港澳居民来往内地通行证");
		var bPic04 = false;
		DataTools.get("GD_CodPid",function(data){
			var strCodPid = data.toString(); 
			if(strCodPid == "110019"){
				$("#picname02").html("港澳居民来往内地通行证正面（带人像）");
				$("#picname03").html("港澳居民来往内地通行证反面");
			}else if(strCodPid == "110021"){
				$("#picname02").html("台湾居民来往大陆通行证正面（带人像）");
				$("#picname03").html("台湾居民来往大陆通行证反面");
			}else if(strCodPid == "110037"){
				$("#picname02").html("外国人永久居留证正面（带人像）");
				$("#picname03").html("外国人永久居留证反面");
			}else if(strCodPid == "110025"){
				$("#picname02").html("外国护照基本信息页");
				$("#picname03").html("外国护照签注页");
				$("#picname04").html("外国护照入境时间页");
				bPic04 = true;
			}
		});
		document.getElementById("BtnSure").onclick=onSure;
		function onSure(e) {
			onContinue();
            
		}
		document.getElementById("Pictake").onclick=onPictake;
        function onPictake(e) {
            exitScene("STA_NEXT");
		}
		document.getElementById("Retake").onclick=onRetake;
		function onRetake(e) {
            exitScene("STA_RETAKE");
        }
		document.getElementById("pic02").onclick=onPic02;
		function onPic02(e) {
            exitScene("STA_PIC02");
        }
		document.getElementById("pic03").onclick=onPic03;
		function onPic03(e) {
            exitScene("STA_PIC03");
        }
		document.getElementById("pic04").onclick=onPic04;
		function onPic04(e) {
            if(bPic04){
				exitScene("STA_PIC04");
			}
        }       
    }
}
</script>