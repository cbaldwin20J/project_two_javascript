$(document).ready(function () {

//Adds the html search bar
function add_search() {
	$('.page-header').append(
		`<div class="student-search">
          <input placeholder="Search for students...">
          <button>Search</button>
        </div>`);
}

add_search();


// decides which 10 profiles to show
// and colors the active paginate button. 
function paginate(num) {
	console.log("num2: " + num);
	$('.student-list li').hide();
	// the '.student-list p' is the 'none found'
	// from the search bar if its left over.
	$('.student-list p').remove();
	let count = 0;
	let start = (num -1) * 10;
	// if the user used the search button
	if ($('.student-list li.search').length > 0) {
		while (count < 10) {
			// '.search' was the class added to the ones
			// that matched the search.
			$('.student-list li.search').eq(start).show();
			count += 1;
			start += 1;
		}
	// if the user didn't use the search button	
	}else {
	while (count < 10) {
		$('.student-list li').eq(start).show();
		count += 1;
		start += 1;
		};
	};
	// colors the active paginate button.
	the_num = num - 1;
	$('#ul_paginate li a.active').removeClass('active');
	$('#ul_paginate li a').eq(the_num).addClass('active');
};


// this starts off the page when it first loads
// with the correct paginate buttons and first 
// ten users.
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


// this is for the search box
$('.student-search input').on("keyup", function(){
	let $input_val = $(this).val();
	console.log($input_val);
	// '.student-list p' is the 'none found'.
	$('.student-list p').remove();
	// remove paginate buttons
	$('#ul_paginate li').remove();
	// starting our search fresh.
	$('.student-list li.search').removeClass('search');

	// if the user entered a blank in the search
	// then restart from the beginning.
	if (!$input_val){
		start();
		return;
	}
	// hide all profiles so we can filter
	// what to show.
	$('.student-list li').hide();
	
	// counter variable
	let ifNone = 0;

	$('.student-list li').each(function() {
		// get the name of profile
		let $str = $("h3", this).text();
		// get the email of profile
		let $stremail = $("span", this).text();
		// if name contains the input value
		let $iftrue = $str.search($input_val);
		// if email contains the input value
		let $iftrue2 = $stremail.search($input_val);

		if ($iftrue > -1 || $iftrue2 > -1) {
			// any matches gets the class 'search'
			$(this).addClass('search');
			ifNone += 1;
		};
	});
	
	// if no matches
	if (ifNone == 0) {
		console.log("made past student length");
		$('.student-list').append(
			'<p>There were no matching results ' +
			'for: ' + $input_val + ".</p>");
	// if there are matches
	}else {
		let $amount_of_lis = $('ul li.search').length;

		let num_of_buttons = Math.ceil($amount_of_lis/10);

		for (let i=1; i<=num_of_buttons; i+=1) {
			console.log("in the for loop for paginate");
			$('#ul_paginate').append("<li>" +
            	"<a href='#'>" + i + "</a>" +
          		"</li>&nbsp;")
			};
		paginate(1);
		}
});

// finds out which number paginate button was clicked
$('#ul_paginate').on('click', 'li a', function() {
	let num_to_send = $(this).text();
	console.log("num: " + parseInt(num_to_send));
	paginate(parseInt(num_to_send))
});

// kickstarts the program when first loaded.
start();
});