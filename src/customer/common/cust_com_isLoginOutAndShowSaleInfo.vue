<template>
<div class="x-modal gradient">
	<div class="Result_top" v-show="IsShow" >
        <p style="font-size: 3.2rem;">您是否继续办理业务？</p>
        <button  class="btn surebtn" @click="onSure">继续办理</button>
        <button  class="btn surebtn" @click="onBack">结束办理</button>
	</div>
    <div v-show="!IsShow" @click="onClose" class="clsFork">
        <img :src ="'img/删除.png'"/>
    </div>
    <!-- <div class="swiper-button-prev regularly_left">
        <img :src="'img/箭头-左.png'"/>
    </div>
    <div class="swiper-button-next regularly_right">
        <img :src="'img/箭头-右.png'"/>
    </div> -->
    <!-- <div class="MediaKind">
        <div class="swiper-container">
            <div class="swiper-wrapper">
            </div>
        </div>
    </div> -->
        <div class="MediaPic">
            <div class="CardMedia" @click="OnSelectProduct" v-show="Page1">
                <img height="35%" :src="Pic_URL"/>
                <p>{{recomprc}}</p>
                <p><span>{{prcfeature}}。{{mktevent}}。</span></p>
                <p>预授信均值：<font style="color:red;">{{Credithigh}}元</font></p>
                <button class="btn">立即申请</button>
            </div>

            <div class="CardMedia" @click="onSignEBank" v-show="Page2">
                <img :src="'./img/二维码-个人掌银.png'"/>
                <p v-html='marketingText' ></p>
                <button class="btn">立即办理</button>
            </div>
    </div>
</div>
</template>
<script> 
import { mapState , mapActions } from 'vuex'
export default {
    data () {
        return {
            //GD_A01_IsLogin 1 登陆  0非登陆
			getKeys:["GD_A01_CodPdbreed","GD_MarketingAllNumber","GD_ReadEmail","GD_A01_IsLogin","GD_A01_Trans_Tagflg","GD_A01_Trans_Credithigh",
                     "GD_A01_Trans_Recomprc","GD_A01_Trans_Recomproccord",
                     "GD_A01_Trans_Prcfeature","GD_A01_Trans_Mktevent",
                     "GD_A01_TcpCard_Data"],
			setKeys:["GD_A01_MenuID","GD_A01_Trans_SaleFlag",
                     "GD_B09_sltCardInfo","GD_B09_sltCardName",
                     "GD_B09_sltCardImg","P_B09_Pdno",
                     "P_B09_Appinfotype"],
            productList:"[{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00001\",\"VLU_ITEM_DIC\":\"双利丰:全部双利丰产品（余额>0）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00002\",\"VLU_ITEM_DIC\":\"贷记卡:全部贷记卡类产品（卡片数量）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00003\",\"VLU_ITEM_DIC\":\"贷款:全部贷款类产品（余额>0）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00004\",\"VLU_ITEM_DIC\":\"基金:全部基金类产品（余额>0）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00005\",\"VLU_ITEM_DIC\":\"理财产品:全部理财类产品（余额>0）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00006\",\"VLU_ITEM_DIC\":\"国债:全部国债类产品（余额>0）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00007\",\"VLU_ITEM_DIC\":\"保险:全部保险类产品（保费>0）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00008\",\"VLU_ITEM_DIC\":\"网上银行（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00009\",\"VLU_ITEM_DIC\":\"手机银行（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00010\",\"VLU_ITEM_DIC\":\"电话银行（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00011\",\"VLU_ITEM_DIC\":\"基金定投（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00012\",\"VLU_ITEM_DIC\":\"代发工资（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00013\",\"VLU_ITEM_DIC\":\"消息服务（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00014\",\"VLU_ITEM_DIC\":\"转账电话（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00015\",\"VLU_ITEM_DIC\":\"商惠通（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00016\",\"VLU_ITEM_DIC\":\"银期转账（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00017\",\"VLU_ITEM_DIC\":\"金市通（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00018\",\"VLU_ITEM_DIC\":\"外汇宝（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00019\",\"VLU_ITEM_DIC\":\"个人资金归集（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00020\",\"VLU_ITEM_DIC\":\"存金通（黄金存折）（余额>0）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00021\",\"VLU_ITEM_DIC\":\"第三方存管（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00022\",\"VLU_ITEM_DIC\":\"外币存款账户（余额>0）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00023\",\"VLU_ITEM_DIC\":\"存贷通（签约标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00024\",\"VLU_ITEM_DIC\":\"结售汇（交易标识）\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00025\",\"VLU_ITEM_DIC\":\"随薪贷签约标识\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00026\",\"VLU_ITEM_DIC\":\"留学贷款标识\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00027\",\"VLU_ITEM_DIC\":\"网捷贷签约标识\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00028\",\"VLU_ITEM_DIC\":\"循环贷款签约标识\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00029\",\"VLU_ITEM_DIC\":\"大额存单\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00030\",\"VLU_ITEM_DIC\":\"存金通2号\"},{\"NAM_DIC\":\"精准营销产品列表\",\"NUM_DIC\":\"00000001\",\"NUM_ITEM_DIC\":\"P00031\",\"VLU_ITEM_DIC\":\"私行专属产品\"},]",
            goodsList:[],
            Credithigh:"",  //预授信均值
            recomprc:"",    //推荐卡种
            prcfeature:"",  //卡种特色
            mktevent:"",    //营销活动
            Pic_URL:"",
            thePath:"",
            LocalPic_URL:"./img/二维码-个人掌银.png",
            IsShow:false,
            num:2,
            swiper:null,
            Page1:false,
            Page2:false,
            urlList:[],
            clickList:[],
            BtnList:[],
            CodPdbreed:[],
            BoxPage:0,
            BoxWrap:"",
            addContent:"",
            marketingText:"",
            marketingText1:"开通电子银行可在线上享受理财、转账、查询、信用卡还款、生活缴费、外汇等服务，<font style ='color:red'>手续费全免</font>，全方面满足您的生活所需，快来开通吧！",
            marketingText2:"开通消息服务可及时享受您的账户动账通知，全天候服务，及时响应，为您提供7×24小时的服务。",
            currentPage:0,  //当前页数
        }
    },
    computed : {
        ...mapState(['pool'])
    },
    methods : {
        initPage(){
            this.initPool(this.$data);
        },
        onClose(){
            setVar("GD_ReadEmail","0");
           this.onContinue(); 
        },
		onBack(){
            setVar("GD_A01_InitiativeMarketing","0");
            this.onCancel();
        },
        onSure(){
            setVar("GD_A01_InitiativeMarketing","0");
			this.onContinue();
        },
        onSignEBank(){
            this.pool.GD_A01_MenuID = "020001";
            this.submit(["GD_A01_MenuID"]);
            this.exitScene("STA_SELECTPRODUCT");
        },
        OnSelectProduct(){
            //产品代码为空不跳转
            if ("" == this.pool.GD_A01_Trans_Recomproccord || undefined == this.pool.GD_A01_Trans_Recomproccord)
            {
                return;
            }
            //跳转到信用卡申请
            this.pool.GD_A01_MenuID = "090001";
            this.pool.GD_A01_Trans_SaleFlag = "1";
            this.pool.GD_B09_sltCardImg = this.Pic_URL.split("\\").join("\\\\");

            var pdno = this.pool.GD_A01_Trans_Recomproccord;
            if (pdno == "CCGY8I" || pdno == "CCPY8I"
               || pdno == "CCGY6I" || pdno == "CCGY5I"
               || pdno == "CCPY5I" || pdno == "CCGY9I"
               || pdno == "CCGY2I" || pdno == "CCPY2I"
               || pdno == "CCGZ9I" || pdno == "CCPZ9I"
               || pdno == "CCGX2I" || pdno == "CCPX2I"
               || pdno == "CCGJ3I")
            {
                this.pool.P_B09_Appinfotype = "01";
            }
            else
            {
                this.pool.P_B09_Appinfotype = "03"
            }

            //保存卡种代码
            this.pool.P_B09_Pdno = this.pool.GD_A01_Trans_Recomproccord;
            this.submit(this.setKeys);
            this.exitScene("STA_SELECTPRODUCT");
        },
        GetVluPicSrc(strProductCord,strJsonData){
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
                        this.pool.GD_B09_sltCardInfo = JSON.stringify(jsonData[i]).split("\\").join("\\\\");;     //保存选中的信用卡卡片信息
                        this.pool.GD_B09_sltCardName = jsonData[i].NAM_PD;
                        return jsonData[i].VLU_PIC_1;
                    }
				}
			}
            return "";
		},
		initData(){
            // var strjson = JSON.parse(this.productList)
            // alert(strFromJson(this.productList,"NUM_ITEM_DIC",pflag,"VLU_ITEM_DIC"));
			this.recomprc   = this.pool.GD_A01_Trans_Recomprc;     //推荐卡种
            this.prcfeature = this.pool.GD_A01_Trans_Prcfeature;   //卡种特色
            this.mktevent   = this.pool.GD_A01_Trans_Mktevent;     //营销活动
            this.Credithigh = this.pool.GD_A01_Trans_Credithigh;   //预授信均值

            // this.recomprc   = "QQ信用卡";     //推荐卡种
            // this.prcfeature = "终身免年费、卡面凸印专属QQ号";   //卡种特色
            // this.mktevent   = "报名“悦刷越有礼”活动，每周消费满5笔、每笔满199元，累计消费周数2周及以上，即可获得好礼奖励";     //营销活动
            // this.Credithigh = "50000";
            // this.pool.GD_A01_Trans_Recomproccord = "CCGH2I"
            // this.pool.GD_A01_TcpCard_Data = '[{"COD_PD":"CCGH2I","VLU_PIC_1":"C:/CSAP/Nisp/html/img/","NUM_ITEM_DIC":"1","VLU_ITEM_DIC":"男"},{"COD_PD":"RNG","NUM_DIC":"00000005","NUM_ITEM_DIC":"2","VLU_ITEM_DIC":"女"}]';

           
            //信用卡目前一个  根据推荐卡种为空 则是显示其他推送信息，同理其他推送信息也根据GD_A01_CodPdbreed 字段返回的FC来判断
            if(this.pool.GD_A01_TcpCard_Data !="" &&this.pool.GD_A01_TcpCard_Data != undefined
                 && this.pool.GD_A01_Trans_Recomproccord != "" && this.pool.GD_A01_Trans_Recomproccord != undefined ){
                 //图片路径
                this.Pic_URL = this.GetVluPicSrc(this.pool.GD_A01_Trans_Recomproccord,this.pool.GD_A01_TcpCard_Data) + this.pool.GD_A01_Trans_Recomproccord + ".jpg";
                if(this.pool.GD_A01_Trans_Tagflg == "N"){
                    this.Page1 = true; 
                }             
            }
            else{
                this.Page1 = false;                
            }
            if(this.pool.GD_A01_CodPdbreed.trim().length > 0 ){
                this.Page2 = true;
                if(this.pool.GD_A01_CodPdbreed.indexOf("P00008") == -1 
                   && this.pool.GD_A01_CodPdbreed.indexOf("P00009") == -1
                   && this.pool.GD_A01_CodPdbreed.indexOf("P00013") != -1){
                    this.marketingText = this.marketingText2;
                }
                else{
                    this.marketingText = this.marketingText1;
                }
            }
            else{
                this.Page2 = false;
            }
            //营销界面 显示
            if(this.pool.GD_A01_IsLogin == "1" && this.pool.GD_ReadEmail != "1"){
                this.IsShow = true;
            }
            else{
                this.IsShow = false;
            }
            //this.initSwiper(); 
        },
        // initSwiper () {
        //     this.BoxWrap ="";
        //    // this.currentPage = 0;   //当前页数
        //     this.addContent= "";
        //     this.BoxPage = Math.ceil(this.urlList.length/this.num); //总共页数
        //     alert("this.BoxPage" +this.BoxPage )
        //     pageLog_cols("总页数："+ this.BoxPage); 
        //     for(var i=0;i<this.BoxPage;i++){
        //        this.BoxWrap = "<div class ='swiper-slide swiper-slideNN' id='page"+i+"'></div>"
        //        $(".swiper-wrapper").append(this.BoxWrap);
        //         for(var j=i*this.num , k=0 ; j<Math.min((i+1)*this.num, this.urlList.length ); j++){
        //             //是否插入ID
        //             this.addContent ="";
        //             if("" != this.clickList[j]){
        //                 this.addContent=  this.addContent + "<div class=\"CardMedia Div"+ j + "\" style = \"width:35%;height:80%;margin:6% auto;margin-left:9%;\" id = \""+ this.clickList[j] + "\"> <img style=\"margin: 20px auto;height:35%; display: flex;justify-content: center; align-items: center;\" src=\""+this.urlList[j] +"\"/>";
        //             }
        //             else{
        //                 this.addContent= this.addContent + "<div class=\"CardMedia Div"+ j + "\" style = \"width:35%;height:80%;margin:6% auto;margin-left:9%;\"> <img style=\"margin: 20px auto;height:65%; display: flex;justify-content: center; align-items: center;\" src=\""+this.urlList[j] +"\"/>";
        //             }

        //             if("OnSelectProduct" == this.clickList[j]){
        //                 this.addContent = this.addContent + "<p>" + this.recomprc +"</p> <p style=\"text-align:left\"><span style=\"font-size:1.7rem;\">&nbsp;&nbsp;&nbsp;&nbsp;" + this.prcfeature + "。" + this.mktevent + "。</span></p> <p>预授信均值：<span style=\"font-size:2.5rem;color:red;\">" + this.Credithigh + "元</span></p>"; 
        //             }else{
        //                 //网上银行、掌上银行、
        //                 if( this.CodPdbreed[j] =="P00008" || this.CodPdbreed[j] =="P00009"){
        //                     this.addContent = this.addContent + "<p style=\"text-align:left\"><span style=\"font-size:2.5rem;\">&nbsp;&nbsp;&nbsp;&nbsp;" + this.marketingText1 + "</span></p>";                        
        //                 }
        //                 else if(this.CodPdbreed[j] =="P00013"){
        //                 //消息服务
        //                     this.addContent = this.addContent + "<p style=\"text-align:left\"><span style=\"font-size:2.5rem;\">&nbsp;&nbsp;&nbsp;&nbsp;" + this.marketingText2 + "</span></p>"; 
        //                 }
                        
        //             }
        //             //是否存在按钮
        //             if(this.BtnList[j]!=""){
        //                 this.addContent = this.addContent +  "<button class=\"btn\" style =\"margin-left:25%;margin-right:25%;\">" + this.BtnList[j] +"</button>"
        //             }  
        //             this.addContent += "</div>"; 
        //             alert("精准营销 Content =>"+ this.addContent);
        //             pageLog_cols("精准营销 Content =>"+ this.addContent);
        //             $("#page"+i).append( this.addContent);                 
        //         }
        //     }
        //     //swiper初始化
        //     this.swiper = new Swiper('.MediaPic .swiper-container', {
        //         pagination: '.swiper-pagination',
        //         paginationClickable: true,
        //         prevButton:'.swiper-button-prev',
        //         nextButton:'.swiper-button-next',
        //     });

        // },
        ...mapActions(['initPool', 'fetch', 'submit', 'onCancel', 'onContinue','exitScene'])
    },
    mounted () {
        this.initPage();
        var vm = this;
        // $(".MediaPic").on("click",".CardMedia",function(){
        //     //产品代码为空不跳转
        //     if ("" == vm.pool.GD_A01_Trans_Recomproccord || undefined == vm.pool.GD_A01_Trans_Recomproccord)
        //     {
        //         return;
        //     }
        //     var index = Number($(this).index()) + Number(vm.swiper.activeIndex) * Number(vm.num);
        //     var DivId = $(".Div"+index).attr("id");
        //     if( DivId == "OnSelectProduct"){
        //         //跳转到信用卡申请
        //     vm.pool.GD_A01_MenuID = "090001";
        //     vm.pool.GD_A01_Trans_SaleFlag = "1";
        //     vm.pool.GD_B09_sltCardImg = vm.Pic_URL.split("\\").join("\\\\");

        //     var pdno = vm.pool.GD_A01_Trans_Recomproccord;
        //     if (pdno == "CCGY8I" || pdno == "CCPY8I"
        //        || pdno == "CCGY6I" || pdno == "CCGY5I"
        //        || pdno == "CCPY5I" || pdno == "CCGY9I"
        //        || pdno == "CCGY2I" || pdno == "CCPY2I"
        //        || pdno == "CCGZ9I" || pdno == "CCPZ9I"
        //        || pdno == "CCGX2I" || pdno == "CCPX2I"
        //        || pdno == "CCGJ3I")
        //     {
        //         vm.pool.P_B09_Appinfotype = "01";
        //     }
        //     else
        //     {
        //         vm.pool.P_B09_Appinfotype = "03"
        //     }

        //     //保存卡种代码
        //     vm.pool.P_B09_Pdno = vm.pool.GD_A01_Trans_Recomproccord;
        //     vm.submit(vm.setKeys);
        //     exitScene("STA_SELECTPRODUCT");
        // }    
        // });
        
    },
	watch:{
        pool(value){
            //监听数据池变量是否已返回，保证数据池获取成功后再渲染页面
            if(value.hasOwnProperty("GD_A01_TcpCard_Data")){
                this.initData();
            }
        }
    },
}
</script> 
<style scoped>
.Result_top{
    height: 10%;
    width: 100%;
    text-align: center;
    position: relative;
    top: 40px;
}
.Result_top p{
	display: inline-block;
	font-size: 1.8rem;
}
.swiper-slideNN1{
    display: flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    height:550px;
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
    height: 88%;
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
.CardMedia p{
   font-size: 2.4rem;
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
.btn{
	margin-left:6%; 
	margin-right:6%;
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
        height: 84%;
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
