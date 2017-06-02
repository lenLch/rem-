var iNow;
// 点击立即抢购出现购买弹窗
$(function () {
    var status = $('span.status');
    var popShopping = $('.fixed');
    var shabu = $('.shabu');
    var cancle = $('#cancle');
    // console.log(cancle);
    status.click(function () {
        popShopping.css('display', 'block');
        shabu.css('display', 'block');
    });
    cancle.on('click', function () {
        popShopping.css('display', 'none');
        shabu.css('display', 'none');
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
    goods.click(function (e) {
        if (!$(e.target).is("span")) {
            var a = $(this).siblings(".gamepic").css("display");
            if (a == 'block') {
                $(this).siblings(".gamepic").hide()
            } else {
                $(".gamepic").hide();
                $(this).siblings(".gamepic").show()
            }
        }
    });
    //结束

    var left_right;
    // 将图片滑动函数
    function bindScroll(id) {
        var oBox = $('#' + id);
        var oUl = $('#' + id + ' ul');
        var aLi = oUl.children('li');

        var marginRight = $('#' + id + ' ul li').css('margin-right');

        marginRight = Number(marginRight.substring(0, marginRight.length - 2));

        var ofw = aLi[0].offsetWidth;
        console.log(ofw);
        var ul_width = (ofw+marginRight) * aLi.length;
        $('#' + id + ' ul').css('width', ul_width + 'px');
        iNow = 0;
        var x = -iNow * aLi[0].offsetWidth;
        // var x = 0;
        oUl.on('touchstart', function (e) {
            oUl.css('transition', 'none');
            var disX = e.targetTouches[0].pageX - x;
            var downX = e.targetTouches[0].pageX;

            function fnMove(e) {
                x = e.targetTouches[0].pageX - disX;
                oUl.css('transform', 'translate3d(' + (x - marginRight) + 'px,0,0)');
            }

            function fnEnd(e) {
                var upX = e.changedTouches[0].pageX;
                if (Math.abs(upX - downX) > 50) {
                    // 左移
                    if (upX - downX < 0) {
                        var left_right = -marginRight * (iNow + 1);
                        /*console.info(left_right);
                         console.info(marginRight+"zuo")*/

                        // oUl.css('transform','translate3d('+ (x-15) +'px,0,0)')
                        iNow++;
                        if (iNow >= aLi.length - 1) {
                            iNow = aLi.length - 2;
                        }
                    } else {
                        left_right = marginRight * (iNow + 1);
                        // console.info(iNow+"you")

                        // oUl.css('transform','translate3d('+ (x+15) +'px,0,0)')
                        // 右移
                        /*if(iNow == (aLi.length - 1) + 0.4) {
                         iNow = Math.floor((aLi.length - 1) + 0.4);
                         }*/
                        iNow--;
                        if (iNow == -1) {
                            iNow = 0;
                        }
                    }
                }
                x = -iNow * aLi[0].offsetWidth;
                /*console.info(x+"x");
                 console.info(left_right+"left_right");*/
                oUl.css('transform', 'translate3d(' + (x + left_right) + 'px,0,0)');
                oUl.css('transition', '200ms all ease');

                function tEnd() {
                    if (iNow == aLi.length) {
                        iNow = aLi.length - 1;
                    }
                    if (iNow == -1) {
                        iNow = 0;
                    }
                    if (iNow == 0) {
                        oUl.css('transform', 'translate3d(0px,0,0)');
                    } else {
                        x = -iNow * aLi[0].offsetWidth;
                        oUl.css('transform', 'translate3d(' + (x + left_right) + 'px,0,0)')
                    }
                }

                oUl.on('transitionend', tEnd);
                document.removeEventListener('touchend', fnEnd, false);
                document.removeEventListener('touchmove', fnMove, false);
            }

            document.addEventListener('touchmove', fnMove, false);
            document.addEventListener('touchend', fnEnd, false);
            e.preventDefault();
        });

        // 点击每个li的时候对应到放大图片的第几张
        $('#' + id + ' ul li').tap(function (){
            var index = $(this).index();
            iNow = index;
            $('#scale_cancle').css('display', 'block');
            $('.scale_img').css('display', 'block');
            shabu.css('display', 'block');
            var ofw = $('.scale_img .img li')[0].offsetWidth;
            $('.scale_img .img').css('transform', 'translate3d(' + (-index * ofw) + 'px,0px,0px)');
            var textLen = $('.text > li').length;
            if (index >= 1 && index <= textLen - 1) {
                $($('.text > li')[index]).addClass('red');
                $($('.text > li')[index - 1]).removeClass('red');
            }
            if (index <= textLen - 2 && index >= 0) {
                $($('.text > li')[index]).addClass('red');
                $($('.text > li')[index + 1]).removeClass('red');
            }
        });
    }

    // 图片放大之后滑动的函数
    function scaleScroll(id) {
        var oUl = $('#' + id + ' .img');
        var textUl = $('#' + id + ' .text');
        var textLi = textUl.children('li');
        var aLi = oUl.children('li');
        // console.log(iNow+'---');
        var x = -iNow * aLi[0].offsetWidth;
        // var x = 0;
        oUl.on('touchstart', function (e) {
            oUl.css('transition', 'none');
            var disX = e.targetTouches[0].pageX - x;
            var downX = e.targetTouches[0].pageX;

            function fnMove(e) {
                x = e.targetTouches[0].pageX - disX;
                oUl.css('transform', 'translate3d(' + x + 'px,0,0)');
            }

            function fnEnd(e) {
                var upX = e.changedTouches[0].pageX;
                if (Math.abs(upX - downX) > 100) {
                    if (upX - downX < 0) {
                        iNow++;
                        if (iNow >= 0 && iNow <= aLi.length - 1) {
                            $(textLi[iNow]).addClass('red');
                            $(textLi[iNow - 1]).removeClass('red');
                        }
                        if (iNow >= aLi.length) {
                            iNow = aLi.length - 1;
                        }
                    } else {
                        iNow--;
                        if (iNow >= 0 && iNow <= aLi.length - 1) {
                            $(textLi[iNow]).addClass('red');
                            $(textLi[iNow + 1]).removeClass('red');
                        }
                        if (iNow == -1) {
                            iNow = 0;
                        }
                    }
                }
                x = -iNow * aLi[0].offsetWidth;
                oUl.css('transform', 'translate3d(' + x + 'px,0,0)');
                oUl.css('transition', '200ms all ease');

                function tEnd() {
                    if (iNow == 5) {
                        iNow = 4;
                    }
                    if (iNow == -1) {
                        iNow = 0;
                    }
                    x = -iNow * aLi[0].offsetWidth;
                    oUl.css('transform', 'translate3d(' + x + 'px,0,0)');
                }

                oUl.on('transitionend', tEnd);
                document.removeEventListener('touchend', fnEnd, false);
                document.removeEventListener('touchmove', fnMove, false);
            }

            document.addEventListener('touchmove', fnMove, false);
            document.addEventListener('touchend', fnEnd, false);
            e.preventDefault();
        });
    }


    // 当即X关闭放大的图片
    $('#scale_cancle').click(function () {
        $('.scale_img').css('display', 'none');
        $(this).css('display', 'none');
        $('.shabu').css('display', 'none');
    })

    var picture = $('.picture');
    for (var i = 1; i <= picture.length; i++) {
        bindScroll('box' + i);
    }
    scaleScroll('scaleBox');
});