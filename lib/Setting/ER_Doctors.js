
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


ER_Doctors = new Mongo.Collection('er_Doctors');
ER_Doctors.allow({
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
