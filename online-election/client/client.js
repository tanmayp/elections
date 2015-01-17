
// counter starts at 0
if (Meteor.isClient) {

	Candidates = new Meteor.Collection('candidates');
	// Candidates.insert( { first_name: "shaunak", last_name: "pagnis",email: "shau@amu.com" } );
	all_candidates = Candidates.find();
	Template.allCandidates.helpers({
		candidates: all_candidates
	});
}