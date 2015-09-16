# speed_test
simple node app to test how much faster minifying all your css and js into single files is.

Modern web apps can make heavy use of 3rd party libs/frameworks.

These tests include backbone.js, bootstrap, datatables, font-awesome, jquery, moment, 
socket.io and underscore to give a good example on the kinds of libs included.

npm and bower install

load /test1, /test2 and /test3 and compare the page load times.

Test 1 is with the minified files,

Test 2 is with async appended to the individual includes

Test 3 is with just the individual includes
