<template>
<div class="x-modal">
    <p class="modal_title">输入证件信息</p>
    <ul class="documentinfolist">
        <li>
            <span><b class="must">*</b>证件类型：</span><input class="input_document" type="text" id="DocumentType" disabled="true" :value="documentTypeText">
        </li>
        <li>
            <span><b class="must">*</b>证件号码：</span><input class="input_document" type="text" id="DocumentNo" v-model="pool.GD_NumPid" @focus="onClearNumPidErr">
            <b class="error" id="DocumentNoError">{{NumPidErr}}</b>
        </li>
        <li>
            <span><b class="must">*</b>姓名：</span><input class="input_document" type="text" id="Name" v-model="pool.GD_NamCust" @focus="onClearNamCustErr">
            <b class="error" id="NameError">{{NamCustErr}}</b>
        </li>
    </ul>
    <div class="modal_btnbox">
        <button class="btn backbtn" id="modal_btn_back" @click="onBack">取&nbsp;&nbsp;&nbsp;消</button>
        <button class="btn surebtn" id="modal_btn_sure" @click="onSure">确&nbsp;&nbsp;&nbsp;定</button>
    </div>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            getKeys: ["GD_CodPid"],
            setKeys: ["GD_NumPid", "GD_NamCust"],
            NumPidErr: "",
            NamCustErr: ""
        }
    },
    computed: {
        documentTypeText: function () {
            if (this.pool.GD_CodPid == "") return ""
            return this.documentTypeOptions[this.pool.GD_CodPid]
        },
        ...mapState(['pool', 'documentTypeOptions'])
    },
    methods: {
        initPage () {
            this.initPool(this.$data)
        },
        onBack () {
            // $("#pagePopup").fadeOut('500');
            pageLog('取消-->' + new Date())
            this.onCancel()
        },
        onSure () {
            if (!this.validate()) return
            // $("#pagePopup").fadeOut('500');
            this.submit(this.setKeys)
            this.onContinue()
        },
        validate () {
            if (this.pool.GD_NumPid.length == 0) {
                this.NumPidErr = "请输入您的证件号码"
                return false
            }
            if (this.pool.GD_NamCust.length == 0) {
                this.NamCustErr = "请输入您的姓名"
                return false
            }
            return true
        },
        onClearNumPidErr () {
            this.NumPidErr = ""
        },
        onClearNamCustErr () {
            this.NamCustErr = ""
        },
        ...mapActions(['initPool', 'fetch', 'submit', 'onCancel', 'onContinue'])
    },
    mounted () {
        this.initPage()
    }
}
</script>