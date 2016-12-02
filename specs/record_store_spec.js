var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

var recordStore;
var record1;

describe('Record Store', function(){
     beforeEach(function(){
          recordStore = new RecordStore("The Vinyl Frontier", "Dunbar");
          AreYouExperienced = new Record("Jimi Hendrix", "Are You Experienced", 25);
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
     it('has a bank balance');
     it('can display inventory');
})