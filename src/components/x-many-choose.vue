<style scoped>
.many-dialog {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 62%;
    background-color: rgba(240,240,240,1);
    color: #666;
    font-size: 30px;
}
.many-body {
    margin: 10px 0;
}
.many-footer {
    clear: left;
    margin: 20px 0;
}
ul#content {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
}

#content li {
    float: left;
    width: 30%;
    margin: 16px 5px;
}

li > a {
    border: 1px solid black;
    padding: 5px;
}
.cancalbtn,.backbtn{ 
    margin:20px 0 0 0;
    background:none;
    color:#333;
}
.selectitle{    
    margin:0 30%;
    font-size:3rem;
}
.many-header{   
    text-align:center;
}

</style>


<template>
  <div class="many-dialog" v-show="show">
    <div class="many-header">
        <button class="btn cancalbtn" @click="onCancel">取消</button>
        <span class='selectitle'>请选择{{title}}</span>
        <button class="btn backbtn" @click="onUp" v-show="showUp">返回</button>
        
    </div>
    <div class="many-body">
        <ul id="content">
            <li v-for="(item, index) in curPage" :key="item.NAM"><a @click="onChoose(index, item)">{{item.NAM}}</a></li>
        </ul>
    </div>
    <div class="many-footer">
        <button class="btn" @click="onPrev" v-show="showPrev">上一页</button>
        <button class="btn" @click="onNext" v-show="showNext">下一页</button>
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
        up: {
            type: Boolean,
            default: false
        },
        data: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
            page: 0
        }
    },
    computed: {
        curPage: function () {
            return this.data.slice(this.page*15, (this.page+1)*15)
        },
        showNext: function () {
            return this.data.length > (this.page+1)*15
        },
        showPrev: function () {
            return this.page > 0
        },
        showUp: function () {
            return this.up
        }
    },
    methods: {
        onUp () {
            this.$emit('up')
        },
        onPrev () {
            this.page -= 1
        },
        onNext () {
            this.page += 1
        },
        onCancel () {
            this.$emit('cancel')
        },
        onChoose (index, item) {
            this.$emit('confirm', index, item)
        }
    }
}
</script>
