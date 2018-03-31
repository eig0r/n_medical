


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Transfer = new Mongo.Collection('transfer');
Transfer.allow({
   insert: function(userId, doc){
      return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});
