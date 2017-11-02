$(document).ready(function(){

    setPostion()

    $(".secret").each(function(i,e){
        $(e).text(randomText(10 + Math.floor(Math.random() * 5)))
        $(e).parents('.item').one("mouseover", function(){
            var secret = getSecret(i),
                j = 10,
                int;
            int = setInterval(function(){
                if(j < secret.length){
                    j++;
                    $(e).text(randomText(j))
                }else{
                    $(e).text(secret)
                    clearInterval(int)
                }
            }, 80)
        })
    })

    $("#bottom-bg").hide()
    $("#top-menu").hide()

    $("#top-logo").click(function(){
        $("#top-logo, #top-fake-slogan").fadeOut(2000)
        $(document).scrollTo($("#projects").offset().top-85, 2000);
    })

    $("#top-menu a").click(function(){
        $(document).scrollTo($($(this).attr('scrollto')).offset().top-85, 1000);
    })

    $(window).resize(function(){
        setPostion()
    })

    $(window).scroll(function(){
        containerScroll = document.documentElement.scrollTop + document.body.scrollTop
        scrollTopline = windowHeight*0.73 - 25

        containerOpacity = ((containerScroll / scrollTopline) / (1 / (1 - 0.5))) + 0.5
        if(containerOpacity < 1){
            $("#container").css("opacity",containerOpacity)
        }else{
            $("#container").css("opacity",1)
        }

        if(containerScroll > scrollTopline){
            $("#top-logo, #top-fake-slogan").hide()
        }else{
            $("#top-logo, #top-fake-slogan").fadeIn(2000)
        }

        if(containerScroll > 999){
            $("#bottom-bg").show()
        }else{
            $("#bottom-bg").hide()
        }

        if(containerScroll > windowHeight -85){
            $("#top-menu").fadeIn();
        }else{
            $("#top-menu").fadeOut();
        }

        for (var i = 0; i < $("section").length; i++) {
            sectionOffsetTop[i] = $($("section")[i]).offset().top - 90
            sectionName[i] = $($("section")[i]).attr("id")
        };

        for (var i = 0; i < sectionOffsetTop.length; i++) {
            if(containerScroll > sectionOffsetTop[i] && containerScroll < sectionOffsetTop[i+1]){
                $("#top-menu a").parent().removeClass()
                $("#top-menu a[scrollto='#" + sectionName[i] + "']").parent().addClass("highlight")
            }
        };
    })
})

function setPostion () {
    windowWdith = $(window).width()
    windowHeight = $(window).height()

    sectionOffsetTop = []
    sectionName = []

    for (var i = 0; i < $("section").length; i++) {
        sectionOffsetTop[i] = $($("section")[i]).offset().top
        sectionName[i] = $($("section")[i]).attr("id")
        console.log($($("section")[i]).offset().top)
    };

    if(windowWdith > 960){
        $(".container-middle").addClass("wide")
    }else{
        $(".wide").removeClass("wide")
    }

    if(windowWdith / windowHeight > 1.6){
        $("#top-bg").css("background-size","100% auto")
    }else{
        $("#top-bg").css("background-size","auto 100%")
    }
    $("#top-bg").height(windowHeight)
    $("#container").css("top",windowHeight - 25)
    $("#bottom-holder").css("top",windowHeight - 25)
}

function getSecret(i){
    return window.atob([
        'aGRAamlua2FuLm9yZw==',
        'bWlkYXJlQGppbmthbi5vcmc=',
        'eWluaWFuQGppbmthbi5vcmc=',
        'VW5kIHdlbm4gZHUgbGFuZ2UgaW4gZWluZW4gQWJncnVuZCBibGlja3N0LCBibGlja3QgZGVyIEFiZ3J1bmQgYXVjaCBpbiBkaWNoIGhpbmVpbi4='
        ][i])
}

function randomText(length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for( var i=0; i < length; i++ ) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}