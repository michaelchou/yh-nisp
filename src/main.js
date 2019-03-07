import "babel-polyfill"
var Vue = require('vue')

var VueI18n = require('./components/vue-i18n')
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh_cn',
    messages: {
        zh_cn: require('./i18n/zh_cn.json'),
        en_us: require('./i18n/en_us.json')
    }
})

var VueAwesomeSwiper = require('./components/vue-awesome-swiper')
Vue.use(VueAwesomeSwiper)

var components = [
    ['页头', 'x-header', 'Part', require('./components/x-header.vue')],
    ['导航', 'x-nav', 'Part', require('./components/x-nav.vue')],
    ['布局', 'x-layout-main', 'Part', require('./components/x-layout-main.vue')],
    ['页脚', 'x-footer', 'Part', require('./components/x-footer.vue')],
    ['调试', 'x-debug-page', 'Part', require('./components/x-debug-page.vue')],
    ['省市区三级联动', 'x-province', 'Part', require('./components/x-province.vue')],
    ['Dialog', 'x-dialog', 'Part', require('./components/x-dialog.vue')],
    ['主菜单头', 'x-main-header', 'Part', require('./components/x-main-header.vue')],
    ['Many', 'x-many-choose', 'Part', require('./components/x-many-choose.vue')],
    ['弹出窗口', 'x-dialog-select', 'Part', require('./components/x-dialog-select.vue')],
    ['弹出窗口2', 'x-dialog-selectForD02', 'Part', require('./components/x-dialog-selectForD02.vue')],
    ['Level', 'x-multi-level', 'Part', require('./components/x-multi-level.vue')],
    ['分页', 'x-pagination', 'Part', require('./components/x-pagination.vue')],

    ['管理页头', 'adm-header', 'Part', require('./components/adm-header.vue')],
    ['管理功能页头', 'in-adm-header', 'Part', require('./components/in-adm-header.vue')],
    ['是否继续交易', 'x-pop-ifcontinue', 'Part', require('./components/x-ifcontinue.vue')],
    ['通用表格显示组件', 'x-comtab', 'Part', require('./components/x-comtab.vue')],
    ['通用表格显示组件2', 'x-comtab2', 'Part', require('./components/x-comtab2.vue')],
    ['通用表格有详情按钮', 'x-comtab-det', 'Part', require('./components/x-comtab-det.vue')]
]
components.forEach(item => {
    Vue.component(item[1], item[3])
})

    var collections = [];
    collections = AppCollections ;     
    collections.push(['A01_PUBLIC',          require('./A01_common.js')]);
    collections.push(['B01_CARD',            { default: B01_pages }]);
    collections.push(['B02_EBANK',           { default: B02_pages }]);
    collections.push(['B03_TRANSFER',        { default: B03_pages }]);
    collections.push(['B04_ACCOUNT',         { default: B04_pages }]);
    collections.push(['B05_FINANCE',         { default: B05_pages }]);
    collections.push(['B06_FUND',            { default: B06_pages }]);
    collections.push(['B07_QUERY',           { default: B07_pages }]);
    collections.push(['B08_FOREXC',          { default: B08_pages }]);
    collections.push(['B09_CREDITCARD',      { default: B09_pages }]);
    collections.push(['B10_INSURANCE',       { default: B10_pages }]);
    collections.push(['B11_COMCOIN',         { default: B11_pages }]);
    collections.push(['B12_BRCHFEATURE',     { default: B12_pages }]);
    collections.push(['B14_BILL',            { default: B14_pages }]);
    collections.push(['B15_LOAN',            { default: B15_pages }]);

    collections.push(['D01_ADMIN',           { default: D01_pages}]);

    collections.push(['C00_BRCHFEATURE',     { default: window.C00_pages ? window.C00_pages : [] }]);
	collections.push(['C10_00GG',            { default: window.C10_00GG_pages ? window.C10_00GG_pages : []  }]);
    collections.push(['C10_01XJ',            { default: window.C10_01XJ_pages ? window.C10_01XJ_pages : []  }]);
    collections.push(['C10_02CD',            { default: window.C10_02CD_pages ? window.C10_02CD_pages : []  }]);
    collections.push(['C10_03TS',            { default: window.C10_03TS_pages ? window.C10_03TS_pages : []  }]);
    collections.push(['C10_04ZZ',            { default: window.C10_04ZZ_pages ? window.C10_04ZZ_pages : []  }]);
    collections.push(['C10_05DY',            { default: window.C10_05DY_pages ? window.C10_05DY_pages : []  }]);
    collections.push(['C10_06LC',            { default: window.C10_06LC_pages ? window.C10_06LC_pages : []  }]);
    collections.push(['C10_07JJ',            { default: window.C10_07JJ_pages ? window.C10_07JJ_pages : []  }]);
    collections.push(['C10_08XY',            { default: window.C10_08XY_pages ? window.C10_08XY_pages : []  }]);
    collections.push(['C10_09JF',            { default: window.C10_09JF_pages ? window.C10_09JF_pages : []  }]);
    collections.push(['C10_10KK',            { default: window.C10_10KK_pages ? window.C10_10KK_pages : []  }]);
    collections.push(['C10_99GL',            { default: window.C10_99GL_pages ? window.C10_99GL_pages : []  }]);

var pages = [];
collections.forEach(collection => {
    collection[1].default.forEach(item => {
        Vue.component(item[1], item[3])
        pages.push(item)
    })
})


var menu = require('../json/menu.json')
var demoPool = []

var App = require('./app.vue')
import store from './store.js'
var vm = new Vue({
    i18n,
    store,
    data: {
        currentView: './cust_main_OutService.html',
        currentPopup: './customer/common/cust_com_PopupDemo.html',
        theme: 'default',
        themeImgPath: 'themes/default',
        themes: window.g_themes ? window.g_themes : [],
        collections: collections,
        pages: pages,
        menu: menu,
        loginStatus: false, // 登录状态
        exitStatus: true, // 退出状态
        timeStatus: true, // 倒计时显示
        VIPStatus: "0", // 客户等级
        countDown: 0,
        cardStatus: false,
        saleShow: false, // 营销小信封显示
        barrage: '', // 弹幕：生日祝贺
        SaleProdSumShow: false,
        debug: false,
        demoPool: window.g_pool ? window.g_pool : demoPool,
        message: 'Hello, world',
        SaleProdSum: "",
        MachineType: "3",
        AdminName: ""
    },
    render: function(createElement) {
        return createElement(App)
    },
    mounted() {
        var self = this;
        DataTools.get("GD_A01_Theme|GD_A01_BusTip|C_A01_Dev_MachineType", function(data) {
            self.theme = data[0]; // 界面主题
            self.MachineType = data[2];
            var tips = JSON.parse(data[1]); // 界面提示语
            var i18n_tips = self.$i18n._vm.$data.messages.zh_cn.tip; // 偷看i18n底层数据结构
            for (var tip in tips) {
                i18n_tips[tip] = tips[tip];
            }
        })
    },
    watch: {
        theme(newValue) {
            var conf = ChangeTheme(newValue);
            this.themeImgPath = conf[3];
        }
    },
    methods: {
        imgPath(file) {
            return `${this.themeImgPath}/${file}`
        },
        getImgPath() {
            return "Machine/" + this.MachineType.toString() + "/";
        }
    }

})

// 浏览器调试访问
window.vm = vm
vm.$mount("#vueApp")