
// counter starts at 0
if (Meteor.isClient) {

	Template.signupForm.events({
		'submit #signup-form' : function(e,t){
			e.preventDefault();
			Accounts.createUser({
				email: $('#signup-email').val(),
				password : $('#signup-password').val(),
				username : $('#signup-username').val(),
				name: $('#signup-name').val(),
				type: $('#signup-type').val()
			}, function (err) {
				if (err) {
					console.log("ERROR");
				// Inform the user that account creation failed
				} else {
					console.log("Success");
				// Success. Account has been created and the user
				// has logged in successfully. 
				}
			});
		}

	});

	// Template.login.events({
	// 'submit #login-form' : function(e, t){
	//       e.preventDefault();
	//       // retrieve the input field values
	//       var email = t.find('#login-email').value
	//         , password = t.find('#login-password').value;

	//         // Trim and validate your fields here.... 

	//         // If validation passes, supply the appropriate fields to the
	//         // Meteor.loginWithPassword() function.
	//         Meteor.loginWithPassword(email, password, function(err){
	//         // if (err)
	//           // The user might not have been found, or their passwword
	//           // could be incorrect. Inform the user that their
	//           // login attempt has failed. 
	//     		console.log("ERROR");
	//         // else
	//           // The user has been logged in.
	//       	});
	//         return false; 
	//       }
	//   });
}