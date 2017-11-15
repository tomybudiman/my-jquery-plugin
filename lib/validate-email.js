(function($){
	$.fn.emailValidator=function(email){
        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email.val())
	}
})(jQuery)
