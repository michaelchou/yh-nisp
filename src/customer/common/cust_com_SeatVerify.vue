
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
            <p class="title" id="RemoteTips">身份审核排队中，请稍候</p>
 			<div class="auditorC">
				 <img src="img/loading.gif">
			</div>
			<div class="auditorcR">
		   		<img id = "idc_img" src="img/审核员.png">
			</div>
 
		<EMBED name="ViewSound" :src="sound" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
		<!--div class="modal_btnbox">
			<button class="btn backbtn" id="modal_btn_back" @click="onBack">声音1</button>
			<button class="btn surebtn" id="modal_btn_sure" @click="onSure">声音2</button>
		</div-->
    </x-layout-main>
</template>

<script type="text/javascript">

export default {
	data () {
		return {
			sound: "wav/正在进行身份审核，请稍后.wav"
		}
	},
	created () {
		var vm = this;
		
		this.$root.$on('SynCardOcx_VideoOpened', onVideoOpened);
        function onVideoOpened() {
			//$("#SynCardOcx1").attr('height', "58.08%").attr('width', "44.3%");
			Syn_ShowWindow();
			$("#RemoteTips").html("正在进行身份审核，请稍候");
		};
		
		
	    this.$root.$on('SynCardOcx_VideoClosed', onVideoClosed);
        function onVideoClosed() {
			//$("#SynCardOcx1").attr('height', "0%").attr('width', "0%");
			Syn_HideWindow();
		};
		
		this.$root.$on('SynCardOcx_MsgReceived', onMsgReceived);
        function onMsgReceived(strMsg) {
			//console.log('SynCardOcx_MsgReceived-on: ' + strMsg);      
			//alert('SynCardOcx_MsgReceived-on: ' + strMsg);     
			if(strMsg != ""){
				var arrstr = strMsg.split("|");
				if(arrstr.length < 3){					
					setVar("GD_ErrReason","RemoteRetErr");
					exitScene("STA_FAIL");
				}else{
					if(arrstr.length >= 5){					
						setVar("GD_A01_ChkUsrNum",arrstr[4]);						
						setVar("GD_A01_BUS_NUM_UR_IDCHK",arrstr[4]);				
					}
					DataTools.get("GD_A01_LC_SerialNo",function(data1){
						if(data1 == arrstr[1]){
							if(arrstr[0] == "002")
							{								
								if(arrstr[2] == "0000"){
									var arrFileDIR = "";
									var arrNumSeqBusproc = "";
									//DataTools.get("C_FileDIR|GD_A01_LC_SerialNo",function(data){
									DataTools.get("C_FileDIR|GD_CodPid",function(data){
										arrFileDIR = data[0];
										var GD_CodPid = data[1];
										arrNumSeqBusproc = arrstr[1];
										var strPicDir=arrstr[3]+"\\"+arrNumSeqBusproc;
										console.log('SynCardOcx_MsgReceived-on: ' + strPicDir);
										//alert('SynCardOcx_MsgReceived-on: ' + strPicDir);
										if(GD_CodPid == "110001"){
											//带国徽图片
											setVar("GD_A01_Applypic1",arrFileDIR+strPicDir +"04.jpg");
											//带人像图片
											setVar("GD_A01_Applypic2",arrFileDIR+strPicDir +"03.jpg");
											//联网核查图片
											setVar("GD_A01_Applypic3",arrFileDIR+strPicDir +"02.jpg");  
										}else{
											//带人像图片
											setVar("GD_A01_Applypic1",arrFileDIR+strPicDir +"02.jpg");
											//其他1
											setVar("GD_A01_Applypic2",arrFileDIR+strPicDir +"03.jpg");
											//其他2
											setVar("GD_A01_Applypic3",arrFileDIR+strPicDir +"04.jpg");  
										}										
										
										setVar("GD_A01_ApplyCampicSave",arrFileDIR+strPicDir +"01.jpg");
										var strFileDir = arrFileDIR;
										strFileDir = strFileDir.replace(/\\\\/g,"\\");
										strFileDir = strFileDir.replace(/\\/g,"/");
										if(strFileDir.substr(-1) != "/")
										{
											strFileDir += "/";
										}
										strFileDir +=  (arrstr[3]+"/"+arrNumSeqBusproc+"01.jpg");
										pageLog("Page SetValue[GD_A01_FingerShowCampic]:"+strFileDir);

										setVar("GD_A01_FingerShowCampic",strFileDir);  
										setVar("GD_UFid",arrstr[3]);
										setVar("GD_A01_ApplyLoginFlag","1");
										setVar("GD_A01_BUS_IDN_RST_IDCHK","1");

										var date = new Date();
										var strHours = date.getHours();
										var strMinutes = date.getMinutes();
										var strSeconds = date.getSeconds();
										strHours = (strHours.length == 1) ? ("0"+strHours) : strHours;
										strMinutes = (strMinutes.length == 1) ? ("0"+strMinutes) : strMinutes;
										strSeconds = (strSeconds.length == 1) ? ("0"+strSeconds) : strSeconds;
										setVar("GD_A01_BUS_TIME_END_IDCHK",strHours+strMinutes+strSeconds);
										exitScene("STA_CONTINUE");
									});
								}else{
									setVar("GD_ErrReason",arrstr[3]);
									//alert('SynCardOcx_MsgReceived-on: SerialNo=' + arrstr[1]+',msgid='+arrstr[2]+',msg='+arrstr[3]);
									setVar("GD_A01_BUS_TXT_RSN_IDCHK",arrstr[3]);
									var date = new Date();
									var strHours = date.getHours();
									var strMinutes = date.getMinutes();
									var strSeconds = date.getSeconds();
									strHours = (strHours.length == 1) ? ("0"+strHours) : strHours;
									strMinutes = (strMinutes.length == 1) ? ("0"+strMinutes) : strMinutes;
									strSeconds = (strSeconds.length == 1) ? ("0"+strSeconds) : strSeconds;
									setVar("GD_A01_BUS_TIME_END_IDCHK",strHours+strMinutes+strSeconds);
									setVar("GD_A01_BUS_IDN_RST_PROC","5");
									exitScene("STA_FAIL");
								}
												
							}else if(arrstr[0] == "001"){
								DataTools.get("C_A01_Dict_00000017",function(data){	
									if(data != ""){						
										var jsErrTip = JSON.parse(data);
										var tmpStr ="";
										for (var i = 0; i < jsErrTip.length; i++) {													
											if (arrstr[2] == jsErrTip[i].NUM_ITEM_DIC) {
												tmpStr = jsErrTip[i].VLU_ITEM_DIC;
												//$("#RemoteTip").html(tmpStr);			
											}
										}
										if(tmpStr !=""){
											vm.playSound(arrstr[2] + tmpStr);
											//alert(arrstr[2] + ".gif");
											$("#idc_img").attr("src","img/chk/" + arrstr[2] + tmpStr + ".gif");
										}
									}else{
										$("#RemoteTip").html(arrstr[2]);
									}
								});
							}else{
								var date = new Date();
								var strHours = date.getHours();
								var strMinutes = date.getMinutes();
								var strSeconds = date.getSeconds();
								strHours = (strHours.length == 1) ? ("0"+strHours) : strHours;
								strMinutes = (strMinutes.length == 1) ? ("0"+strMinutes) : strMinutes;
								strSeconds = (strSeconds.length == 1) ? ("0"+strSeconds) : strSeconds;
								setVar("GD_A01_BUS_TIME_END_IDCHK",strHours+strMinutes+strSeconds);
								setVar("GD_A01_BUS_IDN_RST_PROC","5");
								exitScene("STA_FAIL");
							}
						}else{
							//setVar("GD_ErrReason","LCSerialNoNotSame");
							pageLog("LCSerialNoNotSame err GD_A01_LC_SerialNo:"+data1 + " ,Return No:" + arrstr[1]);
							//exitScene("STA_FAIL");
						}
							     
					});
				}
				
				
			} 
			
		};
		
		this.$root.$on('beforeQuit', onBeforeQuit);
        function onBeforeQuit() {
			setVar("GD_A01_BUS_IDN_RST_IDCHK","4");
			var date = new Date();
			var strHours = date.getHours();
			var strMinutes = date.getMinutes();
			var strSeconds = date.getSeconds();
			strHours = (strHours.length == 1) ? ("0"+strHours) : strHours;
			strMinutes = (strMinutes.length == 1) ? ("0"+strMinutes) : strMinutes;
			strSeconds = (strSeconds.length == 1) ? ("0"+strSeconds) : strSeconds;
			setVar("GD_A01_BUS_TIME_END_IDCHK",strHours+strMinutes+strSeconds);
    		//$("#SynCardOcx1").attr('height', "0%").attr('width', "0%");
			Syn_HideWindow();
		};
		
		this.$root.$on('cancelQuit', onCancelQuit);
        function onCancelQuit() {
			//$("#SynCardOcx1").attr('height', "58.08%").attr('width', "44.3%");
			Syn_ShowWindow();
		};
	},
	beforeDestroy() {
		//$("#SynCardOcx1").attr('height', "0%").attr('width', "0%");
		Syn_HideWindow();
	},
	destroyed () {
		this.$root.$off('SynCardOcx_MsgReceived');
		this.$root.$off('beforeQuit');     
    	this.$root.$off('cancelQuit');
		this.$root.$off('SynCardOcx_VideoOpened');
		this.$root.$off('SynCardOcx_VideoClosed');
	},
	methods: {
		playSound: function Play(sound) {
    		$("#DynSound_").remove()
    		$('body').append('<embed id="DynSound_" autostart="true" hidden="true" src="wav/' + sound + '.wav" />');
		},
		onBack: function () {
			var vm = this;
			vm.playSound("交易正在进行，请稍后！");
		},
		onSure: function () {
			var vm = this;
			vm.playSound("正在进行身份审核，请稍后");
		}
	},	
	
	mounted () {
		//$("#SynCardOcx1").attr('height', "0%").attr('width', "0%");
		Syn_HideWindow();
	}	
}
</script>
