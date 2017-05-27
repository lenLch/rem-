function goPay(){
//var data = $('#payForm').serialize();
var mobile=$('#mobile').val();
var goodsid=$('#pay_goods_id').val();
url=basePath+"gopay.html?mobile="+mobile+"&goodsid="+goodsid;
$.ajax({
  url:url,
  type:"post",
  data:'',
  dataType:"json",
      async:false,
      success:function(data){
        var result = data;
        var redirectUrl=result.redirectUrl;
        if(result.code == 200){
          if(redirectUrl != null && redirectUrl.length>0 ){
              window.location.href=redirectUrl;
              return true;
          }
        }else if(result.code == 400){
          alert(result.message);
          return false;
        }
      }
    });
}

function showPayDialog(goodsId, price, title, subTitle){
    $('#mobile').val('');
    $('#pay_goods_title').html(title);
    $('#pay_goods_price').html('￥'+price);
    $('#pay_goods_subTitle').html(subTitle);
    $('#pay_goods_id').val(goodsId);
    var status = $('span.status');
    var popShopping = $('.fixed');
    var shabu = $('.shabu');
    popShopping.css('display','block');
    shabu.css('display','block');
}
    var iNow = 0;
    var scaleIndex = 0;
    // 点击立即抢购出现购买弹窗
    $(function(){
        var status = $('span.status');
        var popShopping = $('.fixed');
        var shabu = $('.shabu');
        var cancle = $('#cancle');
        //status.click(function(){
            //popShopping.css('display','block');
            //shabu.css('display','block');
        //});
        cancle.on('click',function(){
            popShopping.css('display','none');
            shabu.css('display','none');
        });
    // 结束

        var goods = $('.goods');
        var gamepic = $('.gamepic');
        
        /*for(let i = 0; i < goods.length; i++){
            $(goods[i]).on('click',function(e){
                 console.log(status[i-1]);
                if(e.target != status[i-1]) {
                    if($(gamepic[i-1]).css('display') == 'block'){
                        $(gamepic[i-1]).css('display','none');
                    }else {
                        $(".gamepic").hide();
                        $(gamepic[i-1]).css('display','block');
                    }
                }
            });
        }*/
        // 控制每个goods的兄弟gamepic的显隐
        goods.click(function(e){
            if(!$(e.target).is("span")){
                var a =$(this).siblings(".gamepic").css("display");
                if(a=='block'){
                    $(this).siblings(".gamepic").hide()
                }else{
                    $(".gamepic").hide();
                    $(this).siblings(".gamepic").show()
                }
            }
        });
        //结束

        var left_right;
        // 将图片滑动封装成一个函数
        function bindScroll(id) {
            var oUl = $('#'+ id + ' ul');
            var aLi = oUl.children('li');
            var ul_width = 489.2 * aLi.length;
            var marginRight = $('#'+ id + ' ul li').css('margin-right').replace("px","");
            
            $('#'+ id + ' ul').css('width',ul_width+'px');
            var iNow = 0;
            
            var x = 0;
            oUl.on('touchstart',function(e){
                oUl.css('transition','none');
                oUl.css('-webkit-transition','none');
                var disX = e.targetTouches[0].pageX - x;
                var downX =e.targetTouches[0].pageX;
                function fnMove(e) {
                    x = e.targetTouches[0].pageX - disX;
                    oUl.css('transform','translate3d('+ (x-marginRight) +'px,0,0)');
                    oUl.css('-webkit-transform','translate3d('+ (x-marginRight) +'px,0,0)');
                }
                function fnEnd(e) {
                    var upX = e.changedTouches[0].pageX;
                    if(Math.abs(upX - downX) > 50) {
                        // 左移
                        if(upX - downX < 0) {
                            var left_right = -marginRight*(iNow+1);
                            
                            // oUl.css('transform','translate3d('+ (x-15) +'px,0,0)')
                            iNow++;
                            if(iNow >= aLi.length-1) {
                                iNow = aLi.length -2;
                            }
                        }else {
                            left_right = marginRight*(iNow+1);
                            
                            // oUl.css('transform','translate3d('+ (x+15) +'px,0,0)')
                            // 右移
                            /*if(iNow == (aLi.length - 1) + 0.4) {
                                iNow = Math.floor((aLi.length - 1) + 0.4);
                            }*/
                            iNow--;
                            if(iNow == -1){
                                iNow = 0;
                            }
                        }
                    }
                    x = -iNow*aLi[0].offsetWidth;
                    oUl.css('transform','translate3d('+(x+left_right)+'px,0,0)');
                    oUl.css('-webkit-transform','translate3d('+(x+left_right)+'px,0,0)');
                    oUl.css('transition','200ms all ease');
                    oUl.css('-webkit-transition','200ms all ease');

                    function tEnd() {
                        if(iNow == aLi.length) {
                            iNow = aLi.length;
                        }
                        if(iNow == -1){
                            iNow = 0;
                        }
                        if(iNow == 0) {
                            oUl.css('transform','translate3d(0px,0,0)');
                            oUl.css('-webkit-transform','translate3d(0px,0,0)');
                        	//oUl.css('transform','translate3d('+(x+left_right)+'px,0,0)')
                        }else {    
                            x = -iNow*aLi[0].offsetWidth;
                            oUl.css('transform','translate3d('+(x+left_right)+'px,0,0)')
                            oUl.css('-webkit-transform','translate3d('+(x+left_right)+'px,0,0)')
                        }
                    }

                    oUl.on('transitionend',tEnd);
                    document.removeEventListener('touchend',fnEnd,false);
                    document.removeEventListener('touchmove',fnMove,false);
                }
                document.addEventListener('touchmove',fnMove,false);
                document.addEventListener('touchend',fnEnd,false);
                e.preventDefault();
            });
            
            $('#'+id+' ul li').tap(function(){
            	var num=id.replace("box","");
            	var index = $(this).index();
            	scaleIndex = index;            	
            	var singlePicId='scaleBox'+num;
                $('#scale_cancle').css('display','block'); 
                $('#'+singlePicId).css('display','block');
                shabu.css('display','block');
                var ofw = $('#'+singlePicId+' .img li')[0].offsetWidth;
                var ul = $('#'+singlePicId+' .img')[0];
                ul = $(ul);
                var imgWidth = $('#'+ singlePicId + ' ul li').css('width').replace("px","");
                var imgPadding = $('#'+ singlePicId + ' ul li').css('padding-left').replace("px","");
                var ul_width = imgWidth * scaleIndex +imgPadding*(scaleIndex)*2;
                ul_width = -ul_width;
                ul.css('transform','translate3d('+ul_width+'px,0px,0px)');
                ul.css('-webkit-transform','translate3d('+ul_width+'px,0px,0px)');

                
                var textLen = $('#'+singlePicId+' .text > li').length;
                if(index >= 1 && index <= textLen -1) {
                    $($('#'+singlePicId+' .text > li')[index]).addClass('red');
                    $($('#'+singlePicId+' .text > li')[index - 1]).removeClass('red');
                }
                if(index <= textLen-2 && index >= 0) {
                    $($('#'+singlePicId+' .text > li')[index]).addClass('red');
                    $($('#'+singlePicId+' .text > li')[index + 1]).removeClass('red');
                }
                //scaleScroll('scaleBox'+num);
            });
        }

        // 图片放大之后滑动的函数
        function scaleScroll(id){
            var oUl = $('#' + id + ' .img');
            var textUl = $('#' + id + ' .text');
            var textLi = textUl.children('li');
            var aLi = oUl.children('li');
            var x = -scaleIndex*aLi[0].offsetWidth;
            var imgWidth = $('#'+ id + ' ul li').css('width').replace("px","");
            var imgPadding = $('#'+ id + ' ul li').css('padding-left').replace("px","");
            var ul_width = imgWidth * aLi.length +imgPadding*(aLi.length)*2;
            $('#'+ id + ' ul').css('width',ul_width+'px');
            oUl.on('touchstart',function(e){
                oUl.css('transition','none');
                oUl.css('-webkit-transition','none');
                x = -scaleIndex*imgWidth-scaleIndex*imgPadding*2;
                var disX = e.targetTouches[0].pageX - x;
                var downX = e.targetTouches[0].pageX;
                function fnMove(e){
                    x = e.targetTouches[0].pageX - disX;
                    oUl.css('transform','translate3d('+x+'px,0,0)');
                    oUl.css('-webkit-transform','translate3d('+x+'px,0,0)');
                }
                function fnEnd(e){
                    var upX = e.changedTouches[0].pageX;
                    if(Math.abs(upX - downX) > 100) {
                        if(upX - downX < 0) {
                        	
                        	scaleIndex++;
                            if(scaleIndex >= 0 && scaleIndex <= aLi.length -1){
                                $(textLi[scaleIndex]).addClass('red');
                                $(textLi[scaleIndex - 1]).removeClass('red');
                            }
                            if(scaleIndex >= aLi.length) {
                            	scaleIndex = aLi.length -1;
                            }
                        }else {
                        	scaleIndex--;
                            if(scaleIndex >= 0 && scaleIndex <= aLi.length -1){
                                $(textLi[scaleIndex]).addClass('red');
                                $(textLi[scaleIndex + 1]).removeClass('red');
                            }
                            if(scaleIndex == -1){
                            	scaleIndex = 0;
                            }
                        }
                    }
                    x = -scaleIndex*aLi[0].offsetWidth;
                    oUl.css('transform','translate3d('+x+'px,0,0)');
                    oUl.css('-webkit-transform','translate3d('+x+'px,0,0)');
                    oUl.css('transition','200ms all ease');
                    oUl.css('-webkit-transition','200ms all ease');
                    function tEnd(){
                    	
                        if(scaleIndex == aLi.length){
                        	scaleIndex = scaleIndex-1;
                        }
                        if(scaleIndex == -1){
                        	scaleIndex = 0;
                        }
                        x = -scaleIndex*aLi[0].offsetWidth;
                        oUl.css('transform','translate3d('+x+'px,0,0)');
                        oUl.css('-webkit-transform','translate3d('+x+'px,0,0)');
                    }
                    document.removeEventListener('touchend',fnEnd,false);
                	document.removeEventListener('touchmove',fnMove,false);
                    oUl.on('transitionend',tEnd);
                }
                document.addEventListener('touchmove',fnMove,false);
                document.addEventListener('touchend',fnEnd,false);
                e.preventDefault();
            });
        }


        // 当即X关闭放大的图片
        $('#scale_cancle').click(function(){
            $('.scale_img').css('display','none');
            $(this).css('display','none');
            $('.shabu').css('display','none');
            $(".scale_img ul").css('transform','translate3d(0px,0,0)');
            $(".scale_img ul").css('-webkit-transform','translate3d(0px,0,0)');
            $(".scale_img ul").css('transition','none');
            $(".scale_img ul").css('-webkit-transition','none');
        });

        var picture = $('.picture');
        for(var i = 0; i < picture.length; i++){
            //bindScroll('box'+i);
        	bindScroll(picture[i].id);
        }
        var scaleImg = $('.scale_img');
        for(var i = 1; i <= scaleImg.length; i++){
            scaleScroll('scaleBox'+i);
        }
        
    });