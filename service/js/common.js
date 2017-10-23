/*$(document).ready(function(){
	//自制的小屏菜单
	$("#menu-click").click(function(){
		$("#menu-totul").toggleClass("none");
	});
	$('#close').click(function(){
		//$("#menu-totul").addClass("none");
		$("#menu-totul").animate({
			height:"toggle"
		})
	})
});*/



$(document).ready(function(){
	//自制的小屏菜单
	$("#menu-click").click(function(){
		$("#menu-totul").animate({
			height:"toggle"
		})
});
	$('#close').click(function(){
		//$("#menu-totul").addClass("none");
		$("#menu-totul").animate({
			height:"toggle"
		})
	})
});
