	// When the user submits the form

	$('form').on('submit', function(e) {

		// Prevent the page from refreshing
		e.preventDefault();

		// Form Validation

		// 1) Get the value from the #authorSelect field and save in variable author

	var author = $('#authorSelect').val();
	console.log(author);

		// 2) Get the value from the #nounInput field and save in variable noun

	var noun = $('#nounInput').val();
	console.log(noun);

		// 3) Get the value from the #verbInput field and save in variable verb
	var verb = $('#verbInput').val();
	console.log(verb);

		// 4) Generate error validation (Error class)

	if (author === null || " ") {
		$('#authorSelect').addClass('error');
	}


		// 5) Add error validation if input are empty 	
	if (noun.length === 0) {
		$('#nounInput').addClass('error');
	}

	if (verb.length === 0) {
		$('#verbInput').addClass('error');
	}


		//  Quote display

			// 1) Hide quote unless selection is made

			// 2) Fade in the quote by the selected author

			// 3) Update the text of the element with the class .noun to the text stored in the noun variable.	

			// 4) Update the text of the element with the class .verb to the text stored in the verb variable.	

});