<style scoped> 
    .nice-select {
        width: 70%;
    }
    #inputPopup {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0%;
        left: 0%;
        /* z-index: 3000; */
        background: url('img/首页模糊背景.png') no-repeat;
    }
.MediaPic{
    width: 80%;
    height: 82%;
    margin: 2% auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}  
.CardMedia{
    position: relative;
    text-align: center;
    width: 40%;
    height: 85%;
    margin: 2% auto;
    background: transparent;
    border: 1px solid #008b6e;
    border-radius: 10px;
    box-shadow: 0px 16px 65px -10px #999;
  }
.CardMedia.on{
  background: rgba(130, 219, 206,0.4);
 }
.CardMedia img{
    display: flex;
    justify-content:center;
    align-items: center;
}
.CardMedia p {
   font-size: 2.5rem;
   margin-top:-10px;
   margin-bottom: 10px;
  }
 .CardMedia p span{
      font-size:1.7rem;
      text-align:left;
  }
 .x-modal{
        width:75%;
        height:75%;
        margin: 6% auto;
    }
 .Result_top{
    height: 12%;
    text-align: center;
    position: relative;
    top:40px;
}
 .Result_top p{
        display: inline-block;
        font-size: 1.8rem;
    }
 .mybtn{
        margin-left:45%; 
    }
.gradient{ 
    background: -webkit-linear-gradient(top, rgb(186,239,246), rgb(142,203,211));
    background: -moz-linear-gradient(top, rgb(186,239,246), rgb(142,203,211));
    background: linear-gradient(to bottom,rgb(186,239,246), rgb(142,203,211));  
    /* background: linear-gradient(#D4F7FD, #95D5DF); 标准的语法  */
} 
.clsFork{
    margin-left: 92%;
    width: 100px;
    height: 9%;
}
.clsFork img{
    padding: 10px;
    border-radius: 10px;
    z-index: 100;
    margin-left: 36px;
}
@media screen and (min-width: 1200px) and  (max-width:1380px) {
    .CardMedia{
        height: 78%;
        width: 45%;
        margin: 4% auto;
    }
    .clsFork img{
        z-index: 100;
        padding: 10px;
        border-radius: 10px;
        margin-left: 5px;  
    }
}
</style>

<template>
    <div>
        <x-header></x-header>
        <EMBED name="ViewSound" SRC="wav/请联系审核员输入指纹编号.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
		<main class="main">
            <div class="content_c">
                <div class="content_l">
                    业务内容确认
                    <div style="width:100%; height: 60rem"></div>  
                    <div class="btnbox">
                        <button class="btn" style="margin-right:3%;margin-left:3%;" id="btn_ZoomOut">缩小（-）</button>
                        <button class="btn" style="margin-right:3%;margin-left:3%;" id="btn_ZoomIn">放大（+）</button>
                        <button class="btn"  id="reSignName" style="display:none;margin-right:3%;margin-left:3%;">重新签名</button>
                        <button class="btn"  id="OtherButton" style="display:none;margin-right:3%;margin-left:3%;"></button>
                    </div>
                </div > 
                <div class="content_r">
                    <p class="r_title">工作人员审核</p>
                    <div class="r_content">
                        <div class="nice-select" name="nice-select">
                            <p id="auditor" type="text" readonly></p>
                        
                        </div>
                        <div class="r_content_div1"><img id="IMG"  src="" ></div>
                        <div class="r_content_div2">
                            <p id="AuditTips"></p>
                        </div>
                        <br>
                        <div class="r_content_div3">
                        <p id="ErrorInfo"></p> 
                        </div>
                    </div>
                    <!-- <div id="marketId" @click="manyTest">业绩<br>登记<br>维护</div>   实时登记部分暂时屏蔽 -->
                </div>
            </div>
            <div id="inputPopup" style="display:none; position: fixed;">
                <div class="x-modal gradient">
                    <div @click="OnClose" style="margin-left:92%;height:10px;" >
                        <img style="padding:10px;border-radius:10px" :src ="'img/删除.png'"/>
                    </div>
                    <div class="MediaPic">
                        <div class="CardMedia" id="MSCard" v-show="Page1">
                            <img height="35%" :src="Pic_URL"/>
                            <p>{{recomprc}}</p>
                            <p><span>{{prcfeature}}。{{mktevent}}。</span></p>
                            <p>预授信均值：<font style="color:red;">{{Credithigh}}元</font></p>
                        </div>
                        <div class="CardMedia" v-show="Page2">
                            <img :src="'./img/二维码-个人掌银.png'"/>
                            <p v-html="marketingText"></p>
                        </div>
                    </div>
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
            Pic_URL:"",
            recomprc:"",
            prcfeature:"",
            mktevent:"",
            Credithigh:"",
            LocalPic_URL:"./img/二维码-个人掌银.png",
            CodPdbreed:[],
            Page1:true,
            Page2:true,
            marketingText:"",
            marketingText1:"开通电子银行可在线上享受理财、转账、查询、信用卡还款、生活缴费、外汇等服务，<font style ='color:red'>手续费全免</font>，全方面满足您的生活所需，快来开通吧！",
            marketingText2:"开通消息服务可及时享受您的账户动账通知，全天候服务，及时响应，为您提供7×24小时的服务。",

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
    created () {	
       this.$root.$on('beforeQuit', onBeforeQuit);
        function onBeforeQuit() {
            $("#PDFViewer").attr('height', "0").attr('width', "0").css('left',"20%");
        }
		
	this.$root.$on('cancelQuit', onCancelQuit);
        function onCancelQuit() {
            setTimeout(onPDFViewer, 500);
        }

        function onPDFViewer(){
            $("#PDFViewer").attr('height', "60%").attr('width', "60%").css('left',"8%");
         };
		
	 this.$root.$on('sale', onSale);
        function onSale() {
            $("#PDFViewer").attr('height', "0").attr('width', "0").css('left',"20%");
            $("#inputPopup").css('display','block');
        }
    },
    beforeDestroy(){
        $("#PDFViewer").attr('height', "0").attr('width', "0").css('left',"20%");
    },
    destroyed () {  
        this.$root.$off('beforeQuit');
        this.$root.$off('cancelQuit');
        this.$root.SaleProdSum = "";
        this.$root.saleShow = false;
    },
    mounted(){
        var nRet ;

        var strOntherButtonName1,strOntherButtonName2;
        var strpdf1,strpdf2;
        var bButton = false;
        var vm=this;

        vm.marketerData=JSON.parse('[{"key":"小鱼","value":"9"},{"key":"小鱼","value":"9"},{"key":"小周","value":"8"},{"key":"郑奎","value":"7"},{"key":"张三","value":"1"},{"key":"李四","value":"2"},{"key":"王二","value":"3"},{"key":"小明","value":"4"},{"key":"李四","value":"2"},{"key":"王二","value":"3"},{"key":"李四","value":"2"},{"key":"王二","value":"3"}]');
    DataTools.get("GD_A01_ManagerUser|GD_A01_FingerShowCampic|GD_MaxTimeForFinger|GD_A01_EsignState|GD_A01_MenuID|GD_UsrNum|GD_A01_BusTip|GD_B01_Trans_SoldierProfession",function(data){

        var strMenuID = data[4];
        if(strMenuID=="090001" || strMenuID=="090003"){
            //信用卡申请
            strOntherButtonName1 = "申请表";
            strOntherButtonName2 = "申请书";
            strpdf1 = "C:\\csap\\Nisp\\conf\\PDFs\\OpenCard.pdf";
            strpdf2 = "C:\\csap\\Nisp\\conf\\PDFs\\CreditApply.pdf";
            $("#OtherButton").css("display","inline-block");
            $("#OtherButton").html(strOntherButtonName1);
            nRet = PDFViewer.OpenFile(strpdf1);     
        }else if(strMenuID=="090002"){
            //信用卡现金分期
            nRet = PDFViewer.OpenFile("C:\\csap\\Nisp\\conf\\PDFs\\090002.pdf");     
        }else{
            nRet = PDFViewer.OpenFile("C:\\csap\\Nisp\\conf\\PDFs\\OpenCard.pdf");
        }
        PDFViewer.SetViewFit("0");
        //alert(nRet);
        setTimeout(onTimeoutshow, 500 );
		
		function onTimeoutshow()
		{
            $("#PDFViewer").attr('height', "60%").attr('width', "60%").css('left',"8%");
        }
            if(data[3] != 0)
			{
                $("#reSignName").css("display","inline-block");
            }
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
                if(data[5]!=""&&data[5]!=null){
                    $("#auditor").html(data[5]);
                    $("#auditor").attr('data-value',data[5]);
                    setVar("GD_UsrNum",data[5]);
                    setVar("GD_A01_NumUrCfg",data[5]);
                    
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
            pageLog("Page GetValue[GD_A01_FingerShowCampic]:"+data[1]);
            $("#IMG").attr("src",data[1]);

            //提示信息参数化（转账取00063，其余默认设置）
            var strMsgTip = "";
            var strMsg = "";
            if(strMenuID == "030001"){
                //if (ShowDivList != "" && ShowDivList != null && ShowDivList != undefined){   
                //    var JsonMsgTip = JSON.parse(ShowDivList);
                //    for(var i = 0;i<JsonMsgTip.length;i++){
                //        if(JsonMsgTip[i]['00063'] != "" && JsonMsgTip[i]['00063'] != null && JsonMsgTip[i]['00063']!= undefined) {
                //            strMsgTip = JsonMsgTip[i]['00063'];
                //        }
                //    }
                //}
                //if(strMsgTip != "" && strMsgTip != null && strMsgTip != undefined){
                //    var strMsgTipArray = strMsgTip.split("@@");
                //    for (var i=0; i<strMsgTipArray.length; i++){
                //        if(strMsg == ""){
                //           strMsg = strMsgTipArray[i];
                //        }else{
                //            strMsg = strMsg + "<br>" + strMsgTipArray[i];
                //        }
                //    }
                //}
                //if(strMsg != "" && strMsg != null && strMsg != undefined){
                //    $("#AuditTips").html(strMsg);
                //}else{
                //    $("#AuditTips").html("1.请核实该笔业务是否为客户本人办理<br>2.请确认客户签名是否准确");
                //}
                $("#AuditTips").html("1.请提醒客户注意资金安全，谨防电信诈骗<br>2.请确认客户签名是否准确<br>3.提醒客户实时转账不可撤销");
            }
            else if (("010002" == strMenuID || "010001" == strMenuID || "060001" == strMenuID) && "1" == data[7])
            {
                //资料修改/开卡/基金签约APP且军人职业变更
                $("#AuditTips").html("1.请核实该笔业务是否为客户本人办理<br>2.请确认客户签名是否准确<br>3.职业有变更，请核对军人职业信息，并留存相关证明材料");
                $("#AuditTips").css('font-size','2.0rem');
            }
            else
            {
                $("#AuditTips").html("1.请核实该笔业务是否为客户本人办理<br>2.请确认客户签名是否准确");
            }
            //  alert("data1"+data[1]);
            if(data[2] == "10")
            {
                $("#ErrorInfo").html("请选择用户后<br>进行指纹确认");
            }
            else
            {
                $("#ErrorInfo").html("请重按指纹<br>剩余次数："+ data[2] +"次");
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
                // for (var i = 0; i < jsonArrayData.length; i++) {
                //     if(jsonArrayData[i].userNum == val){
                //         alert(jsonArrayData[i].userNam);
                //         vm.name4Value = jsonArrayData[i].userNam;
                //         break;
                //     }
                // }
                vm.name4Val=val+"|"+vm.name4Value;
                setVar("D00_D02_marketPersonNow4",vm.name4Val);

                e.stopPropagation();
            }
            ///////////////初始化操作人人名////////////////////
            for (var i = 0; i < jsonArrayData.length; i++) {
               if($("#auditor").html()==jsonArrayData[i].userNum){
                    vm.name4Value=jsonArrayData[i].userNam;
               }
            }
        });
         DataTools.get("GD_A01_Trans_Credithigh|GD_A01_TcpCard_Data|GD_A01_Trans_Recomprc|GD_A01_Trans_Recomproccord|GD_A01_Trans_Prcfeature|GD_A01_Trans_Mktevent",function(data){
        
            vm.recomprc   = data[2];     //推荐卡种
            vm.prcfeature =data[4];   //卡种特色
            vm.mktevent   = data[5];     //营销活动
            vm.Credithigh = data[0];   //预授信均值
            //图片路径
            vm.Pic_URL = GetVluPicSrc(data[3],data[1]) + data[3] + ".jpg";
    
            function GetVluPicSrc(strProductCord,strJsonData){
			//根据产品代码查询产品图片路径
			if ("" != strJsonData && undefined != strJsonData)
			{
				//转JSON对象
				var jsonData = JSON.parse(strJsonData);
                //遍历数据字典中的所有基金类型
				for (var i = 0; i < jsonData.length; i++)
				{
                    if (strProductCord == jsonData[i].COD_PD)
                    {
                        return jsonData[i].VLU_PIC_1;
                    }
				}
			}
            return "";
		}
        });
        document.getElementById("reSignName").onclick=onReSignName;
        function onReSignName(){ 
			exitScene("STA_RESIGN");
		}
        //缩小
        document.getElementById("btn_ZoomOut").onclick=onZoomOut;
        function onZoomOut(){
			PDFViewer.ZoomOut();            
        }
        //放大
        document.getElementById("btn_ZoomIn").onclick=onZoomIn;
        function onZoomIn(){
			PDFViewer.ZoomIn();            
        }
        //其他按钮
        document.getElementById("OtherButton").onclick=onOnther;
        function onOnther(){
            $("#OtherButton").prop('disabled', true);
			if(bButton){
                $("#OtherButton").html(strOntherButtonName1);
                nRet = PDFViewer.OpenFile(strpdf1);   
            }else{
                $("#OtherButton").html(strOntherButtonName2);
                nRet = PDFViewer.OpenFile(strpdf2);   
            }  
            bButton = !bButton;
            setTimeout(UndisabledButton, 2000);
        }
        function UndisabledButton(){
            $("#OtherButton").prop('disabled', false);
        }
        //精准营销处理
        DataTools.get("GD_MarketingAllNumber|GD_A01_Trans_Tagflg|GD_A01_CodPdbreed|GD_A01_IsLogin",function(data){
            var strCodPdbreed = data[2].trim();//二维码推送内容
            if (data[3] == "1"){
                //只有登录模式才有被动营销
                //有营销产品
                if(parseInt(data[0]) >= 1)
                {
                    //营销产品数量>=1则可点击Email图片
                    if("N" == data[1]){
                        vm.Page1 = true;
                    }
                    else{
                        vm.Page1 = false;
                    }
                    if(strCodPdbreed.length > 0 ){
                        vm.Page2 = true;
                    }
                    else{
                        vm.Page2 = false;
                    }
                    if(strCodPdbreed.indexOf("P00013")!= -1
                       && strCodPdbreed.indexOf("P00008") == -1 
                       && strCodPdbreed.indexOf("P00009") == -1){
                        vm.marketingText = vm.marketingText2;        
                    }
                    else{
                        vm.marketingText = vm.marketingText1;    
                    }
                    vm.$root.SaleProdSum =data[0];
                    vm.$root.saleShow = true;
                    vm.$root.SaleProdSumShow = true;
                    $(".emailf").css("display","inline-block");
                    $(".emailf").children().html(vm.$root.SaleProdSum);
                }
                else
                {
                    vm.$root.SaleProdSum = "";
                    vm.$root.saleShow = false;
                    vm.$root.SaleProdSumShow = true;
                    $(".emailf").css("display","none");
                    $(".emailf").children().html();
                }
            }
        });
        this.initPage();
    },
    methods: {
        initPage () {
            this.initPool(this.$data);
        },
        OnClose(){
            $("#PDFViewer").attr('height', "60%").attr('width', "60%").css('left',"8%");
            $("#inputPopup").css('display','none');
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
    ...mapActions(['initPool', 'fetch', 'submit', 'onCancel', 'onContinue','exitScene'])
       //...mapActions(['initPool','fetch','exitScene'])
    },
    watch:{
		pool(value){
            //监听数据池变量是否已返回，保证数据池获取成功后再渲染页面
            if(value.hasOwnProperty("GD_A01_Trans_Mktevent")){
                this.initData();
            }
        }
	}
}
</script> 