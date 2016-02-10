/*
 * This script initializes all instances of Isotope across the site
 */


// Init Packery for the projects grid
var projectsIso = new Packery(document.querySelector('#projects .isotope-grid'), {
	itemSelector: '#projects .grid-item',
	gutter: 50,
	columnWidth: ".grid-sizer",
	rowHeight: ".grid-sizer",
	percentPosition: true
});