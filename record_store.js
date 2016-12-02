var _ = require('underscore');

var RecordStore = function(name, city){
     this.name = name;
     this.city = city;
     this.bankBalance = 10000;
     this.inventory = [];
}

RecordStore.prototype = {
     addRecord: function(record){
          this.inventory.push(record);
          this.bankBalance -= record.price/2;
     },

     getInventory: function(){
          var stock = _.countBy(this.inventory, function(record) {
           return record.name;
          })        
     return stock;
     } 
}

module.exports = RecordStore;