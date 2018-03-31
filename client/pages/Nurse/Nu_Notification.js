Meteor.subscribe('mangment');

Template.Nu_Notification.onCreated(function(){
	this.autorun(() => {
		this.subscribe('mangment');
		this.subscribe('Reservation');
	});
});
Template.Nu_Notification.helpers({
  reservPatients: function() {
    var nurse_id=Session.get('userID');
		var today = new Date();
    return Reservation.find({  'date' : moment(today).format("MM/DD/YYYY"),nurse_name:'Surgical_Nurse'});



  },
	reservPatientscount: function() {
		var drId=Session.get('userID');
		var today = new Date();
		return Reservation.find({ 'date' : moment(today).format("MM/DD/YYYY")}).count();



	}
});



Template.Nu_Notification.events({

	'click .editItem': function(){
		Session.set('editItemId',this._id);

		Reservation.update({_id:this._id},
			{$set:{status: 'done'}});

}

});
