/*
 * This script initializes all instances of Packery across the site
 */


// Init Packery for the projects grid
var projectsPack = new Packery(document.querySelector('#projects .isotope-grid'), {
	itemSelector: '#projects .grid-item',
	gutter: 40,
	columnWidth: ".grid-sizer",
	rowHeight: ".grid-sizer",
	percentPosition: true
});