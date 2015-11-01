$(document).ready(function() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var top_imgheight = $("#top_img").height();
	var footerheight = $("#footer").height();
	var content_center_height = windowHeight - top_imgheight - footerheight;
	$("#content_center").css("height", content_center_height + "px");
	/*
	 * var messagedivheight = $("#messagediv").height(); var inputdivheight =
	 * $("#inputdiv").height(); var inputdiv_mar_top = messagedivheight -
	 * inputdivheight + "px"; $("#inputdiv").css("margin-top",
	 * inputdiv_mar_top);
	 */
	var clickOk = true;
	var one = new Array()
	one[0] = "失眠的夜里";
	one[1] = "光棍节";
	one[2] = "失恋了";
	one[3] = "无聊的周末";
	one[4] = "台风天";
	one[5] = "断电的日子";
	one[6] = "喝醉了酒";
	one[7] = "情人节晚上";
	one[8] = "断水的日子";
	one[9] = "断网的日子";

	var two = new Array()
	two[0] = "在东区操场";
	two[1] = "在书德楼";
	two[2] = "在北一国际大酒店";
	two[3] = "在三亚皇家图书馆";
	two[4] = "在北区国际运动场";
	two[5] = "在三亚皇家五星级宿舍";
	two[6] = "在皇家游泳馆";
	two[7] = "在商业街南天门";
	two[8] = "在南区妹子宿舍";
	two[9] = "在白鹭院";

	var three = new Array()
	three[0] = "跟食堂阿姨";
	three[1] = "跟外卖小哥";
	three[2] = "跟学生会主席";
	three[3] = "跟卤蛋";
	three[4] = "跟大胖纸";
	three[5] = "跟宿管";
	three[6] = "跟学弟";
	three[7] = "跟学妹";
	three[8] = "跟学长";
	three[9] = "跟学姐";

	var four = new Array()
	four[0] = "唱《爱上一个不回家的人》";
	four[1] = "比赛吃老鼠";
	four[2] = "紧紧的抱在一起";
	four[3] = "背靠背坐在一起";
	four[4] = "静静的看着彼此";
	four[5] = "接吻";
	four[6] = "啪啪啪打苍蝇";
	four[7] = "一起光着身子跑";
	four[8] = "玩真心话大冒险";
	four[9] = "拉耙耙";
	/**
	 * 输入框，输入文字触发
	 */
	$("#tel").bind("input propertychange", function() {
		if ($(this).val().length > 4) {
			$(this).val($(this).val().substr(0, 4));
			alert("瞎呀，只要后4位！");
		}
		clickOk = true;
	});

	$(".btn-start").click(function submint() {

		if (clickOk) {
			var re = new RegExp("^[0-9]{4}$");

			if (!(re.test($("#tel").val()))) {
				alert("瞎呀，要后4位！");
				return;
			}

			var ontstr = $("#tel").val().substr(0, 1);
			var onttwo = $("#tel").val().substr(1, 1);
			var ontthr = $("#tel").val().substr(2, 1);
			var ontfour = $("#tel").val().substr(3, 1);
			console.info(ontstr);
			console.info(onttwo);
			console.info(ontthr);
			console.info(ontfour);
			console.info(one[ontstr]);
			console.info(two[onttwo]);
			console.info(three[ontthr]);
			console.info(four[ontfour]);
			var joinstr="<h4>您的手机号码后四位</p>在三亚皇家帝国学院的秘密是！</h4></p>"
			$(".resultContent").prepend(joinstr+one[ontstr]+"</p>"+two[onttwo]+"</p>"+three[ontthr]+"</p>"+four[ontfour]);
			$(".resultContainer").css("display","block");
		}
		clickOk = false;
	});
	
	
	$(".resultContainer").click(function(){
		clickOk = true;
		$(".resultContent").html("");
		$(this).css("display","none");
		
	});
});