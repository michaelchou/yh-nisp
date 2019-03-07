<!--
    界面主题切换
    初始 颜涛 2017/9/16
-->
<style scoped>
.theme-item {
    text-align: center;
    width: 40%;
	background-color: gray;
	font-size: 2rem;
    padding: 6px;
    margin: 6px;
}
.current {
    background-color: green;
}

</style>

<template>
    <x-layout-main>
        <p class="title">界面主题切换</p>
        <ol>
            <li v-for="(item, idx) in $root.themes" :key="item[0]" class="theme-item" :class="{current: isCurrent(item[0])}">
                <a @click="onSwitchTheme(item[0])">{{item[1]}} {{item[0]}}</a>
            </li>
        </ol>
    </x-layout-main>
</template>

<script>
export default {
    methods: {
        isCurrent (theme) {
            return theme === this.$root.theme
        },
        onSwitchTheme (theme) {
			this.$root.theme = theme
			//SetVar(...)
        }
    }
}

</script>