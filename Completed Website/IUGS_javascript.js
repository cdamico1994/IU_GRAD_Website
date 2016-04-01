	var numPanels = 7.20;
	var totalWidth = $(window).width() * .90;
	var longWidth =  (totalWidth * .78);
	var shortWidth = ((totalWidth - longWidth)/ numPanels);
	var defaultHeight = $(window).height()  * .76;

	/*Expand contents of container*/
	jQuery.fn.blindRightToggle = function (duration, easing, complete) {
		return this.animate({width: longWidth + 'px'}, jQuery.speed(duration, easing, complete));
};
	/*shrink contents of container*/
	jQuery.fn.blindLeftToggle = function (duration, easing, complete) {
		return this.animate({width: shortWidth + 'px'}, jQuery.speed(duration, easing, complete));
};
	
	function returnText(id){
		var returnedText;
		switch(id){
			case "panel1": /*Place description here on each panel!*/
				returnedText = "";
				returnedTitle = "";
				break;
			case "panel2":
				returnedText = "This data represents the rates of Admission and Enrolment based on the number of students who applied, shown as a percentage along the right side of the funnel and in the table below. You may filter by degree type (i.e. Masters/Doctorate) by clicking on the desired degree in the table and by broad field using the dropdown.";
				returnedTitle = "Admission Rates";
				break;
			case "panel3":
				returnedText = "This data is based on July 2011 to June 2015 INITIAL placement of IU Bloomington doctorate students. The first view is a packed bubble chart that shows placement to general fields based upon number placed. Clicking the tab at the bottom will open a more detailed view, down to the placement comparisons by broad field, type of doctorate, and location of placement. You may mix as many filters as you wish by clicking on the desired broad field bubble, column of interest, and location. (For example you can see what positions in Indiana all Arts & Humanities students with tenure track received.)";
				returnedTitle = "PhD Placement";
				break;
			case "panel4":
				returnedText = "This data is based on an average of the last 3 years. The included world map shows where our international students are from as well as a breakdown by broad field for country. Initially the broad field breakdown includes ALL countries that have had at least one student enrolled at Bloomington in the last 3 years. The top 10 is a quick view of the countries with the most students enrolled in the indicated field (the default is all broad fields). Choose a country to see the broad field breakdown by clicking one on the map, typing the country name in the box or clicking on one in the top 10 list. Hovering over the country will give you the number of students enrolled. You may also filter by clicking on one of the broad fields which will update the top 10 List and map based on that field.";
				returnedTitle = "International World Map";
				break;
			case "panel5":
				returnedText = "This visual displays the Median time to degree for each broad field in the form of box-and-whisker plots. You may hover over the median area to see information about quartiles and upper/lower whiskers. This data is filtered to exclude any times to degree less than 1 year or more than 15 years.";
				returnedTitle = "Time to Degree";
				break;
			case "panel6":
				returnedText = "The stacked bars in this visual show the total number of degrees granted per broad field, as well as a breakdown within each field between the degree types. Hover over or click a section of bar to see the number of students with that degree type. The totals can be found in the chart at the right,";
				returnedTitle = "Degree by Field";
				break;
			case "panel7":
				returnedText = "This simple double bar graph shows the relative number of males/females in each broad field, with the majority party and offset percentage listed on the right. Use the dropdown box to filter by degree type (masters, doctorate, etc.). The Total column provides a look at the total enrolment number of each broad field. The data reflects fall 2015 enrolment at IU Bloomington.";
				returnedTitle = "Enrolment by Gender";
				break;
			case "panel8":
				returnedText = "This info-graphic contains two similar pie charts based on Bloomington PhD students. The left shows statistics for graduate students at the 7 year mark, while the right displays the continuous data for students after 10 years. Left with other degree signifies either graduating with a Masters instead of a PhD or switching fields. Use the Field of Study dropdown to filter.*7 Year Data is based on cohorts from: 2003-04 to 2007-08. *10 Year Data is based on cohorts from  2000-01 to 2004-05"; 
				returnedTitle = "7 and 10 Year Student Status";
				break;
		}
				 $(".bodyText").html(returnedText);
				 $(".popoutHeader").html(returnedTitle);
	}
	
/*starting picture*/
var picID = 0;
var numPics = 4;

/*Switches photo to in direction indicated by parent id (i.e forward or back)*/
(function( $ ){
   $.fn.transitionPhoto = function() {
	    var id = $(this).attr('id');
		$('.slideImg').css("opacity", '0');
		$('.text').css("opacity", '0');
		$('.text').css("display", 'none');
        if (id == "back"){
           picID = picID - 1;
         }
        else{
			picID = picID + 1;
        }
		if (picID < 0){
			picID = numPics - 1;
			}
		else{
		picID = picID % numPics;
		}
		var picName = '#pic' + picID;
		$(picName).css('opacity', '1');
		$('.textOverlay >' + picName).parent().find('.text').css('opacity', '1');
		$('.textOverlay >' + picName).parent().find('.text').css('display', 'block');
		clearInterval(myTimer);
		myTimer = setInterval(cyclePhotos, 10000);
      return this;
   }; 
})( jQuery );

var isPaused = false;
var myTimer = setInterval(cyclePhotos, 10000);
/*auto cycle through pics, simply calls transitionPhoto on a set interval (10000 is the interval)*/
function cyclePhotos() {
	if (!isPaused){
    $('#forward').transitionPhoto();
	}
}

/* Dynamic dimension handling including minimum restrictions*/
/* when reaching the minimum make the view go fullscreen*/
var lastWidth = $(window).width();
var lastHeight = $(window).height();
var minimumWidth = 1200;
var absoluteMinimum = 1000;
var absoluteMinHeight = .658 * absoluteMinimum;
if (screen.width < minimumWidth){
		minimumWidth = screen.width - 20;
}
var minimumHeight = .658 * minimumWidth;
$(window).resize(function(){
	if ($(window).height() > 650){
		defaultHeight = $(window).height()  * .76;
	}
	if ($(window).width() >= minimumWidth){
		$(".total").css("left", "5%");
		numPanels = 7.20;
		totalWidth = $(window).width() * .90;
		longWidth =  totalWidth * .78;
		shortWidth = (totalWidth - longWidth) / numPanels;
		lastWidth = $(window).width();
		lastHeight = $(window).height();
	}
	/*I need to add height restrictions*/
	else if ($(window).width() >= absoluteMinimum){
		numPanels = 7.20;
		totalWidth = $(window).width() - 5;
		longWidth =  totalWidth * .76;
		shortWidth = (totalWidth - longWidth) / numPanels;
		lastWidth = $(window).width();
		lastHeight = $(window).height();
		$(".total").css("left", "0px");
	}
		$(".accordion-panel").css("width", shortWidth + 'px');
		$(".accordion-panel").css("height", defaultHeight + 'px');
		$(".headerImg").css("width", shortWidth + 'px');
		$(".headerImg").css("height", defaultHeight + 'px');
		$(".total").css("width", totalWidth + 'px');
		$(".total").css("height", defaultHeight + 'px');
		$(".innerPanel").css("width", longWidth - (shortWidth + 3) + 'px');
		
	//Active panel handling
		$(".accordion-panel.active").css("width", longWidth + 'px');
			
});

/*dimension handling on startup- accordion size, panel size, set overview panel to open*/
$(document).ready(function(){
	if ($(window).width() < absoluteMinimum){
	totalWidth = absoluteMinimum;
	longWidth =  (totalWidth * .78);
	shortWidth = ((totalWidth - longWidth)/ numPanels);
	}
	if ($(window).height() < absoluteMinHeight){
		defaultHeight = absoluteMinHeight;
	}
        $(".accordion-panel").css("width", shortWidth + 'px');
		$(".accordion-panel").css("height", defaultHeight + 'px');
		$(".headerImg").css("width", shortWidth + 'px');
		$(".headerImg").css("height", defaultHeight + 'px');
		$(".headerImg", "#overview").css("background-color", "#82786F");
		$(".total").css("width", totalWidth + 'px');
		$(".total").css("height", defaultHeight + 'px');
		$("#overview").css("width", longWidth + 'px');
		$(".innerPanel").css("width", longWidth - (shortWidth + 3) + 'px');
		$("#overview").addClass("active");
		//Broad field Dropdowns//

	/*cycle photo on click*/
    $(".arrow").click(function(){
	$(this).transitionPhoto();
    });
	
/*Main function that switches between panels on click*/
    $(".accordion-panel").click(function(e){
	if ($(this).hasClass('headerImg') && $(this).is("#overview")){
		$(this).addClass('active');
}
	else if (!$(this).hasClass("active")){
			$(this).blindRightToggle('medium');
			$(".active").blindLeftToggle('medium');
			$(".headerImg", ".active").css("background-color", "transparent");
			$(".active").removeClass("active");
			$(this).addClass("active");
			$(".headerImg", ".active").css("background-color", "#82786F");
			if ($(this).is("#overview")){
			isPaused = false;
			}
			else{
				isPaused = true;
				}
			}
		});
		
	var isClicked = 0;
	//POPOUTS BELOW//
	$(".infoImg").click(function(){
           $(".popout").css("display", "block");
		   $(".innerBox").css("display", "block");
		   var id = $(this).closest(".accordion-panel").attr("id");
		   returnText(id);
		   $(".popout").addClass("clicked");
		   isClicked = 1;
       });
	$(".closePopup").click(function(e){
					$(".innerBox").css("display", "none");
					$(".popout").css("display", "none");
					$(".popout").removeClass("clicked");
					isClicked = 0;
				});
				
		$(".infoImg").hover(function(){
           $(".popout").css("display", "block");
		   $(".innerBox").css("display", "block");
		   var id = $(this).closest(".accordion-panel").attr("id");
		   returnText(id);
       }, function(){
			if (isClicked == 0){
				$(".innerBox").css("display", "none");
				$(".popout").css("display", "none");
				$(".popout").removeClass("clicked");
			}
	   });
	//Advanced Placement Click Event//
	/*
	$("#advancedClick").click(function(){
		if (!$(this).hasClass("clicked")){
           $("#advancedPlacement").animate({height: "0px"});
		   $(".advancedTab").animate({top: "0%"});
		   $(".advanced").animate({height: "95%"});
		   document.getElementById("advancedClick").src="placement2.png";
		   $(this).addClass("clicked");
		}
		else{
           $(".advanced").animate({height: "0px"});
		   $(".advancedTab").animate({top: "95%"});
		   $("#advancedPlacement").animate({height: "100%"});
		   document.getElementById("advancedClick").src="placement.png";
		   $(this).removeClass("clicked");
		}
       });*/
});
