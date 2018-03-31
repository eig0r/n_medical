


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

DR_Req = new Mongo.Collection('dR_Req');
DR_Req.allow({
   insert: function(userId, doc){
      return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});
