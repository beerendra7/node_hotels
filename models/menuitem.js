const mongoose = require('mongoose');
const menuschema = mongoose.Schema({
     name: { type: String, reqired: true },
     price:{ type:String, required:true},
     taste:{
          type:String,
          enum:['sweet','spicy','sour']
     }
    

})
const menuitem = mongoose.model("menuItems",menuschema);
module.exports = menuitem;