Meteor.subscribe('Mangment');
Meteor.subscribe('Mangmentfollowup');
Meteor.subscribe('DR_Req');
Meteor.subscribe('Signs');


Template.Patient_er_nurse.helpers({
  signs_view: function() {
   var patient= FlowRouter.getParam('id');
		var today = new Date();
    return Signs.find({patientId:patient});



  }
});

Template.Patient_er_nurse.events({

  'click .addAS':function (event ,result ) {
     event.preventDefault();
     var patient= FlowRouter.getParam('id');

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
    nurse_name:'ER_Nurse',
    userId:Meteor.userId()
      });
      FlowRouter.go('/');
       return false;
}
});
