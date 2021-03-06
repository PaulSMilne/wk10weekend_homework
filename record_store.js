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
          console.log("Added 1 copy of " + record.name + " to stock.")
     },

     addRecords: function(record, number){
          count = 0;
          while (count < number){
               this.inventory.push(record);
               this.bankBalance -= record.price/2;
               count ++;
          }
          if (number > 1) {
               console.log("Added " + number + " copies of " + record.name + " to stock.")
          } else {
               console.log("Added 1 copy of " + record.name + " to stock.")
          }
     },

     getInventory: function(){
          var stock = _.countBy(this.inventory, function(record) { 
          //_.countBy is from the underscore or lodash library
           return record.name;
          })        
     return stock;
     }, 

     sellRecord: function(record){
          var inStock = this.inventory.indexOf(record);
          if (inStock != -1){
               var recordIndex = this.inventory.indexOf(record);
               this.inventory.splice(recordIndex,1);
               this.bankBalance += record.price;
               console.log("1 copy of " + record.name + " sold.");
          } else {
               console.log("Sorry, " + record.name + " is out of stock.")
          };
     },

     getStockValue: function(){
          var sum = 0;
          for (record of this.inventory){
               sum += record.price;
          }
          return sum;
     },

     financialReport: function(){
          var stockValue = this.getStockValue();
          return "\nFinancial Report:\nBalance in Current Account: " + this.bankBalance + "\nTotal value of stock: " + stockValue + "\n";
     }
}

module.exports = RecordStore;