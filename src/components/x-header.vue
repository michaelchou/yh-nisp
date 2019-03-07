<template>
    <header class="header">
        <div> <span class="header_test" ><a @click="onDebug">{{pageCnt}}</a></span></div>
        <div class="header_rightarea">
            <div class="emailf" id="emailf" ><span></span></div>
            <div id="VIP"></div>
            <div class="login_status" style="display:none;"></div>
            <div class="btn_exit" id="btn_exit" style="display:none;"></div>
            <div id="CountDown" class="time"style="display:none;"></div> 
        </div>
        <div class="bb" > <img src="img/barrage/生日快乐.png" alt=""></div>
    </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        countText: function () {
            return this.$root.countDown == 0 ? '' : this.$root.countDown
        },
        pageCnt: function () {
            return this.$root.pages.length
        },
       ...mapState(['pool'])

    },
    methods: {
        onDebug () {
            this.$root.debug = !this.$root.debug
        },
       
       
    },
    mounted () {
        var VIPClassName;
        var Sale=this;
        if(this.$root.VIPStatus){
            VIPClassName=(parseInt(this.$root.VIPStatus));
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
        var loginStatus;
        loginStatus=this.$root.loginStatus; 
        if(loginStatus=="1"){
                $(".login_status").css("display","inline-block");
        } 
        var timeStatus;
        timeStatus= this.$root.timeStatus;
        if(timeStatus=="1"){
            $("#CountDown").css("display","inline-block");
        }
        var exitStatus;
        exitStatus= this.$root.exitStatus;
        if(exitStatus=="1"){
            $(".btn_exit").css("display","inline-block");
        }

        if(this.$root.barrage=="1"){
            $(".bb").css("display","block");
        }else{
            $(".bb").css("display","none");
        }
        if(this.$root.saleShow){
            $(".emailf").css("display","inline-block"); 
        }else{
            $(".emailf").css("display","none"); 
        }

        if(this.$root.SaleProdSum){
            $(".emailf").children().html(this.$root.SaleProdSum);
        }else{
             $(".emailf").children().html();
        }  

       
        DataTools.get("GD_A01_CardClass|GD_A01_IsLogin|GD_A01_Header_Exit|GD_A01_Header_Time",function(data){
            if(data[0]!=""&&data[0]!="-1"&&data[0]!=null){
               Sale.$root.VIPStatus=(parseInt(data[0]));
               VIPClassName=(parseInt(data[0]));
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
                Sale.$root.loginStatus=data[1];
                loginStatus=data[1];
            }
            if(loginStatus=="1"){
                $(".login_status").css("display","inline-block");
            } 
            if(data[2]!=""&&data[2]!="-1"&&data[2]!=null){
                Sale.$root.exitStatus=data[2];
                exitStatus=data[2];
            }
            if(exitStatus=="1"){
               $(".btn_exit").css("display","inline-block");
            }
            if(data[3]!=""&&data[3]!="-1"&&data[3]!=null){
                Sale.$root.timeStatus=data[3];
                timeStatus=data[3];
            }
            if(timeStatus=="1"){
                $("#CountDown").css("display","inline-block");
            }
        });
        document.getElementById("emailf").onclick=onEmail;
        function onEmail () {
            Sale.$root.$emit('sale');
        }
        document.getElementById("btn_exit").onclick=onExit;
        function onExit () {
            //点击退出按钮 标识 为异常终止
            setVar("GD_A01_ExcepionHandling",'F');
            ChangePage("./customer/common/cust_com_TradeFinishTip.html")
        }
    },
}
</script>
<style scoped>
    .bb{
      position: fixed;
      z-index: 1002;
      -webkit-animation: clockwise 5s, mymove 5s;
      animation: clockwise 5s, mymove 5s;
      animation-fill-mode: forwards;
      display: none;
    }
    .bb img {
      display: block;
      position:relative;
      width: 300px;
      height: 300px;
      /***/
      opacity: 1;
      animation: change 5s, mylogo 0.6s  5.1s 4 alternate;
      -moz-animation: change 5s, mylogo 0.6s  5.1s 4 alternate;
      -webkit-animation: change 5s, mylogo 0.6s  5.1s 4 alternate;
      -o-animation: change 5s, mylogo 0.6s  5.1s 4 alternate;

      transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      /***/
    }
    @-webkit-keyframes clockwise{
      0%  { -webkit-transform: rotate(0deg) ;  }
      100%{ -webkit-transform: rotate(90deg); }
    }
    @keyframes clockwise {
      0%  { -webkit-transform: rotate(0deg) ;  }
      100%{ -webkit-transform: rotate(90deg); }
    }
    @-webkit-keyframes mymove{
      from {
          top: 10%;
          left: 75%;
      }
      to {
          top: 65%;
          left: 1%;
      }
    }
    @keyframes mymove {
      from {
          top: 10%;
          left: 75%;
      }
      to {
          top: 65%;
          left: 1%;
      }
    }
    /**/
    @keyframes change{
        from {
          width: 0px;
          height: 0px;
          opacity: 0;
        }
        to {
          width: 300px;
          height: 300px;
          opacity: 1;
        }
    }
    @keyframes mylogo{
        from {
          left : 20px;
        }
        to {
          left: -20px;
        }
    }
    /**/
</style>


