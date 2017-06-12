// 首充号和选择游戏的页面
var screenHeight=document.documentElement.clientHeight;//获取屏幕宽高
var screenWidth=document.documentElement.clientWidth;
var conTainer=document.getElementById("container");
var firstBuy=document.getElementById("firstbuy");
var choseGame=document.getElementById("chosegame");
var opfirstBuy=document.getElementById("openfirstbuy");
var opchoseGame=document.getElementById("openchosegame");
var openTeam=document.getElementById("openteam");
var black_Bk=document.getElementById("black-bk");
var firstbuyContent=document.getElementById("firstbuycontent");
var chosegameContent=document.getElementById("chosegamecontent");
var firstbuy_on=0;
var chosegame_on=0;

firstBuy.onclick=function(){
	screenHeight=document.documentElement.clientHeight;
	conTainer.style.height=screenHeight+'px';
	conTainer.style.overflow="hidden";
	openTeam.style.display="block";
	black_Bk.style.display="block";
	opfirstBuy.style.color="#fe4e63";
	opfirstBuy.getElementsByTagName("img")[0].src="./images/arr-top.png";
	opchoseGame.style.color="#585858";
	opchoseGame.getElementsByTagName("img")[0].src="./images/arr-bottom.png";
	firstbuyContent.style.display="block";
	chosegameContent.style.display="none";
	firstbuy_on=1;
	chosegame_on=0;

	// 在屏幕大于640或者小于320的应对措施
	if(screenWidth>=640){
		var scrwidth=conTainer.offsetLeft;
		black_Bk.style.left=scrwidth+'px';
		openTeam.style.left=scrwidth+'px';
	}if(screenWidth<=320){
		var scrwidth=conTainer.offsetLeft;
		black_Bk.style.left=scrwidth+'px';
		openTeam.style.left=scrwidth+'px';
	}
}
choseGame.onclick=function(){
	screenHeight=document.documentElement.clientHeight;
	conTainer.style.height=screenHeight+'px';
	conTainer.style.overflow="hidden";
	openTeam.style.display="block";
	black_Bk.style.display="block";
	opchoseGame.style.color="#fe4e63";
	opchoseGame.getElementsByTagName("img")[0].src="./images/arr-top.png";
	opfirstBuy.style.color="#585858";
	opfirstBuy.getElementsByTagName("img")[0].src="./images/arr-bottom.png";
	firstbuyContent.style.display="none";
	chosegameContent.style.display="block";
	firstbuy_on=0;
	chosegame_on=1;

	// 在屏幕大于640或者小于320的应对措施
	if(screenWidth>=640){
		var scrwidth=conTainer.offsetLeft;
		black_Bk.style.left=scrwidth+'px';
		openTeam.style.left=scrwidth+'px';
	}if(screenWidth<=320){
		var scrwidth=conTainer.offsetLeft;
		black_Bk.style.left=scrwidth+'px';
		openTeam.style.left=scrwidth+'px';
	}
}



opfirstBuy.onclick=function(){
	if(firstbuy_on==1){
		openTeam.style.display="none";
		opfirstBuy.style.color="#585858";
		opfirstBuy.getElementsByTagName("img")[0].src="./images/arr-bottom.png";
		black_Bk.style.display="none";
		conTainer.style.height="auto";
		conTainer.style.overflow="auto";
		firstbuy_on=0;
	}else{
		opfirstBuy.style.color="#fe4e63";
		opfirstBuy.getElementsByTagName("img")[0].src="./images/arr-top.png";
		opchoseGame.style.color="#585858";
		opchoseGame.getElementsByTagName("img")[0].src="./images/arr-bottom.png";
		firstbuyContent.style.display="block";
		chosegameContent.style.display="none";
		firstbuy_on=1;
		chosegame_on=0;
	}
}
opchoseGame.onclick=function(){
	if(chosegame_on==1){
		openTeam.style.display="none";
		opchoseGame.style.color="#585858";
		opchoseGame.getElementsByTagName("img")[0].src="./images/arr-bottom.png";
		black_Bk.style.display="none";
		conTainer.style.height="auto";
		conTainer.style.overflow="auto";
		chosegame_on=0;
	}else{
		opchoseGame.style.color="#fe4e63";
		opchoseGame.getElementsByTagName("img")[0].src="./images/arr-top.png";
		firstbuyContent.style.display="none";
		chosegameContent.style.display="block";
		opfirstBuy.style.color="#585858";
		opfirstBuy.getElementsByTagName("img")[0].src="./images/arr-bottom.png";
		firstbuy_on=0;
		chosegame_on=1;

	}
}


//我要推广的页面
	var tuiguang_bt=document.getElementsByClassName("tuiguang-bt");//我要推广按钮
	var alertPush=document.getElementsByClassName("alertpush");//弹出框
	var closePush=document.getElementsByClassName("closepush");//弹出框关闭按钮
	for (var i = 0; i < tuiguang_bt.length; i++) {
		tuiguang_bt[i].index=i;
		tuiguang_bt[i].onclick=function(){
			screenHeight=document.documentElement.clientHeight;
			// conTainer.style.height=screenHeight+'px';
			// conTainer.style.overflow="hidden";
			document.body.style.height="100%";
			document.body.style.overflow="hidden";
			black_Bk.style.display="block";
			for(i=0;i<alertPush.length;i++){
				alertPush[this.index].style.display="block";
			}
			


			// 在屏幕大于640或者小于320的应对措施
			if(screenWidth>=640){
				var scrwidth=conTainer.offsetLeft;
				black_Bk.style.left=scrwidth+'px';
				for(i=0;i<alertPush.length;i++){
					alertPush[i].style.left=scrwidth/40+1+'rem';
				}
				
			}if(screenWidth<=320){
				var scrwidth=conTainer.offsetLeft;
				black_Bk.style.left=scrwidth+'px';
				for(i=0;i<alertPush.length;i++){
					alertPush[i].style.left=scrwidth/40+1+'rem';
				}
			}
		}

	};
	for(i=0;i<closePush.length;i++){
			closePush[i].index=i;
			closePush[i].onclick=function(){
				black_Bk.style.display="none";
				for(i=0;i<alertPush.length;i++){
					alertPush[this.index].style.display="none";
				}
				conTainer.style.height="auto";
				conTainer.style.overflow="auto";
				document.body.style.overflow="auto";
			}
	}


//转至余额弹出框
	var movemoney=document.getElementById("movemoney");
	var zhuanzhiyue=document.getElementById("zhuanzhiyue");
	var close_movemoney=document.getElementById("close-movemoney");
	zhuanzhiyue.onclick=function(){
		movemoney.style.display="block";
		black_Bk.style.display="block";
		conTainer.style.height=screenHeight+'px';
		conTainer.style.overflow="hidden";
		// 转至余额适配
		if(screenWidth>=640){
			var scrwidth=conTainer.offsetLeft;
			black_Bk.style.left=scrwidth+'px';
			movemoney.style.left=scrwidth/40+2+'rem';
			
		}
		if(screenWidth<=320){
			var scrwidth=conTainer.offsetLeft;
			black_Bk.style.left=scrwidth+'px';
			movemoney.style.left=scrwidth/40+2+'rem';
		}
	}
	close_movemoney.onclick=function(){
		movemoney.style.display="none";
		black_Bk.style.display="none";
		conTainer.style.height="auto";
		conTainer.style.overflow="auto";
	}








    //蒙版 
	black_Bk.onclick=function(){
		openTeam.style.display="none";
		for (var i = 0; i < alertPush.length; i++) {
			alertPush[i].style.display="none";
		};
		conTainer.style.height="auto";
		conTainer.style.overflow="auto";
		black_Bk.style.display="none";
		movemoney.style.display="none";
		firstbuy_on=0;
	    chosegame_on=0;
	    document.body.style.overflow="auto";
	}
// 	var loadmore=document.getElementsByClassName("loadmore")[0];

// 	loadmore.onclick=function(){
// 		//我要推广的页面
// 	var tuiguang_bt=document.getElementsByClassName("tuiguang-bt");//我要推广按钮
// 	var alertPush=document.getElementsByClassName("alertpush");//弹出框
// 	var closePush=document.getElementsByClassName("closepush");//弹出框关闭按钮
// 	console.log(alertPush.length);
// 	console.log("222");
// 	for (var i = 0; i < tuiguang_bt.length; i++) {
// 		tuiguang_bt[i].index=i;
// 		tuiguang_bt[i].onclick=function(){
// 			screenHeight=document.documentElement.clientHeight;
// 			// conTainer.style.height=screenHeight+'px';
// 			// conTainer.style.overflow="hidden";
// 			black_Bk.style.display="block";
// 			for(i=0;i<alertPush.length;i++){
// 				alertPush[this.index].style.display="block";
// 			}
// 			console.log("222");


// 			// 在屏幕大于640或者小于320的应对措施
// 			if(screenWidth>=640){
// 				var scrwidth=conTainer.offsetLeft;
// 				black_Bk.style.left=scrwidth+'px';
// 				for(i=0;i<alertPush.length;i++){
// 					alertPush[i].style.left=scrwidth/40+1+'rem';
// 				}
				
// 			}if(screenWidth<=320){
// 				var scrwidth=conTainer.offsetLeft;
// 				black_Bk.style.left=scrwidth+'px';
// 				for(i=0;i<alertPush.length;i++){
// 					alertPush[i].style.left=scrwidth/40+1+'rem';
// 				}
// 			}
// 		}

// 	};
// 	for(i=0;i<closePush.length;i++){
// 			closePush[i].index=i;
// 			closePush[i].onclick=function(){
// 				black_Bk.style.display="none";
// 				for(i=0;i<alertPush.length;i++){
// 					alertPush[this.index].style.display="none";
// 				}
// 				conTainer.style.height="auto";
// 				conTainer.style.overflow="auto";
// 			}
// 	}
	
// 		//蒙版 
// 	black_Bk.onclick=function(){
// 		openTeam.style.display="none";
// 		for (var i = 0; i < alertPush.length; i++) {
// 			alertPush[i].style.display="none";
// 		};
// 		conTainer.style.height="auto";
// 		conTainer.style.overflow="auto";
// 		black_Bk.style.display="none";
// 		firstbuy_on=0;
// 	    chosegame_on=0;
// 	}
// }

// 获取屏幕滚动高度
var backTop=document.getElementById("backtop");
window.onscroll = function(){ 
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
var maxtop=document.getElementById("content-center").offsetTop;
 if(scrollTop>=maxtop){
 	content_top_fly.style.display="block";
 }else{
 	content_top_fly.style.display="none";
 }
 if(scrollTop>=400){
	if(screenWidth>=640){
		var scrwidth=conTainer.offsetLeft;
		backTop.style.left=scrwidth/40+13.875+'rem';
	}
	if(screenWidth<=320){
		var scrwidth=conTainer.offsetLeft;
		backTop.style.left=scrwidth/40+13.875+'rem';
	}
	backTop.style.display="block";
 }else{
 	backTop.style.display="none";
 }
}
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

 function e(obj){return document.getElementById(obj)}
  e('titleico-rt').onclick=function(event){
    // e('titleico-rt-list').style.display='block';
   		if(titleico_rt_list_open==0){
			e('titleico-rt-list').style.display="block";
			titleico_rt_list_open=1;
		}else{
			e('titleico-rt-list').style.display="none";
			titleico_rt_list_open=0;
		}
    stopBubble(event); 
    document.onclick=function(){
      e('titleico-rt-list').style.display='none';
      			titleico_rt_list_open=0;
　　　　　　　document.onclick=null;　
    }
  }
   
  e('titleico-rt-list').onclick=function(event){
    stopBubble(event); 
  }
  function stopBubble(e){  
    if(e && e.stopPropagation){
      e.stopPropagation();  //w3c
    }else{
      window.event.cancelBubble=true; //IE
    }
  }

// for (var i = 0; i < titleico_rt.length; i++) {
// 	// titleico_rt[i].onclick=function(){
		// if(titleico_rt_list_open==0){
		// 	titleico_rt_list.style.display="block";
		// 	titleico_rt_list_open=1;
		// }else{
		// 	titleico_rt_list.style.display="none";
		// 	titleico_rt_list_open=0;
		// }
		
// 	// }
// };
//按照默认、价格升序、价格降序等排列的按钮的效果
var content_center=document.getElementById("content-center");
var content_center_son=content_center.getElementsByTagName("li");
for (var i = 0; i < content_center_son.length; i++) {
	content_center_son[i].onclick=function(){
		for (var i = 0; i < content_center_son.length; i++){
			content_center_son[i].className="";
		}
		this.className="content-center-on";
	}
};

//首和账icon的样式
var icon_shou=document.getElementsByClassName("icon-shou");
var icon_zhang=document.getElementsByClassName("icon-zhang");
// var iconum=screenWidth;
// if(iconum<=320){iconum=320;}
// if(iconum>=640){iconum=640;}
for (var i = 0; i < icon_shou.length; i++) {
	// icon_shou[i].style.width=0.05*iconum+"px";
	// icon_shou[i].style.height=0.05*iconum+"px";
	// icon_shou[i].style.lineHeight=0.05*iconum+"px";
	icon_shou[i].innerHTML="首";
};
for (var i = 0; i < icon_zhang.length; i++) {
	icon_zhang[i].innerHTML="账";
	// icon_zhang[i].style.width=0.05*iconum+"px";
	// icon_zhang[i].style.height=0.05*iconum+"px";
	// icon_zhang[i].style.lineHeight=0.05*iconum+"px";
};

// 首充号和选择游戏的页面浮动
// var float_content_top=document.getElementById("float-content-top");
// window.onscroll = function(){ 
// var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
//  if(scrollTop>=400){
// 	if(screenWidth>=640){
// 		var scrwidth=conTainer.offsetLeft;
// 		float_content_top.style.left=scrwidth/40+'rem';
// 	}
// 	if(screenWidth<=320){
// 		var scrwidth=conTainer.offsetLeft;
// 		float_content_top.style.left=scrwidth/40+'rem';
// 	}
// 	float_content_top.style.display="block";
//  }else{
//  	float_content_top.style.display="none";
//  }
// }




for (var i = 0; i < alertPush.length; i++) {
	alertPush[i].addEventListener('touchmove', function(event) {
		event.preventDefault();//阻止其他事件
	}, false);
};
black_Bk.addEventListener('touchmove', function(event) {
		event.preventDefault();//阻止其他事件
	}, false);



//3.30首充号和选择游戏页面浮标
var content_top_fly=document.getElementById("content-top-fly");
var firstBuyFly=document.getElementById("firstbuyfly");
var choseGameFly=document.getElementById("chosegamefly");
firstBuyFly.onclick=function(){
	screenHeight=document.documentElement.clientHeight;
	conTainer.style.height=screenHeight+'px';
	conTainer.style.overflow="hidden";
	openTeam.style.display="block";
	black_Bk.style.display="block";
	opfirstBuy.style.color="#fe4e63";
	opfirstBuy.getElementsByTagName("img")[0].src="./images/arr-top.png";
	opchoseGame.style.color="#585858";
	opchoseGame.getElementsByTagName("img")[0].src="./images/arr-bottom.png";
	firstbuyContent.style.display="block";
	chosegameContent.style.display="none";
	firstbuy_on=1;
	chosegame_on=0;

	// 在屏幕大于640或者小于320的应对措施
	if(screenWidth>=640){
		var scrwidth=conTainer.offsetLeft;
		black_Bk.style.left=scrwidth+'px';
		openTeam.style.left=scrwidth+'px';
	}if(screenWidth<=320){
		var scrwidth=conTainer.offsetLeft;
		black_Bk.style.left=scrwidth+'px';
		openTeam.style.left=scrwidth+'px';
	}
}
choseGameFly.onclick=function(){
	screenHeight=document.documentElement.clientHeight;
	conTainer.style.height=screenHeight+'px';
	conTainer.style.overflow="hidden";
	openTeam.style.display="block";
	black_Bk.style.display="block";
	opchoseGame.style.color="#fe4e63";
	opchoseGame.getElementsByTagName("img")[0].src="./images/arr-top.png";
	opfirstBuy.style.color="#585858";
	opfirstBuy.getElementsByTagName("img")[0].src="./images/arr-bottom.png";
	firstbuyContent.style.display="none";
	chosegameContent.style.display="block";
	firstbuy_on=0;
	chosegame_on=1;

	// 在屏幕大于640或者小于320的应对措施
	if(screenWidth>=640){
		var scrwidth=conTainer.offsetLeft;
		black_Bk.style.left=scrwidth+'px';
		openTeam.style.left=scrwidth+'px';
	}if(screenWidth<=320){
		var scrwidth=conTainer.offsetLeft;
		black_Bk.style.left=scrwidth+'px';
		openTeam.style.left=scrwidth+'px';
	}
}
//浮标结束