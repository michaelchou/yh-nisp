<template>
    <div>
        <table class="detail_tab">
            <thead>
				<tr>
					<td v-for="item in theadData" :key="item">{{item}}</td>
					<td v-if="hasButton"></td>
				</tr>
            </thead>
            <tbody>
                <tr v-for="(item,trIndex) in curPageData" :key="item.currency" @click="trSelected(trIndex)" :class='{"selected":item.isSelected}'>
                    <td v-for="obj in item" :key="obj">{{obj}}</td>
                    <td v-if="hasButton" class="td_btn_wdt txt-c">
                        <button class="detailbtn" @click="onDetail($event,trIndex)">详情</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="change_page">
            <button v-if="hasPrePage" @click="onPre">上一页</button>
            <button v-if="hasNextPage" @click="onNext">下一页</button>
        </div>
    </div>
</template>

<script>
import { mapState , mapActions } from 'vuex'

export default {
    props: ["dataList","theadList","trLinage","hasDetButton"],
    data () {
        return {
            trData:this.dataList,//表格内容数据列表
            theadData:this.theadList,//表格头数据
            linage:typeof this.trLinage == "number" ? this.trLinage : 5,//每页行数
            curPageIndex:0,//当前页Index
            curPageData:[],//当前页内容数据列表
            numPage:0,//总页数
            hasPrePage:false,//有上一页？
            hasNextPage:false,//有下一页？
			hasButton:true//是否有详情按钮
        }
    },
    watch : {
        dataList(val){
            console.log("dataList change, val="+val);
            this.tabDataClear();
            this.trData = val;
            this.tabDataInit();
        },
        theadList(val){
            console.log("theadList change, val="+val);
            this.theadData = val;
        },
        trLinage(val){
            console.log("trLinage change, val="+val);
            if (typeof val == "number"){
                this.linage = val;
            }
        },
		hasDetButton(val){
			console.log("hasDetButton change, val="+val);
			this.hasButton = val;
		}
    },
    methods: {
        tabDataClear () {
            this.curPageIndex = 0;
            this.curPageData = [];
            this.hasPrePage = false;
            this.hasNextPage = false;
        },
        tabDataInit () {
            //表格内容是否超出一页，超出翻页处理
            if(this.trData.length > this.linage) {
                this.hasNextPage = true;
                this.curPageData = this.trData.slice(this.curPageIndex*this.linage,(this.curPageIndex+1)*this.linage);
            }
            else {
                this.curPageData = this.trData;
            }
            this.numPage = (this.trData.length % this.linage == 0) ? (parseInt(this.trData.length / this.linage)) : (parseInt(this.trData.length / this.linage) + 1);
        },
        trSelected (index) {
			console.log("单行选中");
            var allIndex = this.curPageIndex*this.linage+index;
            $("tbody tr").removeClass("selected");
            $("tbody tr").eq(index).addClass("selected");
			this.$emit("onTrSelected",allIndex);
        },
        onPre () {
            this.curPageIndex -= 1;
            this.curPageData = this.trData.slice(this.curPageIndex*this.linage,(this.curPageIndex+1)*this.linage);
            this.ifPreOrNext();
        },
        onNext () {
            this.curPageIndex += 1;
            this.curPageData = this.trData.slice(this.curPageIndex*this.linage,(this.curPageIndex+1)*this.linage);
            this.ifPreOrNext();
        },
        ifPreOrNext () {
            var flagPre = true;
            var flagNext = true;
            if (this.curPageIndex >= this.numPage-1) {
                flagNext = false;
            }
            if (this.curPageIndex <= 0) {
                flagPre = false;
            }
            this.hasPrePage = flagPre;
            this.hasNextPage = flagNext;
        },
		onDetail (event,index) {
			event.stopPropagation();
			console.log("点击详情按钮");
			var allIndex = this.curPageIndex*this.linage+index;
			//console.log("allIndex="+allIndex);
			this.$emit("onTrBtnSelected",allIndex);
		}
    },
    mounted () {
        this.tabDataInit();
    }
}
</script>

