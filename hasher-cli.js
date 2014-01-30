#!/usr/bin/env node

var SHA3 = require('crypto-js/sha3')
   Crypto = require('crypto-js')
   read = require('read');

// If we dont get a identifier, display a usage message
if (process.argv.length <= 2) {
   console.log('Usage: hasher.js <identifier> <output-length | optional>');
   process.exit(1);
}

// Parse the console args
var identifier = process.argv[2];
if (typeof process.argv[3] !== 'undefined') { 
   var length = process.argv[3];
   var intRegex = /^\d+$/;
   if(!intRegex.test(length)) {
      console.log('The length must be a number, max 32.');
      console.log('Usage: hasher.js <identifier> <output-length | optional>');
      process.exit(1);
   } else {
      if (length > 32) {
         console.log('The max output length is 32.');
         var length = 32;
      }
   }
} else {
   var length = 32;
}

read({ prompt: 'Master Key: ', silent: true }, function(er, master_key) {
   if (master_key.length <= 0) {
      console.log('Error, the Master Key can not be empty.');
      console.log('Usage: hasher.js <identifier> <output-length>');
   } else {
      var result = SHA3(master_key + identifier, { outputLength: 128 });
      if (length != 32) {
         console.log(result.toString(Crypto.enc.Hex).slice(0, -Math.abs(32 - length)));
      } else {
         console.log(result.toString(Crypto.enc.Hex));
      }
   }
})
