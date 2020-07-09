new fullpage('#fullpage', {
	//Navegación
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage','thirdPage', 'fourPage' ],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['slide1', 'slide2'],
	showActiveTooltip: true,
	slidesNavigation: true,
    slidesNavPosition: 'bottom',
    scrollOverflow: true,
    

	//Desplazamiento
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accesibilidad
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Diseno
	controlArrows: true,
	verticalCentered: true,
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Selectores personalizados
	sectionSelector: '.section',
	slideSelector: '.slide',

	//Eventos
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});