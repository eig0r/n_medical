
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


Nursing = new Mongo.Collection('nursing');
Nursing.allow({
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
