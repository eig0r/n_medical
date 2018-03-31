


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);



Signs = new Mongo.Collection('signs');
Signs.allow({
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
