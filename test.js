var csg = require('./index');
var data = require('./data');

var models = data.models();

var modelA = 1;
var modelB = 2;
var testRuns = 1000;

function runTest (sets, operation, type) {
	var date1 = Date.now();
	for (var i = 0; i < testRuns; i++) {
		var result = csg[operation](sets, type);
	}
	var date2 = Date.now();

	var setlengths = [];

	for (var s = 0, ss = sets.length; s < ss; s++) {
		setlengths.push(sets[s].length);
	}

	if (Array.isArray(result))
		var resultlength = result.length;
	else
		var resultlength = Object.keys(result).length;

	console.log('operation:', operation, 'type:', type, 'sets length:', setlengths.join(','), 'result length:', resultlength);
	console.log('operations took a total of', date2 - date1, 'ms to complete, each taking', (date2 - date1) / testRuns, 'ms to complete.');
}

// UNIONS

console.log('UNIONS BETWEEN TWO MODELS');

runTest([models[1], models[2]], 'union', 'obj');
runTest([models[1], models[2]], 'union', 'lodash');

console.log('UNIONS BETWEEN FIVE MODELS');

runTest([models[1], models[2], models[3], models[4], models[5]], 'union', 'obj');
runTest([models[1], models[2], models[3], models[4], models[5]], 'union', 'lodash');

// DIFFERENCES


