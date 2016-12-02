var RecordStore = require('../record_store');
var assert = require('assert');

var recordStore;
var record1;

describe('Record Store', function(){
     beforeEach(function(){
          recordStore = new RecordStore("The Vinyl Frontier", "Dunbar");
     });
     it('has a name', function(){
          assert.equal("The Vinyl Frontier", recordStore.name);
     });
     it('records', function(){
          assert.equal(0, recordStore.records.length);
     })
})