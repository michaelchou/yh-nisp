<style scoped>
.all-level {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.multi-level {
    position: absolute;
    top: 10%;
    left: 6%;
    width: 88%;
    height: 88%;
    font-size: 30px;
}
.level-1, .level-2, .level-3 {
    margin: 10px 0;
}

.level-header {
    text-align: left;
}
.level-1 {
    max-height: 85%;
    height: 850px;
    float: left;
}

.level-2, .level-3 {
    max-height: 85%;
    height: 850px;
    float: left;
}

.level-expand {  /* 全扩展模式 */
    width: 98%;
}

.level-left {    /* 两列模式 */
    width: 25%;
}
.level-right {
    width: 74%;
}

.level-1 > ul, .level-2 > ul, .level-3 > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

.cols-1 {
    float: left;
    width: 96%;
    margin: 0 5px;
}
.cols-2 {
    float: left;
    width: 48%;
    margin: 0 5px;
}
.cols-3 {
    float: left;
    width: 30%;
    margin: 0 5px;
}
.cols-4 {
    float: left;
    width: 24%;
    margin: 0 5px;
}

.level-item {
    display: block;
    overflow: hidden;
    padding: 12px 0;
    margin: 0 16px;
}
.selectitle{    
    margin:0 12px;
    font-size:3rem;
}

.up {
    margin: 8px 0;
}
.closed {
    margin: 6px 6px 0 6px;
    float: right;
}
.header-right {
    float: right;
}
.level-filter {
    margin: 6px 0 0 0;
    font-size:2.6rem;
}
@media screen and (max-height: 850px) {
    .multi-level {
        font-size: 26px;
    }
    .level-1 {
        height:600px; 
    }
    .level-2, .level-3 {
        height: 600px; 
    }    
    .up img{
        width: 40px;
    }  
}
</style>


<template>
<div class="all-level" v-show="show">
  <div class="multi-level">
    <div class="level-header">
        <div class="header-right">
            <!--性能问题<input type="checkbox" value="advanced" v-model="advanced"></input>-->
            <input id="textFilter" type="text" class="level-filter" placeholder="查询过滤" :disabled="filterDisabled" v-model="filter" @input="onFilter" onclick="ShowPinyinKB('-1','-1','textFilter','')" onblur="HideKB()"></input>
            <a @click="onCancel"><img class="closed" :src="$root.imgPath('img/返回按钮.png')"></img></a>
        </div>
        <div>
            <span class='selectitle'>请选择{{title}}：</span>
            <span v-for="(item, index) in result" :key="'result-'+index">{{itemName(item)}} / </span>
            <a class="up" v-show="showUp" @click="onUp"><img :src="$root.imgPath('img/删除.png')"></img></a>
        </div>
    </div>
    <div>
        <div class="level-1" :class="left_cls" v-show="showLevel1"> 
            <ul>
                <li :class="cols_cls[0]" v-for="(item, index) in filterData1" :key="'level1-'+index">
                    <a @click="onChoose1(index, item)" :id="itemCode(item)" class="level-item" :class="item.actived">{{itemName(item)}}</a>
                </li>
            </ul>
        </div>
        <div class="level-2" :class="right_cls" v-show="showLevel2">
            <ul>
                <li :class="cols_cls[1]" v-for="(item, index) in filterData2" :key="'level2-'+index">
                    <a @click="onChoose2(index, item)" :id="itemCode(item)" class="level-item" :class="item.actived">{{itemName(item)}}</a>
                </li>
            </ul>
        </div>
        <div class="level-3" :class="right_cls" v-show="showLevel3">
            <ul>
                <li :class="cols_cls[2]" v-for="(item, index) in filterData3" :key="'level3-'+index">
                    <a @click="onChoose3(index, item)" :id="itemCode(item)" class="level-item" :class="item.actived">{{itemName(item)}}</a>
                </li>
            </ul>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "项目"
        },
        data: {
            type: Array,
            default: []
        },
        value: {
            type: String,
            default: ""
        },
        pcode: {
            type: String,
            default: 'COD'
        },
        pname: {
            type: String,
            default: 'NAM'
        },
        plevel: {
            type: String,
            default: 'C'
        },
        columns: {
            type: Array,
            default: function () { return [3, 3, 3]}
        }
    },
    data () {
        return {
            left_cls: "level-expand",
            right_cls: "level-right",
            cols_cls: this.makeColsCls(this.columns),
            showLevel1: true,
            showLevel2: false,
            showLevel3: false,
            data2: [],
            data3: [],
            filter: '',
            filter1: '',
            filter2: '',
            filter3: '',
            result: [],
            advanced: false,
            advData: null
        }
    },
    computed: {
        data1: function () {
            if (this.advanced) {
                return this.advData
            } else {
                return this.data
            }
        },
        filterData1: function() {
            return this.data1.filter(item => {
                if (this.filter1 === '') return true
                if (item[this.pname].indexOf(this.filter1) == -1) return false
                else return true
            })
        },
        filterData2: function() {
            return this.data2.filter(item => {
                if (this.filter2 === '') return true
                if (item[this.pname].indexOf(this.filter2) == -1) return false
                else return true
            })
        },
        filterData3: function() {
            return this.data3.filter(item => {
                if (this.filter3 === '') return true
                if (item[this.pname].indexOf(this.filter3) == -1) return false
                else return true
            })
        },
        // 判断选择是否达到终点，是否还需要输入过滤条件
        filterDisabled: function () {
            if (this.result.length == 0) {
                return false
            }
            else if (this.result.length == 3) {
                return true
            }
            else {
                return !this.hasDownLevel(this.result[this.result.length-1])
            }
        },
        showUp: function () {
            return this.result.length > 0
        }
    },
    watch: {
        data: function(val) {
            this.mark()
        },
        value: function(val) {
            this.mark()
        },
        advanced: function (val) {
            this.mark()
        }
    },
    created () {
        this.mark()
    },
    methods: {
        mark () {
            if (this.advanced) {
                this.makeAdvanced()
                this.markAdvanced()
            } else {
                this.markResult()
                this.markLayout()
            }
        },
        markAdvanced () {
            console.log('markAdvanced')
            this.left_cls = "level-expand"                      // 扩展
            this.cols_cls[0] = "cols-2";                           // 单列
            this.showLevel2 = false;
            this.showLevel3 = false;
            this.filter = this.filter1 = '';
        },
        markLayout () {    // 根据result计算页面布局
            if(this.result[2]) {
                this.data3 = this.result[1][this.plevel]
                this.markActived(this.data3, this.result[2])
                this.markActived(this.data, this.result[0])
                this.left_cls = "level-left"  // 收缩
                this.cols_cls[0] = "cols-1";  // 收缩为单列
                this.showLevel2 = false;
                this.showLevel3 = true;
                this.filter = this.filter3 = '';
                return
            }
            if(this.result[1]) {
                this.data2 = this.result[0][this.plevel]
                this.markActived(this.data2, this.result[1])
                this.markActived(this.data, this.result[0])
                this.left_cls = "level-left"  // 收缩
                this.cols_cls[0] = "cols-1";  // 收缩为单列
                this.showLevel2 = true;
                this.showLevel3 = false;
                this.filter = this.filter3 = '';
                return
            }
            if(this.result[0]) {
                this.markActived(this.data, this.result[0])
                if(this.hasDownLevel(this.result[0])) {
                    this.data2 = this.result[0][this.plevel]
                    this.markActived(this.data2, "")
                    this.left_cls = "level-left"  // 收缩
                    this.cols_cls[0] = "cols-1";  // 收缩为单列
                    this.showLevel2 = true
                    this.showLevel3 = false
                    this.filter = this.filter2 = ''
                } else {
                    this.left_cls = "level-expand"                      // 扩展
                    this.cols_cls = this.makeColsCls(this.columns);     // 复原
                    this.showLevel2 = false;
                    this.showLevel3 = false;
                    this.filter = this.filter1 = '';
                }
            } else {
                this.markActived(this.data, "")
                this.left_cls = "level-expand"                      // 扩展
                this.cols_cls = this.makeColsCls(this.columns);     // 复原
                this.showLevel2 = false;
                this.showLevel3 = false;
                this.filter = this.filter1 = ''
            }
        },
        makeColsCls (col) { // 把[3,3,3]处理成["cols-3", "cols-3", "cols-3"]
            return col.map(item => { return "cols-" + item })
        },
        onUp () {
            this.result.pop()
            this.markLayout()
        },
        onCancel () {
            this.$emit('cancel')
        },
        itemCode (item) {
            return item[this.pcode]
        },
        itemName (item) {
            return item[this.pname]
        },
        hasDownLevel (item) {  // 是否有下级
            return item.hasOwnProperty(this.plevel) && item[this.plevel].length > 0
        },
        findResult () {  // 根据value搜索data计算result
            this.result = []
            for(var i=0; i < this.data.length; i++) {
                var item0 = this.data[i]
                this.result.push(item0)
                if(item0[this.pcode] === this.value) {
                    return
                }
                if(this.hasDownLevel(item0)) {
                    for(var j=0; j< item0[this.plevel].length; j++) {
                        var item1 = item0[this.plevel][j]
                        this.result.push(item1)
                        if(item1[this.pcode] === this.value) {
                            return
                        }
                        if(this.hasDownLevel(item1)) {
                            for(var k=0; k < item1[this.plevel].length; k++) {
                                var item2 = item1[this.plevel][k]
                                if(item2[this.pcode] === this.value) {
                                    this.result.push(item2)
                                    return
                                }
                            }
                        }
                        this.result.pop()
                    }
                }
                this.result.pop()
            }
        },
        markResult () {
            if(this.value === "") return
            this.findResult()
            this.$emit('result', this.result)
            //console.log(this.result)
        },
        markActived (data, value) {
            data.forEach(item => {
                if(item === value) {
                    item["actived"] = "level-actived"
                } else {
                    item["actived"] = "level-normal"
                }
            })
        },
        onChoose1 (index, item) {
            this.result = [item]
            this.$emit('result', this.result)
            this.markActived(this.data1, this.result[0])
            if(this.hasDownLevel(item)) {
                this.data2 = item[this.plevel]
                this.markActived(this.data2, this.result[1])
                this.left_cls = "level-left"  // 收缩
                this.cols_cls[0] = "cols-1";  // 收缩为单列
                this.showLevel3 = false
                this.showLevel2 = true
                this.filter = this.filter2 = ''
                this.$emit('choose', 0, item)
            } else {
                this.left_cls = "level-expand"                      // 扩展
                this.cols_cls = this.makeColsCls(this.columns);     // 复原
                this.showLevel3 = false
                this.$emit('confirm', index, item)
            }
        },
        onChoose2 (index, item) {
            this.result = [this.result[0], item]
            this.$emit('result', this.result)
            this.markActived(this.data2, this.result[1])
            if(this.hasDownLevel(item)) {
                this.data3 = item[this.plevel]
                this.markActived(this.data3, this.result[2])
                this.showLevel2 = false
                this.showLevel3 = true
                this.filter = this.filter3 = ''
                this.$emit('choose', 1, item)
            } else {
                this.$emit('confirm', index, item)
            }
        },
        onChoose3 (index, item) {
            this.$set(this.result, 2, item)   // 触发数组wach计算
            this.$emit('result', this.result)
            this.markActived(this.data3, this.result[2])
            this.$emit('confirm', index, item)
        },
        onFilter (event) {
            console.log(event.target.value)
            if (this.result.length == 0) {
                this.filter1 = event.target.value
            } else if (this.result.length == 1) {
                this.filter2 = event.target.value
            } else {
                this.filter3 = event.target.value
            }
        },
        findResult2 () {
            if (this.advData == null || this.value === "") return
            this.result = []
            for(var i=0; i < this.advData.length; i++) {
                var item0 = this.advData[i]
                this.result.push(item0)
                if(item0[this.pcode] === this.value) {
                    return
                }
                this.result.pop()
            }
        },
        makeAdvanced () {
            this.findResult2()
            console.log('makeAdvanced')
            var expand = []
            var path = []
            for(var i=0; i < this.data.length; i++) {
                var item0 = this.data[i]
                path.push(item0)
                if(this.hasDownLevel(item0)) {
                    for(var j=0; j< item0[this.plevel].length; j++) {
                        var item1 = item0[this.plevel][j]
                        path.push(item1)
                        if(this.hasDownLevel(item1)) {
                            for(var k=0; k < item1[this.plevel].length; k++) {
                                var item2 = item1[this.plevel][k]
                                path.push(item2)
                                this.expandAdd(expand, path)
                                path.pop()
                            }
                        } else {
                            this.expandAdd(expand, path)
                        }
                        path.pop()
                    }
                } else {
                    this.expandAdd(expand, path)
                }
                path.pop()
            }
            this.advData = expand
        },
        expandAdd (expand, path) {
            var i = 0
            var prepand = ""
            while(i < path.length) {
                prepand = prepand + path[i][this.pname]
                i++
            }
            var item = Object.assign({}, path[i-1])
            item[this.pname] = prepand
            expand.push(item)
        }
    }
}
</script>
