


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Mangmentfollowup = new Mongo.Collection('mangmentfollowup');
Mangmentfollowup.allow({
   insert: function(userId, doc){
      return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});
