	//人脸识别
	var CW_nLiveNum=1;
	var CW_nLiveLevel=2;
	var C_FileDIR= "";
	var bSuccess= false;
	var bOpen= false;
	var GD_A01_LC_SerialNo= "";
	var GD_A01_UpUfilePram="";
	var CWobject;
	var strUfilePath = "";
	function CW_FaceCamInit(FaceCallBack)
	{		
		CWobject = document.createElement("object");
		CWobject.id = "cloudwalkobj";
		CWobject.classid = "CLSID:B1597418-A51E-4140-8698-EE865439755C";	//IE
	    var el = document.getElementById("cloudwalkwebobj");
        el.appendChild(CWobject);	
		$("#cloudwalkobj").attr('height', "0").attr('width', "0");		
		var strJson = CWobject.cwGetConfig();
		var jsonObj = $.parseJSON(strJson);
		if(jsonObj != "null")
		{
			 var strLience = jsonObj["License"];
			 var nret = CWobject.cwInit(strLience);	
		}
		registerCallBack(cloudwalkobj, "cwFaceCallBack", FaceCallBack);
	}
	
	
	function CW_Init()
	{
		if(bOpen == false){
			bOpen = true;  	
			var strJson1 = CWobject.cwGetConfig();
			var jsonObj1 = $.parseJSON(strJson1);
			if(jsonObj1 != "null")
			{
				var strLience = jsonObj1["License"];
				var nret = CWobject.cwInit(strLience);	
			}		 
			var width = $(document).width();
			var height = $(document).height();
			var w = width*0.436;
			var h = height*0.5808;
			$("#cloudwalkobj").attr('height', h.toString()).attr('width', w.toString());
			
			var strJson = CWobject.cwGetConfig();
			var jsonObj = $.parseJSON(strJson);
			if(jsonObj != "null")
			{
				CW_nLiveNum =  parseInt(jsonObj["LiveDetectTimes"]);
				CW_nLiveLevel =  parseInt(jsonObj["LiveDetectLevel"]);	
				var strRet = CW_startRandomLiveDetect();
				if(strRet == ""){
					return "";
				}
			}
		}  
		return CW_UnInit();
	}
	
	function CW_UnInit()
	{
		CW_Destroy();
		var RetMsg = strUfilePath;
		if(bSuccess){
			RetMsg +=  ",STA_CONTINUE";
		}else{
			RetMsg +=  ",STA_FAIL";
		}  
		bSuccess= false;
		return RetMsg;
	}
	
	function CW_Destroy()
	{
		if(bOpen == true){
			bOpen = false;
			CWobject.cwStopCamera();
			CWobject.cwDestory();     
			$("#cloudwalkobj").attr('height', "0").attr('width', "0");      							
		}            
	}
	function LivesInfoSucc(C_FileDIR,GD_A01_LC_SerialNo,GD_A01_UpUfilePram) {            
		var recvInfo = CWobject.cwGetBestFace();
		if(recvInfo == null || recvInfo == undefined)
		{			
			return CW_UnInit();
		}else{
			var jsonObj = $.parseJSON(recvInfo);
			var result = jsonObj["result"];
			if(result == 0)
			{
				var Tempimg = jsonObj["data"];				//图片保存的所在目录
				var filename = GD_A01_LC_SerialNo+"01.jpg";		//图片名称，如果文件名已存在则直接覆盖
				CWobject.cwBase64ToFile(Tempimg, C_FileDIR, filename);		//Base64保存为本地图片
				strUfilePath = GD_A01_UpUfilePram+"|"+C_FileDIR+filename;
				bSuccess = true;
				return CW_UnInit();                        
			}else{
				return CW_UnInit();
			}    
		}
	}
	function LivesInfoErr(rt){
		CW_UnInit();
	}      
	function CW_startRandomLiveDetect() {
		var rotatemode=0;	//0正常、1顺时针90度、2逆时针90度
		var nRet = CWobject.cwStartCamera(0,rotatemode);
		var msg = "";
		if(nRet != 0)
		{                
			switch(nRet)
			{
				case CW_ERR_CameraNotOpen:
					msg = "摄像头未打开！";
					break;
				case CW_ERR_CameraOpenError:
					msg = "摄像头打开失败！";
					break;
				case CW_ERR_CameraOpenAdy:
					msg = "摄像头已经打开！";
					break;
				default:
					msg = "摄像头打开失败";
					break;
			}
			return msg;
		}	
		CWobject.cwFaceInfoStart();
		return msg;
	}

	
	// 注册回调事件(插件名，插件提供的事件名称，调用的JS函数)
	function registerCallBack(obj, name, proc) {
		if (typeof(proc) != "function")
			return;
		if (window.ActiveXObject || "ActiveXObject" in window) {
			if (window.ActiveXObject && obj.attachEvent) {
				obj.attachEvent(name, proc);
			} else {
				cloudWalk_AttachIE11Event(obj, name, proc);
			}
		} else {
			obj[name] = proc;
		}
	}

	// IE11注册回调事件
	function cloudWalk_AttachIE11Event(obj, _strEventId, _functionCallback) {
		var nameFromToStringRegex = /^function\s?([^\s(]*)/;
		var paramsFromToStringRegex = /\(\)|\(.+\)/;
		var params = _functionCallback.toString().match(paramsFromToStringRegex)[0];
		var functionName = _functionCallback.name || _functionCallback.toString().match(nameFromToStringRegex)[1];
		var handler;
		try {
			handler = document.createElement("script");
			handler.setAttribute("for", obj.id);
		} catch (ex) {
			handler = document.createElement('<script for="' + obj.id + '">');
		}
		handler.event = _strEventId + params;
		handler.appendChild(document.createTextNode(functionName + params + ";"));
		document.body.appendChild(handler);
	}
	