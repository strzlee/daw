"use strict";

ui.samplesMoveX = function( sample, mxem ) {
	if ( sample.selected && mxem < 0 ) {
		var xemMin = Infinity;
		ui.selectedSamples.forEach( function( s ) {
			xemMin = Math.min( xemMin, s.xemMouse );
		});
		mxem = -Math.min( xemMin, -mxem );
	}

	ui.samplesForEach( sample, function( s ) {
		s.moveX( Math.max( 0, s.xemMouse + mxem ) );
		wa.composition.updateSamples( s.wsample );
	});
};