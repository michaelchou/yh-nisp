<template>
<div>
    <x-header :login="$root.loginStatue" :countdown="$root.countDown" :cardstatus="$root.cardStatue"></x-header>
    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title">{{ $t("html.title")}}</p>
                <p class="center_title" id="ShowReason">{{ $t("html.reason") }}</p>
                <div class="btnbox">
                    <button class="btn backbtn" id="btn_back" @click="onBackCard()" v-html="$t('html.back')"></button>
                    <button class="btn surebtn" id="btn_sure" @click="onSure()" v-html="$t('html.sure')"></button>
                </div>
            </div>
        </div>
    </main>
    <!--<x-footer></x-footer>-->
</div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        onBackCard () {
            this.$root.loginStatus = false
            this.$root.countDown = 10
            // onCancle()
        },
        onSure () {
            this.$root.cardStatus = true
            // OnContinue()
        }
    },
    i18n: {
        messages: {
            zh_cn: {
                html: {
                    "title": "信息提示",
                    "reason": "密码错误",
                    "back": "取&nbsp;&nbsp;&nbsp;卡",
                    "sure": "继&nbsp;&nbsp;&nbsp;续",
                },
                errors: {
                    "pinError": "密码错误"
                }
            },
            en_us: {
                html: {
                    "title": "Information",
                    "reason": "Pin Error",
                    "back": "Eject Card",
                    "sure": "Continue",
                },
                errors: {
                    "pinError": "Pin Error"
                }
            }
        }
    }
}
</script>
