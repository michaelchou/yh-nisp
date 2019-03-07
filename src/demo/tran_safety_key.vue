<style scoped>
   .support_tran{    
        color: #333;
        font-size: 2.8rem;
        font-weight: 600;
        margin-top:3%;
   }
   .check_box{  
       width:28%;
       text-align: left;
   }
   ul{  
       font-size: 2.5rem;
       margin-top:3%;
   }
   li{   
        margin-bottom:2%;
   }
   .input_amount {
        width: 148px;
        height: 38px;
        border-radius: 6px;
        margin-right:0;
        font-size:2rem;
    }
    .check_box i {
        width: 44px;
        height: 44px;
    }
    .btnbox {
        bottom: 13%;
    }
    @media screen and (max-width:1300px){   
        ul{ 
            font-size:2.2rem;
        }
        .check_box{ 
            font-size:2.4rem;
            margin-right:0;
        }
        .check_box i{   
            width:40px;
            height:40px;
        }
        .input_amount{  
            width:140px;
        }
    }
    
    @media screen and (min-width: 1300px) and  (max-width:1380px){ 
        .btnbox {
        bottom: 10%;
      }
    }
</style>
<template>
    <x-layout-main>
            <p class="title">借记卡交易安全锁</p>
            <p class="support_tran">
                您当前的卡号是<span></span>，为<span></span>类账户，支持以下交易类型：
            </p>
            <ul>
                <li>
                    <label class='check_box'>	
                        <input type="checkbox" class="checkbox" id=" "><i></i>
                        无卡支付开通
                    </label>
                    单日累计限额
                    <input class="input_amount" type="text" />
                    元，生效日期
                    <input class="input_amount" type="text" />
                    -
                    <input class="input_amount" type="text" />
                </li>
                <li>
                    <label class='check_box'>	
                        <input type="checkbox" class="checkbox" id=" "><i></i>
                        转账功能开通
                    </label>
                    单日累计限额
                    <input class="input_amount" type="text" />
                    元，生效日期
                    <input class="input_amount" type="text" />
                    -
                    <input class="input_amount" type="text" />
                </li>
                <li>
                    <label class='check_box'>	
                        <input type="checkbox" class="checkbox" id=" "><i></i>
                        境内消费关闭
                    </label>
                    单日累计限额
                    <input class="input_amount" type="text" />
                    元，生效日期
                    <input class="input_amount" type="text" />
                    -
                    <input class="input_amount" type="text" />
                </li>
                <li>
                    <label class='check_box'>	
                        <input type="checkbox" class="checkbox" id=" "><i></i>
                        境外消费开通
                    </label>
                    单日累计限额
                    <input class="input_amount" type="text" />
                    元，生效日期
                    <input class="input_amount" type="text" />
                    -
                    <input class="input_amount" type="text" />
                </li>
                <li>
                    <label class='check_box'>	
                        <input type="checkbox" class="checkbox" id=" "><i></i>
                        境内自助设备取现关闭
                    </label>
                    单日累计限额
                    <input class="input_amount" type="text" />
                    元，生效日期
                    <input class="input_amount" type="text" />
                    -
                    <input class="input_amount" type="text" />
                </li>
                <li>
                    <label class='check_box'>	
                        <input type="checkbox" class="checkbox" id=" "><i></i>
                        境外自助设备取现开通
                    </label>
                    单日累计限额
                    <input class="input_amount" type="text" />
                    元，生效日期
                    <input class="input_amount" type="text" />
                    -
                    <input class="input_amount" type="text" />
                </li>
            </ul>
            <div class="btnbox">
                <button class="btn surebtn" id="modal_btn_sure">下一步</button>
            </div>
    </x-layout-main>
</template>
