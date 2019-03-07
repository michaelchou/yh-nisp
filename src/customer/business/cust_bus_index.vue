
<style scoped>
    @media screen and (min-width: 1300px) and  (max-width:1380px){ 
      .clear{
          background-position: center 0;
      }
      
    }
    

</style>

<template>
<div>
    <x-main-header></x-main-header> 
    <div class="bus_main">
        <div class="made_menu">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                </div>
            </div>
        </div>
	    <div class="swiper-button-prev regularly_menu_left">
            <img :src="$root.imgPath('img/箭头-左.png')"/>
        </div>
        <div class="swiper-button-next regularly_menu_right">
            <img :src="$root.imgPath('img/箭头-右.png')"/>
        </div>
        <div class="regularly_menu clear">
            <div class="regularly_menu_logo" data-bus="RegularlyMenu" > 
            </div>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                </div>
            </div>
            <div class="regularly_menu_rail"></div>
        </div>
    </div>
    <!--点击搜索区域弹出模态框-->
    <div id="goodcover"></div>
    <div id="blursearch">
    <div id="menu_blursearch">
        <div class="blursearch_select_input">
            <input type="text" id="searchText" class="blursearch_input" placeholder="请输入关键字" onclick="ShowPinyinKB('-1','-1','searchText','')" onblur="HideKB()"/>
        </div>
        <div class="blursearch_select_content"  id="autoScreening"></div>
    </div>
    </div>
	<div class="mainHe"> </div>
    
    <!--   广告  -->
    <div class="mainAd" id="advertiseimg" >
      <div class="swiper-container">
            <div class="swiper-wrapper">
            </div>
      </div>
    </div>
</div>



</template>
<script>
        var arr;
       //一级（下面部分）菜单部分初始化
        var firstMenu;
        //二级（中间部分）菜单部分初始化
        var secondMenu;
        var jsonData;
        var adtime ;
export default {
            beforeDestroy:function(){

            $(".regularlymenu").unbind("click");
            $(".regularlymenu").remove();
            $(".regularly_menu_logo").unbind("click");
            $(".made_menu .swiper-container").empty();
            $(".made_menu .swiper-container").empty();
            clearInterval(adtime);
            firstMenu.destroy(false); 
            secondMenu.destroy(false); 
            
            $(".regularly_menu .regularly_menu_logo").empty();
            $(".made_menu .swiper-wrapper").empty();
            $(".regularly_menu .swiper-wrapper").empty();
            $(".made_menu .swiper-slide").empty();
            $("#autoScreening").empty();
            $(".mainAd .swiper-wrapper").empty();
            firstMenu = null;
            secondMenu = null;
            arr = null;
    },

    mounted () {
        arr=new Array();
        var thepath = vm.$root.themeImgPath;
        DataTools.get("GD_A01_MenuData",function(data){
            // var jsonData=data;
            jsonData = JSON.parse(data);
            data = null;
            var nowPage = 0;
            var SecondnowPage=0;
            var SecondnowPage1=0;
            var FirstMenuPageLen = 0;   //需要显示出来的一级业务数量，IsShow == true表示需要显示
            var heightW=screen.height;//显示器分辨率 高
            var widthW=screen.width;//显示器分辨率 宽
            var FirstMenuNum; 
            var SecondMenuNum;
            if(widthW>=1900){
                FirstMenuNum = 8; //设置每一行显示的一级业务数量
                SecondMenuNum=10; //二级菜单页面显示个数
            }else{
                FirstMenuNum = 5; //设置每一行显示的一级业务数量
                SecondMenuNum=8; //二级菜单页面显示个数
            }
            var FirstMenuPage = 0;  //一级菜单页数
            var SecondMenuPage = 0;  //对应一级菜单的二级菜单个数
            var newData = new Array();
            var regularlyData = new Array();
            var addFirstMenu,addSecondMenu,FirstMenuWrap,SecondMenuWrap;
         
            $(".regularly_menu .regularly_menu_logo").empty();
            $(".made_menu .swiper-wrapper").empty();
            for(var i = 0; i<jsonData.length; i++){
                arr[i]=new Array();
                if(i==0){
                FirstMenuWrap = "<div class='menu_imgbox'><img class='regularly_menu_img larger' src='"+thepath+'/img/'+ jsonData[i].NAM_ICON.substr(0,jsonData[i].NAM_ICON.length-4)+"1"+jsonData[i].NAM_ICON.substr(-4)+"'/><p class='regularly_menu_name'>"+jsonData[i].NAM_MENU+"</p></div>";
                $(".regularly_menu .regularly_menu_logo").append(FirstMenuWrap);

                    regularlyData[i] = jsonData[i];
                    SecondMenuPage = Math.ceil(regularlyData[i].CLD_MENU.length/SecondMenuNum);
                        for(var m = 0; m <SecondMenuPage; m++){
                    
                            //创建二级菜单容器
                
                            SecondMenuWrap = "<div class='swiper-slide' id='RegularlyMenu"+m+"'><div class='menu_imgbox'></div></div>";
                         
                            $(".made_menu .swiper-wrapper").append(SecondMenuWrap);

                             //创建二级菜单 
                            for(var j = SecondnowPage*SecondMenuNum; j < (SecondnowPage+1)*SecondMenuNum; j++){
                                if(regularlyData[i].CLD_MENU[j]){
                                    addSecondMenu = "<span class='col'><div class='menu_icon' data-ID_MENU="+regularlyData[i].CLD_MENU[j].ID_MENU+"><img id="+regularlyData[i].CLD_MENU[j].NAM_ACTION+" class='menu_img' src='"+thepath + '/img/bus/'+regularlyData[i].CLD_MENU[j].NAM_ICON+"'/></div><p style='display:none;'>"+regularlyData[i].CLD_MENU[j].NAM_MENU+"</p></span>";
                                    $("#RegularlyMenu"+m).children().append(addSecondMenu);
                                }
                            }
       
                            arr[0].push($(".made_menu .swiper-slide").length);
                            SecondnowPage++;                      
                        }
                   
                }else{
                        newData[FirstMenuPageLen] = jsonData[i];
                        FirstMenuPageLen++;  
                }
               
            }

            //计算一级菜单页数
            FirstMenuPage = Math.ceil(FirstMenuPageLen/FirstMenuNum);

            for(var n = 0; n <FirstMenuPage; n++){

                //创建一级菜单容器
                FirstMenuWrap = "<div class='swiper-slide' id='menu"+n+"'><div class='menu_imgbox'></div></div>";
                $(".regularly_menu .swiper-wrapper").append(FirstMenuWrap);

                //创建一级菜单
                for(var i = nowPage*FirstMenuNum; i < (nowPage+1)*FirstMenuNum; i++){
                    if(newData[i]){
                        addFirstMenu = "<span class='col regularlymenu' data-bus="+newData[i].NAM_ACTION+"><img src='"+thepath+'/img/'+newData[i].NAM_ICON+"'/><p class='menu_name'>"+newData[i].NAM_MENU+"</p></span>";
                        $("#menu"+n).children().append(addFirstMenu);


                        var SecondnowPage1=0;
                        SecondMenuPage = Math.ceil(newData[i].CLD_MENU.length/SecondMenuNum);
                        for(var m = 0; m <SecondMenuPage; m++){
                            //创建二级菜单容器
                            SecondMenuWrap = "<div class='swiper-slide' id='"+newData[i].NAM_ACTION+m+"'><div class='menu_imgbox'></div></div>";
                            $(".made_menu .swiper-wrapper").append(SecondMenuWrap);

                             //创建二级菜单 
                            for(var j = SecondnowPage1*SecondMenuNum; j < (SecondnowPage1+1)*SecondMenuNum; j++){
                                if(newData[i].CLD_MENU[j]){
                                    addSecondMenu = "<span class='col'><div class='menu_icon' data-ID_MENU="+newData[i].CLD_MENU[j].ID_MENU+"><img id="+newData[i].CLD_MENU[j].NAM_ACTION+" class='menu_img' src='"+thepath+'/img/bus/'+newData[i].CLD_MENU[j].
                                    NAM_ICON+"'/></div><p style='display:none;'>"+newData[i].CLD_MENU[j].
                                    NAM_MENU+"</p></span>";
                                    $("#"+newData[i].NAM_ACTION+m).children().append(addSecondMenu);
                                }

                            }
                            arr[i+1].push($(".made_menu .swiper-slide").length);
                            SecondnowPage1++; 

                        }

                    }
                }
                nowPage++;
            }
            createMenu();
        });
   function findindex(str){ 
       
        for (var i = 0; i < arr.length; i++) {

            for (var j = 0; j < arr[i].length; j++) {
                if(arr[i][j] == str) {
                    return i;
                }
            }
        } 
    }
 
         function createMenu(){
            //一级（下面部分）菜单部分初始化
            firstMenu = new Swiper('.regularly_menu .swiper-container',{
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
            });
			    //二级（中间部分）菜单部分初始化
			secondMenu = new Swiper('.made_menu .swiper-container',
			{
				pagination: '.swiper-pagination',
				paginationClickable: true,
        //    	effect: 'fade',// tips
				fade: {
                    crossFade: true,
                },
				onTransitionEnd: function (swiper) {
					var curindex = findindex(swiper.activeIndex+1);
					changeFirstMenu(curindex);
				}
			});

        
            onClickBind();
        }

        function onClickBind()
        {

            var list = document.getElementsByClassName("col");
            for (var i=0;i<list.length;i++) {
                list[i].onclick = made_menu_onclick;
            }

            var list = document.getElementsByClassName("regularlymenu");
            for (var i=0;i<list.length;i++) {
                list[i].onclick = regularlymenu_onclick;
            }

            var list = document.getElementsByClassName("regularly_menu_logo");
            for (var i=0;i<list.length;i++) {
                list[i].onclick = regularly_menu_logo_onclick;
            }            


            document.getElementById("bus_search").onclick = bus_search_onclick;
            document.getElementById("goodcover").onclick = goodcover_onclick;
            document.getElementById("btn_quit").onclick = btn_quit_onclick;
            document.getElementById("searchText").onclick = searchText_onclick;
            // chrome ie11
            document.getElementById("searchText").oninput = searchText_onpropertychange;   
            // ie 9   
            //document.getElementById("searchText").onpropertychange = searchText_onpropertychange;         
        }
        
        //点击一级循环菜单按钮处理
        function regularlymenu_onclick()
        {
            //alert("ws");
            //获取点击业务的名称
            var madeMenu = $('.made_menu .swiper-container .swiper-wrapper');
            var busName = $(this).attr('data-bus');
            //获取点击业务的索引值
            var curindex = madeMenu.find('#'+busName+'0').index();
            secondMenu.slideTo(curindex, 300, false);
            changeFirstMenu(findindex(curindex+1));
        }
        //点击常用菜单按钮处理
        function regularly_menu_logo_onclick()
        {
            var curindex = 0;
            secondMenu.slideTo(curindex, 300, false);
            changeFirstMenu(curindex);
        }

        //根据index改变一级（下面部分）菜单图标
        var previousIndex = 0;
        function changeFirstMenu(index)
        {
            var widthW=screen.width;//显示器分辨率 宽
            var num;
            if(widthW>=1900){
                num=8;
            }else{
                num=5;
            }
            var firstindex = Math.ceil(index/num)-1;
            firstMenu.slideTo(firstindex,300, false);
            if(previousIndex!=0)
            {
                var strPreSrc = $(".menu_imgbox .regularlymenu img").eq(previousIndex-1).attr("src");
                var strPreNewSrc = strPreSrc.replace("1.png",".png");
                $(".menu_imgbox .regularlymenu img").eq(previousIndex-1).attr("src",strPreNewSrc);
            }
            else{
                var strPreSrc = $(".regularly_menu_logo img").attr("src");
                var strPreNewSrc = strPreSrc.replace("1.png",".png");
                $(".regularly_menu_logo img").attr("src",strPreNewSrc);
            }
            if(index!=0)
            {
                var strCurMenuSrc = $(".menu_imgbox .regularlymenu img").eq(index-1).attr("src");
                if(strCurMenuSrc.substr(-5) != "1.png")
                {
                    var strNewSrc = strCurMenuSrc.substr(0,strCurMenuSrc.length-4)+"1"+strCurMenuSrc.substr(-4);
                    $(".menu_imgbox img").removeClass('larger');
                    $(".menu_imgbox .regularlymenu img").eq(index-1).attr("src",strNewSrc).addClass('larger');
                }
            }
            else{
                var strPreSrc = $(".regularly_menu_logo img").attr("src");
                var strPreNewSrc = strPreSrc.replace(".png","1.png");
                $(".menu_imgbox img").removeClass('larger');
                $(".regularly_menu_logo img").attr("src",strPreNewSrc).addClass('larger');
            }
            previousIndex = index;
        }
        //点击菜单功能，进入对应业务

        function made_menu_onclick(){
            var MenuName = $(this).find("p").html(); 
            var MenuID = $(this).find(".menu_icon").attr("data-ID_MENU");
            var MenuAction = $(this).find("img").attr("id");
            //arr=null;
            //firstMenu=null;
            //secondMenu=null;
            //jsonData=null;
            setVar("GD_A01_MenuID",MenuID);
            setVar("GD_A01_MenuName",MenuName);
            setVar("GD_A01_MenuAction",MenuAction);
            setVar("GD_A01_Header_Time","1");
            setVar("GD_A01_Header_Exit","1");
         
            exitScene("STA_CONTINUE");
        }
        //点击搜索区域，弹出模态框
        function bus_search_onclick(e)
        {
            //alert("search.");
            $("#goodcover").css("display","block");
            $("#blursearch").css("display","block");
            $("#searchText").focus();
            ShowPinyinKB('-1','-1','searchText','')

        }
        
        //点击模态框，关闭模态框
    
        function goodcover_onclick(e)
        {
            $(".auto-screening-prompt").remove();
             $(".blursearch_select_content").css("display","none");
            $('#searchText').val("");
            $("#blursearch").css("display","none");
            $("#goodcover").css("display","none");
        }
  
        //退出按钮事件处理

        function btn_quit_onclick()
        {        
            //判断是否登录状态，是则提示是否退出，否则进入管机员系统
			if(loginStatus == "1"){
				$.get("customer/common/cust_com_TradeFinishTip.html", function(data) {
					$('#pagePopup').fadeIn(300).html(data);
				});
            }else{
                //未登录模式按退出进入到管机员
                exitScene("STA_ADMIN");
            }
        }
        //模糊搜索调用软件盘

        function searchText_onclick()
        {
            //showPinYinKB(300,350);
            ShowPinyinKB(-1,-1,"searchText","");

        }
     
     
               //模糊搜索

        
        //$("#searchText").bind('input propertychange',
        function searchText_onpropertychange()
        {
            //alert("searchText_onpropertychange");
            //输入框的值
            var inputText=$('#searchText').val();
            //遍历
            /*
            if (inputText != "") {
                for(var i = 0; i<jsonData.length; i++){
                    for(var j=0;j<jsonData[i].CLD_MENU.length;j++){
                       if(jsonData[i].CLD_MENU[j].TXT_INTRO.indexOf(inputText)!=-1){
                     	var addArrWord = "<div class=\"auto-screening-prompt\" data-ID_MENU="
                         +jsonData[i].CLD_MENU[j].ID_MENU+">" +jsonData[i].CLD_MENU[j].NAM_MENU + "</div>";
                            if($(".auto-screening-prompt").length<=5){
                                $("#autoScreening").append(addArrWord);	
                                $("#autoScreening").removeClass("auto-hidden");
                            }else{
                                break;
                            }
                       }
                    }
                }
            }
*/          
            if (inputText != "") {
               
                $(".blursearch_select_content").css("display","flex");
                $(".auto-screening-prompt").remove();
                for(var i = 0; i<jsonData.length; i++){
                    if(jsonData[i].NAM_MENU != "常用菜单"){
                        for(var j=0;j<jsonData[i].CLD_MENU.length;j++){
                        if(jsonData[i].CLD_MENU[j].TXT_INTRO.indexOf(inputText.toUpperCase())!=-1){
                            var addArrWord="<div class=\"auto-screening-prompt\" data-ID_MENU="
                            +jsonData[i].CLD_MENU[j].ID_MENU+" data-NAM_MENU= " 
                            +jsonData[i].CLD_MENU[j].NAM_MENU + " data-TXT_INTRO= " 
                            +jsonData[i].CLD_MENU[j].TXT_INTRO + "><img class=\" \" src='"
                            +thepath+'/img/bus/'+jsonData[i].CLD_MENU[j].NAM_ICON+"' /></div>";
                                if($(".auto-screening-prompt").length<=4){
                                    $("#autoScreening").append(addArrWord);	
                                
                                }else{
                                    break;
                                }
                        }
                        }
                    }
                }
            }
          
             /*将显示出来的div的内容去重复，input内容变动时去重复*/
            $(".auto-screening-prompt").each(function(){
                if($(this).attr("data-TXT_INTRO").indexOf($('#searchText').val().toUpperCase()) < 0){
                    $(this).remove();
                }
                else if($('#searchText').val().length == 0){
                    $(".auto-screening-prompt").remove();
                }
            }); 
            /*弹出的提示div去重复*/
            $(".auto-screening-prompt").each(function(i){
                var iTextHtml = $(this).attr("data-TXT_INTRO");
                $(".auto-screening-prompt").each(function(j){
                    var jTextHtml = $(this).attr("data-TXT_INTRO");
                    if (i < j && iTextHtml == jTextHtml) {
                        $(this).remove();
                    }
                });
             }); 
                 /*点击div获取文本传值*/
            $(".auto-screening-prompt").on("click",function(){
                $("#searchText").val($(this).text());
                var MenuName = $(this).attr("data-NAM_MENU"); 
                var MenuID = $(this).attr("data-ID_MENU");
             
      
                $("#autoScreening").addClass("auto-hidden");
                $(".auto-screening-prompt").remove();
                //arr=null;
                //firstMenu=null;
                //secondMenu=null;
                //jsonData=null;
                setVar("GD_A01_MenuID",MenuID);
                setVar("GD_A01_MenuName",MenuName);
                exitScene("STA_CONTINUE");
            });
        }

        playAd();

        function playAd()
        {
            if(!imgfile){
              return;
            }else{
              changeAd();
            }
        }

        function changeAd() 
        {
            for (var i = 0; i <imgfile.length; i++) 
            {
                var ADChild = '<div class="swiper-slide"><img src=' + imgfile[i] + ' class="mainAdvertise"></div>';
                $(".mainAd .swiper-wrapper").append(ADChild);
            }

            $('.mainAd .swiper-slide').addClass("swiper-no-swiping");
            adtime = setInterval(showadv1,180000);
            document.getElementById("advertiseimg").onclick=hideMainAd;
        }

        function hideMainAd()
        {
            $(".mainAd").css("display","none");
            $(".mainAd").prev().css("display","block");
            adtime = setInterval(ShowSwiper,180000);
        }

        function ShowSwiper()
        { 
            $(".mainAd").css("display","block");
            $(".mainAd").prev().css("display","none");
            clearInterval(adtime);
            var adswiper = new Swiper(".mainAd .swiper-container",{    
                autoplay: 2500,
                effect: "fade",
                autoplayDisableOnInteraction: false,
                loop: true
            });
        }

        function showadv1() 
        { 
            $("#advertiseimg").css("display","block");
            $(".mainAd").prev().css("display","none");

            //通知人近传感器可以生效
            setVar("GD_A01_ShowingAD","1");
            
            clearInterval(adtime);
            var adswiper = new Swiper(".mainAd .swiper-container",{    
                autoplay: 2500,
                effect: "fade",
                autoplayDisableOnInteraction: false,
                loop: true
            });
        }
    }
}
</script>