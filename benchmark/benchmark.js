/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isTypedArrayLike = require( '@stdlib/assert-is-typed-array-like' );
var isArray = require( '@stdlib/assert-is-array' );
var zeros = require( '@stdlib/array-zeros' );
var pkg = require( './../package.json' ).name;
var nansLike = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var x;
	var i;

	x = zeros( 0, 'float64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = nansLike( x );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=float64', function benchmark( b ) {
	var arr;
	var x;
	var i;

	x = zeros( 0, 'float64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = nansLike( x );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=float32', function benchmark( b ) {
	var arr;
	var x;
	var i;

	x = zeros( 0, 'float32' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = nansLike( x );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=complex128', function benchmark( b ) {
	var arr;
	var x;
	var i;

	x = zeros( 0, 'complex128' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = nansLike( x );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=complex64', function benchmark( b ) {
	var arr;
	var x;
	var i;

	x = zeros( 0, 'complex64' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = nansLike( x );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isTypedArrayLike( arr ) ) {
		b.fail( 'should return a typed array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':dtype=generic', function benchmark( b ) {
	var arr;
	var x;
	var i;

	x = zeros( 0, 'generic' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = nansLike( x );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !isArray( arr ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
