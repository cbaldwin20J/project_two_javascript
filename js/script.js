$(document).ready(function () {




function paginate(num) {
	console.log("num2: " + num);
	$('.student-list li').hide();
	$('.student-list p').remove();
	let count = 0;
	let start = (num -1) * 10;
	if ($('.student-list li.search').length > 0) {
		while (count < 10) {
			$('.student-list li.search').eq(start).show();
			count += 1;
			start += 1;
		}
	}else {
	while (count < 10) {
		$('.student-list li').eq(start).show();
		count += 1;
		start += 1;
	};
};
	the_num = num - 1;
	$('#ul_paginate li a.active').removeClass('active');
	$('#ul_paginate li a').eq(the_num).addClass('active');
};

function search_index(num) {
	let count = 0;
	let start = (num -1) * 10;
	while (count < 10) {
		$('li:visible').eq(start).show();
		count += 1;
		start += 1;
	};
	the_num = num - 1;
	$('#ul_paginate li a.active').removeClass('active');
	$('#ul_paginate li a').eq(the_num).addClass('active');
}

function start() {

	$('ul li').hide();
	$('#ul_paginate li').remove();
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


$('.student-search').on('click', 'button', function(){
	let $input_val = $('.student-search input').val();
	console.log($input_val);
	$('.student-list p').remove();
	$('#ul_paginate li').remove();
	$('.student-list li.search').removeClass('search');


	if (!$input_val){
		start();
		return;
	}

	$('.student-list li').hide();
	

	
	let ifNone = 0;
	$('.student-list li').each(function() {
		let $str = $("h3", this).text();
		let $iftrue = $str.search($input_val);

		if ($iftrue > -1) {
			$(this).addClass('search');
			ifNone += 1;
		};
	});
	
	if (ifNone == 0) {
		console.log("made past student length");
		$('.student-list').append(
			'<p>There were no matching results ' +
			'for: ' + $input_val + ".</p>");
	}else {
		search_index(1);
		let $amount_of_lis = $('ul li.search').length;

		let num_of_buttons = Math.ceil($amount_of_lis/10);

		for (let i=1; i<=num_of_buttons; i+=1) {
			console.log("in the for loop for paginate");
			$('#ul_paginate').append("<li>" +
            	"<a href='#'>" + i + "</a>" +
          		"</li>&nbsp;")
			};

	$('#ul_paginate li a').eq(0).addClass('active');
	paginate(1);
	
	}

	



	


});

$('#ul_paginate').on('click', 'li a', function() {
	let num_to_send = $(this).text();
	console.log("num: " + parseInt(num_to_send));
	paginate(parseInt(num_to_send))

});

start();
});