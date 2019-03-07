<template>
    <header class="header">
        <div> <span class="header_test" ><a @click="onDebug">{{pageCnt}}</a></span></div>
    </header>
</template>

<script>
export default {
    computed: {
        pageCnt: function () {
            return this.$root.pages.length
        }
    },
    methods: {
        onDebug () {
            this.$root.debug = !this.$root.debug
        }
    }
}
</script>
