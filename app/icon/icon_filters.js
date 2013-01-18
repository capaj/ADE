/* ==================================================================
	AngularJS Datatype Editor - Icon
	A filter to display a bootstrap icon

	Usage:
	{{ data | icon:'star' }}

------------------------------------------------------------------*/

'use strict';

adeModule.filter('icon', function() {
	return function(input, option) {
		if (!input) input = '_clear';
		return '<span class="ade-icon icon-' + input + '">';
	};
});
