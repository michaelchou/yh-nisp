<template>
    <header class="header">
        <div> <span class="header_test" ><a @click="onDebug">{{pageCnt}}</a></span></div>
        <!--
        <div class="insurance" @click="onInsurance"></div>
        -->
        <div class="header_rightarea">
            <div style="display:none;" class="emailf" @click="onEmail"><span></span></div>
            <div id="VIP"></div>
            <div class="searchmenu"  id="bus_search"></div>
            <div class="login_status" style="display:none;"></div>
            <div class="btn_exit btn_exitDisb" style="display:none;" @click ="onQuit" id="btn_quit"></div>
            <!--倒计时 -->
            <div id="CountDown" class="time" style="display:none;"></div>
            <!--<img id="card_status" src="img/未读卡.png"/>-->
           
        </div>
    </header>

</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    data(){
        return{
            getKeys:["GD_A01_ExcepionHandling"],
            setKeys:["GD_A01_ExcepionHandling"]
        }
    },
    computed: {
        countText: function () {
            return this.$root.countDown == 0 ? '' : this.$root.countDown
        },
        pageCnt: function () {
            return this.$root.pages.length
        },
        ...mapState(['pool'])
    },
    /** 
    watch : {
		pool(val){
            console.log(val);
                this.$root.loginStatus=this.pool.GD_A01_IsLogin;
                this.$root.VIPStatus=this.pool.GD_A01_CardClass;
                this.$root.timeStatus=this.pool.GD_A01_Header_Time;
                this.$root.exitStatus=this.pool.GD_A01_Header_Exit;
		}
	}, **/
    methods: {
        initPage () {
            this.initPool(this.$data)
        },
        onDebug () {
            this.$root.debug = !this.$root.debug
        },
        onEmail(){
            setVar("GD_ReadEmail","1");
            this.exitScene("STA_SHOWPRODUCT");
        },
        onQuit(){
            let excepion = this.pool.GD_A01_ExcepionHandling;
            if(excepion != 'F'){
                this.pool.GD_A01_ExcepionHandling = 'F';
                this.submit(["GD_A01_ExcepionHandling"]);
            }
        },
        onInsurance(){
            this.exitScene("STA_INSURANCE");
        },
       ...mapActions(['initPool','exitScene','submit'])
    },
    mounted () {
        this.initPage();
        var vm=this;
        var VIPStatus= this.$root.VIPStatus;
        var loginStatus;
        loginStatus=this.$root.loginStatus;
        var timeStatus;
        timeStatus= this.$root.timeStatus;
        var exitStatus;
        exitStatus= this.$root.exitStatus;
        var VIPClassName;
        DataTools.get("GD_A01_CardClass|GD_A01_IsLogin|GD_A01_Header_Exit|GD_A01_Header_Time|GD_A01_Trans_Tagflg|GD_A01_Trans_SaleProdSum|GD_MarketingAllNumber|GD_A01_CodPdbreed",function(data){
            if(data[0]!=""&&data[0]!="-1"&&data[0]!=null){
                vm.$root.VIPStatus=data[0];
                VIPClassName=(parseInt(data[0]));
            }else{
                VIPClassName=parseInt(VIPStatus);
            }
            if(VIPClassName=="1"){
                $("#VIP").addClass("VIP0");
            }else if(VIPClassName=="2"){
                $("#VIP").addClass("VIP1");
            }else if(VIPClassName=="3"){
                $("#VIP").addClass("VIP2");
            }else if(VIPClassName=="4"){
                $("#VIP").addClass("VIP3");
            }else{
                $("#VIP").addClass("VIP0");
            }
            if(data[1]!=""&&data[1]!="-1"&&data[1]!=null){
                vm.$root.loginStatus=data[1];
                loginStatus=data[1];
            }
            if(loginStatus=="1"){
                $(".login_status").css("display","inline-block");
            } 
            if(data[2]!=""&&data[2]!="-1"&&data[2]!=null){
                vm.$root.exitStatus=data[2];
                exitStatus=data[2];
            }
            if(exitStatus=="1"){
               $("#btn_quit").css("display","inline-block");
            }
            if(data[3]!=""&&data[3]!="-1"&&data[3]!=null){
                vm.$root.timeStatus=data[3];
                timeStatus=data[3];
            }
            if(timeStatus=="1"){
               $("#CountDown").css("display","inline-block");
            }
            //"" != data[6] && undefined != data[6] && "N" == data[4] 
            //    ||("N" != data[4] && "" != data[6] && undefined != data[6] && data[7].trim().length > 0)
            if (data[1] == "1"){
                //是目标客户且有营销产品
                if(parseInt(data[6]) >= 1)
                {
                    //营销产品数量>=1则可点击Email图片
                    $(".emailf").children().html(data[6]);
                    $(".emailf").css("display","inline-block");  
                }
                else
                {
                    $(".emailf").children().html("");
                    $(".emailf").css("display","none");
                }
            }
        });      
    }
  
}
</script>
