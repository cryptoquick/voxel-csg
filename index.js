var _ = require('lodash');

var hash = function (ex) {
	var size = 32; // chunksize hardcoded, for now
	return ex[0] * size * size + ex[1] * size + ex[2]; // hash index = x, y, z
}

// subsequent sets overwrite earlier ones, and 'opts' object literals are no longer used due to garbage collection.
module.exports.union = function (sets, type) {
	var result = {};

	if (type == 'lodash') {
		// Build a set of hash indices
		var hashsets = [],
			hashobj = {};

		_.each(sets, function (set) {
			var hashset = [];
			_.each(set, function (el) {
				var hashindex = hash(el);
				hashset.push(hashindex);
				hashobj[hashindex] = el;
			});
			hashsets.push(hashset);
		});

		result = _.union.apply(null, hashsets);
	}
	else { // 'obj'
		for (var s = 0, ss = sets.length; s < ss; s++) {
			var set = sets[s];

			for (var e = 0, ee = set.length; e < ee; e++) {
				var el = set[e],
					elh = hash(el);

				result[elh] = el;
			}
		}
	}

	return result;
}

// subsequent sets 'subtract' from first one.
module.exports.difference = function (sets, type) {
	var result = {},
		hashed = [];

	if (type == 'lodash') {
		for (var s = 0, ss = sets.length; s < ss; s++) {
			hashed.push(_.map(sets[s], function (el) { return hash(el); }));
		}

		// console.log('HARBL!!!', hashed);

		result = _.difference.apply(null, hashed);
	}
	else { // 'looped'
		for (var f = 0, ff = sets[0].length; f < ff; f++) {
			var fel = sets[0][f],
				felh = hash(fel);

			result[felh] = fel;
		}

		for (var s = 1, ss = sets.length; s < ss; s++) {
			var set = sets[s];

			for (var e = 0, ee = set.length; e < ee; e++) {
				var el = set[e],
					elh = hash(el);

				if (result[elh]) {
					delete result[elh];
				}
			}
		}
	}
	
	return result;
}

