//导航栏的两个按钮
var backLast=document.getElementsByClassName('titleico-lt');
var titleico_rt=document.getElementsByClassName('titleico-rt');
var titleico_rt_list=document.getElementsByClassName('titleico-rt-list')[0];
var titleico_rt_list_open=0;
for (var i = 0; i < backLast.length; i++) {
	backLast[i].onclick=function(){
		window.history.back(-1); 
	}
};
for (var i = 0; i < titleico_rt.length; i++) {
	titleico_rt[i].onclick=function(){
		if(titleico_rt_list_open==0){
			titleico_rt_list.style.display="block";
			titleico_rt_list_open=1;
		}else{
			titleico_rt_list.style.display="none";
			titleico_rt_list_open=0;
		}
		
	}
};
// //判断单选框状态
// var inputHow=document.getElementsByClassName("inputhow");
// var closeIp=document.getElementsByClassName("closeip");
// var inputbd=document.getElementsByClassName("inputbd");
// for (var i = 0; i < inputHow.length; i++) {
// 	inputHow[i].index=i;
// 	closeIp[i].index=i;
// 	//获取焦点时
// 	inputHow[i].onfocus=function(){ 
// 	       inputbd[this.index].style.borderBottom="0.05rem solid #fe4847";
// 	  	   // closeIp[this.index].style.display="block";
// 	} 
// 	// 点击时
// 	// closeIp[i].onclick=function(){  
// 	//        inputHow[this.index].value="";
// 	//        closeIp[this.index].style.display="none";
	  
// 	// }   
// 	// 正在输入时
// 	inputHow[i].oninput=function(){  
// 		console.log(inputHow[this.index].value);
// 	    if(inputHow[this.index].value==""){
// 	    	closeIp[this.index].style.display="none";
// 	    }else{
// 	    	closeIp[this.index].style.display="block";
// 	    }
// 	} 
// 	//失去焦点时
// 	inputHow[i].onblur=function(){  
// 		if(inputHow[this.index].value==""){
// 	    	closeIp[this.index].style.display="none";
// 	    }
// 	    inputbd[this.index].style.borderBottom="0.05rem solid #c9c9c9";
// 	}
// };
