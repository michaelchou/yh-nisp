/*
  多条记录显示类
 */
function MultiRecordView()
{
  // 每页显示的记录条（行）数
  this.iRowsPerPage = 5;
  // 复选框所在位置 -1不加 0：前面  1：后面
  this.iCheckBoxPos = 0;
  // 表头HTML对象
  this.oTHead = null;
  // 表体HTML对象
  this.oTBody = null;
  // 记录集合数组对象
  this.strRecordArr = null;
  // 表头HTML内容集合数组对象
  this.strHeadingArr = null;
  //定义对齐方式
  this.strAlignArr=null;
  //不可选择的行数数组对象 true:不可选择 false:可选择
  this.strDisabledArr=null;
  //增加每列的宽度数组集合
  this.strTdWidthArr=null;
  //是否显示全选复选框
  this.iShowCheckBoxAll=null;//true:显示 false:不显示
  //是否显示详情按钮
  this.iShowDetailBtn=null;//true:显示 false:不显示
  /*
    显示
   */
  this.show =function()
  {
    // 清空当前显示的内容
    while (this.oTHead.rows.length > 0){
       this.oTHead.deleteRow(0);
	}
    while (this.oTBody.rows.length > 0){
       this.oTBody.deleteRow(0);
	}
    // 插入表头
    var oRow = this.oTHead.insertRow();

	//判断是否显示详情按钮，如果需要显示，需要在表头最后增加一列
	if(this.iShowDetailBtn){
		this.strHeadingArr.push("");
		if(this.strAlignArr != null)
		{
			this.strAlignArr.push("center");
		}
		if(this.strTdWidthArr != null)
		{
			this.strTdWidthArr.push("9%")
		}
		//往存储数据的二维数组对应的位置加入详情按钮列
		if(this.strRecordArr.length > 0){
		   for (var i=0; i < this.strRecordArr.length; i++)
           {
               this.strRecordArr[i].push("<button  class=\"btn\" style=\"position:relative;height:48px;padding: 0px 38px;\">详&nbsp;情</button>");			   
	       }
		}
	}
	//判断有没有增加复选框，如果增加了，需要在表头增加一列数据
	if(this.iCheckBoxPos == 0){
		if(this.iShowCheckBoxAll){
			this.strHeadingArr.unshift("<label class=\"check_box\"><input type=\"checkbox\" id=\"CheckboxAll\" name=\"CheckboxAll\"><i></i></label>");
		}else{
			this.strHeadingArr.unshift("");
		}
		this.strAlignArr.unshift("center");
		//往存储数据的二维数组对应的位置加入数据
		if(this.strRecordArr.length > 0){
		   for (var i=0; i < this.strRecordArr.length; i++)
           {
			   if(this.strDisabledArr.length > 0 && this.strDisabledArr[i] == "true"){
				   this.strRecordArr[i].unshift("<img src=\"img/disablecheckbox.png\" style=\"display:inline-block;margin-right:10px;font-size:2.5rem;height:42px;width:42px\"/>");
			   }
			   else{
				   this.strRecordArr[i].unshift("<label class=\"check_box\"><input type=\"checkbox\" id=\"checkbox\" name=\"checkbox\" value='"+i+"'><i></i></label>");
			   }   
	       }
		}
	}
	else if(this.iCheckBoxPos == 1){
		if(this.iShowCheckBoxAll){
			this.strHeadingArr.push("<label class=\"check_box\"><input type=\"checkbox\" id=\"CheckboxAll\" name=\"CheckboxAll\"><i></i></label>");
		}else{
			this.strHeadingArr.push("");
		}
		this.strAlignArr.push("center");
		//往存储数据的二维数组对应的位置加入数据
		if(this.strRecordArr.length > 0){
		   for (var i=0; i < this.strRecordArr.length; i++)
           {
			   if(this.strDisabledArr.length > 0 && this.strDisabledArr[i] == "true"){
				   this.strRecordArr[i].push("<img src=\"img/disablecheckbox.png\" style=\"display:inline-block;margin-right:10px;font-size:2.5rem;height:42px;width:42px\"/>");
			   }
			   else{
				   this.strRecordArr[i].push("<label class=\"check_box\"><input type=\"checkbox\" id=\"checkbox\" name=\"checkbox\" value='"+i+"'><i></i></label>");
			   }
	       }
		}
	} 
    for (var j=0; j<this.strHeadingArr.length; j++)
    {
      oCell = oRow.insertCell();
	  if(this.strTdWidthArr != null && this.strTdWidthArr.length == this.strHeadingArr.length){
		 oCell.style.width = this.strTdWidthArr[j]; 
	  }
      oCell.innerHTML = this.strHeadingArr[j];
      oCell.align = "center";
    }
    // 插入当前页内容
    for (var i=0; i<this.iRowsPerPage; i++)
    {
      oRow = this.oTBody.insertRow();
	  oRow.onclick= function(){
		 vm.$emit("onChangeCheckBox",$(this));
	  }
      for (var j=0; j<this.strHeadingArr.length; j++)
      {
        oCell = oRow.insertCell();
        if (i < this.strRecordArr.length){
		   //如果该列是按钮的话，需要增加该按钮的响应事件
		   if(this.strRecordArr[i][j].toString().indexOf("button") != -1 || this.strRecordArr[i][j].toString().indexOf("input") != -1){//是否是按钮
                 oCell.onclick= function(){
		             vm.$emit("onClickButton",$(this));
	             }
		   }
           oCell.innerHTML = this.strRecordArr[i][j];	
           if(this.strAlignArr != null && this.strAlignArr.length == this.strHeadingArr.length){
        	  oCell.align=this.strAlignArr[j];
           }else{
        	  oCell.align="center";
           }
        }else{
           oCell.innerHTML = "&nbsp;";
        }
      }
    }
  }
}
