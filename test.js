var csg = require('./index');
var data = require('./data');

var models = data.models();

var modelA = 1;
var modelB = 2;

var date1 = new Date();
var unionResult = csg.union([models[modelA], models[modelB]]);

console.log(unionResult);

var date2 = new Date();

console.log('a length:', models[modelA].length, 'b length:', models[modelB].length,
	'union length:', unionResult.length, 'a length + b length', models[modelA].length + models[modelB].length);
console.log('union took', date2 - date1, 'ms to complete.');
