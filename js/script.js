$(document).ready(function() {
	/*
	* Plugin intialization
	*/
	$('#pagepiling').pagepiling({
      	direction: 'horizontal',
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4'],
	    sectionsColor: ['#2C3E50', '#ee005a', '#2C3E50', '#39C'],
	    navigation: {
	    	'position': 'right',
	   		'tooltips': ['Home', 'Portfolio', 'Skills', 'About']
	   	},
	    afterRender: function(){
	    	$('#pp-nav').addClass('custom');
	    },
	    afterLoad: function(anchorLink, index){
	    	if(index>1){
	    		$('#pp-nav').removeClass('custom');
	    	}else{
	    		$('#pp-nav').addClass('custom');
	    	}
	    }
	});
});


