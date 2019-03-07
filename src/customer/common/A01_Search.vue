<template>
    <x-layout-main>
        <p class="title">请选择国家</p>
            <table id="tab" class="infor_table" style="table-layout:fixed;word-wrap:break-word;">
                <tr>
					<td>国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家：</td>
					<td>
                        <label><input v-on:input="sourceChanged" class="input_info" id="CountryInput" list="CountryList" placeholder="请选择国家/地区" type="text" maxlength="20" onclick="ShowPinyinKB('-1','-1','CountryInput','请选择国家/地区：')" onblur="HideKB()"></label>
                        <datalist id="CountryList" @change='changeType'></datalist>
					</td>
				</tr>
            </table>
            <div class="btnbox">            
                <button class="btn" id="btn_back" >上&nbsp;一&nbsp;步</button>
                <button class="btn" id="btn_sure" >下&nbsp;一&nbsp;步</button>
            </div>
    </x-layout-main>
</template>

<script>
export default {
    data () {
        return {
			json:'[{"NUM_ITEM_DIC":"ABW","VLU_ITEM_DIC":"阿鲁巴"},{"NUM_ITEM_DIC":"AFG","VLU_ITEM_DIC":"阿富汗"},{"NUM_ITEM_DIC":"BEL","VLU_ITEM_DIC":"比利时"},{"NUM_ITEM_DIC":"BTN","VLU_ITEM_DIC":"不丹"},{"NUM_ITEM_DIC":"GBR","VLU_ITEM_DIC":"英国"}]',			 
        }
    },
    methods: {
        sourceChanged: function(e) {
            var strCountryInput = $("#CountryInput").val();//选择的国家 
            this.onSelectCountry(strCountryInput);//根据选择或输入的重新匹配下拉框
            //截取空格后面的字符串作为客户选择的国家
            var arr = strCountryInput.split(' '); 
            if(arr.length > 0){
                strCountryInput = arr[arr.length - 1];
            }
            //替换输入框里面的值
            $("#CountryInput").val(strCountryInput); 
            var strCountryCode = strFromJson(this.json,"VLU_ITEM_DIC",strCountryInput,"NUM_ITEM_DIC");
            
        },
        onSelectCountry (val) {//创建下拉框数据
            $("#CountryList").html("");
            var selectArray = new Array();
            var k=0;
            var DictCountry1 = JSON.parse(this.json);
            for(var i in DictCountry1){ 
                if(DictCountry1[i].VLU_ITEM_DIC=="中国") 
                {
                    continue;
                }
                if(CheckPinYin(val)){//全部是拼音
                   val = val.toLowerCase();//全部转换成小写
                   var strCountryForPY= ConvertPinyin(DictCountry1[i].VLU_ITEM_DIC);
                   if(strCountryForPY.indexOf(val) != -1){//包含
                        selectArray[k] = new Array();
                        //把数据全部加入到列表中
                        selectArray[k][0] = strCountryForPY + " " + DictCountry1[i].VLU_ITEM_DIC;
                        selectArray[k][1] = DictCountry1[i].VLU_ITEM_DIC;
                        k++; 
                   }
                }
                else{//不是拼音
                    if(DictCountry1[i].VLU_ITEM_DIC.indexOf(val) != -1){//包含
                        selectArray[k] = new Array();
                        //把数据全部加入到列表中
                        selectArray[k][0] = DictCountry1[i].VLU_ITEM_DIC;
                        selectArray[k][1] = DictCountry1[i].VLU_ITEM_DIC;
                        k++; 
                    }
                }                       
            }
            var html = "";
            for(var i=0; i<selectArray.length; i++){
                    html += '<option value="'+ selectArray[i][0] +'">'+ selectArray[i][1] +'</option>';
            }
            $("#CountryList").html(html); 
        },
    },
    mounted () {      
        //国家下拉框初始化
        this.onSelectCountry("");
        var strCountry = strFromJson(this.json,"NUM_ITEM_DIC","BEL","VLU_ITEM_DIC");
        $("#CountryInput").val(strCountry); 

        document.getElementById("btn_sure").onclick=onBtnSure;
        function onBtnSure(){ 
            var isOk = false;
            var val = $("#CountryInput").val();//选择的国家
            var strCountryCode = strFromJson(json,"VLU_ITEM_DIC",val,"NUM_ITEM_DIC");
	    };
    }
}
</script>