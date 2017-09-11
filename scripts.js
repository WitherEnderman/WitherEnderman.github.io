(function($){
	$('#header').append($('<div style="clear:both;"></div>'));
	$('#header').css({position:'absolute', left: 0, zIndex: 2, boxShadow: '0 2px 3px #557', marginTop: -$('#header').height()});
	$('#wrap').append('<div id="tool" style="position:absolute;z-index:3;right:32%;top:0;cursor:wait;">		<div class="wimg"></div><div class="mask"><div class="info"></div></div><div class="border"></div>	</div>').click(function(){
		if($('#wrap #tool').css('top') != '0px'){
			$('#header').animate({marginTop: -$('#header').height()});
			$('#wrap #tool').animate({top: 0});
		}
	});
	$('#wrap #tool').click(function(){
		if($(this).css('top') == '0px'){
			$('#header').animate({marginTop: 0});
			$(this).animate({top: $('#header').height()});
		}
	});
})(jQuery);