Meteor.subscribe('Mangment');
Meteor.subscribe('Mangmentfollowup');

Template.followup.helpers({


m_FollowUp: function() {
  var mangmentId= FlowRouter.getParam('id');
  return Mangmentfollowup.find({mangmentId:mangmentId},{sort:{createdAt: -1}});
}
});
