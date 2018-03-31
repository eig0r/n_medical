Template.MainNav.events({
	'click .login-toggle': ()=> {
		Session.set('nav-toggle', 'open');
	},
	'click .logout': ()=> {
		AccountsTemplates.logout();
	}
});


Template.MainNav.helpers({
  reservPatients: function() {
    var drId=Session.get('userID');
		var today = new Date();
    return DR_Req.find({status: { $ne: "done" } });



  }
});
