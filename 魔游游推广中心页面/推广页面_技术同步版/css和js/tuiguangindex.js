
// 首充号和选择游戏的页面
var screenHeight=document.documentElement.clientHeight;
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
	opfirstBuy.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-top.png";
	opchoseGame.style.color="#585858";
	opchoseGame.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-bottom.png";
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
	opchoseGame.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-top.png";
	opfirstBuy.style.color="#585858";
	opfirstBuy.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-bottom.png";
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
		opfirstBuy.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-bottom.png";
		black_Bk.style.display="none";
		conTainer.style.height="auto";
		conTainer.style.overflow="auto";
		firstbuy_on=0;
	}else{
		opfirstBuy.style.color="#fe4e63";
		opfirstBuy.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-top.png";
		opchoseGame.style.color="#585858";
		opchoseGame.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-bottom.png";
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
		opchoseGame.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-bottom.png";
		black_Bk.style.display="none";
		conTainer.style.height="auto";
		conTainer.style.overflow="auto";
		chosegame_on=0;
	}else{
		opchoseGame.style.color="#fe4e63";
		opchoseGame.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-top.png";
		firstbuyContent.style.display="none";
		chosegameContent.style.display="block";
		opfirstBuy.style.color="#585858";
		opfirstBuy.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-bottom.png";
		firstbuy_on=0;
		chosegame_on=1;

	}
}

//我要推广的页面
var tuiguang_bt=document.getElementsByClassName("tuiguang-bt");
var alertPush=document.getElementsByClassName("alertpush");
var closePush=document.getElementsByClassName("closepush");



for (var i = 0; i < tuiguang_bt.length; i++) {
	tuiguang_bt[i].index=i;
	tuiguang_bt[i].onclick=function(){
		screenHeight=document.documentElement.clientHeight;
		black_Bk.style.display="block";
		for(i=0;i<alertPush.length;i++){
			alertPush[this.index].style.display="block";
		}
    document.body.style.overflow="hidden";
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
var movemoney=document.getElementById("movemoney");
var zhuanzhiyue=document.getElementById("zhuanzhiyue");
var close_movemoney=document.getElementById("close-movemoney");

 function showDialog(){
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
    document.body.style.overflow="auto";
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
	firstbuy_on=0;
  chosegame_on=0;
  movemoney.style.display="none";
  document.body.style.overflow="auto";
}

//首和账icon的样式
var icon_shou=document.getElementsByClassName("icon-shou");
var icon_zhang=document.getElementsByClassName("icon-zhang");
for (var i = 0; i < icon_shou.length; i++) {
	icon_shou[i].innerHTML="首";
};
for (var i = 0; i < icon_zhang.length; i++) {
	icon_zhang[i].innerHTML="账";
};

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
 if(scrollTop>=600){
	backTop.style.display="block";
	if(screenWidth>=640){
		var scrwidth=conTainer.offsetLeft;
		backTop.style.left=scrwidth/40+13.875+'rem';
	}
	if(screenWidth<=320){
		var scrwidth=conTainer.offsetLeft;
		backTop.style.left=scrwidth/40+13.875+'rem';
	}
 }else{
 	backTop.style.display="none";
 }
};

for (var i = 0; i < alertPush.length; i++) {
	alertPush[i].addEventListener('touchmove', function(event) {
		event.preventDefault();
	}, false);
};
black_Bk.addEventListener('touchmove', function(event) {
		event.preventDefault();
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
	opfirstBuy.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-top.png";
	opchoseGame.style.color="#585858";
	opchoseGame.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-bottom.png";
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
	opchoseGame.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-top.png";
	opfirstBuy.style.color="#585858";
	opfirstBuy.getElementsByTagName("img")[0].src="http://res.moyoyo.com/res/style/2015/images/tuiguang/arr-bottom.png";
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