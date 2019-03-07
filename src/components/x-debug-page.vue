<template>
<div class="x-debug-page container" v-show="$root.debug">
    <div class="col-md-2">
    <ol class="list-group">
        <li v-for="item in $root.collections" :key="item[0]" class="list-group-item">
            <span class="badge">{{item[1].default.length}}</span>
            <a @click="onCollection(item)">{{item[0]}}</a>
        </li>
    </ol>
    </div>
    <div class="col-md-10">
    <ol class="list-inline">
        <li class="col-md-3 x-debug-item">X <a @click="onClose">关闭</a></li>
        <li class="col-md-3 x-debug-item">+ <a @click="onChangeInterval">持续切换</a></li>
        <li v-for="(item, idx) in pages" :key="item[1]" class="col-md-3 x-debug-item" :class="{current: isCurrent(item[1])}">
            <span :class="{'x-popup': isPopup(item)}">{{idx+1}}</span>
            <a @click="onChangePage(item[1])">{{item[0]}}</a>
        </li>
    </ol>
    </div>
</div>
</template>


<script>
export default {
    data () {
        return {
            pages: [],
            changeCount: 0
        }
    },
    created () {
        this.pages = this.$root.collections[0][1].default
    },
    methods: {
        isCurrent (page) {
            return page === this.$root.currentView
        },
        isPopup (item) {
            return item[2] === 'Popup'
        },
        onClose () {
            this.$root.debug = false
        },
        onChangePage (page) {
            this.$root.debug = false
            ChangePage(page)
        },
        onCollection (collection) {
            this.pages = collection[1].default
        },
        onChangeInterval () {
            this.$root.debug = false
            var self = this
            setInterval(function () {
                self.changeCount++
                document.title = 'changeCount ' + self.changeCount
                if (self.changeCount % 2) ChangePage('./cust_main_OutService.html')
                else ChangePage('B01_PersonalTaxFingerDistinguish')
            }, 2000)
        }
    }
}
</script>

<style>
/***/
.col-md-2 {
    width: 16%;
    float: left;
}
.col-md-3 {
    width: 24%;
    float: left;
}
.col-md-10 {
    width: 83%;
    float: left;
}
/***/
.x-debug-page {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    padding: 5px;
    border: 2px solid black;
    background-color: white;
    z-index: 111111;
}
.x-debug-item {
    padding: 2px;
}
.current {
    background-color: red;
}
.x-popup {
    background-color: yellow;
}
</style>