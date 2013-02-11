voxel-csg
============

A CSG library for voxels.

UNDER HEAVY DEVELOPMENT - Watch this space for more to come!

The test script is compiled with [browserify](https://github.com/substack/node-browserify):
``` browserify test.js -o csg.js ```

It outputs to the console, and tests two approaches: one with lodash, and another with a lower-level JavaScript implementation.

Lodash outputs simple array indices, which may be less useful than the lower-level function which produces an object array of voxel information.


