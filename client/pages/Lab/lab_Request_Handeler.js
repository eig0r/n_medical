Meteor.subscribe('Lab');
Meteor.subscribe('Images');
Meteor.subscribe('PatientInfo');


Template.lab_Request_Handeler.events({
  'change .uploadFileButton ':function (event, template) {
    FS.Utility.eachFile(event, function (file) {
      var newFile = new FS.File(file);
      Images.insert(newFile, function (error, result) {
        if (error) {

        }
        else {
          Session.set('imageId',result._id);


        }
      });
    });
  }
});




Template.lab_Request_Handeler.helpers({

  getlabReq: function() {
var Req_id= FlowRouter.getParam('id');
    return LabReq.find({_id:Req_id},{sort:{createdAt: -1}});
  }

});


Template.lab_Request_Handeler.events({
  'click .add_Lab_Request': function(){
            var Req_id= FlowRouter.getParam('id');
            var patientId=document.getElementById("patientId").value;
            var patient_name=document.getElementById("patient_name").value;
            var comment=document.getElementById("comment").value;
            var date = new Date();
            
    DR_Req.insert({
            patientId: patientId,
            Req_id:Req_id,
            Dep:'lab_tec',
            status:'Done',
            patient_name:patient_name,
            comment:comment,
            createdAt:new Date(),
            userId:Meteor.userId()
          });


  var Req_id= FlowRouter.getParam('id');
    LabReq.update({_id:Req_id},
      {$set:{status:'done'}});
       return false;
  }
});

Template.lab_Request_Handeler.events({
  'click .deleteItem': function(){
    Lab.remove(this._id);
  }
});


Template.lab_Request_Handeler.events({
  'submit .add-image-info ':function (event) {
     event.preventDefault();
      var imageId= Session.get('imageId');
      var patientId=document.getElementById("patientId").value;

      Lab.insert({
        patientId:patientId,
        imageId:imageId,
        imageUrl:'http://192.168.43.106:3000/cfs/files/Images/'+imageId,
        createdAt:new Date()
      });

       return false;
}
  });

  Template.lab_Request_Handeler.helpers({
    mdata: function() {

    var patientId='document.getElementById("patientId").value';

      return Lab.find({patientId:patientId},{sort:{createdAt: -1}});
    }

  });


  Template.lab_Request_Handeler.helpers({
    images: function() {
      return Images.findOne();
    }
  });
