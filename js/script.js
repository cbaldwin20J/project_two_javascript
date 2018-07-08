$(document).ready(function () {




function paginate(num) {
	console.log("num2: " + num);
	$('.student-list li').hide();

	
	
	let count = 0;
	let start = (num -1) * 10;
	while (count < 10) {
		$('li').eq(start).show();
		count += 1;
		start += 1;
	};
	the_num = num - 1;
	$('#ul_paginate li a.active').removeClass('active');
	$('#ul_paginate li a').eq(the_num).addClass('active');

	

};




$('#ul_paginate').on('click', 'li a', function() {
	let num_to_send = $(this).text();
	console.log("num: " + parseInt(num_to_send));
	paginate(parseInt(num_to_send))

});



	function start() {

		$('ul li').hide();
		let $amount_of_lis = $('ul li').length;
		let num_of_buttons = Math.ceil($amount_of_lis/10);

		for (let i=1; i<=num_of_buttons; i+=1) {
				$('#ul_paginate').append("<li>" +
	            		"<a href='#'>" + i + "</a>" +
	          		"</li>&nbsp;")
			};

		$('#ul_paginate li a').eq(0).addClass('active');
		paginate(1);
	
};

start();
});