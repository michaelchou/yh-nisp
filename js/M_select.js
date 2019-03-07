
;(function($){
    var ser_object2;
    var ser_object2_img;
    var radius_v;
    jQuery.fn.extend({
        
        // ***********************
        // ***********************
        // select下拉框
        // 
        // $("").M_select();
        // ***********************
        // ***********************
        "M_select":function(options){
            var ojc_arr=this;
            var ojc;
            // select下拉框
            for(i=0;i<ojc_arr.length;i++){
                var ser_object=$(ojc_arr[i]);
                $(ser_object).parent().addClass("select-con");
                //$(ser_object).parent().css("z-index","1");
                $(ser_object).wrap("<section class='sel-hide'></section>");
                $(ser_object).parent().parent().append('<section class="sel-box"><div class="sel-title-box"><span class="sel-title"></span><span class="sel-sign"></span></div><section class="sel-float-box"></section></section>');
                var w=$(ser_object).parent().parent().width();
                $(ser_object).parent().parent().find(".sel-float-box").css("min-width",w);
                var ojc=$(ser_object).children();
                for(a=0;a<ojc.length;a++){
                    var t=$(ojc[a]).text();
                    var v=$(ojc[a]).attr("value");
                   $(ser_object).parent().parent().find(".sel-float-box").append('<div class="sel-float-div sel-Hcolor" value='+v+'>'+t+'</div>');
                };
               
                for(a=0;a<ojc.length;a++){
                        
                        var sel_disabled=$(ojc[a]).attr("disabled");
                        
                        if(sel_disabled=="disabled"||sel_disabled=="true"){
                            var div_ojc=$(ser_object).parent().parent().find('.sel-float-box').children();
                            $(div_ojc[a]).removeClass("sel-float-div");
                            $(div_ojc[a]).addClass("sel-float-div-disabled");
                        
                        }
                    };

                var sel_textFirst="";

             
                // 默认参数
                var defaultOption = {
                   
                    ico:1,
                    Img:"",
                    Img2:"",
                    Title:"",
                    inputName:"sel_v",
                    selected:"0",
                    radius:"0",
                    bg:"#FFF",
                    height:"60",
                    text_align:"left",
					size:8,
                    Succee:function(){}
                
                };
                // 合并自定义参数和默认参数，出现相同属性名时自定义参数会覆盖默认参数
                options = $.extend({},defaultOption,options);

                // 判断Test是否为空
                if(options.Title){
                    sel_textFirst=options.Title;
                  
                };
                $(ser_object).parent().parent().find(".sel-title").text(sel_textFirst);

                // 判断使用哪种ico样式
                var Img,Img2;
                if(!(options.Img)&&!(options.Img2)){
                 
                    if(options.ico==1){
                        Img=vm.imgPath("./img/customer/select.png");
                        Img2=vm.imgPath("./img/customer/select.png");
                    }
                    if(options.ico==2){
                        Img=vm.imgPath("./img/adm/select.png");
                        Img2=vm.imgPath("./img/adm/select.png");
                    }
                    if(options.ico==3){
                        Img=vm.imgPath("./img/adm/select.png");
                        Img2=vm.imgPath("./img/adm/select.png");
                    }
                    if(options.ico==4){
                        Img=vm.imgPath("./img/customer/select.png");
                        Img2=vm.imgPath("./img/customer/select.png");
                    }
                    if(options.ico==5){
                        Img=vm.imgPath("./img/customer/select.png");
                        Img2=vm.imgPath("./img/customer/select.png");
                    }
                }else if(!(options.Img)&&(options.Img2!=null)){
                        Img=vm.imgPath("./img/customer/select.png");
                        Img2=vm.imgPath("./img/customer/select.png");
                }else if(!(options.Img2)&&(options.Img!=null)){
                        Img=vm.imgPath("./img/customer/select.png");
                        Img2=vm.imgPath("./img/customer/select.png");
                }else if((options.Img!=null)&&(options.Img2!=null)){
                        Img=vm.imgPath("./img/customer/select.png");
                        Img2=vm.imgPath("./img/customer/select.png");
                }

                // 可传参css
                $(ser_object).parent().parent().find(".sel-sign").css("background","url("+Img+")");
                $(ser_object).parent().parent().find(".sel-sign").css("background-size","100% 100%");
                $(ser_object).parent().parent().find(".sel-box").append('<input type="hidden" name="'+options.inputName+'" value="'+options.selected+'" class="inputHidden">');
                $(ser_object).parent().parent().find(".sel-box").css("border-radius",options.radius);
                $(ser_object).parent().parent().find(".sel-title-box").css("background",options.bg);
                $(ser_object).parent().parent().find(".sel-title-box").css("height",options.height);
                $(ser_object).parent().parent().find(".sel-title-box").children().css("line-height",options.height);
                $(ser_object).parent().parent().find(".sel-title-box").css("text-align",options.text_align);
                $(ser_object).parent().parent().find(".sel-float-box").css("border-radius","0 0 "+options.radius +" "+options.radius+" ");
             
                // 获取图片的高
                var ico_h=$(ser_object).parent().parent().find(".sel-title-box").height();
                // 设置图片的宽高
                $(ser_object).parent().parent().find(".sel-sign").css({'width':+ico_h+'px','height':+ico_h+'px'});
                $(ser_object).parent().parent().find(".sel-title-box").css("padding-right",ico_h+"px");

                // 获取有多少个选项
                var selLength=$(ser_object).parent().parent().find(".sel-float-box").children().length;
                var selListHeight=$(ser_object).parent().parent().find(".sel-float-box").children().height();
                // 获取选项的高度
               
		$(".sel-float-box").hide();
		var selSize;
		if(options.size!=null){
			selSize=options.size
		}else{
			selSize=defaultOption.size
		}
                var selHeight=selListHeight*selSize;
                // 隐藏下拉框
               
                if(selLength>selSize){
                    $(ser_object).parent().parent().find(".sel-float-box").css("height",selHeight);
                    $(ser_object).parent().parent().find(".sel-float-box").css("overflow-y","scroll");
                }

                // 根据selected 的值选中(即input value)
                var input_val=$(ser_object).parent().parent().find(".inputHidden").attr("value");
                var div_objoct=$(ser_object).parent().parent().find(".sel-float-div");
                for(a=0;a<div_objoct.length;a++){
                        
                    var div_val=$(div_objoct[a]).attr("value");
                    if(div_val==input_val){
                        var div_text=$(div_objoct[a]).text();
                        $(ser_object).parent().parent().find(".sel-title").text(div_text);
                        };
                };

                
                // 点击事件
                $(ser_object).parent().parent().find(".sel-title-box").on("click",function(){
                    // 切换图片
                    $(ser_object2).parent().parent().find(".sel-sign").css("background","url("+ser_object2_img+")");
                    $(ser_object2).parent().parent().find(".sel-sign").css("background-size","100% 100%");
                    $(ser_object2).parent().css("border-radius",radius_v);
                    $('.sel-box').removeClass("on");
                    ser_object2=this;
                    ser_object2_img=Img;
                    // 圆角值
                    radius_v=options.radius;

                    var floatAttr=$(this).parent().find(".sel-float-box").css("display");
                    if(floatAttr=="block"){
                        $(".sel-float-box").hide();
                        $(this).parent().find(".sel-float-box").hide();

                        $(this).parent().removeClass("on");
                        $(this).parent().find(".sel-float-box").removeClass("on");

                        $(this).parent().css("border-radius",options.radius);
                        // 切换图片
                        $(this).parent().parent().find(".sel-sign").css("background","url("+Img+")");
                        $(this).parent().parent().find(".sel-sign").css("background-size","100% 100%");
                    }else if(floatAttr=="none"){
                        // 切换图片
                        $(this).parent().parent().find(".sel-sign").css("background","url("+Img2+")");
                        $(this).parent().parent().find(".sel-sign").css("background-size","100% 100%");
                        $(".sel-float-box").hide();
                        $(this).parent().find(".sel-float-box").show();

                        $(this).parent().addClass("on");
                        $(this).parent().find(".sel-float-box").addClass("on");

                        $(this).parent().css("border-radius",options.radius+" "+options.radius+"  0 0");
                    }
                    
                });

                // 选项点击事件
                $(ser_object).parent().parent().find(".sel-float-div").on("click",function(){
                    var sel_text=$(this).text();
                    var sel_value=$(this).attr("value");
                    // 切换图片
                    $(this).parent().parent().find(".sel-sign").css("background","url("+Img+")");
                    $(this).parent().parent().find(".sel-sign").css("background-size","100% 100%");

                    $(this).parent().hide();
                    $(this).parent().parent().find(".sel-title").text(sel_text);
                    $(this).parent().parent().css("border-radius",options.radius);
               
                    $(this).parent().parent().find(".sel-title").attr("value",sel_value);
                    var selected_value=$(this).parent().parent().find(".sel-title").attr("value");
                    $(this).parent().parent().find(".inputHidden").attr("value",selected_value);
                    var v;
                    var ojc_option=$(this).parent().parent().parent().find("option");
                    for(a=0;a<ojc_option.length;a++){
                        
                        v=$(ojc_option[a]).attr("value");
                        
                        if(v==selected_value){
                            $(ojc_option).attr("selected",false);
                            $(ojc_option[a]).attr("selected",true);
                           
                        }
                    };
                    // 判断函数是否为空
                   if(options.Succee!=null){
                        options.Succee(selected_value);
                   }
                       
                  
                });
            }// for循环语句结束
           
        },
        
    });
    // 点击其他位置下拉消失
    
     $(document).on('click', function (e) { 
        var parent = $(e.target).parents('.select-con').length;
        if(!parent) {
            // // 切换图片
            $(ser_object2).parent().parent().find(".sel-sign").css("background","url("+ser_object2_img+")");
            $(ser_object2).parent().parent().find(".sel-sign").css("background-size","100% 100%");
            $(ser_object2).parent().css("border-radius",radius_v);
            // console.log(ser_object2);
            $('.sel-float-box').hide();
            $('.sel-box').removeClass("on");
        };

    });

})(jQuery);
// jsion对象初始化插件
function M_select_init(ojt){
    ojt.forEach(function(val){
        $(val.Name).M_select(val.data);
    });
};