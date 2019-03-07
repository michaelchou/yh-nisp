<style scoped>
.nice-select {
    width: 70%;
}
</style>

<template>
    <div>
        <x-header></x-header>
        <EMBED name="ViewSound" SRC="wav/请联系审核员输入指纹编号.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
		<main class="main">    
            <div class="content_c">
                <div class="content_l">
                    <img id="IMG" :src="$root.imgPath('img/'+$root.getImgPath()+'ScanFinger.gif')" >
                </div >
                <div class="content_r">
                    <p class="r_title">工作人员审核</p>
                    <div class="r_content">
                        <div class="nice-select" name="nice-select" style="z-index:20060">
                            <p id="auditor" type="text"  readonly></p>
                        </div>
                        <div class="r_content_div2">
                            <p id="AuditTips"></p>
                        </div>
                        <br>
                        <div class="r_content_div3">
                        <p id="ErrorInfo"></p> 
                        </div>
                    </div>

                    <!-- <div id="marketId" @click="manyTest">业绩<br>登记<br>维护</div> 实时登记部分涉及公共页面,暂时屏蔽-->

                </div>
            </div>
        </main>

        <x-dialog-selectNow :show="showMarketer" :childShow="showPerson" title="营销人员"
			:data="marketerData"
            :value="marketerCode"
			@cancel="onManyCancel" @confirm="onChooseLevel" @insertName="onInsertName" :childData="name4Value" >
		</x-dialog-selectNow>
    </div>
</template>
<script> 
import { mapState, mapActions } from 'vuex' 

export default {
    data () {        
        return {
            getKeys: ['D00_D02_marketPersonIdList'],
            setKeys: ['D00_D02_marketPersonNow1','D00_D02_marketPersonNow2','D00_D02_marketPersonNow3','D00_D02_marketPersonNow4'],
			iid:'',
			showName:'',
            name4Value:'',
            name1Val:'',
            name2Val:'',
            name3Val:'',
            name4Val:'',

			marketerName: "",
			marketerCode: "",
            showMarketer: false,
            showPerson:false
        }
	},
    methods:{
    initPage () {
        this.initPool(this.$data)
	},
	manyTest () {
       this.showMarketer = true;
       setVar("D00_D02_hasRegisted",1);//表示进行了实时登记
    },
    onManyCancel () {
       this.showMarketer = false;

    },
    onInsertName(){
        var vm = this;
        vm.iid=document.activeElement.id;
        document.getElementById(""+vm.iid+"").value="";
// 			alert("当前点击的id"+vm.iid);
// 			alert("开启弹框");
        vm.showPerson=true;
    },
    onChooseLevel (index, item) {
        
	   this.marketerCode = item.value;
	   this.marketerName = item.key;
	  //alert(item.key);
	   document.getElementById(""+this.iid+"").value=""+item.key;
	   document.getElementById(""+this.iid+"").name=""+item.value;
       var trr=document.getElementById(""+this.iid+"").parentElement.parentElement.parentElement.getElementsByTagName("input");
       trr[3].name=$("#auditor").html();
	   for(var i=0;i<trr.length-1;i++){
		   if(trr[i].value==""||trr[i].value==null){
               trr[i].value=item.key;
               trr[i].name=item.value;
		   }
       }
       var name1=trr[0].name+"|"+trr[0].value;
       var name2=trr[1].name+"|"+trr[1].value;
       var name3=trr[2].name+"|"+trr[2].value;
       var name4=trr[3].name+"|"+trr[3].value;
       this.name1Val=name1;
       this.name2Val=name2;
       this.name3Val=name3;
       this.name4Val=name4;	
       setVar("D00_D02_marketPersonNow1",name1);
       setVar("D00_D02_marketPersonNow2",name2);
       setVar("D00_D02_marketPersonNow3",name3);
       setVar("D00_D02_marketPersonNow4",name4);
    //    alert(this.name4Value);
    // document.getElementById("name4").value=this.name4Value;
    this.showPerson=false;
	this.showMarketer = true;
    },
	  onCancel () {
       this.showMarketer = false;
    },
    ...mapActions(['initPool', 'fetch', 'submit', 'onCancel', 'onContinue'])
},
    created (){   
        var vm = this;
            //监听行事件
        this.$root.$on('onClickButton', onClickButton);
        function onClickButton(sel) 
        {
             vm.iid=document.activeElement.id;
                vm.manyTest();
             };
    },
    destroyed () 
    { 
        this.$root.$off('onClickButton'); 
    },
    mounted(){
        this.initPool(this.$data);
        var vm=this;
        vm.marketerData=JSON.parse('[{"key":"小鱼","value":"9"},{"key":"小鱼","value":"9"},{"key":"小周","value":"8"},{"key":"郑奎","value":"7"},{"key":"张三","value":"1"},{"key":"李四","value":"2"},{"key":"王二","value":"3"},{"key":"小明","value":"4"},{"key":"李四","value":"2"},{"key":"王二","value":"3"},{"key":"李四","value":"2"},{"key":"王二","value":"3"}]');
    DataTools.get("GD_A01_ManagerUser|GD_MaxTimeForFinger|GD_UsrNum|GD_A01_MenuID",function(data){
        var jsonArrayData ="";
        if ( data[0] != undefined && data[0] != null ) {         
            jsonArrayData = JSON.parse(data[0]);
            var auditorId=new Array();
            var auditorName=new Array();
            if(jsonArrayData.length == 0){//列表为空
                setVar("GD_ErrReason","AuditorListEmpty");
                exitScene("STA_AUDITOREMPTY");
            }
            for (var i = 0; i < jsonArrayData.length; i++) {
                auditorId.push(jsonArrayData[i].userNum);
                auditorName.push(jsonArrayData[i].userNum);//只显示用户编码
            }
            createSelect(auditorId,auditorName,"auditor");       
           if(data[2]!=""&&data[2]!=null){
                $("#auditor").html(data[2]);
                $("#auditor").attr('data-value',data[2]);
                setVar("GD_UsrNum",data[2]);
                setVar("GD_A01_NumUrCfg",data[2]);
            }else{
                $("#auditor").html(auditorName[0]);
                $("#auditor").attr('data-value',auditorId[0]);

                setVar("GD_UsrNum",auditorName[0]);
                setVar("GD_A01_NumUrCfg",auditorName[0]);
            }
         }else{//列表为空
            setVar("GD_ErrReason","AuditorListEmpty");
            exitScene("STA_AUDITOREMPTY");
         }

        //提示信息参数化（转账取00087，其余默认设置）
        var strMenuID = data[3];
        var strMsgTip = "";
        var strMsg = "";
        if(strMenuID == "030001"){
            //if (ShowDivList != "" && ShowDivList != null && ShowDivList != undefined){   
            //    var JsonMsgTip = JSON.parse(ShowDivList);
            //    for(var i = 0;i<JsonMsgTip.length;i++){
            //        if(JsonMsgTip[i]['00087'] != "" && JsonMsgTip[i]['00087'] != null && JsonMsgTip[i]['00087']!= undefined) {
            //            strMsgTip = JsonMsgTip[i]['00087'];
            //        }
            //    }
            //}
            //if(strMsgTip != "" && strMsgTip != null && strMsgTip != undefined){
            //    var strMsgTipArray = strMsgTip.split("@@");
            //    for (var i=0; i<strMsgTipArray.length; i++){
            //        if(strMsg == ""){
            //            strMsg = strMsgTipArray[i];
            //        }else{
            //            strMsg = strMsg + "<br>" + strMsgTipArray[i];
            //        }
            //    }
            //}
            //if(strMsg != "" && strMsg != null && strMsg != undefined){
            //    $("#AuditTips").html(strMsg);
            //}else{
            //    $("#AuditTips").html("1.请核实该笔业务是否为客户本人办理");
            //}
            $("#AuditTips").html("1.请提醒客户注意资金安全，谨防电信诈骗<br>2.提醒客户实时转账不可撤销");
        }else{
            $("#AuditTips").html("1.请核实该笔业务是否为客户本人办理");
        }
        //  alert("data1"+data[1]);
         if(data[1] == "10")
         {
            $("#ErrorInfo").html("请选择用户后<br>进行指纹确认");
         }
         else
         {
            $("#ErrorInfo").html("请重按指纹<br>剩余次数："+ data[1] +"次");
            $("#ErrorInfo").css("color","red");
         }

        //清空用户信息,重新选择
        //setVar("GD_UsrNum","");
       
        var nodes = document.querySelectorAll('[name="nice-select"] li');
        for(var i=0; i<nodes.length; i++) {
            nodes[i].onclick=onNiceSelectLiClick;
        }
        function onNiceSelectLiClick(e){
                //var txt = $(this).text();
                //保存审核员编码
                var val=$(this).attr("data-value");
                setVar("GD_UsrNum",val);
                setVar("GD_A01_NumUrCfg",val);
                var index = $(this).index();

                vm.name4Value=jsonArrayData[parseInt(index)].userNam;
                //  for (var i = 0; i < jsonArrayData.length; i++) {
                //     if(jsonArrayData[i].userNum == val){
                //         alert(jsonArrayData[i].userNam);
                //         vm.name4Value = jsonArrayData[i].userNam;
                //         break;
                //     }
                // }
                 vm.name4Val=val+"|"+vm.name4Value;
                 setVar("D00_D02_marketPersonNow4",vm.name4Val);
                // alert(vm.name4Val);
                
                 e.stopPropagation();
        }
        ///初始化操作人人名
        for (var i = 0; i < jsonArrayData.length; i++) {
               if($("#auditor").html()==jsonArrayData[i].userNum){
                    vm.name4Value=jsonArrayData[i].userNam;
               }
            }
       
       


     });    
    //  vm.name4Value=$("#auditor").html();
    //  $("#auditor").parent().find("li").click(function(){
    //      var nowVal=$("#auditor").html();
    //      if(vm.name4Value!=nowVal){
    //          vm.name4Value=nowVal;
    //      }
    //  });   
 }//mouted结束
}
</script> 