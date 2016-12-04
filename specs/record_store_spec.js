var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');
var _ = require('underscore');

var recordStore;
var AreYouExperienced;
var BloodOnTheTracks;

describe('Record Store', function(){
     beforeEach(function(){
          recordStore = new RecordStore("The Vinyl Frontier", "Dunbar");
          AreYouExperienced = new Record("Jimi Hendrix", "Are You Experienced", 20);
          BloodOnTheTracks = new Record("Bob Dylan", "Blood on the Tracks", 10);
     });
     it('has a name', function(){
          assert.equal("The Vinyl Frontier", recordStore.name);
     });
     it('records', function(){
          assert.equal(0, recordStore.inventory.length);
     });
     it('can add records', function(){
          recordStore.addRecord(AreYouExperienced);
          assert.equal(1, recordStore.inventory.length);
     });

     it('can add many records', function(){
          recordStore.addRecords(BloodOnTheTracks, 15);
          assert.equal(15, recordStore.inventory.length);
     })

     it('has a bank balance', function(){
          assert.equal(10000, recordStore.bankBalance);
     });

     it('decreases bank balance by the wholesale price of the record: 1/2 the retail price.', function(){
          recordStore.addRecord(AreYouExperienced);
          assert.equal(9990, recordStore.bankBalance);
     });

     it('can display inventory', function(){
          recordStore.addRecord(AreYouExperienced);
          recordStore.addRecord(AreYouExperienced);
          recordStore.addRecord(BloodOnTheTracks);
          var inventory = recordStore.getInventory();
          assert.deepEqual({ 'Are You Experienced': 2, 'Blood on the Tracks': 1 }, inventory);
     });


     it('removes the item from stock when sold', function(){
          recordStore.addRecord(AreYouExperienced);
          assert.equal(1, recordStore.inventory.length);
          recordStore.sellRecord(AreYouExperienced);
          assert.equal(0, recordStore.inventory.length);
     });

     it('increases the store bank balance by price of record when record sold', function(){
          recordStore.addRecord(AreYouExperienced);
          recordStore.sellRecord(AreYouExperienced);
          assert.equal(10010, recordStore.bankBalance);
     });

     it('can get value of the stock', function(){
          recordStore.addRecords(AreYouExperienced, 3);
          recordStore.addRecords(BloodOnTheTracks, 5);
          var stockValue = recordStore.getStockValue();
          assert.equal(110, stockValue);
     })

     it('says how much money is in the bank when financial report is called', function(){
          recordStore.addRecord(AreYouExperienced);
          recordStore.sellRecord(AreYouExperienced);
          var report = recordStore.financialReport();
          assert.equal ("\nFinancial Report:\nBalance in Current Account: 10010\nTotal value of stock: 0", report);
     })
})

     
