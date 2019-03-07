<template>
    <x-layout-main>
                <p class="title">客户证件资料填写</p>
                <ul class="ulinfo_form">
                    <li>
                        <div class="infohalf">
                            <span>姓名：</span>
                            <input type="text" class="input_info" id="NamCust" disabled="true">
                        </div>
                        <div class="infohalf">
                            <span>证件号码：</span>
                            <input type="text" class="input_info" id="NumPid" disabled="true">
                        </div>
                    </li>
                    <li>
                        <div class="infohalf">
                            <span>证件类型：</span>
                            <input type="text" class="input_info" id="CodPid" disabled="true">
                        </div>
                        <div class="infohalf">
                            <span><b class="must">*</b>证件有效期：</span>
                            <input type="text" class="input_info" id="DateCertBgn"style="width:28%;">-
                            <input type="text" class="input_info" id="DateCertEnd" style="width:28%;">
                        </div>
                    </li>
                    <li>
                        <div class="infohalf">
                            <span><b class="must">*</b>国籍：</span>
                            <input type="text" class="input_info" id="CodCountry">
                        </div>
                        <div class="infohalf">
                            <span><b class="must">*</b>民族：</span>
                            <input type="text" class="input_info" id="CodNation">
                        </div>
                    </li>
                    <li>
                        <div class="infohalf">
                            <span><b class="must">*</b>出生日期：</span>
                            <input type="text" class="input_info" id="Birthday">
                        </div>
                        <div class="infohalf">
                            <span>性别：</span>
                            <i>
                                <div class="radiobox">
                                    <input type="radio" name="Sex" class="radioAccount" id="Man" value="男">
                                    <label for="Man">√</label>
                                </div>
                                男
                            </i>
                            <i>
                                <div class="radiobox">
                                    <input type="radio" name="Sex" class="radioAccount" id="Woman" value="女">
                                    <label for="Woman">√</label>
                                </div>
                                女
                            </i>
                        </div>
                    </li>
                </ul>
                <div class="btnbox">
                    <button class="btn backbtn" id="btn_back">返&nbsp;&nbsp;&nbsp;回</button>
                    <button class="btn surebtn" id="btn_sure">确&nbsp;&nbsp;&nbsp;定</button>
                </div>
    </x-layout-main>
</template>
<style scoped>
@media screen and (max-width: 1280px) { 
.infohalf {
    display: inline-flex;
}

}
</style>

<script>
export default {
mounted () {

        DataTools.get("GD_NamCust|GD_NumPid|GD_CodPid|GD_DateCertBgn|GD_DateCertEnd|GD_CodCountry|GD_CodNation|GD_Birthday|GD_Gender",function(data){
            var infoList = []
            for(var i = 0; i <data.length; i++){
                infoList[i] = data[i];
                // alert(infoList[i]);
            }
            $('#NamCust').val(infoList[0]);
            $('#NumPid').val(infoList[1]);
            if(110025 == infoList[2]){
               $('#CodPid').val("外国护照");
            }
            else if(110021 == infoList[2]){
                $('#CodPid').val("台湾居民来往大陆通行证");
            }else if(110019 == infoList[2]){
                $('#CodPid').val("港澳居民来往内地通行证");
            }
            $('#DateCertBgn').val(infoList[3]);
            $('#DateCertEnd').val(infoList[4]);
            $('#CodCountry').val(infoList[5]);
            $('#CodNation').val(infoList[6]);
            $('#Birthday').val(infoList[7]);
            if('男' == infoList[8]){
                $('#Man').attr('checked','true');
            }else if('女' == infoList[8]){
                $('#Woman').attr('checked','true');
            }
        });
        //确定按钮处理事件
        document.getElementById("btn_sure").onclick=onSure;
        function onSure(){
            //setVar("",$("#FZDepartment").val());
            setVar("GD_DateCertBgn",$("#DateCertBgn").val());
            setVar("GD_DateCertEnd",$("#DateCertEnd").val());
            setVar("GD_CodCountry",$("#CodCountry").val());
            setVar("GD_CodNation",$("#CodNation").val());
            setVar("GD_Birthday",$("#Birthday").val());
            setVar("GD_Gender",$("input[name='Sex']:checked").val());
            exitScene("STA_CONTINUE");
        }

        //返回按钮处理事件
        document.getElementById("btn_back").onclick=onBack;
        function onBack(){
            onCancel();
        }

}
}
</script>
