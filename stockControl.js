var RecordStore = require('./record_store');
var Record = require('./record');
var assert = require('assert');
var _ = require('underscore');

var vinylFrontier = new RecordStore("Vinyl Frontier", "Dunbar");

var record1 = new Record("Bob Dylan", "Blood on the Tracks", 20);
var record2 = new Record("Joni Mitchell", "Ladies of the Canyon", 20);
var record3 = new Record("Joan Baez", "Diamonds and Rust", 25);
var record4 = new Record("Jimi Hendrix", "Are You Experienced", 40)

//write add stock function using for loop as per Cookie's advice

vinylFrontier.addRecords(record1, 3);
vinylFrontier.addRecords(record2, 4);
vinylFrontier.addRecords(record3, 2);
vinylFrontier.addRecord(record4);

console.log(vinylFrontier.name + ", " + vinylFrontier.city + " Branch")

console.log("\nCurrent stock:\n")
var stock = vinylFrontier.getInventory();

console.log(stock);

console.log(vinylFrontier.financialReport());

console.log("")

vinylFrontier.sellRecord(record1);
vinylFrontier.sellRecord(record4);
vinylFrontier.sellRecord(record2);
vinylFrontier.sellRecord(record3);
vinylFrontier.sellRecord(record4);

console.log("\nCurrent stock:\n");
console.log(vinylFrontier.getInventory());
console.log(vinylFrontier.financialReport());
