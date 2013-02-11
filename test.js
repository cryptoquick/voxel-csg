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
	else if (typeof result == 'object')
		var resultlength = Object.keys(result).length;
	else
		console.error('unexpected result', result);

	console.log('operation:', operation, 'type:', type, 'sets length:', setlengths.join(','), 'result length:', resultlength);
	console.log('operations took a total of', date2 - date1, 'ms to complete, each taking', (date2 - date1) / testRuns, 'ms to complete.');

	if (testRuns == 1)
		console.log('actual result:', result);
}

function testAll (operation, types) {
	var typeLen = types.length;

	function testTypes (models) {
		for (var t = 0; t < typeLen; t++) {
			runTest(models, operation, types[t]);
		}
	}

	console.log(operation.toUpperCase() + ' BETWEEN TWO MODELS');

	testTypes([models[1], models[2]]);

	console.log(operation.toUpperCase() + ' BETWEEN FIVE MODELS');

	testTypes([models[1], models[2], models[3], models[4], models[5]]);

	console.log('----------------------------');
}

// UNIONS

testAll('union', ['lodash', 'obj']);

// DIFFERENCES

testAll('difference', ['lodash', 'obj']);
