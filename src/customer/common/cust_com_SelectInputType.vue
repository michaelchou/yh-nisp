<template>
    <x-layout-main>
            <p class="title">选择证件类型</p>
            <div class="document_choice">
                <span>
                    <div class="document_img">
                        <i><img src="img/二代身份证.png"></i>
                        <p class="document_name" value ="110001">刷二代身份证</p>
                    </div>
                </span>
                <span>
                    <div class="document_img">
                        <i><img src="img/外国人永久居留证.png"></i>
                        <p class="document_name" value ="110037">读取外国人永久居留证</p>
                    </div>
                </span>
                <span>
                    <div class="document_img">
                        <i><img src="img/港澳居民来往内地通行证.png"></i>
                        <p class="document_name" value ="110019">输入帐号</p>
                    </div>
                </span>
            </div>
            <div class="btnbox">
                <button class="btn backbtn" id="btn_back">返&nbsp;&nbsp;&nbsp;回</button>
                <button class="btn surebtn" id="btn_sure" disabled="true">确&nbsp;&nbsp;&nbsp;定</button>
            </div>
    </x-layout-main>
</template>

<!--点击搜索区域弹出模态框-->
<script>
export default {
mounted () {

    var InputInfoFlag = false;
    //证件选择单选事件处理
    $(".document_choice span").on('click', function(event) {
        $(this).parent().find('.document_img').removeClass('docment_selected');
        $(this).find('.document_img').addClass('docment_selected');
        $("#btn_sure").attr('disabled', false);
        //获取证件类型标志
        DocumentType = $(this).find('p').attr('value');
        
    });

    //确定按钮事件处理
    document.getElementById("btn_sure").onclick=onSure;
    function onSure() {
        setVar("GD_CodPid",DocumentType);
        setVar("P_B04IndLoss","1");
        switch(DocumentType){
            case "110001":
                exitScene("STA_IDCARD"); 
                break;
             case "110037":
               exitScene("STA_FOREIGNER");
               break;
             case "110019": 
                exitScene("STA_OTHER");
               // $('#pagePopup').fadeIn(300);
                break;
            default:
                exitScene("STA_FAIL");
                break;
        }
    }
    //返回按钮事件处理
    document.getElementById("btn_back").onclick=onBack;
    function onBack(){
        onCancel();
    }
}
}
</script>
