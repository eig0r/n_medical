Meteor.subscribe('Mangment');
Meteor.subscribe('Mangmentfollowup');
Meteor.subscribe('DR_Req');

Template.nurse_mangmentView.helpers({
  mdata: function() {
var mangmentId= FlowRouter.getParam('id');
return Mangment.findOne({ _id: mangmentId });
},


m_FollowUp: function() {
  var mangmentId= FlowRouter.getParam('id');
  return Mangmentfollowup.find({mangmentId:mangmentId},{sort:{createdAt: -1}});
}
});

Template.nurse_mangmentView.helpers({
  medicationtview: function() {
  var mangmentId= FlowRouter.getParam('id');
    return Medication.find({mangmentId:mangmentId});
  }
});

// add Mangmentfollowup followup

Template.nurse_mangmentView.events({
  'click .save': function(){
    Session.set('medication',this.medication)
    Session.set('medicationComment',this.medicationComment)
    document.getElementById("add").disabled = false;

  },
  'click .save': function(){
    Session.set('medication',this.medication)
    Session.set('medicationComment',this.medicationComment)
    document.getElementById("add").disabled = false;

  },

  'click .dr_req':function (event ,result ) {
     event.preventDefault();
     
     var patientId= Session.get('Patienttest');
     var nurse_comment = document.getElementById("nurse_comment").value;
     var mangmentId= FlowRouter.getParam('id');
     var date = new Date();

DR_Req.insert({
     patientId: patientId,
     Req_id:mangmentId,
     Dep:'SURGERY',
     status:'Transfered to Syrgry',

     comment:nurse_comment,
     createdAt:new Date(),
     userId:Meteor.userId()
   });

},
'click .add':function (event ,result ) {
     event.preventDefault();
     var patientId= Session.get('Patienttest');
      var medication= Session.get('medication');
      var medicationComment= Session.get('medicationComment');
 var Dignoses=' ';


var mangmentId= FlowRouter.getParam('id');


   var date = new Date();
   document.getElementById("add").disabled = true;

Mangmentfollowup.insert({

        patientId: patientId,
        mangmentId:mangmentId,
        Dignoses: Dignoses,
        followup:'done',
medication:medication,
        medicationComment: medicationComment,
        createdAt:date,

        userId:Meteor.userId()



      });

       return false;
}

  });
