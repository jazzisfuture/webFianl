$(document).ready(function () {
    $("div#GE90").mousemove(function () {
        $("div#GE90>a>img").stop().animate({left:"0px"});
        $("div#GE90>a>span").stop().animate({left:"0px"});
    });
    $("div#GE90").mouseout(function () {
        $("div#GE90>a>img").stop().animate({left:"-500px"});
        $("div#GE90>a>span").stop().animate({left:"400px"});
    });
    $("div#queen").mousemove(function () {
        $("div#queen>a>img").stop().animate({right:"0px"});
        $("div#queen>a>span").stop().animate({right:"0px"});
    });
    $("div#queen").mouseleave(function () {
        $("div#queen>a>img").stop().animate({right:"-500px"});
        $("div#queen>a>span").stop().animate({right:"300px"});
    });
    $("div#cont").mousemove(function () {
        $("div#QRW").stop().animate({left:"110px"});
        $("div#QRX").stop().animate({left:"180px"})
    });
    $("div#cont").mouseleave(function () {
        $("div#QRW,div#QRX").stop().animate({left:"-500px"})
    });
    $("div.topPic,div.introduction,div.midPic,div.table,div#cont,div#copyright,div#map").hide();
    $("div.topPic").fadeIn(1000,function () {
        $("div.introduction").fadeIn(1000,function () {
            $("div.midPic").fadeIn(1000,function () {
                $("div.table").fadeIn(1000,function () {
                    $("div#map").fadeIn(1000,function () {
                        $("div#cont,div#copyright").fadeIn(1000);
                    })
                })
            })
        })
    });
    $("div.topPic").mousemove(function () {
        $("div.picFont").stop().animate({left:"400px"});
    })
    $("div.topPic").mouseleave(function () {
        $("div.picFont").stop().animate({left:"100px"});
    })
    $("div.introduction").mousemove(function () {
        $("div>p").stop().animate({fontSize:"25px",opacity:"0.9"},100)
    })
    $("div.introduction").mouseleave(function () {
        $("div>p").stop().animate({fontSize:"15px",opacity:"1"},200)
    })
});