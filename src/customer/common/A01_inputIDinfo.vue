<style scoped>
    .title {
        position: relative;
        padding-top: 2%;
        font-size: 4.3rem;
        text-align: center;
        color: #008B6E;
        letter-spacing: 3px;
    }
    .title:after {
        content: "";
        border-top: 2px solid #008B6E;
        display: inline-block;
        position: relative;
        width: 300px;
        top: -16px;
        right: -28px;
    }
    .title:before {
        content: "";
        border-top: 2px solid #008B6E;
        display: inline-block;
        position: relative;
        width: 300px;
        top: -16px;
        left: -28px;
    }
    .inputIDinfo{   
        font-size:3.6rem;
        margin:0 auto;
        margin-top:2%;
        line-height:100px;
    }
    .IDinfoleft{    
        text-align:right; 
    }
    .IDinforight{ 
        text-align:left;
        color:#6600ff;
    }
    .btn{   
        padding:10px 22px;
        font-size:3rem;
        color:#fff;
    }
    .btnbox {
        position: absolute;
        bottom: 29%;
        width: 100%;
        text-align: center;
    }
    .input_info{    
        height: 60px;
        border: 1px solid #008B6E;
        border-radius: 10px;
        box-shadow: inset 2px 5px 16px 0px #CDCDCD;
        font-size: 3.6rem;
        padding: 0px 10px;
        color:#6600ff;
    }
    @media screen and (max-height: 780px) {
    .btnbox{
      bottom: 15%;
      }
    }
</style>
<template>
    <x-layout-main>
            <p class="title">{{InputIDInfo}}</p>
            <table class='inputIDinfo'>
                <tr>
                    <td class='IDinfoleft'>{{IDType}}</td>
                    <td class='IDinforight' id="IDTypeSelect"></td>
                </tr>
                 <tr>
                    <td class='IDinfoleft'>{{CustomerName}}</td>
                    <td class='IDinforight'><input class="input_long" maxlength="40" id="IDName" style="width:580px;"type="text" @click="onCustomerNameClick" onblur="HideKB()" @focus="onClearNumPidErr"></td>
                </tr>
                 <tr>
                    <td class='IDinfoleft'>{{IDNumber}}</td>
                    <td class='IDinforight'><input class="input_long" maxlength="22" @focus="onClearNumPidErr" style="width:580px;" @click="onIDNumClick" id="IDNum" type="text" onblur="HideKB()"></td>
                </tr>
            </table>
            <p class="tips" id="noticeCheckCode">{{NumPidErr}}</p>
            <div class="btnbox">
                <button class="btn" id="btn_back" @click="onBack">上一步</button>
                <button class="btn" id="btn_sure" @click="onSure">下一步</button>
            </div>
    </x-layout-main>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            setKeys: ["GD_NumPid", "GD_NamCust"],            
            InputIDInfo: "输入证件信息",
            IDType: "证件类型：",
            CustomerName:"客户姓名：",
            CustomerNameInput:"",
            strIdcardType:"",
            IDNumber:"证件号码：",
            IDNumberInput:"",
            IsOnlyNum:false,
            IsOnlyEng:false,
            maxlength:22,
            NumPidErr:""
        }
    },
    computed : {
        ...mapState(['pool'])
    },
    methods: {
        initPage () {
            this.initPool(this.$data)
        },
        onBack () {
            exitScene("STA_BACK");
        },
        onSure () {
            if (!this.validate()) return
            this.submit(this.setKeys)
            this.onContinue()
        },
        onIDNumClick () {
            if(this.IsOnlyNum == false){
                ShowEngKB('-1','-1','IDNum','证件号码');
            }else{
                ShowNumberKB('-2','-2','IDNum','证件号码');                
            }
        },

        onCustomerNameClick(){
            if(this.IsOnlyEng == true){
                ShowEngKB('-1','-1','IDName','客户姓名')
            }else{
                ShowPinyinKB('-1','-1','IDName','客户姓名');                
            }            
        },
        
        validate () {    
            var CustomerNameInput = $("#IDName").val();        
            var IDNumberInput = $("#IDNum").val();        
            if (CustomerNameInput.length == 0) {
                this.NumPidErr = "请输入您的姓名"
                return false
            }
            if (IDNumberInput.length == 0) {
                this.NumPidErr = "请输入您的证件号码"
                return false
            }
            if(this.strIdcardType != "110025"){                
                if(!checkDocumentNum(IDNumberInput,this.strIdcardType)){
                    this.NumPidErr = "请输入正确的证件号码"
                    return false
                }
            }
            this.pool.GD_NumPid = IDNumberInput;
            this.pool.GD_NamCust = CustomerNameInput;
            return true
        },
        onClearNumPidErr () {
            this.NumPidErr = ""
        },
        ...mapActions(['initPool', 'fetch', 'submit', 'onCancel', 'onContinue'])
    },
    mounted () {
        this.initPage();
        var vm = this;
        var maxlength = 0;
        var reg=/^([a-z]|[A-Z]|[0-9])*$/;
        var regEx=/^([a-z]|[A-Z]|[0-9])*$/;
        var MsgEx="";
        var CheckPos=1;
        DataTools.get("GD_CodPid|GD_NumPid",function(data){
            var strIDtype = "";
            vm.strIdcardType = data[0];
            switch(data[0]){
                case "110001":
                    strIDtype="二代身份证";
                    maxlength = 18;
                    vm.IsOnlyNum = true;
                    reg=/^[0-9]*$/;
                    regEx=/^[0-9]*$/;
                    MsgEx="二代身份证首位只能为数字";
                    break;
                case "110019":
                    strIDtype="港澳居民来往内地通行证";
                    maxlength = 9;
                    regEx=/^[HM]{1}$/;
                    MsgEx="港澳居民来往内地通行证首位只能为“H”或“M”";
                    setVar("GD_CodCertOrg","公安部");
                    break;
                case "110021":
                    strIDtype="台湾居民来往大陆通行证";
                    maxlength = 8;
                    vm.IsOnlyNum = true;
                    reg=/^[0-9]*$/;
                    regEx=/^[0-9]{1}$/;
                    setVar("GD_CodCertOrg","公安部");
                    break;
                case "110037":
                    strIDtype="外国人永久居留证";
                    vm.IsOnlyEng = true;
                    maxlength = 15;
                    CheckPos=3;
                    regEx=/^[a-zA-Z]{1}$/;
                    strIDtype="外国人永久居留证";
                    MsgEx="外国人永久居留证前3位只能为字母";
                    setVar("GD_CodCertOrg","公安部");
                    break;
                case "110025": 
                    strIDtype="外国护照";
                    vm.IsOnlyEng = true;
                    maxlength = 18;
                    break;
                default:
                    strIDtype="";
                    break;
            }
            $("#IDTypeSelect").html(strIDtype);
        });  
        document.getElementById("IDName").oninput=onIDName;       
         function onIDName() {            
            var writing = $(this).val();
            var writinglen = writing.replace(/[^\x00-\xff]/g,"01").length;
            if(writinglen > 40){
                writing=writing.substr(0,writing.length-1)
                $(this).val(writing);
            }    
        } 
        document.getElementById("IDNum").oninput=onIDNum;
        function onIDNum() {    
            var writing = $(this).val();
            var writinglen = writing.length;
            var bShowLastValue = true;
            var tmpStrErr = "";            
            var strLastVal = writing.substr(writinglen-1,1);

            if(!reg.test(writing) || writinglen > maxlength){
                bShowLastValue = false;
            }else{
                if(writinglen <= CheckPos){
                    if(!regEx.test(strLastVal) && strLastVal != ""){
                        bShowLastValue = false;
                        tmpStrErr = MsgEx;     
                    }
                }else if(vm.strIdcardType == "110037"){
                    var regNum = /^[0-9]*$/;
                    if(!regNum.test(strLastVal)){
                        bShowLastValue = false;
                        tmpStrErr = MsgEx;         
                    }
                }
            }  
            if(bShowLastValue == false){
                writing=writing.substr(0,writinglen-1)
                $(this).val(writing); 
            }     
            vm.NumPidErr = tmpStrErr;      
        }  
    }  
}
</script>