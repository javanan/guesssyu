$("document").ready(function() {
	var Windowsheight = $(window).height();
	var windowWidth = $(window).width();
	
	var actionbarnavheight = $("#actionbarnav").height();
	var bodycontentheight = $("#bodycontent").height();
	var input_messageheight = $("#input_message").height();
	
	var select_messageheight=Windowsheight-actionbarnavheight-bodycontentheight-input_messageheight;
	/* $("#select_message").css("height",select_messageheight);*/
});