var _ = require('lodash');

var opts = {};

var hash = function (ex) {
	var size = opts.size || 32;
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

		return _.union.apply(null, hashsets);
	}
	else {
		for (var s = 0, ss = sets.length; s < ss; s++) {
			var set = sets[s];

			for (var e = 0, ee = set.length; e < ee; e++) {
				var el = set[e],
					elh = hash(el);

				result[elh] = el;
			}
		}

		return result;
	}
}

// subsequent sets 'subtract' from first one.
module.exports.difference = function (sets, type) {
	var result = {};

	if (type == 'lodash') {

	}
	else {
		for (var f = 0, ff = set[0]; f < ff; f++) {
			var fel = set[0],
				felh = hash(fel);

			result[felh] = fel;
		}

		for (var s = 1, ss = sets.length; s < ss; s++) {
			var set = sets[s];

			for (var e = 0, ee = set.length; e < ee; e++) {
				var el = set[e],
					elh = hash(el);

				if (result[elh]) {
					remove result[elh];
				}
			}
		}

		return result;
	}
}

