<template>
    <nav class="nav">
        <div class="navbus">
            <label class="busName" id="busName"></label><span class="BZ">（<label class="curBz" id="curBz"></label>/<label class="allBz" id="allBz"></label>）</span>
        </div>
        <ul class="navlist" id="menu-content"></ul>
    </nav>
</template>

<style scoped>
/*主体区域之导航区域*/
.nav{
    position: absolute;
    float: left;
    width: 29%;
    height: 100%;
}
/*-------------------------导航-------------------------*/
.navbus{
    margin-top:11%;
}
.navlist{
    position: relative;
    width: 100%;
    height: 70%;
    margin: 5% auto;
    background: url(img/navbg.png) no-repeat;
    background-size: 100% 100%;
}
.navlist li{
    position: relative;
    width: 100%;
    height: 12%;
    margin: 1% auto;
    color:#FFFFFF;
}
.navlist li span{
    position: absolute;
}
.navlist li span:first-child{
    width: 100%;
    height: 100%;
    font-size: 4rem;
}
.busName{
    margin-left: 35px;
    margin-bottom: 0px;
    color: #009688;
    font-size: 3rem;
    font-weight: 600;
}
.BZ{
    font-size: 2.5rem;
}
.part0{
    top: 65px;
    left: -30px;
    transform: scale(0.5,0.6) skew(14deg,14deg);
    opacity: 0.4;
}
.part00{
    top: 100px;
    left: 318px;
    font-size: 1.6rem;
}
.part1{
    top: 65px;
    left: 40px;
    transform: scale(0.65, 0.8) skew(13deg, 8deg);
    opacity: 0.7;
}
.part01{
    top: 100px;
    left: 385px;
    font-size: 2rem;
}
.active{
    top: 85px;
    left: 130px;
    transform: scale(0.9, 1.1) skew(-1deg, 2deg);
    color: #008B6E;
}
.activing{
    top: 100px;
    left: 470px;
    font-size: 3.5rem;
    color: #008B6E;
}
.part3{
    top: 105px;
    left: 55px;
    transform: scale(0.7,0.8) skew(-10deg,-4deg);
    opacity: 0.8;
}
.part03{
    top: 115px;
    left: 385px;
    font-size: 2.5rem;
}
.part4{
    top: 100px;
    left: 0px;
    transform: scale(0.6,0.5) skew(-15deg,-12deg);
    opacity: 0.6;
}
.part04{
    top: 115px;
    left: 310px;
    font-size: 2rem;
}
.part5{
    top: 90px;
    left: -90px;
    opacity: 0.4;
    transform: scale(0.4,0.4) skew(-15deg,-15deg);
}
.part05{
    top: 105px;
    left: 235px;
    font-size: 1.6rem;
}
</style>