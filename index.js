
module.exports = function (opts) {
	var opts = opts || {};
	opts.type = opts.type || 'full';
	opts.vals = opts.vals || 'same';

	var ro = {}; // result object

	var hash = function (ex) {
		var size = opts.size || 32;
		return ex[0] * size * size + ex[1] * size + ex[2]; // hash index = x, y, z
	}

	// var sameUnion = function () {

	// }

	var fullUnion = function (a, b) {
		// var ufunc = 
		var result = [];

		if (!a || !b) {
			console.error('missing either a or b', 'a length:', a, 'b length:', b);
		}

		for (var aa = 0, aaa = a.length; aa < aaa; aa++) {
			var ah = hash(a[aa]);
			if (ro[ah]) {
				ro[ah].push(a[aa]);
			}
			else {
				ro[ah] = [a[aa]];
			}
		}

		for (var bb = 0, bbb = b.length; bb < bbb; bb++) {
			var bh = hash(b[bb]);
			if (ro[bh])
				ro[bh].push(b[bb]);
			else
				ro[bh] = [b[bb]];
		}

		return ro;
	}

	var full


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

	switch (opts.type) {
		case 'full':
			this.union = fullUnion;
			// this.difference = fullDifference;
			// this.intersection = fullIntersection;
			break;
		case 'smart':
			// this.union = smartUnion;
			// this.difference = smartDifference;
			// this.intersection = smartIntersection;
			break;
	}
}
