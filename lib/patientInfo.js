


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

PatientInfo = new Mongo.Collection('patientInfo');
PatientInfo.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});





if ( Meteor.isServer ) {
  PatientInfo._ensureIndex( { name: 1, age: 1, sex: 1 } );
}


let PatientInfoSchema = new SimpleSchema({

  name: {
    type:String,
    label:"الإسم"
  },

  age: {
    type:String,
    label:"السن"
  },
  sex: {
    type:String,
    label:"الجنس"
  },
  work: {
    type:String,
    label:"العمل"
  },
  phone: {
    type:String,
    label:"رقم التليفون"
  }



});

PatientInfo.attachSchema(PatientInfoSchema);
