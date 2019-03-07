<style scoped>
.table_inform{
    width:80%;
    font-size: 3.1rem;
    margin: 10px auto;  
}
.txt-r{
    text-align: right;
    padding-top: 40px;
}
.txt-l{
    text-align: left;
    color: #6600ff;
    padding-top: 40px;
}
.input_info{
    width:180px;
}

</style>

<template>
    <x-layout-main>
		<p class="title">输入证件类型</p>
		<table class="table_inform">
            <tr>
                <td class="txt-r">证件类型：</td>
                <td class="txt-l" id="IDcardType"></td>
                <td class="txt-r"><span class="starts"></span>性别：</td>
                <td class="txt-l">
                    <label class='radio_box'>
                        <input type="radio" id="man" name="sex"><i></i>&nbsp;&nbsp;男
                    </label>
                    <label class='radio_box'>
                        <input type="radio" id="woman" name="sex"><i></i>&nbsp;&nbsp;女
                    </label>
                </td>
            </tr>
            <tr>
                <td class="txt-r">证件号码：</td>
                <td class="txt-l" id="IDcardNum"></td>
                <td class="txt-r"><span class="starts">*</span>国籍：</td>
                <td class="txt-l">
                    <input type="text" placeholder="" id="CountryJson" class="input_info"/>
                </td>
            </tr>
            <tr>
                <td class="txt-r">客户姓名：</td>
                <td class="txt-l" id="IDcardNam"></td>
                <td class="txt-r"><span class="starts">*</span>民族：</td>
                <td class="txt-l">
                    <input type="text" placeholder="" id="NationJson" disabled="true" class="input_info"/>
                </td>
            </tr>
            <tr>
                <td class="txt-r"><span class="starts">*</span>有效日期：</td>
                <td class="txt-l" colspan="2">
                    <input type="text" class="input_info" id="VarDataStart"/>- <input type="text" class="input_info" id="VarDataEnd"/>
                </td>
                <td class="txt-l">
                    <label class='check_box'>
                        <input type="checkbox" id="Alltime"><i></i>永久有效
                    </label>
                </td>
            </tr>     
                <tr>
                <td class="txt-r"><span class="starts">*</span>出生日期：</td>
                <td class="txt-l"> 
                    <input type="text" class="input_info" id="Birthday"/>
                </td>
                <td></td>
                <td></td>
            </tr>      
        </table>
        <x-multi-level :show="showBank" title="国籍" :data="bankData" pcode="NUM_ITEM_DIC" pname="VLU_ITEM_DIC" @cancel="onCancelBank" @confirm="onChooseBank">
            </x-multi-level>           
            <x-multi-level :show="showBranch" title="民族" :data="branchData" pcode="NUM_ITEM_DIC" pname="VLU_ITEM_DIC" @cancel="onCancelBranch" @confirm="onChooseBranch">
            </x-multi-level>
            <p class="tips" id="notice"></p>
        <div class="btnbox">
            <button class="btn" id="btn_back" >上&nbsp;一&nbsp;步</button>
            <button class="btn" id="btn_sure" >下&nbsp;一&nbsp;步</button>
        </div>
    </x-layout-main>
</template>

<script>
export default {
    data () {
        return {
            bankData: [],
            branchData: [],
            showBank: false,
            showBranch: false,
            vmCountryCode:"",
            vmCountryNam:"",
            vmNationCode:"",
            vmNationNam:""
        }
    },
    computed: {

    },
    methods: {
        onCancelBank () {
            this.showBank = false;
        },
        onCancelBranch () {
            this.showBranch = false;
        },
        onChooseBank (index, item) {
            this.showBank = false;
            this.showBranch = false;
            $("#CountryJson").val(item.VLU_ITEM_DIC);
            this.vmCountryCode=item.NUM_ITEM_DIC;
            this.vmCountryNam=item.VLU_ITEM_DIC;
        },
        onChooseBranch (index, item) {
            this.showBank = false;
            this.showBranch = false;
            $("#NationJson").val(item.VLU_ITEM_DIC);
            this.vmNationCode=item.NUM_ITEM_DIC;
            this.vmNationNam=item.VLU_ITEM_DIC;
        }

    },
mounted () { 
    pageLog('mounted-->' + new Date());
    var vm = this;
    var C_A01_Dict_00000009 = "";
    var sex = "";
    var C_A01_BIZPRM_00104 = "0";
    var GD_CodPid;
    var GD_CodPid,menuMinAge,menuMaxAge,GD_A01_MenuBusOld;
	DataTools.get("GD_CodPid|GD_NumPid|GD_NamCust|C_A01_Dict_00000010|C_A01_Dict_00000007|C_A01_Dict_00000009|C_A01_Dict_00000005|RP_Gender|RP_CodCountry|RP_CodNation|RP_CodCertOrg|RP_DateCertBgn|RP_DateCertEnd|RP_Birthday|C_A01_BIZPRM_00104|GD_A01_BusMinAge|C_A01_BIZPRM_00208|GD_A01_MenuBusOld",function(data){
        var strIDtype = "";        
        var bSpliceChina = false;   
        GD_CodPid = data[0];
        var RP_Gender = data[7];
        var RP_CodCountry = data[8];
        var RP_CodNation = data[9];
        var RP_CodCertOrg = data[10];
        var RP_DateCertBgn = data[11];
        var RP_DateCertEnd = data[12];
        var RP_Birthday = data[13];
        C_A01_BIZPRM_00104 = data[14];
        menuMinAge = data[15]+"0000";
        menuMaxAge = data[16]+"0000";
        GD_A01_MenuBusOld = data[17];
        switch(data[0]){
            case "110019":  
                strIDtype="港澳居民来往内地通行证";
                setVar("GD_CodCertOrg","公安部");
                break;
            case "110021":               
                strIDtype="台湾居民来往大陆通行证";
                setVar("GD_CodCertOrg","公安部");
                break;
            case "110037":
                strIDtype="外国人永久居留证";
                setVar("GD_CodCertOrg","公安部");
                bSpliceChina = true;
                break;
            case "110025": 
                strIDtype="外国护照";
                bSpliceChina = true;
                $("#NationJson").val("不能适用");
                break;
            default:
                break;
        }        
        
        $("#IDcardType").html(strIDtype);
        $("#IDcardNum").html(data[1]);
        $("#IDcardNam").html(data[2]);
        if(typeof data[3] == "string" && data[3] != ""){
            //pageLog(data[3]);
            pageLog('mounted,tsx,RP_CodCountry-->' + RP_CodCountry + "<---");
            var C_A01_Dict_00000010 = JSON.parse(data[3]);//国籍
            if(RP_CodCountry != ""){
                //$('#CountryJson').prop('disabled', false);           
                vm.vmCountryCode=RP_CodCountry;//446
                for (var i = 0; i < C_A01_Dict_00000010.length; i++) {                
                    if (C_A01_Dict_00000010[i].NUM_ITEM_DIC == RP_CodCountry) {
                        vm.vmCountryNam = C_A01_Dict_00000010[i].VLU_ITEM_DIC;
                    }
                }                
                $("#CountryJson").val(vm.vmCountryNam);    
            }    
            var index = -1;
            if(bSpliceChina == true){
                for (var i = 0; i < C_A01_Dict_00000010.length; i++) {                    
                    if (C_A01_Dict_00000010[i].VLU_ITEM_DIC == "中国") {
                        index = i;
                    }
                }
                if(index > -1){
                    C_A01_Dict_00000010.splice(C_A01_Dict_00000010.indexOf(C_A01_Dict_00000010[index]),1);
                }                
            }
            vm.bankData = C_A01_Dict_00000010;  
            //pageLog('mounted,tsx,vm.bankData-->' + vm.bankData + "<---");       
        }else{
            
        }
        if(typeof data[4] == "string" && data[4] != ""){
            //pageLog(data[4]);
            var C_A01_Dict_00000007 = JSON.parse(data[4]);//民族
            if(RP_CodNation == ""){
                //$('#NationJson').prop('disabled', false);
                //vm.branchData = JSON.parse(data[4]);
                vm.vmNationCode="99";
                vm.vmNationNam="不适用";
            }else{
                vm.vmNationCode=RP_CodNation;           
                for (var i = 0; i < C_A01_Dict_00000007.length; i++) {                
                    if (C_A01_Dict_00000007[i].NUM_ITEM_DIC == RP_CodNation) {
                        vm.vmNationNam = C_A01_Dict_00000007[i].VLU_ITEM_DIC;
                    }
                }     
                $("#NationJson").val(vm.vmNationNam);
            }            
        }
        if(typeof data[6] == "string" && data[6] != ""){
            var C_A01_Dict_00000005 = JSON.parse(data[6]);//性别
            if(RP_Gender != ""){                
                for (var i = 0; i < C_A01_Dict_00000005.length; i++) {                
                    if (C_A01_Dict_00000005[i].NUM_ITEM_DIC == RP_Gender) {
                       if(C_A01_Dict_00000005[i].VLU_ITEM_DIC == "男"){
                            sex = "男";
                            //$('#woman').prop('disabled', true);
                            $('#man').prop('checked', true);
                       }else{
                            sex = "女";
                            //$('#man').prop('disabled', true);
                            $('#woman').prop('checked', true);
                       }			
                    }
                }
            }
        }

        RP_DateCertBgn = data[11];
        RP_DateCertEnd = data[12];
        RP_Birthday = data[13];
        if(RP_DateCertBgn == ""){
            //$('#VarDataStart').prop('disabled', false);
        }else{
            $("#VarDataStart").val(RP_DateCertBgn.substr(0,4)+"-"+RP_DateCertBgn.substr(4,2)+"-"+RP_DateCertBgn.substr(6,2));
        }
        
        if(RP_DateCertEnd == ""){
            //$('#VarDataEnd').prop('disabled', false);
            //$('#Alltime').prop('disabled', false);
        }else{
            if(RP_DateCertEnd == "99999999"){
                $('#VarDataEnd').prop('disabled', true);      
                $('#Alltime').prop('checked', true); 
            }else{
                $("#VarDataEnd").val(RP_DateCertEnd.substr(0,4)+"-"+RP_DateCertEnd.substr(4,2)+"-"+RP_DateCertEnd.substr(6,2));
            }            
        }

        if(RP_Birthday == ""){
            //$('#Birthday').prop('disabled', false);
        }else{
            $("#Birthday").val(RP_Birthday.substr(0,4)+"-"+RP_Birthday.substr(4,2)+"-"+RP_Birthday.substr(6,2));
        }
        
	});
    document.getElementById("CountryJson").onclick=onCountryJson;
    function onCountryJson(){
        vm.showBank = true;
        vm.showBranch = false;
    }
    document.getElementById("NationJson").onclick=onNationJson;
    function onNationJson(){
        vm.showBank = false;
        vm.showBranch = true;
    };
    document.getElementById("man").onclick=onMan;
    function onMan() {
        if($(this).is(':checked')){
            sex = "男";
        }
     }
    document.getElementById("woman").onclick=onWoman;
    function onWoman() {
        if($(this).is(':checked')){
            sex = "女";
        }
    }
    document.getElementById("Alltime").onclick=onAlltime;
    function onAlltime() {
        if($(this).is(':checked')){
            $("#VarDataEnd").val("9999-99-99")
            $('#VarDataEnd').prop('disabled', true);            
        }else{
            $("#VarDataEnd").val("")
            $('#VarDataEnd').prop('disabled', false);      
        }
    }
    //初始化日期选择器
    $(function(){
        new DatePicker().init({id : 'VarDataStart'});
        new DatePicker().init({id : 'VarDataEnd'});
        new DatePicker().init({id : 'Birthday'});
     }); 
    //点击返回
    document.getElementById("btn_back").onclick=onBack;
    function onBack(){
        exitScene("STA_BACK");
    }
    //确定按钮 
    document.getElementById("btn_sure").onclick=onSure;  
    function onSure(){
        var strDataStart = $("#VarDataStart").val();
        var strVarDataEnd = $("#VarDataEnd").val();
        var strBirthday = $("#Birthday").val();
        var bAllTime = $("#Alltime").is(':checked');
		if(sex == ""){
           $("#notice").html("您好，性别为必填项，请填写完整");
        }else if(vm.vmCountryCode == "" ){
           $("#notice").html("您好，国籍为必填项，请填写完整");
        }else if(vm.vmNationCode == "" ){
           $("#notice").html("您好，民族为必填项，请填写完整");
        }else if( !bAllTime && strVarDataEnd==""){
           $("#notice").html("您好，证件有效日期为必填项，请填写完整");
        }else if(strDataStart==""){
           $("#notice").html("您好，证件有效日期为必填项，请填写完整");
        }else if(strBirthday == ""){
           $("#notice").html("您好，出生日期为必填项，请填写完整");
        }else{
            if(bAllTime){
                strVarDataEnd = "99999999";
            }
            strBirthday = strBirthday.replace(/-/g,"");
            strDataStart = strDataStart.replace(/-/g,"");
            strVarDataEnd = strVarDataEnd.replace(/-/g,"");
            
            var date = new Date();
            var strYear = date.getFullYear();
            var strMonth = date.getMonth()+1;
            var strDate = date.getDate();

            if(strMonth >= 1 && strMonth <= 9){
                strMonth = '0'+strMonth;
            }
            if(strDate >= 1 && strDate <= 9){
                strDate = '0'+strDate;
            }
            var currData = strYear.toString()+strMonth+strDate;     
            pageLog('currData-->' + currData+',strDataStart-->'+strDataStart+',strBirthday-->'+strBirthday+',strVarDataEnd-->'+strVarDataEnd+',menuMinAge-->'+menuMinAge+',menuMaxAge-->'+menuMaxAge+',GD_A01_MenuBusOld-->'+GD_A01_MenuBusOld);       
            if(parseInt(strDataStart) > parseInt(currData)){
                $("#notice").html("您好，证件起始日期不可大于当天，请重新选择");
            }else if(!(bAllTime || parseInt(strVarDataEnd) >= parseInt(currData))){
                $("#notice").html("您好，证件终止日期已过期，请重新选择");
            }else if(parseInt(strBirthday) > parseInt(currData)){
                $("#notice").html("您好，出生日期不可大于当天，请重新选择");
            }else if(parseInt(currData) - parseInt(strBirthday) <= parseInt(menuMinAge)){
                $("#notice").html("本机暂无法受理您的业务，请联系银行工作人员到柜面办理。");
            }else if(parseInt(currData) - parseInt(strBirthday) > parseInt(menuMaxAge) && GD_A01_MenuBusOld != "1"){
                $("#notice").html("本机暂无法受理您的业务，请联系银行工作人员到柜面办理。");
            }else {
                setVar("GD_Gender",sex);	
                setVar("GD_Address","");
                setVar("GD_CodNation",vm.vmNationNam);
                setVar("P_CodCountry",vm.vmCountryCode);
                setVar("GD_CodCertOrg","");
                setVar("GD_DateCertBgn",strDataStart.replace(/-/g,""));
                setVar("GD_DateCertEnd",strVarDataEnd.replace(/-/g,""));
                setVar("GD_Birthday",strBirthday.replace(/-/g,""));  
                
                if(parseInt(strDataStart.replace(/-/g,"")) >= parseInt(C_A01_BIZPRM_00104) && GD_CodPid == "110037"){ 
                    exitScene("STA_READCARD");
                }else{
                    exitScene("STA_CONTINUE");
                }              
            }            
		}		
	}
    
}
}
</script>
