$(document).ready(function () {


function paginate(num) {
	console.log("num2: " + num);
	$('ul li').hide();
	let $amount_of_lis = $('ul li').length;
	let num_of_buttons = Math.ceil($amount_of_lis/10)

	for (let i=1; i<=num_of_buttons; i+=1) {
		if (i == num) {
			$('#ul_paginate').append("<li>" +
            		"<a class='active' href='#'>"+ i + "</a>" +
          		"</li>")
		}else {
			$('#ul_paginate').append("<li>" +
            		"<a href='#'>" + i + "</a>" +
          		"</li>")
		}
	}
	
	let count = 0;
	let start = (num -1) * 10;
	while (count < 10) {
		$('li').eq(start).show();
		count += 1;
		start += 1;
	};


	

};

paginate(1);

$('#ul_paginate').on('click', 'li a', function() {
	let num_to_send = $(this).text();
	console.log("num: " + parseInt(num_to_send));
	paginate(parseInt(num_to_send))

});

});