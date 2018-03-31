

Template.dr_req.onCreated(function(){
	this.autorun(() => {
		this.subscribe('Reservation');
	});
});
Template.dr_req.helpers({
  reservPatients: function() {
    var drId=Session.get('userID');
		var today = new Date();
    return DR_Req.find({status: { $ne: "done" } });



  },
	reservPatientscount: function() {
		var drId=Session.get('userID');
		var today = new Date();
		return DR_Req.find({ 'date' : moment(today).format("MM/DD/YYYY"), status: { $ne: "done" }}).count();



	}
});



Template.dr_req.events({

	'click .editItem': function(){
		Session.set('reservation_id',this._id);


		DR_Req.update({_id:this._id},
			{$set:{status: 'done'}});

}

});
