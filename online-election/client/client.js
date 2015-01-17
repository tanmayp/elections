Router.route('/', function(){
	this.render('loginForm');
});
Router.route('/sign_up', function(){
	this.render('signupForm');
});
Router.route('/home', function(){
	this.render('Home');
});

// counter starts at 0
if (Meteor.isClient) {
	
	Template.loginForm.helpers({
		redirect_to_home: function () {
		  Router.go('/home');
		}
	});

	Template.hello.events({
		'click button': function () {
		  // increment the counter when button is clicked
		  Session.set("counter", Session.get("counter") + 1);
		}
	});

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
					alert('Please fill all fields');
				// Inform the user that account creation failed
				} else {
					console.log("Success");
					Router.go('/home');
				// Success. Account has been created and the user
				// has logged in successfully. 
				}
			});
		}
	});

	Template.loginForm.events({
		'click .sign_up' : function(e,t){
		}
	});
}