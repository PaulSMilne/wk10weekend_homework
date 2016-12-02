var RecordStore = function(name, city){
     this.name = name;
     this.city = city;
     this.bankBalance = 0;
     this.inventory = [];
}

RecordStore.prototype = {
     addRecord: function(record){
          this.inventory.push(record);
     }
}

module.exports = RecordStore;