<template>
<div>
<!--头部-->
<x-header></x-header>
<!--主体内容-->
<main class="main">
    <!--<x-nav></x-nav>-->
    <div class="content">
        <div class="panel">
            <slot>
                <p class="title">请定制显示内容。。。</p>
            </slot>
        </div>
    </div>
</main>
<!--<x-footer></x-footer>-->
</div>
</template>
