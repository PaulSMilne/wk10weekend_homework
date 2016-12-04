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

     addRecords: function(record, number){
          count = 0;
          while (count < number){
               this.addRecord(record);
               count ++;
          }
     },

     getInventory: function(){
          var stock = _.countBy(this.inventory, function(record) {
           return record.name;
          })        
     return stock;
     }, 

     sellRecord: function(record){
          var recordIndex = this.inventory.indexOf(record);
          this.inventory.splice(recordIndex,1);
          this.bankBalance += record.price;
     }
}

module.exports = RecordStore;