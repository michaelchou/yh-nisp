//==============下载远程文件处理方法===================
var strPDFName;//pdf文件名称
var xh; 
var strLocalPath;//文件保存的本地路劲

function getPDFFile(strURL,strFilePath) { 
  strLocalPath= strFilePath;
  var xmlHttp = GetXmlHttpObject();
  if (xmlHttp == null) {  
     //alert("您的浏览器不支持AJAX！");  
     return;  
  }
  xmlHttp.onreadystatechange = function() {  
	  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {  
            var strHtmlCode = xmlHttp.responseText; 
	        var strHtmlCodeLowerCase = strHtmlCode.toLowerCase();//防止不同的pdf后缀存在大小写，统一转换成小写
	        if(strHtmlCodeLowerCase.indexOf(".pdf") != -1){//如果包含
	             var start = strHtmlCodeLowerCase.lastIndexOf("./");//获取pdf文件的开始位置
		         var end = strHtmlCodeLowerCase.lastIndexOf(".pdf");//获取pdf文件的结束位置
		         strPDFName = strHtmlCode.substring(start+2,end+4);//截取的时候，从源字符串中截取，并连后缀一起截取
		         var strPDFURL = strURL.substring(0,strURL.lastIndexOf("/")) + "/" + strPDFName;
		   	     xh = GetXmlHttpObject(); 
				 if (xh == null) {  
                     //alert("您的浏览器不支持AJAX！");  
                     return;  
                 }
				 xh.onreadystatechange = function() { 
				    if (xh.readyState == 4 && xh.status == 200) { 
					   getCompleteReady();
				    }  
                 };  
				 xh.open("GET", strPDFURL, false); 
	             xh.send(null); 
	        }
	  }  
  };  
  xmlHttp.open("GET", strURL, false);//同步方式请求  
  xmlHttp.send(null);
  return strLocalPath + strPDFName;
}

function getCompleteReady(){ 
	if (xh.readyState == 4) { 
		if (xh.status == 200) { 
			saveFile(strLocalPath + strPDFName); 
			return true; 
		} 
		else 
		{ 
		   return false; 
		} 
	} 
   else 
     return false; 
} 

function saveFile(tofile){ 
	var objStream; 
	var imgs; 
	imgs = xh.responseBody; 
	objStream = new ActiveXObject("ADODB.Stream"); 
	objStream.Type = 1; 
	objStream.open(); 
	objStream.write(imgs); 
	objStream.SaveToFile(tofile) 
} 

function GetXmlHttpObject() {  
   var xmlHttp = null;  
   try {  
      // Firefox, Opera 8.0+, Safari  
      xmlHttp = new XMLHttpRequest();  
   } catch (e) {  
        // Internet Explorer  
        try {  
           xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  
        } catch (e) {  
           xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  
        }  
   }  
   //设置xmlHttp请求的超时时间
   //xmlHttp.timeout = 10000;
   return xmlHttp;  
}  
 

//==============软键盘处理方法===================
var inited = false;
function ShowKeyboard(keyboardname,x,y,eleID,labelName)
{
	if ( !inited ) {
        YHHandWrite.SetLogFile("D://Csap//ap//YHHandWrite.Log");
        YHHandWrite.ServerPort = 20000;
        inited = true;
    }
	YHHandWrite.UpdateFocusWindow();

	var text = document.getElementById(eleID).value;
	//alert(x + "," + y + "," + text + "," + labelName);
	YHHandWrite.ShowKeyboardEx(keyboardname, x, y,text,"");
}
function ShowEngKB(x,y,eleID,labelName) {
	ShowKeyboard("ENGLISH",x,y,eleID,labelName); 
}
function ShowPinyinKB(x,y,eleID,labelName) {
	ShowKeyboard("PINYIN",x,y,eleID,labelName);  
}
function ShowNumberKB(x,y,eleID,labelName) {
	ShowKeyboard("NUMBER",x,y,eleID,labelName);  
}
function ShowSymbolKB(x,y,eleID,labelName) {
	ShowKeyboard("SYMBOL",x,y,eleID,labelName); 
}
function ShowSpeeddialKB(x,y,eleID,labelName) {
	ShowKeyboard("SPEEDDIAL",x,y,eleID,labelName); 
}
function ShowHandwriteKB(x,y,eleID,labelName) {
	ShowKeyboard("HANDWRITE",x,y,eleID,labelName);  
}
function ShowEchoKB(x,y,eleID,labelName) {
	YHHandWrite.SetEchoMode(1);
	ShowKeyboard("ENGLISH",x,y,eleID,labelName);  
}

function ShowUKEY(x,y,eleID,labelName) {
	ShowKeyboard("UKEY",x,y,eleID,labelName);
}

function CleanKeyboard(){
	if (YHHandWrite.Clean) YHHandWrite.Clean();
}  

function HideKB(){
	//alert("hide");
	if (YHHandWrite.Hide) YHHandWrite.Hide();
}

var vPageDataPool;     // 子页数据池
var vPageInitFunction; // 子页初始化函数, 需子页实现 vPageInitFunction = function(vDataPool){}
//用于显示管机员当前位置的变量
var isAdmBus = "false";
var busiName = "";
var busiType = "";

// 主动更新子页
function UpdatePage(vJsonStr)
{
	try {
		vPageDataPool = JSON.parse(vJsonStr);
	} catch(e) {}
	// 执行网页初始化函数
	if ( vPageInitFunction != null && vPageInitFunction != undefined ) {
		try {
			vPageInitFunction(vPageDataPool);
		} catch(e) {
			
		}
	}
	vPageDataPool = null;
}

// 设置子页数据池, 通过JSON字符串传递
function SetPageDataPool(vJsonStr)
{  
	try {
		vPageDataPool = JSON.parse(vJsonStr);
	} catch(e) {	
		pageLog("JSON.parse(vJsonStr) err.");
		var objStr = vJsonStr.substr(1,vJsonStr.length-2);
		pageLog(objStr);
		var lstObj = objStr.split(",");
		var obj = {};
		for(var i=0; i < lstObj.length; i++)
		{
			var key = lstObj[i].split("\":\"")[0];
			var value = lstObj[i].split("\":\"")[1];
			var key1 = key.substr(1);
			var value1 = value.substr(0,value.length-1);
			obj[key1] = value1;					
			pageLog(obj[key1]);					
		}
		vPageDataPool = obj;
	}
}

var timeId = null;
//终止播放计时
function stopADInterval()
{
   if(timeId != null)
   {    
	  window.clearInterval(timeId);
	  timeId = null;
   }
}

function ChangePage (pageName) {
	stopADInterval();
	CleanKeyboard();
	//clearTimer();
	// var countDown = document.getElementById("CountDown");
	// if (countDown != null && countDown != undefined)
	// {  
	// 	countDown.innerText = "";
	// }

	var strPageName = pageName
	var strPageType = ""
	if (pageName.split("?pgtype=").length == 2) {
		strPageName = pageName.split("?pgtype=")[0]
		strPageType = pageName.split("?pgtype=")[1]
	}
	var page = findPage(strPageName)
	if (!page) {
		pageLog('Change_NOT_EXIST_Page-->' + pageName)
		return
	}

	//隐藏键盘
	HideKB();

	//隐藏PDF显示控件
	$("#PDFViewer").attr('height', "0").attr('width', "0");

	$("#SynCardOcx1").attr('height', "0%").attr('width', "0%");
	
	if (page[2] === 'Popup') {
		if(document.ViewSound)
		{
			document.ViewSound.Stop();
		}

		if (vm.currentPopup === page[1]) {
		vm.currentPopup = './customer/common/cust_com_PopupDemo.html' // 强制切换
		vm.$nextTick(function (){
			vm.currentPopup = page[1]
		})
		} else {
			vm.currentPopup = page[1]
		}
		// vm.isPopup = true
		$("#pagePopup").css("display", "block")
	} else {
		if(document.PopupSound) 
		{
			document.PopupSound.Stop();
		}

		vm.currentPopup = './customer/common/cust_com_PopupDemo.html' // 强制切换
		if (vm.currentView === page[1]) {
		vm.currentView = './customer/common/cust_com_LayoutMainDemo.html' // 强制切换
		vm.$nextTick(function (){
			vm.currentView = page[1]
		})
		} else {
			vm.currentView = page[1]
		}
		// vm.isPopup = false
		$("#pagePopup").css("display", "none")
	}

	if (isAdmBus) {
		// alert(busiName+" "+busiType);
		busiNameId = document.getElementById("busiName")
		busiTypeId = document.getElementById("busiType")
		if (busiNameId&&busiTypeId) {
				busiNameId.innerHTML = busiName
				busiTypeId.innerHTML = busiType
		}
	}
	setPageNav();
	setBGSound();
	ClockonInterval();
}

function findPage (pageName) {
	var pages = vm.$data.pages;
	for(var i=0; i < pages.length; i++) {
		if (pages[i][1] === pageName) {
			return pages[i]
		}
	}
	return null 
}


var strBusinessType = "";   //业务名称，如：开卡、换卡、挂失、等等
var strTotalNav = "";       //业务导航，如开卡的导航:阅读协议_读取身份证_联网核查_...
var intCurNavIndex = 0;     //当前导航坐标

function prePageNav(busType,busNav)
{
	pageLog("[prePageNav]-->"+busType+","+busNav);
	strBusinessType = busType;
	strTotalNav = busNav;
	intCurNavIndex = 0;
}

function setCurrentNav(busType,busNav,index)
{
	pageLog("[setCurrentNav]-->"+busType+","+busNav+","+index);
	strBusinessType = busType;
	strTotalNav = busNav;
	intCurNavIndex = index;
}

//设置页面导航显示
function setPageNav(){
	var domNav=document.getElementById("menu-content");
	if(domNav){
		var strNav = "";
		var strCurNav = "";
		var strTrsType = "";
		pageLog("[GetNav]-->"+strTotalNav);
		//根据子页面配置的导航显示
		if(strTotalNav == "")
		{
			strNav = domNav.getAttribute("nav");
			strCurNav = domNav.getAttribute("curnav");
			strTrsType = domNav.getAttribute("trstype");
		}
		//根据预先设置好的流程导航动态显示
		else
		{
			var arrTotalNav = strTotalNav.split("_");
			var newNav = [];
			//导航去重，前后导航一致的导航去掉
			for(var i=0;i<arrTotalNav.length;i++)
			{
				var blAgain = false;
				for(var j=0;j<newNav.length;j++)
				{
					if(newNav[j] == arrTotalNav[i])
					{
						blAgain = true;
						break;
					}
				}
				if(!blAgain)
				{
					newNav.push(arrTotalNav[i]);
				}
			}
			strNav = newNav.join("_");
			strCurNav = arrTotalNav[intCurNavIndex];
			intCurNavIndex ++;
			strTrsType = strBusinessType;
		}
		pageLog("[DisplayNav]-->"+strNav+","+strCurNav+","+strTrsType);
		if(strNav != null && strNav != "" && strCurNav != null && strCurNav != "" && strTrsType != null && strTrsType != "")
		{
			getNav(strNav,strCurNav,strTrsType);
		}
	}
}

/*动态导航生成*/		
function getNav(navs,currentNav,trsType){
	var currentnav;       //记录当前的导航
	var currentIndex=0;  //记录当前的导航在数组的位置
	var menu_content=document.getElementById("menu-content");
	var busName=document.getElementById("busName");
	var allBz=document.getElementById("allBz");
	var curBz=document.getElementById("curBz");
	currentnav=currentNav;
			
	var navArr=navs.split("_");   //按照"_"分隔字符串,存放在navArr数组中
	// var showLi = 0;  //显示的li数量
	busName.innerHTML=trsType;
	allBz.innerHTML="0"+navArr.length;
	for(var i=0;i<navArr.length;i++){
		if (navArr[i]==currentnav) {
			currentIndex=i;
			curBz.innerHTML="0"+(currentIndex+1);
		}
	}
	for(var i=0;i<navArr.length;i++){
		var navi = navArr[i];
		navArr[i] = navi + "|0"+(i+1);
	}
	var newArr = [];
	if(currentIndex<=2){
		for(var i=0;i<navArr.length;i++){
			newArr[i+2-currentIndex] = navArr[i];
		}
	}else{
		for(var i=0;i<navArr.length;i++){
			newArr[i] = navArr[i+currentIndex-2];
		}
	}
	for(var i=0;i<newArr.length;i++){
		if(i<6){
			var lis=document.createElement("li");
			var span1=document.createElement("span");
			var span2=document.createElement("span");
			var str = newArr[i];
			var str0="";
			var str1="";
			if(str){
				str0 = str.split("|")[0];
				str1 = str.split("|")[1];
			}
			if(str == null){
				str = "";
			}
			if(i==0){
				span1.className="part0";
				span2.className="part00";
			}else if(i==1){
				span1.className="part1";
				span2.className="part01";
			}else if(i==2){
				span1.className="active";
				span2.className="activing";
			}else if(i==3){
				span1.className="part3";
				span2.className="part03";
			}else if(i==4){
				span1.className="part4";
				span2.className="part04";
			}else if(i==5){
				span1.className="part5";
				span2.className="part05";
			}
			span1.innerHTML=str0;
			span2.innerHTML=str1;
			lis.appendChild(span1);
			lis.appendChild(span2);
			menu_content.appendChild(lis);
		}else{
			break;
		}				
	}
}

function setNavBackStep(vl){
	intCurNavIndex = intCurNavIndex -1 - vl;
}

//设置背景声音
function setBGSound()
{
	var soundCfg = $("#idSound").text();
	var strs= new Array();		
	strs=soundCfg.split(",");
	CurBGSound.src="";
	if (strs.length == 0)
	{
		return;
	}			
	CurBGSound.src = strs[0];
	if (strs.length == 2)
	{
		CurBGSound.loop = strs[1];
	}
	else
	{
		CurBGSound.loop = 1;
	}
}

//显示页面元素
function DisplayElement(id)
{
	$("#"+id).css("display","inline-block");
}
// 子页预览
$(document).ready(function(){
	//ChangePage("admin/adm_DeviceMng_DeviceCheck.html");
	//显示当前日期和时间
	setInterval("getNowFormatDate()",1000);
});

//从流程里面出口出去
function exitScene(exit){
	var strLocation = exit.split("_")[1];
	// window.location = "#"+strLocation;
	// external.xFunction("callback", "#"+strLocation);
	PlatformAdapter.sendEvent(strLocation);
}

function Jump(){
	var pageUrl = $("#pageurl").val();
	ChangePage(pageUrl);
}

function onCancel(){
	//alert("STA_CANCEL");
	exitScene("STA_CANCEL");
}

function onContinue(){
	exitScene("STA_CONTINUE");
}

function onFail(){
	exitScene("STA_FAIL");
}

function onTimeout(){
	exitScene("STA_TIMEOUT");
}

//管机员返回首页
function onHome(){
	exitScene("STA_HOME");
}

//管机员安全退出
function onExit(){
	exitScene("STA_EXITADMIN");
}
//显示当前日期与时间
function getNowFormatDate(){	
	var curtime = getNowFormatDateInit();
	$('#curtime').text(curtime);
}

//显示当前日期与时间
function getNowFormatDateInit(){
	var date = new Date();
	var strMonth = date.getMonth()+1;
	var strDate = date.getDate();
	var strHours = date.getHours();
	var strMinutes = date.getMinutes();
	var arrWeek = new Array('日','一','二','三','四','五','六');
	var strWeek = '星期'+arrWeek[date.getDay()];
	if(strMonth >= 1 && strMonth <= 9){
		strMonth = '0'+strMonth;
	}
	if(strDate >= 1 && strDate <= 9){
		strDate = '0'+strDate;
	}
	if(strHours >=0 && strHours <= 9){
		strHours = '0'+ strHours;
	}
	if(strMinutes >= 0 && strMinutes <= 9){
		strMinutes = '0'+strMinutes;
	}
	return date.getFullYear()+'年'+strMonth+'月'+strDate+'日'+' '+strWeek+' '+strHours+':'+strMinutes;
}
//获取n位随机数字
function GetRandNum(nNum)
{
	var strRet = "";
	for(var i=0;i<nNum;i++){
		strRet +=Math.floor(Math.random()*10);
	}
	return strRet;
}
/*
	查找数字字典，返回对应的下标，没有找到返回-1
	JsonData:Josn格式数据
	NUM_ITEM_DIC:字典项编码
	VLU_ITEM_DIC:字典项值
*/
function QueryDict(JsonData,NUM_ITEM_DIC,VLU_ITEM_DIC)
{
	if(NUM_ITEM_DIC =="" && VLU_ITEM_DIC == "") return -1;

	for(var i=0; i<JsonData.length; i++)
	{
		//组合查询
		if(NUM_ITEM_DIC !="" && VLU_ITEM_DIC != "")
		{
			if((JsonData[i].NUM_ITEM_DIC == NUM_ITEM_DIC) && 
				(JsonData[i].VLU_ITEM_DIC == VLU_ITEM_DIC))
			{
				return i;
			}
		}
		//字典项编码
		else if(NUM_ITEM_DIC !="")
		{
			if(JsonData[i].NUM_ITEM_DIC == NUM_ITEM_DIC)
			{
				return i;
			}
		}
		//字典项值
		else if(VLU_ITEM_DIC !="")
		{
			if(JsonData[i].VLU_ITEM_DIC == VLU_ITEM_DIC)
			{
				return i;
			}
		}
		else
		{
			
			return -1;
		}	
	}
	return -1;
}
//头部登录、倒计时、VIP、退出显隐

function ChangeHeader(loginStatus, exitStatus, timeStatus, VIPStatus) {
    if (loginStatus != "-1") {
        vm.loginStatus = loginStatus;
    }
    if (exitStatus != "-1") {
        vm.exitStatus = exitStatus;
    }
    if (timeStatus != "-1") {
        vm.timeStatus = timeStatus;
    }
    if (VIPStatus != "-1") {
        vm.VIPStatus = VIPStatus;
    }

}

//下拉列表赋值(参数:val:初始值 id:显示值的id  valDef：是否赋值0:不赋值)
function setSelectValue(val,id,valDef){
	if(val==""|| val==null){
		if(valDef == 0){
			return;
		}
		else{
			$("#"+id).next().find("li").eq(0).html;
			$("#"+id).html($("#"+id).next().find("li").eq(0).html()); 
			$("#"+id).attr("data-value",$("#"+id).next().find("li").eq(0).attr("data-value"));
		}
	}else{
	   $("#"+id).next().find('li').each(function() {
			if($(this).attr("data-value")==val){
				$("#"+id).html($(this).html()); 
				$("#"+id).attr("data-value",val);
				return;
			}
		});
	}
}
//动态创建下拉列表
function createSelect(val,txt,id){
		$("#"+id).next().remove();
		var ulElement = document.createElement("ul");
		if(val.length==txt.length){
		for(var i=0;i<val.length;i++){
			var liElement = document.createElement("li");
				liElement.setAttribute('data-value',val[i]);
				liElement.innerHTML=txt[i];
				ulElement.appendChild(liElement);
		}
		$("#"+id).parent().append(ulElement);
		initializeSelect();
		}
		
}

//动态创建下拉列表
function createSelectNew(dataArr,eventName,id){
		$("#"+id).next().remove();
		var ulElement = document.createElement("ul");
		if(dataArr.length > 0){
			for(var i=0;i<dataArr.length;i++){
				var liElement = document.createElement("li");
				liElement.setAttribute('data-value',dataArr[i][0]);
				liElement.innerHTML=dataArr[i][1];
				if(eventName !=null && eventName !=""){
					//绑定选择事件
				    liElement.onclick= function(){
					     vm.$emit(eventName,$(this));
				    }; 
				}
				ulElement.appendChild(liElement);
			}
		    $("#"+id).parent().append(ulElement);
		    initializeSelect();
		}	
}

//下拉初始化
function initializeSelect(){
	var nodes1 = document.querySelectorAll('[name="nice-select"]');
	for(var i=0;i<nodes1.length;i++){
		nodes1[i].onclick=onNiceSelectClick;
	}
	function onNiceSelectClick(e){
		$('[name="nice-select"]').find('ul').hide();
		$(this).find('ul').show();
		$(this).css("border-radius","10px 10px 0px 0px")
		e.stopPropagation();
	}
	var nodes2 = document.querySelectorAll('[name="nice-select"] li');
	for(var i=0;i<nodes2.length;i++){
		nodes2[i].addEventListener("click",onNiceSelectLiClick);
	}
	function onNiceSelectLiClick(e){
		var txt = $(this).text();
		var val=$(this).attr("data-value");
		$(this).parent().parent().find('p').html(txt);
		$(this).parent().parent().find('p').attr("data-value",val);
		$('[name="nice-select"] ul').hide();
		$(this).parent().parent().css("border-radius","10px");
		e.stopPropagation();
	}
	$(document).click(function(){
		$('[name="nice-select"] ul').hide();
		$('[name="nice-select"]').css("border-radius","10px");
	});
}

function show(obj){
	if(isNaN(obj.value))
	{
		obj.value=obj.value.substring(0,obj.value.length-1); //限制输入非数字
	}
}
function standard(obj,num1,num2){
	var val=obj.value;
	var kc=window.event.keyCode;
	if(kc==17){
		obj.value="";
		return;
	}
	 if(val.length==0||val=="0."){
		if(kc==110 || kc==190)          //首位或者0.后不能输入.
		{
			if ( event && event.preventDefault ){
				event.preventDefault();
			} else { 
				window.event.returnValue = false;
			}
			return;
		}
	}
  
	if(val.length==1&&val=="0")    //第一位为0第二位必须是.
	{
		if(kc==8)
		{
			window.event.returnValue = true;
			return;
		}
		if(kc!=110 && kc!=190)
		{
			if ( event && event.preventDefault ){
				event.preventDefault();
			} else { 
				window.event.returnValue = false;
			}
			return;
		}
	}
	var index=val.indexOf(".");
	//整数限制输入长度
	if(val.length>=num1&&index<0)
	{
		if(kc==8||kc==110||kc==190)
		{
		   window.event.returnValue = true;
		   return ;
		}
		else{
			if ( event && event.preventDefault ){
				event.preventDefault();
			} else { 
				window.event.returnValue = false;
			}
		    return ;
		}
	}
	//小数点后面数字个数
	if(index>=0)
	{
		if(kc==110||kc==190){
			if ( event && event.preventDefault ){
				event.preventDefault();
			} else { 
				window.event.returnValue = false;
			}
			return ;
		}
	
		var len=val.substring(index+1,val.length).length;
	
		if(len>=num2)
		{
			if(kc==8)
			{
			  window.event.returnValue = true;
			  return ;
			}
			else
			{
				if ( event && event.preventDefault ){
					event.preventDefault();
				} else { 
					window.event.returnValue = false;
				}
			  return ;
			}
		}
	}
	  //允许输入的数字键0~9和小数点（110,190）和回退键
	 if( (kc>=48 && kc<=57) || (kc>=96 && kc<=105) || kc==110 || kc==190||kc==8)//如果是数字 或 .
	  {
	   window.event.returnValue = true;
	   return;
	  }
	 else{
	  	if ( event && event.preventDefault ){
			event.preventDefault();
		} else { 
			window.event.returnValue = false;
		}
	   return;
	  }
 }

  function SetVideoLevel(videolLevel)
  {
	  if(videolLevel < 1 || videolLevel > 10 || "" == videolLevel || undefined == videolLevel)
	  {
		  videolLevel = "5";
	  }
  	var str= SynCardOcx1.SetVideoLevel(videolLevel);
  }  

  function StartRecord()
  {
  	//var str= SynCardOcx1.StartRecord("",120000);
  }
  
  function StopRecord()
  {
  	//var str= SynCardOcx1.StopRecord();
  }
function findItemName(data, value) {
	function hasDownLevel(level) {
		return level.hasOwnProperty("C") && level.C.length > 0;
	}
	for(var i=0; i < data.length; i++) {
		var item0 = data[i]
		if(item0.COD === value) {
			return item0.NAM
		}
		if(hasDownLevel(item0)) {
			for(var j=0; j< item0.C.length; j++) {
				var item1 = item0.C[j]
				if(item1.COD === value) {
					return item1.NAM
				}
				if(hasDownLevel(item1)) {
					for(var k=0; k < item1.C.length; k++) {
						var item2 = item1.C[k]
						if(item2.COD === value) {
							return item2.NAM
						}
					}
				}
			}
		}
	}
	return value;
}
function findItemName2(data, value) {
	function hasDownLevel(level) {
		return level.hasOwnProperty("C") && level.C.length > 0;
	}
	function makeResult(result) {
		var names =[]
		for(var i=0; i<result.length; i++) {
			names.push(result[i].NAM);
		}
		return names.join("/");
	}
	var result = []
	for(var i=0; i < data.length; i++) {
		var item0 = data[i]
		//console.log(item0.NAM)
		result.push(item0)
		if(item0.COD === value) {
			return item0.NAM
		}
		if(hasDownLevel(item0)) {
			for(var j=0; j< item0.C.length; j++) {
				var item1 = item0.C[j]
				//console.log(item1.NAM)
				result.push(item1)
				if(item1.COD === value) {
					return makeResult(result)
				}
				if(hasDownLevel(item1)) {
					for(var k=0; k < item1.C.length; k++) {
						var item2 = item1.C[k]
						//console.log(item2.NAM)
						result.push(item2)
						if(item2.COD === value) {
							return makeResult(result)
						}
						result.pop()
					}
				}
				result.pop()
			}
		}
		result.pop()
	}
	return value;
}
/*证件校验*/
function checkDocumentNum(value,type){
 	if(type=="110001"){ //身份证
		var reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	 	return reg.test(value);
	}else if(type=="110037"){//外国人永久居留证
		var reg = /^[a-zA-Z]{3}([0-9]{12})$/;
 		return reg.test(value);
	}else if(type=="110019"){ // 港澳通行证验证
		var reg= /^[HMhm]{1}([0-9]{8})$/;
 		return reg.test(value);
	}else if(type=="110021"){ // 台湾通行证验证
		 var reg= /^[0-9]{8}$/;
		 return reg.test(value);
    }else if(type=="110025"){ // 护照，最大18位
         if(value.length > 18) return false;
         else return true;
	}else{
		return false;
	}
}
/* 当前时间距某日期有多少天*/
function timeElapse(date){
	var current = new Date();
	if(Date.parse(current) - Date.parse(date)<0)return false;
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	return days;

}
/*滚动条*/
function scrollBar(obj){
  $("#"+obj).niceScroll({
	    cursoropacitymax:1,
	    cursoropacitymin:1,
	    cursorwidth:"26",
	    cursorminheight:"200",
	    railpadding:{top:0,right:0,left:0,bottom:0}
	});
}
function newScrollBar(obj){
  $("#"+obj).next().niceScroll({
	    cursoropacitymax:1,
	    cursoropacitymin:1,
	    cursorwidth:"26",
	    cursorminheight:"200",
	    railpadding:{top:0,right:0,left:0,bottom:0}
	});
}
var imgfile;
function UpdateAdFileList(IdleAdFileList, processAdFileList) {
    imgfile = IdleAdFileList.split(",");
}

function IsBarrage(IsBarrage) {

    if (IsBarrage != "" && IsBarrage != null) {
        vm.barrage = IsBarrage;
    }


}

//信用卡系统的职业代码转换成CIF职业代码
function CodProfessionToCIF(CodProfession){
    switch (CodProfession){
        case "1": 
            return "Y13";
        case "2": 
            return "Y27";
        case "3": 
            return "Y28";
        case "4": 
            return "Y23";
        case "6": 
            return "X00";
        case "7": 
            return "Y11";
        case "8": 
            return "Y14";
        case "9": 
            return "Y21";
        case "A": 
            return "Y22";
        case "B": 
            return "Y24";
        case "C": 
            return "Y25";
        case "D": 
            return "Y26";
        default : 
            return "Y20";//信用卡行业分类
    }
}

//信用卡系统职务代码转换成CIF职业代码
function CodeProtitleT0CIF(CodeProtitle){
    switch (CodeProtitle){
        case "0": 
            return "05";
        case "1": 
            return "07";
        case "2": 
            return "09";
        case "3": 
            return "11";
        case "A": 
            return "99";
        case "B": 
            return "99";
        case "C": 
            return "99";
        default : 
            return "98";
    }
}

//==============处理交易处理中提示用语方法===================
var strTransTip = "";
function SetTransTip(transTip)
{
    strTransTip = transTip;
}
function getTransTip() {
	return strTransTip; 
}