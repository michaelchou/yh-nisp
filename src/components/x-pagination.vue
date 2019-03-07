<template>
    <div class="page" id="page">
        <a v-show="prevShow" @click="toPage(currentPage-1)" class="prePage">上一页</a>
        <a v-for="num in pageNumList"
                :key="'n'+num"
                class="page_btn"
                :class="{nowpage: num == currentPage}"
                @click="toPage(num)">{{num+1}}</a>
        <a v-show="nextShow" @click="toPage(currentPage+1)" class="nextPage">下一页</a>
        <span class="sumpage">{{pageOfTable}}</span>
    </div>
</template>
<script>
export default {
    props: {
        total: {
            type: Number,
            default: 0
        },
        pageSize: {
            type: Number,
            default: 8
        }
    },
    data () {
        return {
            currentPage: 0
        }
    },
    computed: {
        prevShow () {
            return this.currentPage > 0;
        },
        nextShow () {
            return this.pageSize * (this.currentPage + 1) < this.total;
        },
        pageNumList () {
            var PageNum=4;//分页链接接数(5个)
            var PagesLen=Math.ceil(this.total/this.pageSize);//总页数
            var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2);
            var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1;
            var startPage,endPage;
            if (PageNum>=PagesLen) {
                startPage=0;endPage=PagesLen-1;
            }
            else if (this.currentPage<PageNum_2){
                startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1;//首页
                }
            else {
                startPage=this.currentPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: this.currentPage-PageNum_2+1;
                var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t;
            }
            var result = []
            for (var num = startPage; num <= endPage; num++) {
                result.push(num);
            }
            return result;
        },
        pageOfTable () {
            if (this.total === 0) return '共0/0页';
            else return `共${this.currentPage+1}/${Math.ceil(this.total/this.pageSize)}页`
        }
    },
    methods: {
        toPage (num) {
            this.currentPage = num;
            this.$emit('current-change', num);
        }
    }
}
</script>