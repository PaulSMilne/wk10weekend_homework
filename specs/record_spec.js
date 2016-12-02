var Record = require('../record');
var assert = require('assert');

var record1;

describe('Record', function(){
     beforeEach(function(){
          record1 = new Record("Jimi Hendrix", "Are You Experienced?", 25);
     });

     it('has an artist', function(){
          assert.equal("Jimi Hendrix", record1.artist);
     });

     it('has a name', function(){
          assert.equal("Are You Experienced?", record1.name);
     });

     it('has a price', function(){
          assert.equal("25", record1.price);
     });

})