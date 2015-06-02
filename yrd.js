$(function(){

	$("#btn1").on("click",function(){

		$("body").append('-----------');
		
		var v1 = parseInt($("#val1").val());
		var v2 = parseInt($("#val2").val());

		$("body").append(v1+v2);


	})
})