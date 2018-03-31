Meteor.subscribe('Mangment');
Meteor.subscribe('Mangmentfollowup');
Meteor.subscribe('DR_Req');
Meteor.subscribe('Signs');


Template.Patient_sur_nurse.helpers({
  signs_view: function() {
  var patient= Session.get('Patienttest');
		var today = new Date();
    return Signs.find({patientId:patient});



  }
});

Template.Patient_sur_nurse.events({

  'click .addAS':function (event ,result ) {
     event.preventDefault();
     var patient= Session.get('Patienttest');

var pulse = document.getElementById("pulse").value;

var pressure = document.getElementById("pressure").value;
var temp = document.getElementById("temp").value;
var sugre = document.getElementById("sugre").value;
var press = document.getElementById("press").value;
     var patientId= Session.get('Patienttest');

     var date = new Date();

Signs.insert({
    patientId: patient,
    pulse:pulse,

    pressure:pressure,
    sugre:sugre,
    temp:temp,
    press:press,
    date:date,
    nurse_name:'Sergical_Nurse',
    userId:Meteor.userId()
      });
      FlowRouter.go('/');
       return false;
}
});
