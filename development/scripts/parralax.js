function parallax() {

	$(document).on("scroll", function() {

		var t = $(document).scrollTop();
		var change = -(t/2);

		$("header.regular").css("top", change);

	}); 

}