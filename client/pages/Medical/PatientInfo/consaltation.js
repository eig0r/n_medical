
    Template.patientReport.events({
      'click #consaltation_req': function(event){


    var reservation_id=Session.get('reservation_id');


      Reservation.update({_id:reservation_id},
        {$set:{transfer_dep:'Attendant_Syrgant',status:'Transferd to Sergry'}});
FlowRouter.go('/mangment');
           return false;

    }


  });
