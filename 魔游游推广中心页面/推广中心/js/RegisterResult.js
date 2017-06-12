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