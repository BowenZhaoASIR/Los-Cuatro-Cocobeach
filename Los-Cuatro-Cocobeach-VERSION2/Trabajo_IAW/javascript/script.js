$(".navimg li").hover(function() {
	$this = $(this);
	$("body").css('background-color', function() {
		return $this.data('bgcolor');
	});
	$("body").css("background-image", "url(" + $(this).data("bg") + ")");
	$(".text-in-box").css("display", "none");
	$(".text-out-the-box").css("display", "none");
}
,
	function ()
	{
		$(".text-in-box").css("display", "inline");
		$(".text-out-the-box").css("display", "inline");
	}
);