//imageProgress
function imagesProgress(){
	var $container = $("#progress"),
		$progressBar = $container.find(".progress-bar"),
		$progressText = $container.find(".progress-text"),
		imgLoad = imagesLoaded("body"),	
		imgTotal = imgLoad.images.length,	
		imgLoaded = 0,										
		current = 0,							
		progressTimer = setInterval(updateProgress, 1000 / 60);
	
	imgLoad.on("progress", function(){
		imgLoaded++;
	});

	function updateProgress(){
		var target = ( imgLoaded / imgTotal) * 100;
		
		current += ( target - current) * 0.1;
		$progressText.text( Math.floor(current) + '%' );
		
		if(current >= 100){
			clearInterval(progressTimer);
			$container.addClass("progress-complete");
			$progressBar.add($progressText)
				.delay(500)
				.animate({opacity: 0},250,function(){
					$container.animate({top: '-100%'},1000,'easeInOutQuint');
				});
			$("body").addClass("active");
		}
		if(current > 99.9){
			current = 100;
		}
		
	}	
}

// Drap and drop
$( function(){
    $( "#draggable1, #draggable2, #draggable3, #draggable4, #draggable5, #draggable6, #draggable7, #draggable8, #draggable9" ).draggable();
      
    $( "#draggable1" ).draggable();
    $( "#droppable1" ).droppable({
      accept: "#draggable1",
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });

    $( "#draggable2" ).draggable();
    $( "#droppable2" ).droppable({
      accept: "#draggable2",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });
      
    $( "#draggable3" ).draggable();
    $( "#droppable3" ).droppable({
      accept: "#draggable3",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });
      
    $( "#draggable4" ).draggable();
    $( "#droppable4" ).droppable({
      accept: "#draggable4",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });
     
    $( "#draggable5" ).draggable();
    $( "#droppable5" ).droppable({
      accept: "#draggable5",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });
      
    $( "#draggable6" ).draggable();
    $( "#droppable6" ).droppable({
      accept: "#draggable6",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });

    $( "#draggable7" ).draggable();
    $( "#droppable7" ).droppable({
      accept: "#draggable7",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });

    $( "#draggable8" ).draggable();
    $( "#droppable8" ).droppable({
      accept: "#draggable8",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });

    $( "#draggable9" ).draggable();
    $( "#droppable9" ).droppable({
      accept: "#draggable9",
      classes: {
        "ui-droppable-active": "ui-state-default"
      },
      drop: function( event, ui ) {
        $( this ).addClass( "ui-state-highlight" );
      }
    });
});


//browser
//back-btn
$(".browser-ui .ui-bottom .bot-btn .btn-prev").on("click" , function(){
    $(".browser.one").fadeOut(200,0);
    $(".browser.two").fadeOut(200,0);
    $(".browser.three").fadeOut(200,0);
    $(".browser.four").fadeOut(200,0);
    $(".browser.five").fadeOut(200,0);
});

//close-btn
$(".browser-ui .ui-top .top-btn .btn1").on("click", function(){
    $(".folderfile").fadeOut(200,0);
    $(".browser.one").css({"display":"none"})
    $(".browser.two").css({"display":"none"})
    $(".browser.three").css({"display":"none"})
    $(".browser.four").css({"display":"none"})
    $(".browser.five").css({"display":"none"})
});

//about
$(".icon.about .icon-img").on("click", function(){
    $(".folderfile.about").fadeToggle(200,0)
});

$(".folderfile.about .file-box .file:eq(0)").on("click", function(){
    $(".folderfile.about .browser.one").css({"display":"block"}).fadeIn(200,0);
});
$(".folderfile.about .file-box .file:eq(1)").on("click", function(){
    $(".folderfile.about .browser.two").css({"display":"block"}).fadeIn(200,0);
});

//mobile
$(".icon.mobile .icon-img").on("click", function(){
    $(".folderfile.mobile").fadeToggle(200,0)
});

$(".folderfile.mobile .file-box .file:eq(0)").on("click", function(){
    $(".folderfile.mobile .browser.one").css({"display":"block"}).fadeIn(200,0);
});
$(".folderfile.mobile .file-box .file:eq(1)").on("click", function(){
    $(".folderfile.mobile .browser.two").css({"display":"block"}).fadeIn(200,0);
});

//pdf
$(".icon.pdf .icon-img").on("click", function(){
    $(".folderfile.pdf").fadeToggle(200,0)
});
$(".folderfile.pdf .file-box .file:eq(0)").on("click", function(){
    $(".folderfile.pdf .browser.one").css({"display":"block"}).fadeIn(200,0);
});

//contact
$(".icon.contact .icon-img").on("click", function(){
    $(".folderfile.contact").fadeToggle(200,0)
});

//scroll
$(".icon.scroll").click(function(e){
	$("body").addClass("screen");
	e.preventDefault;
	var target = $( $(this).attr("href") );
	
	if(target.length){
		$("html,body").animate({ scrollTop:target.offset().top },400);
	}
});

//coding
$(".icon.coding .icon-img").on("click", function(){
    $(".folderfile.coding").fadeToggle(200,0)
});

$(".folderfile.coding .file-box .file:eq(0)").on("click", function(){
    $(".folderfile.coding .browser.one").css({"display":"block"}).fadeIn(200,0);
});
$(".folderfile.coding .file-box .file:eq(1)").on("click", function(){
    $(".folderfile.coding .browser.two").css({"display":"block"}).fadeIn(200,0);
});
$(".folderfile.coding .file-box .file:eq(2)").on("click", function(){
    $(".folderfile.coding .browser.three").css({"display":"block"}).fadeIn(200,0);
});
$(".folderfile.coding .file-box .file:eq(3)").on("click", function(){
    $(".folderfile.coding .browser.four").css({"display":"block"}).fadeIn(200,0);
});
$(".folderfile.coding .file-box .file:eq(4)").on("click", function(){
    $(".folderfile.coding .browser.five").css({"display":"block"}).fadeIn(200,0);
});

//photo
$(".icon.photo .icon-img").on("click", function(){
    $(".folderfile.photo").fadeToggle(200,0)
});

//illust
$(".icon.illust .icon-img").on("click", function(){
    $(".folderfile.illust").fadeToggle(200,0)
});

//anima1
$(".icon.anima1 .icon-img").on("click", function(){
    $(".jelly-container").fadeToggle(200,0)
});
$(".jelly-container .ani-close").on("click", function(){
    $(".jelly-container").fadeToggle(200,0)
});

//anima2
$(".icon.anima2 .icon-img").on("click", function(){
    $(".rocketBody").fadeToggle(200,0)
});
$(".rocketBody .ani-close").on("click", function(){
    $(".rocketBody").fadeToggle(200,0)
});

//skill-browser
$(".sec4 .skill-btn .sbtn1").on("click", function(){
    $(".skill-browser1").fadeIn(300,0)
});
$(".skill-browser1 .skill-top .skill-close").on("click", function(){
    $(".skill-browser1").fadeOut(100,0)
});

$(".sec4 .skill-btn .sbtn2").on("click", function(){
    $(".skill-browser2").fadeIn(300,0)
});
$(".skill-browser2 .skill-top .skill-close").on("click", function(){
    $(".skill-browser2").fadeOut(100,0)
});

$(".sec4 .skill-btn .sbtn3").on("click", function(){
    $(".skill-browser3").fadeIn(300,0)
});
$(".skill-browser3 .skill-top .skill-close").on("click", function(){
    $(".skill-browser3").fadeOut(100,0)
});

//profile hearts
function initparticles() {
   hearts();
}

function hearts() {
   $.each($(".particletext.hearts"), function(){
      var heartcount = ($(this).width()/50)*2;
      for(var i = 0; i <= heartcount; i++) {
         var size = ($.rnd(60,120)/5);
         $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px; animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
      }
   });
}

jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
}

initparticles();

//design modal
$(".eventPage").on("click",function(e){
	$("#modal.m-event").removeClass("out").removeClass("open").addClass("open")
	e.preventDefault();
});
$("#modal.m-event .close2").on("click",function(e){
	e.preventDefault();
	$("#modal.m-event").toggleClass("out")
});

$(".livePaint").on("click",function(e){
	$("#modal.m-live").removeClass("out").removeClass("open").addClass("open")
	e.preventDefault();
});
$("#modal.m-live .close2").on("click",function(e){
	e.preventDefault();
	$("#modal.m-live").toggleClass("out")
});

$(".swatch").on("click",function(e){
	$("#modal.m-swatch").removeClass("out").removeClass("open").addClass("open")
	e.preventDefault();
});
$("#modal.m-swatch .close2").on("click",function(e){
	e.preventDefault();
	$("#modal.m-swatch").toggleClass("out")
});

$(".blendEffect").on("click",function(e){
	$("#modal.m-blend").removeClass("out").removeClass("open").addClass("open")
	e.preventDefault();
});
$("#modal.m-blend .close2").on("click",function(e){
	e.preventDefault();
	$("#modal.m-blend").toggleClass("out")
});

$(".infogra").on("click",function(e){
	$("#modal.m-infogra").removeClass("out").removeClass("open").addClass("open")
	e.preventDefault();
});
$("#modal.m-infogra .close2").on("click",function(e){
	e.preventDefault();
	$("#modal.m-infogra").toggleClass("out")
});

$(".Isometric").on("click",function(e){
	$("#modal.m-Isometric").removeClass("out").removeClass("open").addClass("open")
	e.preventDefault();
});
$("#modal.m-Isometric .close2").on("click",function(e){
	e.preventDefault();
	$("#modal.m-Isometric").toggleClass("out")
});

$(".land").on("click",function(e){
	$("#modal.m-land").removeClass("out").removeClass("open").addClass("open")
	e.preventDefault();
});
$("#modal.m-land .close2").on("click",function(e){
	e.preventDefault();
	$("#modal.m-land").toggleClass("out")
});


//animation modal
$(".slide.ani1").on("click",function(){
	$("#modal.rocket").removeClass("out").removeClass("open").addClass("open")
});

$("#modal.rocket .modal-cont .close").on("click",function(e){
	e.preventDefault();
	$("#modal.rocket").toggleClass("out")
});

$(".slide.ani2").on("click",function(){
	$("#modal.octopus").removeClass("out").removeClass("open").addClass("open")
});

$("#modal.octopus .modal-cont .close").on("click",function(e){
	e.preventDefault();
	$("#modal.octopus").toggleClass("out")
});

$(".slide.ani3").on("click",function(){
	$("#modal.pig").removeClass("out").removeClass("open").addClass("open")
});

$("#modal.pig .modal-cont .close").on("click",function(e){
	e.preventDefault();
	$("#modal.pig").toggleClass("out")
});

$(".slide.ani4").on("click",function(){
	$("#modal.rocket2").removeClass("out").removeClass("open").addClass("open")
});

$("#modal.rocket2 .modal-cont .close").on("click",function(e){
	e.preventDefault();
	$("#modal.rocket2").toggleClass("out")
});

$(".slide.ani5").on("click",function(){
	$("#modal.svgtxt").removeClass("out").removeClass("open").addClass("open")
});

$("#modal.svgtxt .modal-cont .close").on("click",function(e){
	e.preventDefault();
	$("#modal.svgtxt").toggleClass("out")
});

$(".slide.ani6").on("click",function(){
	$("#modal.hoverani").removeClass("out").removeClass("open").addClass("open")
});

$("#modal.hoverani .modal-cont .close").on("click",function(e){
	e.preventDefault();
	$("#modal.hoverani").toggleClass("out")
});




