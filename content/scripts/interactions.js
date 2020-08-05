//DO NOT MODIFY ↓
define([
    'jquery'
], function($) {
//DO NOT MODIFY ↑

	
(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);	

function exceptionOne(){
	$("#q1-a").after("<textarea  class=\"col-xs-12\"  rows=\"6\">Il a dit</textarea>");
	$("#q1-a").remove();
	
}


function exceptionTwo(){
	$("p.col-xs-5").removeClass("col-xs-5")
	$(".qs-answers").find("label").css("float", "left").css("padding-bottom", "20px")
}
function exceptionThree(){
	$("p.col-xs-5").addClass("col-xs-4")
	$("p.col-xs-5").removeClass("col-xs-5");
	}

	function initialize() {
		setEvents();
	}

	function setEvents() {
		$(masterStructure)
			.on("Framework:systemReady", function() {
				systemReady();
			})
			.on("Framework:pageLoaded", function() {
				pageLoaded();
			});
	}

	/* is called only once, when the Course has loaded*/
	function systemReady() {
		//console.log("Interactions:systemReady");


	}

	/* is called on every page load, great for adding custom code to all pages*/
	function pageLoaded() {

		
		//console.log("Interactions:pageLoaded");
		$(".recomm").click(function(){masterStructure.loadTarget()});
		setTimeout(function(){$('.qs-answers input:not([id])').each(function() { $(this).attr('id',_.uniqueId("uid"+Date.now()))});},500);
		$("#qdd1-a>option:gt(0)").shuffle()


		

		// var medias = [];
		// medias = Array.prototype.concat.apply(medias, document.getElementsByTagName('audio'));
		// medias = Array.prototype.concat.apply(medias, document.getElementsByTagName('video'));
		
		// $(medias).each(function(index){
		// 	var catched = false;
		// 	$(this).on('playing',function(e){							
		// 		if(!catched){		        
		// 			catched = true; 					
		// 			window.ga('send',{
		// 				hitType:'event',
		// 				eventCategory:this.nodeName,
		// 				eventAction:'play',
		// 				eventLabel:this.getAttribute('title')
		// 			})
		//      	}
		// 	});
		// });		
	}

	initialize();

});





