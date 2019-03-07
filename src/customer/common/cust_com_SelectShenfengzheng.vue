<style scoped>
    .box{
            height: 775px;
            margin-top: 30px;
        }
    .top, .bottom{
            display: flex;
            justify-content: center;
            margin-bottom: 45px;
    }
    .card{
            width: 596px;
            height: 280px;
            border: 2px solid #8addce;
            box-shadow: 1px 1px 20px grey;
            border-radius: 8px;
            margin-right: 30px;
            text-align: center;
            font-size: 3rem;

    }
    .Docimg{
        background: rgba(224,250,242,0.4);
    }
@media screen and (max-width: 1300px) { 
    .card{
            width: 480px;
            height: 250px;
        }
}
    .cardbox{
            display: flex;
            justify-content: space-between;
            border: none;
            box-shadow: none;
        }
    .cardbox div{
            height: 100%;
            width: 46%;
            border: 2px solid #8addce;
            box-shadow: 1px 1px 20px grey;
            border-radius: 8px;
        }
        img{
            margin-top: 40px;
        }
</style>

<template>
    <x-layout-main>
  <p class="title">选择证件类型</p>

        <div class="box">
            <div class="top">
                <div class="card Docimg">
                    <img src="img/二代身份证.png" alt="">
                    <p value ="110001">二代身份证</p>
                </div>
            </div> 
        </div>

    </x-layout-main>
</template>

<!--点击搜索区域弹出模态框-->
<script>
export default {
mounted () {
    //证件选择单选事件处理
    $(".Docimg").on('click', function(event) {
        //获取证件类型标志
        var DocumentType = $(this).find('p').attr('value');
        $(".Docimg").css("background","rgba(224,250,242,0.4)");
        $(this).css("background","rgba(130, 219, 206,0.4)");
        setVar("GD_CodPid",DocumentType);
        setVar("GD_A01_IDCardIsIC","0");
        switch(DocumentType){
            case "110001":
                setVar("GD_A01_IDCardIsIC","1");
                setVar("P_CodCountry","156");
                exitScene("STA_IDCARD"); 
                break;
            case "110037":
                exitScene("STA_FOREIGNER");
                break;
            case "110025": case "110019": case "110021":
                exitScene("STA_OTHER");
                $('#pagePopup').fadeIn(300);
                break;
            default:
                exitScene("STA_FAIL");
                break;
        }
        
    });
}
}
</script>
