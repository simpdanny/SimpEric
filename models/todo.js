var mongoose = require('mongoose');

var todoSchema = mongoose.Schema ({
  content: String,
  update_at: Date
});

//todoSchema.methods.getDate = function(){
//  return this.Date;
//};

mongoose.model('Todo', todoSchema);
