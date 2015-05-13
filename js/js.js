$(document).ready(function() {
	var date;
    $("#first_sub_button").click(function(event) {
		date = Math.round(+new Date()/1000);
        var emal_text = $('#first_sub_email').val();
		if(!emal_text || $.trim(emal_text) === ''){
			$('#first_sub_email').css('border-color','red');
			return;
		}
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (emailReg.test(emal_text)) {
			$(".alert").alert('close')
			$('.alertbox').empty();
           
			_cio.identify({
			  id:         emal_text.replace('@', '_')+'_'+date, // must be unique per customer
			  email:      emal_text,
			  created_at: Math.round(+new Date()/1000), // seconds since the epoch (January 1, 1970)
			})

  			_cio.track("subscribed", { email: emal_text });
			
			$('form[role="form"]').remove();
			
			$('.alertbox')
			.html('<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Thank you for subscribing.</div>')
		   
		   
        } else {
            $('.alertbox')
			.html('<div class="alert fade in alert-warning alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Please enter a valid email address.</div>');
        }
    });
})


  

