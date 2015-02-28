$("input").on("keyup", function () {
	var v1 = +$("#n1").val();
	var v2 = +$("#n2").val();

	$("span").text(v1 * v2);
});