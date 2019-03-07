<style scoped>
   
        .box img{
            width: 110px;
            height: 400px;
            position: fixed;
            opacity: 1;
            left: 75%;  
            top: 20%;
            transform: translate(50%, 50%); 
            animation: change 8s;
            -moz-animation: change 8s;
            -webkit-animation: change 8s;
            -o-animation: change 8s;
        }
        @keyframes change{
            from {
                width: 0px;
                height: 0px;
                opacity: 0;
                left: 100%;
                top: 100%;
            }
            to {
                width: 110px;
                height: 400px;
                opacity: 1;
                left: 75%;
                top: 20%;
            }
        }
</style>
<template>
    <x-layout-main>
        <div class="box">
            <img src="img/小人.png" alt="">
        </div>
    </x-layout-main>
</template>