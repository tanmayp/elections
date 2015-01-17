Router.route('/', function(){
	this.render('loginForm');
});
Router.route('/sign_up', function(){
	this.render('signupForm');
});
Router.route('/home', function(){
	this.render('Home');
});
Router.route('/candidate', function(){
	this.render('candidate');
});
Router.route('/admin', function(){
	this.render('admin');
});
Router.route('/voter', function(){
	this.render('voter');
});

// counter starts at 0
if (Meteor.isClient) {
	
	Template.loginForm.helpers({
		redirect_to_home: function () {
		  Router.go('/home');
		}
	});
	Template.Home.helpers({
		route_by_type: function(currentUser){
			if(currentUser.profile.type=="candidate"){
				Router.go('/candidate');
			}else if(currentUser.profile.type=="admin"){
				Router.go('/admin');
			}else if(currentUser.profile.type=="voter"){
				Router.go('/voter');
			}
		}
	});

	Template.signupForm.events({
		'submit #signup-form' : function(e,t){
			e.preventDefault();
			Accounts.createUser({
				email: $('#signup-email').val(),
				password : $('#signup-password').val(),
				username : $('#signup-username').val(),
				profile: {name: $('#signup-name').val(),
				type: $('#signup-type').val()}
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