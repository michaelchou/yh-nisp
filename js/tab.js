//=======================================生成表格=======================================
//初始化表格
function dataInt(strIDList,tabData,tabId){
    var tabArr=new Array();
    var temps=[];
    var tabBody=document.getElementById(tabId);
    var trNums = null;
    clearRow(tabId);
    if (tabData!="") {
        for(var i=0;i<tabData.length;i++)
        {
            temps.push(i);
            var tr=document.createElement("tr");
            for(var j=0; j<strIDList.length; j++){
                var td=document.createElement("td");
                td.innerHTML= tabData[i][strIDList[j]];
                tr.appendChild(td);
            }
            tabBody.appendChild(tr);
            trNums=tabBody.getElementsByTagName('tr');
            upPage(0,trNums);//分页
        }
    }else{
        var tr=document.createElement("tr");
        var td =document.createElement("td");
        td.setAttribute('colspan',strIDList.length);
        td.innerHTML = "查询无结果";
        tr.appendChild(td);
        tabBody.appendChild(tr);
    }
}

//设置分页,参数说明：当前页，数据总条数(tr对象集合)
var trNums;
var sum;
function upPage(p,trs){//参数:当前页，数据总条数，tr对象集合
    if(trs!=null){
        trNums = trs;
        sum=trs.length;
    }
	//判断是否是空记录
	if(sum == null || sum == "" || sum == "0" || sum == undefined){
		trNums = "";
		sum = "";
		document.getElementById("page").innerHTML = "";
		return;
	}
    var listNum = 5;   //每页显示<li>数
    /*
    if($(window).width()<1280){
        listNum=9;
    }else{
        listNum=13;
    }
    */
    var PageNum=4;//分页链接接数(5个)
    var j=trNums.length;
    var PagesLen=Math.ceil(sum/listNum);//总页数
    var nowPage=p;
    if(nowPage>=PagesLen){
        nowPage = PagesLen-1;
    }else if(nowPage<=0){
        nowPage = 0;
    }
    //内容变换
    for (var i=0;i<j;i++){
        trNums[i].style.display="none";
    }
    if(nowPage==0) {
        for (var i=nowPage*listNum;i<(nowPage+1)*listNum;i++){
            if(trNums[i]) {
                trNums[i].style.display="table-row";
            }
        }
    }
    else {
        for (var i=nowPage*listNum;i<(nowPage+1)*listNum;i++){
            if(trNums[i]) {
                trNums[i].style.display="table-row";
            }
        }

    }
    var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2);
    var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1;
    var strC="",startPage,endPage;
    if (PageNum>=PagesLen) {
        startPage=0;endPage=PagesLen-1;
    }
    else if (nowPage<PageNum_2){
        startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1;//首页
        }
    else {
        startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;
        var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t;
    }
    for (var i=startPage;i<=endPage;i++){
        if (i==nowPage){
            strC+='<a href="javascript:;" class="page_btn nowpage" onclick="upPage('+i+')">'+(i+1)+'</a> ';
        }
         else {
            strC+='<a href="javascript:;" class="page_btn" onclick="upPage('+i+')">'+(i+1)+'</a> ';
        }
    }
    if(nowPage==startPage){
        strS='<a href="javascript:;"></a> ';
    } else {
        strS='<a href="javascript:;" onclick="upPage('+(nowPage-1)+')" class="prePage">上一页</a> ';
    }
    if(nowPage==endPage){
        strE='<a href="javascript:;"></a> ';
    } else {
        strE=' <a href="javascript:;" onclick="upPage('+(nowPage+1)+')" class="nextPage">下一页</a> ';
    }
    if(PagesLen>0){
        strF = '<span class="sumpage">共'+(nowPage+1)+'/'+PagesLen+'页</span>'
    }
    //strG = '<span class="sumpage">到第<input type="text" class="pageinput" value></input>页<a onclick="linkPage(this)" class="surePage">确定</a></span>'
    strH = '<input type="hidden" id="curPageNum" value="'+(nowPage+1)+'"/>'
	document.getElementById("page").innerHTML=strS+strC+strE+strF+strH;
}


function adminDataInt(strIDList,tabData,tabId){
    var tabArr=new Array();
    var temps=[];
    var tabBody=document.getElementById(tabId);
    var trNums = null;
    clearRow(tabId);
    if (tabData!="") {
        for(var i=0;i<tabData.length;i++)
        {
            temps.push(i);
            var tr=document.createElement("tr");
            for(var j=0; j<strIDList.length; j++){
                var td=document.createElement("td");
                td.innerHTML= tabData[i][strIDList[j]];
                tr.appendChild(td);
            }
            tabBody.appendChild(tr);
            trNums=tabBody.getElementsByTagName('tr');
            adminUpPage(0,trNums);//分页
        }
    }else{
        var tr=document.createElement("tr");
        var td =document.createElement("td");
        td.setAttribute('colspan',strIDList.length);
        td.innerHTML = "查询无结果";
        tr.appendChild(td);
        tabBody.appendChild(tr);
    }
}

//设置分页,参数说明：当前页，数据总条数(tr对象集合)
var trNums;
var sum;
function adminUpPage(p,trs){//参数:当前页，数据总条数，tr对象集合
    if(trs!=null){
        trNums = trs;
        sum=trs.length;
    }
    var listNum = 8;   //每页显示<li>数
    /*
    if($(window).width()<1280){
        listNum=9;
    }else{
        listNum=13;
    }
    */
    var PageNum=4;//分页链接接数(5个)
    var j=trNums.length;
    var PagesLen=Math.ceil(sum/listNum);//总页数
    var nowPage=p;
    if(nowPage>=PagesLen){
        nowPage = PagesLen-1;
    }else if(nowPage<=0){
        nowPage = 0;
    }
    //内容变换
    for (var i=0;i<j;i++){
        trNums[i].style.display="none";
    }
    if(nowPage==0) {
        for (var i=nowPage*listNum;i<(nowPage+1)*listNum;i++){
            if(trNums[i]) {
                trNums[i].style.display="table-row";
            }
        }
    }
    else {
        for (var i=nowPage*listNum;i<(nowPage+1)*listNum;i++){
            if(trNums[i]) {
                trNums[i].style.display="table-row";
            }
        }

    }
    var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2);
    var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1;
    var strC="",startPage,endPage;
    if (PageNum>=PagesLen) {
        startPage=0;endPage=PagesLen-1;
    }
    else if (nowPage<PageNum_2){
        startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1;//首页
        }
    else {
        startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;
        var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t;
    }
    for (var i=startPage;i<=endPage;i++){
        if (i==nowPage){
            strC+='<a href="javascript:;" class="page_btn nowpage" onclick="adminUpPage('+i+')">'+(i+1)+'</a> ';
        }
         else {
            strC+='<a href="javascript:;" class="page_btn" onclick="adminUpPage('+i+')">'+(i+1)+'</a> ';
        }
    }
    if(nowPage==startPage){
        strS='<a href="javascript:;"></a> ';
    } else {
        strS='<a href="javascript:;" onclick="adminUpPage('+(nowPage-1)+')" class="prePage">上一页</a> ';
    }
    if(nowPage==endPage){
        strE='<a href="javascript:;"></a> ';
    } else {
        strE=' <a href="javascript:;" onclick="adminUpPage('+(nowPage+1)+')" class="nextPage">下一页</a> ';
    }
    if(PagesLen>0){
        strF = '<span class="sumpage">共'+(nowPage+1)+'/'+PagesLen+'页</span>'
    }
    //strG = '<span class="sumpage">到第<input type="text" class="pageinput" value></input>页<a onclick="linkPage(this)" class="surePage">确定</a></span>'
    document.getElementById("page").innerHTML=strS+strC+strE+strF;
}

var trNums;
var sum;
function upPageCleanCard(p,trs){//参数:当前页，数据总条数，tr对象集合
    if(trs!=null){
        trNums = trs;
        sum=trs.length;
    }
    var listNum = 4;   //每页显示<li>数
    /*
    if($(window).width()<1280){
        listNum=9;
    }else{
        listNum=13;
    }
    */
    var PageNum=4;//分页链接接数(5个)
    var j=trNums.length;
    var PagesLen=Math.ceil(sum/listNum);//总页数
    var nowPage=p;
    if(nowPage>=PagesLen){
        nowPage = PagesLen-1;
    }else if(nowPage<=0){
        nowPage = 0;
    }
    //内容变换
    for (var i=0;i<j;i++){
        trNums[i].style.display="none";
    }
    if(nowPage==0) {
        for (var i=nowPage*listNum;i<(nowPage+1)*listNum;i++){
            if(trNums[i]) {
                trNums[i].style.display="table-row";
            }
        }
    }
    else {
        for (var i=nowPage*listNum;i<(nowPage+1)*listNum;i++){
            if(trNums[i]) {
                trNums[i].style.display="table-row";
            }
        }

    }
    var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2);
    var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1;
    var strC="",startPage,endPage;
    if (PageNum>=PagesLen) {
        startPage=0;endPage=PagesLen-1;
    }
    else if (nowPage<PageNum_2){
        startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1;//首页
        }
    else {
        startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;
        var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t;
    }
    for (var i=startPage;i<=endPage;i++){
        if (i==nowPage){
            strC+='<a href="javascript:;" class="page_btn_cleanCard nowpage" onclick="upPageCleanCard('+i+')">'+(i+1)+'</a> ';
        }
         else {
            strC+='<a href="javascript:;" class="page_btn_cleanCard" onclick="upPageCleanCard('+i+')">'+(i+1)+'</a> ';
        }
    }
    if(nowPage==startPage){
        strS='<a href="javascript:;"></a> ';
    } else {
        strS='<a href="javascript:;" onclick="upPageCleanCard('+(nowPage-1)+')" class="prePage">上一页</a> ';
    }
    if(nowPage==endPage){
        strE='<a href="javascript:;"></a> ';
    } else {
        strE=' <a href="javascript:;" onclick="upPageCleanCard('+(nowPage+1)+')" class="nextPage">下一页</a> ';
    }
    if(PagesLen>0){
        strF = '<span class="sumpage">共'+(nowPage+1)+'/'+PagesLen+'页</span>'
    }
    //strG = '<span class="sumpage">到第<input type="text" class="pageinput" value></input>页<a onclick="linkPage(this)" class="surePage">确定</a></span>'
    document.getElementById("page").innerHTML=strS+strC+strE+strF;
}

//选中高亮显示
function bindHighLight(tabId,tempList){
	var tabBody=document.getElementById(tabId);
	var trs=tabBody.getElementsByTagName('tr');
	for(var i=0;i<trs.length;i++){
		trs[i].onmousedown=function(){
			pitchOn(trs,this,tempList);
		}
	}
}

var t;
function pitchOn(trs,currentObj,tempList){
    for( var i=0; i<trs.length; i++ ){
        if( trs[i] == currentObj ) {
            trs[i].style.backgroundColor = '#fff';
            $(trs[i]).attr({
                id: 'checked'
            });
            t=i;
        }
        else {
            trs[i].style.backgroundColor = '';
	    //trs[i].style.color = '#35658C';
            $(trs[i]).removeAttr('id')
        }
    }
    var index=tempList[t-1];//得到选中数据的索引
	setVar("GD_Index",index);//保存数据索引到数据池
}
//清除表格数据
function clearRow(tabId){
    document.getElementById(tabId).innerHTML = "";
    document.getElementById("page").innerHTML ="";
}


// 输入金额转化为大写金额   
function changeMoneyToChinese(money){  
		var cnNums = new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖"); //汉字的数字  
		var cnIntRadice = new Array("","拾","佰","仟"); //基本单位  
		var cnIntUnits = new Array("","万","亿","兆"); //对应整数部分扩展单位  
		var cnDecUnits = new Array("角","分","毫","厘"); //对应小数部分单位  
		var cnIntLast = "元"; //整型完以后的单位  
		var maxNum = 999999999999999.9999; //最大处理的数字  
		var IntegerNum; //金额整数部分  
		var DecimalNum; //金额小数部分  
		var ChineseStr=""; //输出的中文金额字符串  
		var parts; //分离金额后用的数组，预定义  
		if( money == "" ){  
			return "";  
		}  
		money = parseFloat(money);  
		if( money >= maxNum ){  
			$.alert('超出最大处理数字');  
			return "";  
		}  
		if( money == 0 ){  
			ChineseStr = cnNums[0]+cnIntLast;  
			return ChineseStr += "整";  
		}  
		money = money.toString(); //转换为字符串  
		if( money.indexOf(".") == -1 ){  
			IntegerNum = money;  
			DecimalNum = '';  
		}else{  
			parts = money.split(".");  
			IntegerNum = parts[0];  
			DecimalNum = parts[1].substr(0,4);  
		}  
		if( parseInt(IntegerNum,10) > 0 ){   //获取整型部分转换  
			var zeroCount = 0;  
			var IntLen = IntegerNum.length;  
			for(var i=0;i<IntLen;i++ ){  
				var n = IntegerNum.substr(i,1);  
				var p = IntLen - i - 1;  
				var q = p / 4;  
				var m = p % 4;  
				if( n == "0" ){  
					zeroCount++;  
				}else{  
					if( zeroCount > 0 ){  
						ChineseStr += cnNums[0];  
					}  
					zeroCount = 0; //归零  
					ChineseStr += cnNums[parseInt(n)]+cnIntRadice[m];  
				}  
				if( m==0 && zeroCount<4 ){  
					ChineseStr += cnIntUnits[q];  
				}  
			}  
			ChineseStr += cnIntLast;          //整型部分处理完毕  
		}  
		if( DecimalNum!= '' ){                   //小数部分  
			var decLen = DecimalNum.length;  
			for(var  i=0; i<decLen; i++ ){  
				var n = DecimalNum.substr(i,1);  
				if( n != '0' ){  
					ChineseStr += cnNums[Number(n)]+cnDecUnits[i];  
				}  
			}  
		}  
		if( ChineseStr == '' ){  
			ChineseStr += cnNums[0]+cnIntLast;  
		}
		if(money.indexOf(".")==-1){
			return ChineseStr += "整";  
		}else{
			if(money.indexOf(".") == money.length - 3){
				return ChineseStr;  
			}else{
				return ChineseStr += "整";  
			}
		}

	}  
	
	
	
	
	
	
