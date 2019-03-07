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
        font-size: 1.8rem;
        margin:0 auto;
        margin-top:3%;
        text-align: left;
        width:88%;
   }
   li{  
       margin-bottom:8px;
   }
   .input_amount {
        width: 158px;
        height: 30px;
        border-radius: 2px;
        font-size:1.8rem;
        margin-left:10px;
        margin-right:0;
        font-size:1.8rem;
    }
    .input_info{
        height: 30px;
        width:198px;
        border-radius: 2px;
        margin-left:10px;
        margin-right:0;
        font-size:1.8rem;
    }
    .input_long{    
        height: 30px;
        width:616px;
        border-radius: 2px;
        margin-left:10px;
        margin-right:0;
        font-size:1.8rem;
    }
    .check_box i,.radio_box i{
        width: 30px;
        height: 30px;
    }
    .btnbox {
        bottom: 2%;
    }
    .radio_box,.check_box{  
        font-size:1.8rem;
    }
    .engAdd{    
        width:380px;
    }
    .chAdd{ 
        width:118px;
    }
    .selectType_long {
        width: 198px;
        height: 30px;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border-radius: 5px;
        background: url(img/customer/select.png) no-repeat scroll right center transparent;
        font-size: 1.6rem;
        color: #6E0FFF;
        background-size: 30px;
        line-height: 28px;
    }
    .inputlast{ 
        width:800px;
    }
    @media screen and (max-width:1300px){   
        .input_long{    
            width:368px;
        }
        .chAdd{ 
            width:110px;
        }
        .input_amount{  
            width:120px;
        }
        .engAdd{    
            width:278px;
        }
        .inputlast{ 
            width:860px;
        }
    }
        @media screen and (min-width: 1300px) and  (max-width:1380px){   
        ul{  
            margin-top:-1%;
        }

        .input_long{    
            width:368px;
        }
        .chAdd{ 
            width:110px;
        }
        .input_amount{  
            width:120px;
        }
        .engAdd{    
            width:278px;
        }
        .inputlast{ 
            width:860px;
        }
        
    }
</style>
<template>
    <x-layout-main>
            <p class="title">个人税收居民身份声明</p>
            <ul>
               <li> 税收居民标志：仅为非居民</li>
                <li>
                    <span>
                        姓（英文或拼音）
                        <input class="input_amount" type="text" />
                    </span>
                    <span>
                        名（英文或拼音）
                        <input class="input_amount" type="text" />
                    </span>
                </li>
                <li>
                    您是否有税收居民国（地区）及纳税人识别号？
                    <label class='radio_box'>
                        有
                        <input type="radio" name="account"  id="" ><i></i>
                    </label>
                    <label class='radio_box'>
                        无 
                        <input type="radio" name="account"  id="" ><i></i>
                    </label>
                </li>

                <li>
                    税收居民国（地区）及纳税人识别号：
                    <select name="select" id="IssueId" class="selectType_long">
                        <!--<option value="" selected></option>-->
                    </select>
                    <input class="input_info" type="text" />
                </li>
                 <li>
                   税收居民国（地区）及纳税人识别号：
                   <select name="select" id="IssueId" class="selectType_long">
                        <!--<option value="" selected></option>-->
                    </select>
                   <input class="input_info" type="text" />
                </li>
                 <li>
                   税收居民国（地区）及纳税人识别号：
                   <select name="select" id="IssueId" class="selectType_long">
                        <!--<option value="" selected></option>-->
                    </select>
                   <input class="input_info" type="text" />
                </li>
                 <li>
                   税收居民国（地区）及纳税人识别号：
                   <select name="select" id="IssueId" class="selectType_long">
                        <!--<option value="" selected></option>-->
                    </select>
                   <input class="input_info" type="text" />
                </li>
                 <li style="margin-bottom:12px;">
                   税收居民国（地区）及纳税人识别号：
                   <select name="select" id="IssueId" class="selectType_long">
                        <!--<option value="" selected></option>-->
                    </select>
                   <input class="input_info" type="text" />
                </li>
                <li>
                   现居住地信息：国家
                   <select name="select" id="IssueId" class="selectType_long">
                        <!--<option value="" selected></option>-->
                    </select>
                </li>
                <li>
                   中文地址：行政规划
                   <input class="input_amount chAdd" type="text" />
                   <input class="input_amount chAdd" type="text" />
                   <input class="input_amount chAdd" type="text" />
                   <input class="input_long" type="text" />
                </li>
                <li style="margin-bottom:12px;">
                   英文或拼音地址：
                   省（州）<input class="input_amount" type="text" />
                   市<input class="input_amount" type="text" />
                   区<input class="input_amount" type="text" />
                   <input class="input_long engAdd" type="text" />
                </li>
                <li>
                    出生地信息：国家
                    <select name="select" id="IssueId" class="selectType_long">
                        <!--<option value="" selected></option>-->
                    </select>
                    <label class='check_box'>	
                        <input type="checkbox" class="checkbox" id=" "><i></i>
                        与现居住地一致
                    </label>
                </li>
                 <li>
                   中文地址：行政规划
                   <input class="input_amount chAdd" type="text" />
                   <input class="input_amount chAdd" type="text" />
                   <input class="input_amount chAdd" type="text" />
                   <input class="input_long" type="text" />
                </li>
                <li>
                   英文或拼音地址：
                   省（州）<input class="input_amount" type="text" />
                   市<input class="input_amount" type="text" />
                   区<input class="input_amount" type="text" />
                   <input class="input_long engAdd" type="text" />
                </li>
                <li>
                    解释说明:
                    <input class="input_long inputlast" type="text" />
                </li>
                <li style='color:red;'>
                   （温馨提示：当国籍、证件类型、现居地址等所属国家与声明的税收居民国（地区）不一致时，需要填写此解释说明）
                </li>
            </ul>
            <div class="btnbox">
                <button class="btn backbtn" id="modal_btn_back">上一步</button>
                <button class="btn surebtn" id="modal_btn_sure">确定</button>
            </div>
    </x-layout-main>
</template>
