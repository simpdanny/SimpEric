var mongoose = require('mongoose');

var todoSchema = mongoose.Schema ({
  content: String,
  update_at: Date
});

//todoSchema.methods.getDate = function(){
//  return this.Date;
//};

mongoose.model('Todo', todoSchema);

var characterSchema = mongoose.Schema ({
  name: String,
    src: String,
    taunt: String,
    joke: String,
    update_at: Date,
});

mongoose.model('Character', characterSchema);
