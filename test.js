var csg = require('./index');
var data = require('./data');

var models = data.models();

var modelA = 1;
var modelB = 2;
var testRuns = 1000;

var date1 = Date.now();

for (var i = 0; i < testRuns; i++) {
	var unionResult = csg.union([models[modelA], models[modelB]]);
}

console.log(unionResult);

var date2 = Date.now();

console.log('a length:', models[modelA].length, 'b length:', models[modelB].length,
	'union length:', Object.keys(unionResult).length, 'a length + b length', models[modelA].length + models[modelB].length);
console.log('union took', date2 - date1, 'ms to complete, each taking', (date2 - date1) / testRuns, 'ms to complete');
