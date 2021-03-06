"use strict";

gs.dropPattern = function( patId, trkId, when ) {
	var cmp = gs.currCmp;

	gs.pushCompositionChange( {
		blocks: { [ common.smallId() ]: {
			pattern: patId,
			track: trkId,
			when: when,
			offset: 0,
			duration: cmp.patterns[ patId ].duration
		} }
	} );
};
