Meteor.subscribe('PatientInfo');
Meteor.subscribe('ER_Doctors');


Template.addReservation.helpers({
  mdata: function() {
    var id= FlowRouter.getParam('id');
    Session.set('id',id);
    return PatientInfo.findOne({_id:id});

  }


});

Template.addReservation.events({
  'submit .update-patient-info ':function (event) {
     event.preventDefault();
     var patientId=Session.get('id');
      var patient_name= event.target.patient_name.value;
      console.log(name);
      var dr_Id= event.target.dr_Id.value;
      var date= event.target.date.value;
        var complain= event.target.complain.value;
    //  var time= event.target.time.value;
      var drName= event.target.searchBox.value;
//      var type= event.target.type.value;
      var nurse_name= '';
      var transfer_dep='';

      var waiting= 'waiting';





      Reservation.insert({
        patientId: patientId,
        name: patient_name,
        date: date,
        complain: complain,
        drName:drName,
    //    type:type,
        nurse_name:nurse_name,
        dr_Id:dr_Id,
        status: waiting,
        transfer_dep:transfer_dep,
        createdAt:new Date()

      });
FlowRouter.go('/');
       return false;


}

  });
  Template.addReservation.rendered=function() {
  	$('#my-datepicker').datepicker();
  }


  Template.search2.rendered = function () {
    AutoCompletion.init("input#searchBox");
  }

  Template.search2.events = {
    'keyup input#searchBox': function () {
      AutoCompletion.autocomplete({
        element: 'input#searchBox',       // DOM identifier for the element
        collection: ER_Doctors,              // MeteorJS collection object
        field: 'ER_doctor_name',                    // Document field name to search for
        limit: 5,
                        // Max number of elements to show
        sort: { name: 1 }});



    }

  }

  Template.addReservation.events({
      'click #button': function(event){

       event.preventDefault();

        var ER_doctor_name = document.getElementById("searchBox").value;

        Session.set('DoctorI',ER_Doctors.findOne({ER_doctor_name:ER_doctor_name}));
           document.getElementById("button").disabled = true;
            document.getElementById("save").disabled = false;

}
        });


        Template.addReservation.helpers({
          dr() {
                return Session.get('DoctorI');
            }

        });
