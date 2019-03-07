<template>
<div>
    <x-header :login="false"></x-header>
    <main class="main">
        <div class="pub_content">
            <div class="panel">
                <p class="title"><span id="ShowReason">{{ $t("html.OutService") }}</span></p>
            </div>
        </div>
    </main>
   <!-- <x-footer></x-footer>-->
</div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods: {
    },
    i18n: {
        messages: {
            zh_cn: {
                "html": {
                    "OutService": "本机暂停服务"
                }
            },
            en_us: {
                "html": {
                    "OutService": "Out Of Service"
                }
            }
        }
    }
}
</script>
