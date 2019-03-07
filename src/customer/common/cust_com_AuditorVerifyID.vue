<template>
<div class="x-modal">
    <p class="modal_title">请联系审核员输入指纹编号</p>
    <ul class="documentinfolist">
        <li>
            <span><b class="must">*</b>指纹编号：</span><input class="input_amount" type="text" id="FingerID"  onclick="ShowPinyinKB('-1','-1','FingerID','指纹编号：')" onblur="HideKB()"/>
        </li>
    </ul>
    <div class="modal_btnbox">
        <button class="btn backbtn" id="modal_btn_back">取&nbsp;&nbsp;&nbsp;消</button>
        <button class="btn surebtn" id="modal_btn_sure">确&nbsp;&nbsp;&nbsp;定</button>
    </div>
    <EMBED name="PopupSound" SRC="wav/请联系审核员输入指纹编号.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
</div>
</template>

<!--点击搜索区域弹出模态框-->
<script type="text/javascript">
export default {
mounted () {

    /*模态框取消按钮事件处理*/
    document.getElementById("modal_btn_back").onclick=onModalBack;
    function onModalBack() {
        $("#goodcover").fadeOut('500');
        $("#FingerID").val("");
        exitScene("STA_CANCEL");
    }

    /*模态框确定按钮事件处理*/
    document.getElementById("modal_btn_sure").onclick=onModalSure;
    function onModalSure() {
        var FingerID = $("#FingerID").val();
		setVar("GD_UsrNum",FingerID);
        setVar("GD_A01_BUS_NUM_UR_CFM",FingerID);
        exitScene("STA_CONTINUE");
    }

}
}
</script>