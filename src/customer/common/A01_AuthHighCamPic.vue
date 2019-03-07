<style scoped>
.nice-select {
    width: 70%;
}
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
.content_l {
    font-size: 1.8rem;
}
@media screen and (max-height: 850px) {
    .photo_bg img {
	    height: 75%;
    }
}
</style>
<template>
    <div>
        <x-header></x-header>
        <EMBED name="ViewSound" SRC="wav/请联系审核员输入指纹编号.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
		<main class="main">
            
            <div class="content_c">
            <div class="content_l">
		        <div class="main_conter">
			<div class="picL">
				<img id="pic01" style="max-height:100%;max-width: 100%;">
			</div>
			<div class="picR">
				<div class="photo_bg">
					<img id="pic02">
					<span value='02' id="picname02"></span>
				</div>
				<div class="photo_bg" >
					<img id="pic03">
					<span value='03' id="picname03"></span>
				</div>

				<div class="photo_bg">
					<img id="pic04">
					<span value='04' id="picname04"></span>
				</div>
			</div>

	</div>
                <div class="btnbox">
                    <button class="btn surebtn" id="btn_back" style="display:none;">重新拍摄</button>
                </div>	
			</div >
            
            <div class="content_r">
			    <p class="r_title">工作人员审核</p>
				<div class="r_content">
					<div class="nice-select" name="nice-select">
						<p id="auditor" type="text" readonly></p>
					
					</div>
		            <div class="r_content_div1"><img id="IMG"  src="img/指纹.gif" ></div>
					<div class="r_content_div2">
                        <p id="AuditTips"></p>
                    </div>
                    <br>
                    <div class="r_content_div3">
                       <p id="ErrorInfo"></p> 
                    </div>
				</div>
            </div>
            </div>
			
        </main>
    </div>
</template>
<script> 
export default {
 mounted(){    
     	var bPic04 = false;
        var bPicPath01 = "";
        var bPicPath02 = "";
        var bPicPath03 = "";
        var bPicPath04 = "";
		DataTools.get("GD_CodPid|C_A01_CameraPicFile|GD_A01_LC_SerialNo|GD_A01_DatePicForbak",function(data){
			var strCodPid = data[0]; 
            bPicPath02 = data[1]+data[2]+data[3]+"02.jpg";
            bPicPath03 = data[1]+data[2]+data[3]+"03.jpg";
            bPicPath04 = data[1]+data[2]+data[3]+"04.jpg";
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
                $("#pic04").attr("src",bPicPath04);
				bPic04 = true;
			}
            $("#pic01").attr("src",bPicPath02);
            $("#pic02").attr("src",bPicPath02);
            $("#pic03").attr("src",bPicPath03);
            
		});       

    DataTools.get("GD_A01_ManagerUser|GD_MaxTimeForFinger|GD_UsrNum",function(data){
        var jsonArrayData ="";
        if ( data[0] != undefined && data[0] != null ) {         
            jsonArrayData = JSON.parse(data[0]);
            var auditorId=new Array();
            var auditorName=new Array();
            if(jsonArrayData.length == 0){//列表为空
                setVar("GD_ErrReason","AuditorListEmpty");
                exitScene("STA_AUDITOREMPTY");
            }
            for (var i = 0; i < jsonArrayData.length; i++) {
                auditorId.push(jsonArrayData[i].userNum);
                auditorName.push(jsonArrayData[i].userNum);//只显示用户编码
            }
             createSelect(auditorId,auditorName,"auditor");
            //默认显示第一个用户
            if(data[2]!=""&&data[2]!=null){
                $("#auditor").html(data[2]);
                $("#auditor").attr('data-value',data[2]);
                setVar("GD_UsrNum",data[2]);
                setVar("GD_A01_NumUrCfg",data[2]);
            }else{
                $("#auditor").html(auditorName[0]);
                $("#auditor").attr('data-value',auditorId[0]);
                setVar("GD_UsrNum",auditorName[0]);
                setVar("GD_A01_NumUrCfg",auditorName[0]);
            }
           
         }else{//列表为空
            setVar("GD_ErrReason","AuditorListEmpty");
            exitScene("STA_AUDITOREMPTY");
         }         
         $("#AuditTips").html("1.请核实该笔业务是否为客户本人办理");
        //  alert("data1"+data[1]);
         if(data[1] == "10")
         {
            $("#ErrorInfo").html("请选择用户后<br>进行指纹确认");
         }
         else
         {
            $("#ErrorInfo").html("请重按指纹<br>剩余次数："+ data[1] +"次");
            $("#ErrorInfo").css("color","red");
         }

        //清空用户信息,重新选择
        //setVar("GD_UsrNum","");

        var nodes = document.querySelectorAll('[name="nice-select"] li');
        for(var i=0; i<nodes.length; i++) {
            nodes[i].onclick=onNiceSelectLiClick;
        }
        function onNiceSelectLiClick(e){
           //var txt = $(this).text();
            //保存审核员编码
            var val=$(this).attr("data-value");
            setVar("GD_UsrNum",val);
            setVar("GD_A01_NumUrCfg",val);
            e.stopPropagation();
        }
    
     });
    document.getElementById("btn_back").onclick=onBack;
    function onBack(e){
        exitScene("STA_RESIGN");
    }
    document.getElementById("pic02").onclick=onPic02;
    function onPic02(e) {
        $("#pic01").attr("src",bPicPath02);
    }
    document.getElementById("pic03").onclick=onPic03;
    function onPic03(e) {
        $("#pic01").attr("src",bPicPath03);
    }
    document.getElementById("pic04").onclick=onPic04;
    function onPic04(e) {
        if(bPic04){
            $("#pic01").attr("src",bPicPath04);
        }
    }      

    
 }
}
</script> 