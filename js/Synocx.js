//PageInit
	var width = $(document).width();
	var height = $(document).height();	
	var Synobject;
	var width; 
	var height;
	function SynCardOcxInit(Syn_MsgReceived,Syn_VideoOpened,Syn_VideoClosed)
	{
		Synobject = document.createElement("object");
		Synobject.id = "SynCardOcx1";
		Synobject.classid = "CLSID:FD876E62-B684-45B7-B29B-32EEFBA229FD";	//IE
	    var el = document.getElementById("SynCardOcxwebobj");
        el.appendChild(Synobject);
		width = $(document).width();
		height = $(document).height();
		Synobject.SetVideoSize(width*0.436, height*0.5808);
		Synobject.SetFaceRect(200, 800, 200, 800, 255, 0, 0);
		Synobject.SetVideoLevel(7);
		$("#SynCardOcx1").attr('height', "0").attr('width', "0");
		registerCallBack(SynCardOcx1, "MsgReceived", Syn_MsgReceived);
		registerCallBack(SynCardOcx1, "VideoOpened", Syn_VideoOpened);
		registerCallBack(SynCardOcx1, "VideoClosed", Syn_VideoClosed);
		setTimeout(VideoInitCtrl, 500);
	}
	
	function VideoInitCtrl()
	{
		var str = Synobject.InitCtrl(10003);
	}
	
	function Syn_HideWindow()
	{
		$("#SynCardOcx1").attr('height', "0").attr('width', "0");
	}
	
	function Syn_ShowWindow()
	{		
		var w = width*0.436;
		var h = height*0.5808;
		$("#SynCardOcx1").attr('height', h.toString()).attr('width', w.toString());
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
	