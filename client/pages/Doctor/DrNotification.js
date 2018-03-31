

Template.DrNotification.onCreated(function(){
	this.autorun(() => {
		this.subscribe('Reservation');
	});
});
Template.DrNotification.helpers({
  Er_Dr: function() {
    var drId=Session.get('userID');
		var today = new Date();
    return Reservation.find({ 'date' : moment(today).format("MM/DD/YYYY"),status:{ $nin:["dismiss", "Transferd to Sergry"] }});



  },
	Attendant_Dr: function() {
		var drId=Session.get('userID');
		var today = new Date();
		return Reservation.find({ 'date' : moment(today).format("MM/DD/YYYY"),transfer_dep:'Attendant_Syrgant',status:{ $ne: "dismiss" }});



	},

	ER_Patient_Count: function() {
		var today = new Date();
		return Reservation.find({ 'date' : moment(today).format("MM/DD/YYYY"), status:{ $nin:["dismiss", "Transferd to Sergry"]}});
	},

	Surgry_Patient_Count: function() {
		var today = new Date();
		return Reservation.find({ 'date' : moment(today).format("MM/DD/YYYY"), status: "Transferd to Sergry"});
	}
});


Template.DrNotification.events({

	'click .editItem': function(){
		Session.set('reservation_id',this._id);

var status = document.getElementById("status").value;
Session.set('status',status);
		Reservation.update({_id:this._id},
			{$set:{status: status}});


}

});

Template.DrNotification.events({

	'click .details': function(){
		Session.set('reservation_id',this._id);


}

});
