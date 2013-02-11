var _ = require('lodash');

var opts = {};

var hash = function (ex) {
	var size = opts.size || 32;
	return ex[0] * size * size + ex[1] * size + ex[2]; // hash index = x, y, z
}

module.exports.union = function (sets, opts) { // b overwrites a
	opts = opts || {};
	var result = [],
		ro = {}; // result object

	if (opts.type == 'lodash') {
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

		var bla = _.union.apply(null, hashsets);

		return bla;
	}
	else {
		for (var s = 0, ss = sets.length; s < ss; s++) {
			var set = sets[s];

			for (var e = 0, ee = set.length; e < ee; e++) {
				var el = set[e],
					elh = hash(el);

				ro[elh] = el;
			}
		}

		return ro;
	}
}

/*
	var fullDifference = function (a, b) {
		var result = [];

		if (!a || !b) console.error('missing either a or b', 'a length:', a, 'b length:', b);

		// for (var aa = 0, aaa = a.length)
	}*/

	/*	// turn voxel models into hash tables using hashed position indices
		var ao = {}, bo = {};

		for (var aa = 0, aaa = a.length; aa < aaa; aa++) {
			ao[hash(a[aa])] = a[aa];
		}

		for (var bb = 0, bbb = b.length; bb < bbb; bb++) {
			bo[hash(b[bb])] = b[bb];
		}



		// union
		for (var ai = 0, aii = a.length; ai < aii; ai++) {
			ao[]
		}

		for (var i = 0, ii = Math.max(a.length, b.length); i < ii; i++) {
			// union


			if (!ai[i]) {
				result.push(bi);
			}
			else if (!bi) {
				result.push(ai);
			}
			else if (ai == bi) {
				result.push(ai);
				console.log(ai);
			}
			else {
				result.push(ai);
				result.push(bi);
			}
		}

		return result;
	}*/
// }
