var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');
var _ = require('underscore');

var recordStore;
var record1;

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
     it('has a bank balance', function(){
          assert.equal(10000, recordStore.bankBalance);
     });

     it('decreases bank balance by the wholesale price of the record: 1/2 the retail price.', function(){
          recordStore.addRecord(AreYouExperienced);
          assert.equal(9990, recordStore.bankBalance);
     })
     it('can display inventory', function(){
          recordStore.addRecord(AreYouExperienced);
          recordStore.addRecord(AreYouExperienced);
          recordStore.addRecord(BloodOnTheTracks);
          var inventory = recordStore.getInventory();
          assert.deepEqual({ 'Are You Experienced': 2, 'Blood on the Tracks': 1 }, inventory);
     });
})

     
