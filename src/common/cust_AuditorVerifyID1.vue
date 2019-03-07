<style scoped>
	table{
		width: 85%;
		height: 80%;
		margin-right: 10%;
		margin-left: 10%;
		margin-top: 50px;
		border-collapse:collapse;
    }
    table td:first-child{
        width: 70%;
        border: 2px solid #50DBB7;
        text-align: center;
        padding: 0px;
    }
    table td:last-child{
        width: 30%;
        border: 2px solid #50DBB7;
        text-align: center;
        vertical-align: bottom;
	}
	table td p{ 
		font-size: 2.1rem;
	}
    .content_c{
        position: relative;
        width: 100%;
        height: 100%;
        margin: 2% auto;
        display: flex;
        justify-content: center; 
    }
    .content_l,.content_r{
        position: relative;
        height: 85%;
        border: 1px solid #50DBB7;
        border-radius: 20px;
        box-shadow: 0px 5px 15px 5px rgba(108, 165, 161, 0.5);
        text-align: center;
    }
    .content_l{
	    width: 70%;
    }
    .content_r{
        margin-left: 3%; 
        width: 20%;
    }
    .r_title{
        position: relative;
        top: 3%;
        font-size: 2.8rem;
        text-align: center;
        color: #008B6E;
        letter-spacing: 2px;
    }
    .r_content{
        display: flex;
        text-align: left;
        margin-top:40px;
        flex-direction:column;
        align-items: center;
    }
    .r_content_div1{
        border: 1px solid #50DBB7;
        box-shadow: 0px 5px 15px 5px rgba(108, 165, 161, 0.5);
        width: 250px;
        margin-top: 40px;
        height: 100px;
    }
    .r_content_div2{
        border: 1px solid #50DBB7;
        box-shadow: 0px 5px 15px 5px rgba(108, 165, 161, 0.5);
        width: 280px;
        margin-top: 50px;
        height: 280px;
     
    }
</style>

<template>
    <div>
		<main class="main">
            
            <div class="content_c">
            <div class="content_l">
			<table>
				<tr>
					<td rowspan="3"></td>
					<td><img src=""><p>外国护照基本信息页</p></td>
				</tr>
				<tr>
					<td><img src=""><p>外国护照签注页</p></td>
				</tr>
				<tr>
					<td>
					<img src=""><p>外国护照入境时间页</p></td>
				</tr>
			</table>
            <div class="btnbox">
                <button class="btn">重拍</button>  
            </div>
			</div >
            <div class="content_r">
			    <p class="r_title">工作人员审核</p>
				<div class="r_content">
					<div class="nice-select" name="nice-select">
						<p id="auditor" type="text" readonly></p>
						
					</div>
		            <div class="r_content_div1"><img src="" ></div>
					<div class="r_content_div2"></div>
				</div>
			    <div class="btnbox">
                    <button class="btn">指纹确认</button>  
                </div>
            </div>
            </div>
			
        </main>
    </div>
</template>
<script> 
export default {
 mounted(){

     DataTools.get("GD_A01_Auditors",function(data){
        if(data!=""&&data!=null){
            var auditorArr=data[0].split(",");
            var auditorId=new Array();
            for(var i=0;i<auditorArr.length;i++){
                auditorId.push(i);
            }
            createSelect(auditorId,auditorArr,"auditor");
        }   
     });	
 }
}
</script> 