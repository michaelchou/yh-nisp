<style scoped>
.many-dialog {
    position: absolute;
    z-index: 1000;
    width: 30%;
    height: 55%;
    right: 0%;
    bottom: 0%;
    background-color: rgba(240,240,240,1);
    color: #666;
    font-size: 30px;
}
.many-body {
    margin: 10px 0;
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
    margin: 0px 0px;
}

li > a {
    border: 0px solid black;
    padding: 5px;
}
.cancalbtn,.backbtn{ 
    margin:20px 0 0 0;
    background:none;
    color:#333;
}
.selectitle{    
    text-align:center;
    font-size:2.5rem;
}
.many-header{   
    text-align:center;
}
.closed {
    margin: 6px 6px 0 6px;
    float: right;
}
</style>


<template>
  <div class="many-dialog" v-show="show">
    <div class="many-header">
         <span class='selectitle'></span>
         <br>
         <br>
         <!-- <a @click="onCancel"><img class="closed" :src="$root.imgPath('img/返回按钮.png')"></img></a> -->
    </div>
    <div style="width:98%;max-height:78%;margin:0 auto;overflow-y:auto;">
        <ul id="content">
            <li v-for="(item, index) in curPage" :key="item.key"><a @click="onChoose(index, item)">{{item.key}}</a></li>
        </ul>
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
        }
    },
    data () {
        return {
        }
    },
    computed: {
        curPage: function () {
            return this.data.slice(0)
        }
    },
    methods: {
        onCancel () {
            this.$emit('cancel')
        },
        onChoose (index, item) {
            this.$emit('confirm', index, item)
        }
    }
}
</script>
