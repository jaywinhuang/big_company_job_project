$(document).ready(function () {

	$("#search_box .form-control").focus();

	$("#search_box .btn").click(function(){
		search();
	});

	$("#search_box").keydown(function(){
		if(event.keyCode == "13"){
			if($("#search_box .form-control").val() != ''){
				$("#search_box .btn").click();
			}
		}
	});

	$(".location").click(function(){
		$(".location").removeClass("active");
		$(this).addClass("active");
		search();
	});

	$(".company").click(function(){
		$(".company").removeClass("active");
		$(this).addClass("active");
		search();
	});

	$(".job_type").click(function(){
		$(".job_type").removeClass("active");	
		$(this).addClass("active");
		search();
	});

	$(".page_num").click(function(){
		$(".page_num").removeClass("active");	
		$(this).addClass("active");
		search();
	});

});

function search () {
	var keyword = $("#search_box .form-control").val();
	var location = $(".location.active").text();
	var company = $(".company.active").text();
	var job_type = $(".job_type.active").text();
	var page_num = $(".pagination .active").text();
	window.location.href = "main.html?keyword=" + encodeURIComponent(keyword) + "&location=" + location + "&company=" + company + "&job_type=" + job_type + "&page=" + page_num;
};

