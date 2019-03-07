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
  background: url("img/首页模糊背景.png") no-repeat;
}
.MediaPic {
  width: 80%;
  height: 82%;
  margin: 2% auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.CardMedia {
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
.CardMedia.on {
  background: rgba(130, 219, 206, 0.4);
}
.CardMedia img {
  display: flex;
  justify-content: center;
  align-items: center;
}
.CardMedia p {
  font-size: 2.5rem;
  margin-top: -10px;
  margin-bottom: 10px;
}
.CardMedia p span {
  font-size: 1.7rem;
  text-align: left;
}

.x-modal{
  width:75%;
  height:75%;
  margin: 6% auto;
}
.x-modalForD02 {
  width: 75%;
  height: 75%;
  margin: 6% auto;
}
.Result_top {
  height: 12%;
  text-align: center;
  position: relative;
  top: 40px;
}
.Result_top p {
  display: inline-block;
  font-size: 1.8rem;
}
.mybtn {
  margin-left: 45%;
}
.gradient {
  background: -webkit-linear-gradient(
    top,
    rgb(186, 239, 246),
    rgb(142, 203, 211)
  );
  background: -moz-linear-gradient(top, rgb(186, 239, 246), rgb(142, 203, 211));
  background: linear-gradient(
    to bottom,
    rgb(186, 239, 246),
    rgb(142, 203, 211)
  );
  /* background: linear-gradient(#D4F7FD, #95D5DF); 标准的语法  */
}
.clsFork {
  margin-left: 92%;
  width: 100px;
  height: 9%;
}
.clsFork img {
  padding: 10px;
  border-radius: 10px;
  z-index: 100;
  margin-left: 36px;
}
@media screen and (min-width: 1200px) and (max-width: 1380px) {
  .CardMedia {
    height: 78%;
    width: 45%;
    margin: 4% auto;
  }
  .clsFork img {
    z-index: 100;
    padding: 10px;
    border-radius: 10px;
    margin-left: 5px;
  }
}
  .x-modalForD02{
    width: 30%;
    height: 34%;
    margin: 15% auto;
    margin-left: 72%;
    text-align: center;
    font-size: 10px;
    position: absolute;
    z-index: 300000;
    background-color: #e7faf8;
    border-radius: 0px; 
  }
  .many-dialog {
    position: absolute;
    z-index: 300000;
    width: 28%;
    height: 40%;
    right: 0%;
    bottom: 0%;
    background-color: #e7faf8;
    color: #666;
    font-size: 20px;
}

.input_info {
    width: 200px;
    height: 30px;
}
#content li {
    float: left;
    width: 30%;
    margin: 0px 0px;
}
@media screen and (min-width: 1200px) and (max-width: 1300px) {

  .x-modalForD02 {
    margin: 21% auto;
    margin-left: 72%;
  }
}


#theMarketId {
  /* position: absolute; */
  z-index: 20000;
  bottom: 25%;
  right: 5%;
  width: 120px;
  height: 120px;
  text-align:center;
  font-size: 2rem; 
  color: #008b6e;
  background: rgba(255,255,255,0.5);
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 100%;
  vertical-align:middle;
}
</style>

<template>
    <div>
        <x-header></x-header>
        <EMBED name="ViewSound" SRC="wav/请联系审核员输入指纹编号.wav" Loop=false AUTOSTART=true Hidden=true MASTERSOUND></EMBED>
		<main class="main">
            <div class="content_c">
                <div class="content_l" @click="HidBD()">
                    业务内容确认
                    <div style="width:100%; height: 60rem"></div>  
                    <div class="btnbox">
                        <button class="btn" style="margin-right:3%;margin-left:3%;" id="btn_ZoomOut">缩小（-）</button>
                        <button class="btn" style="margin-right:3%;margin-left:3%;" id="btn_ZoomIn">放大（+）</button>
                        <button class="btn"  id="reSignName" style="display:none;margin-right:3%;margin-left:3%;">重新签名</button>
                        <button class="btn"  id="OtherButton" style="display:none;margin-right:3%;margin-left:3%;"></button>
                    </div>
                </div > 
                <div class="content_r" @click="HidBD()">
                    <p class="r_title">工作人员审核</p>
                    <div class="r_content">
                        <div class="nice-select" name="nice-select" id="nice-select">
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
                    <!-- 实时登记部分暂时屏蔽 
                    <div id="marketId" @click="manyTest">登记</div>
                    class="r_content_div4"-->
                </div>
                <div id="theMarketId" @click="manyTest" v-show="ifShowMarket">业绩<br>登记<br>维护</div>
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

        <!-- :childShow="showPerson" 
         @insertName="onInsertName" :childData="name4Value" -->
        <x-dialog-selectForD02 :show="showMarketer" title="营销人员"
			:data="marketerData"
            :value="marketerCode"
			@cancel="onManyCancel" @confirm="onChooseLevel">
		</x-dialog-selectForD02>

        <transition name="fade" mode="out-in">
        <div class="inputPopup" v-show="PopupShow">
            <div class="x-modalForD02">
                <br/>
                <div>主营销人:
                  <input type="text" class="input_info" id="nam01" @click="enterNam('0')" v-model="nameValArr[0]"/></div><br/>
                <div>次营销人:
                  <input type="text" class="input_info" id="nam02" @click="enterNam('1')" v-model="nameValArr[1]"/></div><br/>
                <div>转&nbsp;介&nbsp;人&nbsp;:
                  <input type="text" class="input_info" id="nam03" @click="enterNam('2')" v-model="nameValArr[2]"/></div><br/>
                <div>操&nbsp;作&nbsp;人&nbsp;:
                  <input type="text" class="input_info" id="nam04" @click="enterNam('3')" v-model="nameValArr[3]"/></div>
                <!-- <div>{{marketPersonIdList}}</div> -->
                <div class="btnbox"><!--margin-left:10%;margin-right:10%;-->
                    <button class="btn" style="padding: 3px 15px;font-size: 2.0rem" @click="onBtnCancel">取&nbsp;消</button>
                    <button class="btn" style="padding: 3px 15px;font-size: 2.0rem" @click="onBtnClear">清&nbsp;空</button>
                    <button class="btn" style="padding: 3px 15px;font-size: 2.0rem" @click="onBtnSubmit" :disabled="disabledSubmit">确&nbsp;定</button>
                </div>
            </div>
        </div>
        </transition>

    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      Pic_URL: "",
      recomprc: "",
      prcfeature: "",
      mktevent: "",
      Credithigh: "",
      LocalPic_URL: "./img/二维码-个人掌银.png",
      CodPdbreed: [],
      Page1: true,
      Page2: true,
      marketingText: "",
      marketingText1:
        "开通电子银行可在线上享受理财、转账、查询、信用卡还款、生活缴费、外汇等服务，<font style ='color:red'>手续费全免</font>，全方面满足您的生活所需，快来开通吧！",
      marketingText2: "开通消息服务可及时享受您的账户动账通知，全天候服务，及时响应，为您提供7×24小时的服务。",

      getKeys: ["D00_D02_marketPersonIdList"],
      setKeys: [
        "D00_D02_marketPersonNow1",
        "D00_D02_marketPersonNow2",
        "D00_D02_marketPersonNow3",
        "D00_D02_marketPersonNow4"
      ],
      iid: "",
      showName: "",
      name4Value: "",
      name1Val: "",
      name2Val: "",
      name3Val: "",
      name4Val: "",
      nameValArr: [],
      marketerArr: [],
      marketerName: "",
      marketerData: "",
      marketerCode: "",
      marketerNum: 0,
      showMarketer: false,
      showPerson: false,
      PopupShow: false,
      marketPersonIdList: "",
      JsonMarketInfoList:"",
      JsonDataForDefault:"",
      ifHidden:false,
      tempNam:[],
      tempMarket:[],
      ifShowMarket:false,
    };
  },
  created() {
    this.$root.$on("beforeQuit", onBeforeQuit);
    function onBeforeQuit() {
      $("#PDFViewer")
        .attr("height", "0")
        .attr("width", "0")
        .css("left", "20%");
    }

    this.$root.$on("cancelQuit", onCancelQuit);
    function onCancelQuit() {
      setTimeout(onPDFViewer, 500);
    }

    function onPDFViewer() {
      $("#PDFViewer")
        .attr("height", "60%")
        .attr("width", "60%")
        .css("left", "8%");
    }

    this.$root.$on("sale", onSale);
    function onSale() {
      $("#PDFViewer")
        .attr("height", "0")
        .attr("width", "0")
        .css("left", "20%");
      $("#inputPopup").css("display", "block");
    }
  },
  beforeDestroy() {
    $("#PDFViewer")
      .attr("height", "0")
      .attr("width", "0")
      .css("left", "20%");
  },
  destroyed() {
    this.$root.$off("beforeQuit");
    this.$root.$off("cancelQuit");
    this.$root.SaleProdSum = "";
    this.$root.saleShow = false;
  },
  mounted() {
    var nRet;

    var strOntherButtonName1, strOntherButtonName2;
    var strpdf1, strpdf2;
    var bButton = false;
    var vm = this;

        // alert("In");
 DataTools.get(
      "D00_D02_marketPersonIdList|D00_D02_hasRegisted|C_A01_SYSPRM_00143",
      function(data) {
        
        setVar("D02_ifAuditor","1");
        if(data[0] != ""){
          vm.JsonMarketInfoList = JSON.parse(data[0]);
          vm.marketerData = JSON.parse(data[0]);
        }else{
          vm.JsonMarketInfoList = "";
          vm.marketerData = "";
        }
          if(data[1] != "1"){
            setVar("D00_D02_hasRegisted","1");//表示进行了实时登记
          }
          if(data[2] == "0"){
            vm.ifShowMarket = true;
          }else{
            vm.ifShowMarket = false;
          }
      
        // alert(vm.marketerData);
      });
    // vm.marketerData = JSON.parse(
    //   '[{"key":"小鱼","value":"9"},{"key":"小鱼","value":"9"},{"key":"小周","value":"8"},{"key":"郑奎","value":"7"},{"key":"张三","value":"1"},{"key":"李四","value":"2"},{"key":"王二","value":"3"},{"key":"小明","value":"4"},{"key":"李四","value":"2"},{"key":"王二","value":"3"},{"key":"李四","value":"2"},{"key":"王二","value":"3"}]'
    // );
    DataTools.get(
      "GD_A01_ManagerUser|GD_A01_FingerShowCampic|GD_MaxTimeForFinger|GD_A01_EsignState|GD_A01_MenuID|GD_UsrNum|GD_A01_BusTip|GD_B01_Trans_SoldierProfession",
      function(data) {
        var strMenuID = data[4];
        if (strMenuID == "090001" || strMenuID == "090003") {
          //信用卡申请
          strOntherButtonName1 = "申请表";
          strOntherButtonName2 = "申请书";
          strpdf1 = "C:\\csap\\Nisp\\conf\\PDFs\\OpenCard.pdf";
          strpdf2 = "C:\\csap\\Nisp\\conf\\PDFs\\CreditApply.pdf";
          $("#OtherButton").css("display", "inline-block");
          $("#OtherButton").html(strOntherButtonName1);
          nRet = PDFViewer.OpenFile(strpdf1);
        } else if (strMenuID == "090002") {
          //信用卡现金分期
          nRet = PDFViewer.OpenFile("C:\\csap\\Nisp\\conf\\PDFs\\090002.pdf");
        } else {
          nRet = PDFViewer.OpenFile("C:\\csap\\Nisp\\conf\\PDFs\\OpenCard.pdf");
        }
        PDFViewer.SetViewFit("0");
        //alert(nRet);
        setTimeout(onTimeoutshow, 500);

        function onTimeoutshow() {
          $("#PDFViewer")
            .attr("height", "60%")
            .attr("width", "60%")
            .css("left", "8%");
        }
        if (data[3] != 0) {
          $("#reSignName").css("display", "inline-block");
        }
        var jsonArrayData = "";
        if (data[0] != undefined && data[0] != null) {
          jsonArrayData = JSON.parse(data[0]);
          vm.JsonDataForDefault = JSON.parse(data[0]);
          var auditorId = new Array();
          var auditorName = new Array();
          if (jsonArrayData.length == 0) {
            //列表为空
            setVar("GD_ErrReason", "AuditorListEmpty");
            exitScene("STA_AUDITOREMPTY");
          }
          for (var i = 0; i < jsonArrayData.length; i++) {
            auditorId.push(jsonArrayData[i].userNum);
            auditorName.push(jsonArrayData[i].userNum); //只显示用户编码
          }
          createSelect(auditorId, auditorName, "auditor");
          
          for(var i = 0;i<jsonArrayData.length;i++){
            // alert("jsonArrayData["+i+"].userNam : "+jsonArrayData[i].userNam);
            // alert("auditor : "+$("#auditor").text());
            if($("#auditor").text() == ""){
              vm.name4Value = jsonArrayData[0].userNam;
              break;
            }
            if(jsonArrayData[i].userNum == $("#auditor").text()){
              vm.name4Value = jsonArrayData[i].userNam;
              break;
            }
          }
          vm.nameValArr[0]  = vm.name4Value;
          vm.tempNam[0] = vm.nameValArr[0];

          if (data[5] != "" && data[5] != null) {
            $("#auditor").html(data[5]);
            $("#auditor").attr("data-value", data[5]);
            setVar("GD_UsrNum", data[5]);
            setVar("GD_A01_NumUrCfg", data[5]);

          } else {
            $("#auditor").html(auditorName[0]);
            $("#auditor").attr("data-value", auditorId[0]);
            setVar("GD_UsrNum", auditorName[0]);
            setVar("GD_A01_NumUrCfg", auditorName[0]);
            
          }
        } else {
          //列表为空
          setVar("GD_ErrReason", "AuditorListEmpty");
          exitScene("STA_AUDITOREMPTY");
        }
        pageLog("Page GetValue[GD_A01_FingerShowCampic]:" + data[1]);
        $("#IMG").attr("src", data[1]);

        //提示信息参数化（转账取00063，其余默认设置）
        var strMsgTip = "";
        var strMsg = "";
        if (strMenuID == "030001") {
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
          $("#AuditTips").html(
            "1.请提醒客户注意资金安全，谨防电信诈骗<br>2.请确认客户签名是否准确<br>3.提醒客户实时转账不可撤销"
          );
        } else if (
          ("010002" == strMenuID ||
            "010001" == strMenuID ||
            "060001" == strMenuID) &&
          "1" == data[7]
        ) {
          //资料修改/开卡/基金签约APP且军人职业变更
          $("#AuditTips").html(
            "1.请核实该笔业务是否为客户本人办理<br>2.请确认客户签名是否准确<br>3.职业有变更，请核对军人职业信息，并留存相关证明材料"
          );
          $("#AuditTips").css("font-size", "2.0rem");
        } else {
          $("#AuditTips").html("1.请核实该笔业务是否为客户本人办理<br>2.请确认客户签名是否准确");
        }
        //  alert("data1"+data[1]);
        if (data[2] == "10") {
          $("#ErrorInfo").html("请选择用户后<br>进行指纹确认");
        } else {
          $("#ErrorInfo").html("请重按指纹<br>剩余次数：" + data[2] + "次");
          $("#ErrorInfo").css("color", "red");
        }

        //清空用户信息,重新选择
        //setVar("GD_UsrNum","");
        var nodes = document.querySelectorAll('[name="nice-select"] li');
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].onclick = onNiceSelectLiClick;
        }
        function onNiceSelectLiClick(e) {
          //var txt = $(this).text();
          //保存审核员编码
          var val = $(this).attr("data-value");
          setVar("GD_UsrNum", val);
          setVar("GD_A01_NumUrCfg", val);

          var index = $(this).index();

          vm.name4Value = jsonArrayData[parseInt(index)].userNam;
          // for (var i = 0; i < jsonArrayData.length; i++) {
          //     if(jsonArrayData[i].userNum == val){
          //         alert(jsonArrayData[i].userNam);
          //         vm.name4Value = jsonArrayData[i].userNam;
          //         break;
          //     }
          // } 
          vm.nameValArr[0] = vm.name4Value;
          vm.tempNam[0] = vm.nameValArr[0];

          e.stopPropagation();
        }
        ///////////////初始化操作人人名////////////////////
        // for (var i = 0; i < jsonArrayData.length; i++) {
        //   if ($("#auditor").html() == jsonArrayData[i].userNum) {
        //     vm.name4Value = jsonArrayData[i].userNam;
        //   }
        // }
      }
    );
    DataTools.get(
      "GD_A01_Trans_Credithigh|GD_A01_TcpCard_Data|GD_A01_Trans_Recomprc|GD_A01_Trans_Recomproccord|GD_A01_Trans_Prcfeature|GD_A01_Trans_Mktevent",
      function(data) {
        vm.recomprc = data[2]; //推荐卡种
        vm.prcfeature = data[4]; //卡种特色
        vm.mktevent = data[5]; //营销活动
        vm.Credithigh = data[0]; //预授信均值
        //图片路径
        vm.Pic_URL = GetVluPicSrc(data[3], data[1]) + data[3] + ".jpg";

        function GetVluPicSrc(strProductCord, strJsonData) {
          //根据产品代码查询产品图片路径
          if ("" != strJsonData && undefined != strJsonData) {
            //转JSON对象
            var jsonData = JSON.parse(strJsonData);
            //遍历数据字典中的所有基金类型
            for (var i = 0; i < jsonData.length; i++) {
              if (strProductCord == jsonData[i].COD_PD) {
                return jsonData[i].VLU_PIC_1;
              }
            }
          }
          return "";
        }
      }
    );
    document.getElementById("reSignName").onclick = onReSignName;
    function onReSignName() {
      exitScene("STA_RESIGN");
    }
    //缩小
    document.getElementById("btn_ZoomOut").onclick = onZoomOut;
    function onZoomOut() {
      PDFViewer.ZoomOut();
    }
    //放大
    document.getElementById("btn_ZoomIn").onclick = onZoomIn;
    function onZoomIn() {
      PDFViewer.ZoomIn();
    }
    //其他按钮
    document.getElementById("OtherButton").onclick = onOnther;
    function onOnther() {
      $("#OtherButton").prop("disabled", true);
      if (bButton) {
        $("#OtherButton").html(strOntherButtonName1);
        nRet = PDFViewer.OpenFile(strpdf1);
      } else {
        $("#OtherButton").html(strOntherButtonName2);
        nRet = PDFViewer.OpenFile(strpdf2);
      }
      bButton = !bButton;
      setTimeout(UndisabledButton, 2000);
    }
    function UndisabledButton() {
      $("#OtherButton").prop("disabled", false);
    }
    //精准营销处理
    DataTools.get(
      "GD_MarketingAllNumber|GD_A01_Trans_Tagflg|GD_A01_CodPdbreed|GD_A01_IsLogin",
      function(data) {

        var strCodPdbreed = data[2].trim(); //二维码推送内容
        if (data[3] == "1") {
          //只有登录模式才有被动营销
          //有营销产品
          if (parseInt(data[0]) >= 1) {
            //营销产品数量>=1则可点击Email图片
            if ("N" == data[1]) {
              vm.Page1 = true;
            } else {
              vm.Page1 = false;
            }
            if (strCodPdbreed.length > 0) {
              vm.Page2 = true;
            } else {
              vm.Page2 = false;
            }
            if (
              strCodPdbreed.indexOf("P00013") != -1 &&
              strCodPdbreed.indexOf("P00008") == -1 &&
              strCodPdbreed.indexOf("P00009") == -1
            ) {
              vm.marketingText = vm.marketingText2;
            } else {
              vm.marketingText = vm.marketingText1;
            }
            vm.$root.SaleProdSum = data[0];
            vm.$root.saleShow = true;
            vm.$root.SaleProdSumShow = true;
            $(".emailf").css("display", "inline-block");
            $(".emailf")
              .children()
              .html(vm.$root.SaleProdSum);
          } else {
            vm.$root.SaleProdSum = "";
            vm.$root.saleShow = false;
            vm.$root.SaleProdSumShow = true;
            $(".emailf").css("display", "none");
            $(".emailf")
              .children()
              .html();
          }
        }
      }
    );
    this.initPage();
  },
  methods: {
    initPage() {
      this.initPool(this.$data);
    },
    OnClose() {
      $("#PDFViewer")
        .attr("height", "60%")
        .attr("width", "60%")
        .css("left", "8%");
      $("#inputPopup").css("display", "none");
    },
    manyTest() {
          //网捷贷关闭，待后续修改!!!
          document.getElementById("nam02").disabled = true;
          document.getElementById("nam03").disabled = true;
          document.getElementById("nam04").disabled = true;

      // for(var i = 0;i<this.JsonDataForDefault.length;i++){
      //     // alert("JsonDataForDefault["+i+"].userNam : "+this.JsonDataForDefault[i].userNam);
      //     // alert("nice-select : "+$("#nice-select").find('.sel-title').html());
      //       if(this.JsonDataForDefault[i].userNum == $("#nice-select").find('.sel-title').html()){
      //         this.name4Value = this.JsonDataForDefault[i].userNam;
      //         // alert("this.name4Value : "+this.name4Value);
      //         this.name4Val = this.JsonDataForDefault[i].userNum + "|" + this.name4Value;
      //         // alert("this.name4Val : "+this.name4Val);
      //         this.nameValArr[0]  = this.name4Value;
      //         this.marketerArr[0] = this.name4Val;
      //         setVar("D00_D02_marketPersonNow1", this.marketerArr[0]);
      //         // this.nameValArr[3]  = this.name4Value;
      //         // this.marketerArr[3] = this.name4Val;
      //         break;
      //       }
      //     }
      this.marketPersonIdList = "";
    //   var JsonMarketInfoList = "";
      var num = this.JsonMarketInfoList.length;
      for (var i = 0; i < num; i++) {
        this.marketPersonIdList += this.JsonMarketInfoList[i].key;
      }

      this.PopupShow = true;
      this.showMarketer = true;
      this.ifHidden = true;
      //    this.showMarketer = true;
      //    setVar("D00_D02_hasRegisted",1);//表示进行了实时登记
    },
    enterNam(val) {
      // alert("in enterNam : " + val);
      this.marketerNum = val;
      this.ifHidden = true;
      this.PopupShow = true;
      this.showMarketer = true;
    },
    onBtnSubmit() {
      this.PopupShow = false;
      this.showMarketer = false;
      for(var i = 0;i < 4;i++){
        if(this.marketerArr[i] == undefined || this.marketerArr[i] == "undefined"){
          this.marketerArr[i] = "";//未定义则上送空值
        }
        this.tempNam[i] = this.nameValArr[i];
        this.tempMarket[i] = this.marketerArr[i];
      }
      if(this.name4Value != this.marketerArr[0]){
        setVar("D02_ifAuditor","0");
      }
      setVar("D00_D02_marketPersonNow1", this.marketerArr[0]);
      setVar("D00_D02_marketPersonNow2", this.marketerArr[1]);
      setVar("D00_D02_marketPersonNow3", this.marketerArr[2]);
      setVar("D00_D02_marketPersonNow4", this.marketerArr[3]);
    },
    onBtnCancel(){
      for(var i = 0; i < 4;i++){
        if(this.nameValArr[i] != undefined && this.tempNam[i] != undefined){
          this.nameValArr[i] = this.tempNam[i];
        }
        if(this.marketerArr[i] != undefined && this.tempMarket[i] != undefined){
          this.marketerArr[i] = this.tempMarket[i];
        }
      }
      this.PopupShow = false;
      this.showMarketer = false;
        // $("#PDFViewer").css("display","inline-block");
    },
    onBtnClear(){
      for(var i = 0;i < 4;i++){
        // this.marketerArr[i] == "";
        this.tempNam[i] = "";
        this.tempMarket[i] = "";
        if(this.nameValArr[i] != undefined && this.nameValArr[i] != "undefined"){
          this.nameValArr[i] = "";
          
          this.PopupShow = false;
          this.showMarketer = false;
        }
      }
      this.PopupShow = true;
      this.showMarketer = true;
    },
    HidBD(){
      if(this.ifHidden == true){
        this.ifHidden = false;
        this.onBtnCancel();
      }
    },
    onManyCancel() {
      this.showMarketer = false;
    },
    onInsertName() {
      var vm = this;
      vm.iid = document.activeElement.id;
      document.getElementById("" + vm.iid + "").value = "";
      // 			alert("当前点击的id"+vm.iid);
      // 			alert("开启弹框");
      vm.showPerson = true;
    },
    onChooseLevel(index, item) {
      this.marketerCode = item.value;
      this.marketerName = item.key;

      // if (this.marketerNum == 1 || this.marketerNum == 2) {
        // 保存原名，以备取消
        // if(this.nameValArr[this.marketerNum] != "" && this.nameValArr[this.marketerNum] != undefined){
        //   this.tempNam[this.marketerNum] = this.nameValArr[this.marketerNum];
        // }
        // if(this.marketerArr[this.marketerNum] != "" && this.marketerArr[this.marketerNum] != undefined){
        //   this.tempMarket[this.marketerNum] = this.marketerArr[this.marketerNum];
        // }
        this.nameValArr[this.marketerNum] = item.key;
        this.marketerArr[this.marketerNum] = item.value + "|" + item.key;
        this.ifHidden = true;
      // }
      // this.nameValArr[this.marketerNum] = item.key;
      // this.marketerArr[this.marketerNum] = item.value + "|" + item.key;

      this.showPerson = false;
      this.showMarketer = true;
    },
    onCancel() {
      this.showMarketer = false;
      this.PopupShow = false;
    },
    ...mapActions([
      "initPool",
      "fetch",
      "submit",
      "onCancel",
      "onContinue",
      "exitScene"
    ])
    //...mapActions(['initPool','fetch','exitScene'])
  },
  watch: {
    pool(value) {
      //监听数据池变量是否已返回，保证数据池获取成功后再渲染页面
      if (value.hasOwnProperty("GD_A01_Trans_Mktevent")) {
        this.initData();

      }
    }
  }
};
</script> 