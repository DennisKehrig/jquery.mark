/*!
 * Mark 1.0 (jQuery plugin)
 * Adds an ugly outline to selected elements - a convenient way to test selectors
 *
 * Usage: $('...').mark();
 *
 * Copyright 2012, Dennis Kehrig
 * http://github.com/DennisKehrig/jquery.mark
 */
/*global jQuery */
(function ($) {
	'use strict';
	$.fn.mark = function () {
		return this.css('outline', '1px solid pink');
	};
}(jQuery));
